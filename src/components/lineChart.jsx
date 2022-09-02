import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip } from "recharts";
import PropTypes from "prop-types";


/**
 * return React Component that displays a line chart
 * @param { number } day the day 
 * @param { number } sessionLength the length of the sport session
 * @return  React component
 */
function lineChart(props) {
    const data = props.data;
    const days = ["L", "M", "M", "J", "V", "S", "D"];
    const averageSessions = [];


    for (let i = 0; i < data.length; i++) {
        averageSessions.push({
            day: days[i],
            valeur: data[i].sessionLength,
        });
    }
    return (
        <ResponsiveContainer>
            <LineChart
                data={averageSessions}
                margin={{ top: 100, right: 20, left: 20, bottom: 20 }}
            >
                <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    stroke="#FFFFFF"
                    style={{
                        opacity: 0.6,
                        fontSize: "14px",
                        lineHeight: "24px",
                    }}

                />
                <Tooltip
                    itemStyle={{
                        color: "black",
                        stroke: "transparent",
                        fontSize: 8,
                        fontWeight: 500,
                    }}
                    formatter={(value, name, unit) => [value, unit]}
                    labelStyle={{ display: "none" }}
                    cursor={{
                        stroke: "black",
                        strokeOpacity: 0.1,
                        strokeWidth: 50,
                    }}
                />
                <Line
                    type="monotone"
                    dataKey="valeur"
                    stroke="#FFFFFF"
                    dot={false}
                    unit=" min"
                />
            </LineChart>
        </ResponsiveContainer>
    );
}


lineChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            day: PropTypes.number,
            sessionLength: PropTypes.number,
        })
    ).isRequired,
};

export default lineChart;