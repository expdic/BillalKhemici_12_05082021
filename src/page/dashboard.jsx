import PropTypes from "prop-types";
import Content from "../components/content"
import mock from "../assets/mock/mock"
import ErrorUser from "../components/error";
import React, { useState, useEffect } from "react";
import fetchData from "../api/service/service";

/**
 *a function which has as a parameter the ID of the user which returns an error message if the user does not exist or returns to the function Content
 * @param {string} id the id of user  
 * @returns react component 
 */

function Dashboard(props) {

    const userId = props.id;

    const [userFetchedData, setUserFetchedData] = useState(null);
    const [userFetchedActivity, setUserFetchedActivity] = useState(null);
    const [userFetchedAvgSessions, setUserFetchedAvgSessions] = useState(null);
    const [userFetchedPerformance, setUserFetchedPerformance] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    /*Put false if you want to use the API or put true if you want to use the mock */
    const useMockedData = true;


    useEffect(() => {
        /*if you want to use the mock */
        if (useMockedData) {
            if (userId === '12') {
                setUserFetchedData(mock.USER_MAIN_DATA[0]);
                setUserFetchedActivity(mock.USER_ACTIVITY[0]);
                setUserFetchedAvgSessions(mock.USER_AVERAGE_SESSIONS[0]);
                setUserFetchedPerformance(mock.USER_PERFORMANCE[0]);
                setIsLoaded(true);
            }

            else if (userId === '18') {
                setUserFetchedData(mock.USER_MAIN_DATA[1]);
                setUserFetchedActivity(mock.USER_ACTIVITY[1]);
                setUserFetchedAvgSessions(mock.USER_AVERAGE_SESSIONS[1]);
                setUserFetchedPerformance(mock.USER_PERFORMANCE[1]);
                setIsLoaded(true);
            }

            else {
                setIsLoaded(false)
            }

        }
        /*if you want to use the API */
        else {
            async function fetchApi() {
                if (await fetchData(userId, "") !== false) {
                    setUserFetchedData(await fetchData(userId, ""));
                    setUserFetchedActivity(await fetchData(userId, "activity"));
                    setUserFetchedAvgSessions(await fetchData(userId, "average-sessions"));
                    setUserFetchedPerformance(await fetchData(userId, "performance"));
                    setIsLoaded(true);
                }

                else {
                    setIsLoaded(false);
                }
            }
            fetchApi();
        }



    },
        [
            setUserFetchedData,
            setUserFetchedActivity,
            setUserFetchedAvgSessions,
            setUserFetchedPerformance,
            userId,
            useMockedData,
            setIsLoaded,
        ]);


    return (
        // IF states are updated, isLoaded is true so we return a data, if isnt, we display error message 


        isLoaded ? (
            <Content
                userMainData={userFetchedData}
                userActivity={userFetchedActivity}
                userAverageSessions={userFetchedAvgSessions}
                userPerformances={userFetchedPerformance}
            />

        ) : (
            <ErrorUser />
        )


    );
}

Dashboard.propTypes = {
    id: PropTypes.string,
};

export default Dashboard;