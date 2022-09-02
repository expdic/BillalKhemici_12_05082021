
import userDataModel from "../models/userData";
import userActivityModel from "../models/userActivity";
import userAvgSessionsModel from "../models/userAverageSessions";
import userPerformanceModel from "../models/userPerformance";


const url = "http://localhost:";
const port = "3000";
const api = url + port + "/";


const fetchData = async (id, urlParam) => {
    const fullUrl = api + "user/" + id + "/" + urlParam;
    const getRequest = await fetch(fullUrl);
    const jsonResponse = await getRequest.json();
    if (jsonResponse === "can not get user") {
        return false;
    }

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
        "averagesessions": new userAvgSessionsModel(
            jsonResponse.data.userId,
            jsonResponse.data.sessions
        ),
        performance: new userPerformanceModel(
            jsonResponse.data.userId,
            jsonResponse.data.kind,
            jsonResponse.data.data
        ),
    };
    return route[urlParam];
};
export default fetchData;