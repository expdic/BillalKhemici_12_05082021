import {
    RadialBarChart,
    RadialBar,
    PolarAngleAxis,
    ResponsiveContainer,
} from "recharts";

import PropTypes from "prop-types";


/**
 * return React Component that display a radial bar chart
 * @param { Number } score  objective score
 * @return  React component
 */
function radialBarChart(props) {
    const score = props.data;
    const score100 = score * 100;

    const data = [
        {
            score: score100,
        },
    ];

    return (
        <div className="score">
            <p className="scoretitre">Score</p>
            <div className="scorediv">
                <p>
                    <span className="score100">{score100} %</span> <br />
                    de votre <br />
                    objectif
                </p>
            </div>
            <ResponsiveContainer>
                <RadialBarChart
                    innerRadius="70%"
                    data={data}
                    startAngle={90}
                    endAngle={450}
                    fill="#E64000"
                    barSize={15}
                >
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        angleAxisId={0}
                        tick={false}
                    />
                    <RadialBar cornerRadius="50%" />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
}

radialBarChart.propTypes = {
    score: PropTypes.number,
};
export default radialBarChart;