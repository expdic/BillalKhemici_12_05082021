import PropTypes from "prop-types";
import '../styles/components/stats.css'

/* Importing the components from the recharts library. */
import {
    ResponsiveContainer,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Bar,
    Tooltip,
    Legend,
} from "recharts";

/**
 * Return react component that display a bar chart 
 * @param {string} day the measure day 
 * @param {number} kilogram the mass in the day 
 * @param {number} calories the amount calories in the day 
 * @returns React component 
 */
function barChart(props) {
    const data = props.data;
    const userMainData = [];


    // We push data we have from prop into the new array for the data match in the mockup
    for (let i = 0; i < data.length; i++) {
        userMainData.push({
            index: i + 1,
            kilogram: data[i].kilogram,
            calories: data[i].calories,
        });
    }


    // Have min and max values of the data to set the domain of the Y axis (kilogram )
    const kgArray = data.map((kilogram) => kilogram.kilogram);
    const minKg = Math.min(...kgArray);
    const maxKg = Math.max(...kgArray);
    // Have min and max values of the data to set the domain of the Y axis (calories )
    const calArray = data.map((calories) => calories.calories);
    const minCal = Math.min(...calArray);
    const maxCal = Math.max(...calArray);



    /**
   * returns span element with value passed to it for legend charts 
   * @param {string} value unite of data type
   * @returns  span element
   */
    const legendValue = (value) => {
        return (
            <span
                style={{
                    //writing at the top right of the barchart in gray and 14 px
                    color: "#74798C",
                    fontSize: "14px",

                }}
            // value of data ( calories or kilogram)
            >
                {value}

            </span>
        );
    };
    return (
        <ResponsiveContainer>

            <BarChart data={userMainData} label="test">
                <CartesianGrid
                    strokeDasharray="2 2"
                    stroke="#DEDEDE"
                    vertical={false}
                />
                <XAxis
                    dataKey="index"
                    tick={{ fill: "#9BEAC", fontSize: "15", fontWeight: 400 }}
                    tickLine={false}
                    tickSize={16}
                    stroke={"#DEDEDE"}
                />
                <YAxis
                    yAxisId={0}
                    dataKey="kilogram"
                    orientation="right"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#9B9EAC", fontSize: "14", fontWeight: 500 }}
                    domain={[minKg - 2, maxKg + 2]}
                />
                <YAxis
                    yAxisId={1}
                    dataKey="calories"
                    hide={true}
                    domain={[minCal - 120, maxCal]}
                />
                <Tooltip
                    contentStyle={{
                        backgroundColor: "#FF0000",
                        fontSize: 7,
                        fontWeight: "500",
                        border: "0 transparent",
                        padding: "10px",
                    }}
                    itemStyle={{ color: "#FFFFFF", fontSize: "7px", lineHeight: "24px" }}
                    formatter={(value, name, unit) => [value, unit]}
                    labelStyle={{ display: "none" }}
                    cursor={{
                        strokeOpacity: 0.1,
                        strokeWidth: 60,
                        height: 263,
                    }}
                />
                <Legend
                    layout="horizontal"
                    verticalAlign="top"
                    align="right"
                    iconType="circle"
                    iconSize={8}
                    height={47}
                    formatter={legendValue}
                />
                <Bar
                    yAxisId={0}
                    dataKey="kilogram"
                    fill="#282D30"
                    barSize={7}
                    radius={[10, 10, 0, 0]}
                    unit="kg"
                    name="Poids (kg)"
                />
                <Bar
                    yAxisId={1}
                    dataKey="calories"
                    fill="#E60000"
                    barSize={7}
                    radius={[10, 10, 0, 0]}
                    unit="Kcal"
                    name="Calories brûlées (kCal)"
                />
            </BarChart>
        </ResponsiveContainer>
    );

}

barChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            day: PropTypes.string,
            kilogram: PropTypes.number,
            calories: PropTypes.number,
        })
    ).isRequired,
};

export default barChart