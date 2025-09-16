import React from "react";
import PropTypes from "prop-types";
import "./Gantt.css";

const timelineData = [
    {
        id: 1,
        name: "Alexander the Great",
        start: -356, // BC as negative
        end: -323,
    },
    {
        id: 2,
        name: "Julius Caesar",
        start: -100,
        end: -44,
    },
    {
        id: 3,
        name: "Isaac Newton",
        start: 1643,
        end: 1727,
    },
];

const timelineStart = -400; // earliest year
const timelineEnd = 1800;   // latest year
const totalYears = timelineEnd - timelineStart;

const yearWidth = 5; // pixels per year

const years = [];
for (let mark = timelineStart; mark <= timelineEnd; mark += 50) {
   years.push(mark);
}

function getBarStyle(event) {
    const left = (event.start - timelineStart) * yearWidth;
    const width = (event.end - event.start) * yearWidth;
    return { left, width };
}

const Gantt = () => {
    return (
        <div className="container">
            <div className="header" >
            {years.map((year) => (
                <div
                    key={`year${year}`}
                    className="year-mark"
                    style={{ left: (year - timelineStart) * yearWidth }}
                >
                    {year}
                </div>
            ))}
            </div>
        </div>
    );
};

// Prop type checking
Gantt.propTypes = {
    // children: PropTypes.node.isRequired,
};

export default Gantt;
