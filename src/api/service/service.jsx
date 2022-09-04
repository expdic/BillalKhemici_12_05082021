
import userDataModel from "../models/userData";
import userActivityModel from "../models/userActivity";
import userAvgSessionsModel from "../models/userAverageSessions";
import userPerformanceModel from "../models/userPerformance";


const url = "http://localhost:";
const port = "3000";
const api = url + port + "/";

/**
 * 
 * @param {string} id id of user the user from fetch 
 * @param {string} urlParam the last API waypoint used to retrieve specific data
 * @returns fetch data
 */
const fetchData = async (id, urlParam) => {
    // entire API URL variable 
    const fullUrl = api + "user/" + id + "/" + urlParam;

    // Fetch data from API 
    const getRequest = await fetch(fullUrl);

    // Data to JSON 
    const jsonResponse = await getRequest.json();

    // Return false if we have a error 
    if (jsonResponse === "can not get user") {
        return false;
    }


    // Standarize the API response 
    const route = {
        "": new userDataModel(
            jsonResponse.data.id,
            jsonResponse.data.userInfos,
            jsonResponse.data.todayScore || jsonResponse.data.score,
            jsonResponse.data.keyData
        ),
        activity: new userActivityModel(
            jsonResponse.data.userId,
            jsonResponse.data.sessions
        ),
        "average-sessions": new userAvgSessionsModel(
            jsonResponse.data.userId,
            jsonResponse.data.sessions
        ),
        performance: new userPerformanceModel(
            jsonResponse.data.userId,
            jsonResponse.data.kind,
            jsonResponse.data.data
        ),
    };

    // Returns object depending of key value determined by API endpoint (Url Parameter)
    return route[urlParam];
};
export default fetchData;