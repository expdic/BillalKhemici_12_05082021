import PropTypes from "prop-types";

import Titre from "./titre";
import BarChart from "./barChart";
import LineChart from "./lineChart";
import RadarChart from "./radarChart";
import RadialBarChart from "./radialBarChart";
import Card from "./card";

import iconCalories from "../assets/iconCalories.png";
import iconProteines from "../assets/iconProteines.png";
import iconGlucides from "../assets/iconGlucides.png";
import iconLipides from "../assets/iconLipides.png";


/**
 * return React Component that displays the profile page with every charts
 * @param { Object } userMainData user data 
 * @param { Object } userActivity user activity 
 * @param { Object } userAverageSessions user average sessions 
 * @param { Object } userPerformances user performance 
 * @return  React component
 */
function Content(props) {
    let userMainData = props.userMainData;
    let userActivity = props.userActivity;
    let userAverageSessions = props.userAverageSessions;
    let userPerformances = props.userPerformances;



    return (
        <div>
            <Titre userMainData={userMainData.userInfos.firstName} />

            <section className="stats">

                <div className="charts">

                    <div className="barchart">

                        <span>Activité quotidienne</span>
                        <BarChart data={userActivity.sessions} />
                    </div>

                    <div className="squarecharts">


                        <div className="linechart">
                            <p>Durée moyenne des sessions</p>
                            <LineChart data={userAverageSessions.sessions} />
                        </div>


                        <div className="radarchart">
                            <RadarChart data={userPerformances} />
                        </div>


                        <div className="radialbarchart">
                            <RadialBarChart data={userMainData.todayScore} />
                        </div>


                        <div className="cardscontent">
                            <Card icon={iconCalories} count={userMainData.keyData.calorieCount} unite="Cal" type="Calories" />
                            <Card icon={iconProteines} count={userMainData.keyData.proteinCount} unite="g" type="Proteines" />
                            <Card icon={iconGlucides} count={userMainData.keyData.carbohydrateCount} unite="g" type="Glucides" />
                            <Card icon={iconLipides} count={userMainData.keyData.lipidCount} unite="g" type="Lipides" />
                        </div>


                    </div>



                </div>
            </section>
        </div>
    )
}


Content.propTypes = {
    userMainData: PropTypes.object.isRequired,
    userActivity: PropTypes.object.isRequired,
    userAverageSessions: PropTypes.object.isRequired,
    userPerformances: PropTypes.object.isRequired,
};

export default Content;