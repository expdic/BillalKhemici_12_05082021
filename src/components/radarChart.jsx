import {
    ResponsiveContainer,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    Radar,
} from "recharts";

import PropTypes from "prop-types";

/**
 * return React Component that display a radar chart
 * @param { array } data array of object 
 * @param { object } kind object with titles 
 * @return  React component
 */
function radarChart(props) {
    console.log("imanema", props)
    const performances = props.data;
    const { data, kind } = performances;
    let userMainData = [];
    let kindArray = [];



    for (let i = 0; i < data.length; i++) {
        kindArray.push(kind[i + 1]);
        console.log(kindArray)
        userMainData.push({
            kind: kindArray[i],
            valeur: data[i].value,
        });

    }

    return (
        <ResponsiveContainer>
            <RadarChart
                data={userMainData}
                cx="50%" cy="50%"
                outerRadius="65%">

                <PolarGrid
                    radialLines={false}
                    gridType="polygon" />
                <PolarAngleAxis
                    dataKey="kind"
                    tickSize={11}
                    tick={{
                        fontWeight: 600,
                        fill: "#FFFFFF",
                        fontSize: 10,
                    }}
                />
                <Radar
                    dataKey="valeur"
                    stroke="#FF0101"
                    fill="#FF0101"
                    fillOpacity={0.7}
                />

            </RadarChart>
        </ResponsiveContainer>
    );
}

radarChart.propTypes = {
    performances: PropTypes.shape({
        data: PropTypes.array,
        kind: PropTypes.object,
    }),
};

export default radarChart;