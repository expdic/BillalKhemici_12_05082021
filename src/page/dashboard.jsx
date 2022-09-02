import PropTypes from "prop-types";
import Content from "../components/content"
import mock from "../assets/mock/mock"
import ErrorUser from "../components/error";
import React, { useState, useEffect } from "react";
import fetchData from "../api/service/service";

function Dashboard(props) {

    const userId = props.id;

    const [userFetchedData, setUserFetchedData] = useState(null);
    const [userFetchedActivity, setUserFetchedActivity] = useState(null);
    const [userFetchedAvgSessions, setUserFetchedAvgSessions] = useState(null);
    const [userFetchedPerformance, setUserFetchedPerformance] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const useMockedData = false;


    useEffect(() => {
        if (useMockedData) {
            setUserFetchedData(mock.USER_MAIN_DATA[0]);
            setUserFetchedActivity(mock.USER_ACTIVITY[0]);
            setUserFetchedAvgSessions(mock.USER_AVERAGE_SESSIONS[0]);
            setUserFetchedPerformance(mock.USER_PERFORMANCE[0]);
            setIsLoaded(true);

        } else {
            async function fetchApi() {
                setUserFetchedData(await fetchData(userId, ""));
                setUserFetchedActivity(await fetchData(userId, "activity"));
                setUserFetchedAvgSessions(await fetchData(userId, "averagesessions"));
                setUserFetchedPerformance(await fetchData(userId, "performance"));
                setIsLoaded(true);

            }
            fetchApi();
        }
    }, [
        setUserFetchedData,
        setUserFetchedActivity,
        setUserFetchedAvgSessions,
        setUserFetchedPerformance,
        userId,
        useMockedData,
    ]);
    return (

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