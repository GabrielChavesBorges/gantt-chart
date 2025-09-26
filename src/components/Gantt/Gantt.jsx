import React from "react";
import PropTypes from "prop-types";
import "./Gantt.css";

const timelineData = [
    {
        id: 1,
        name: "Adam",
        start: 0,
        end: 930,
    },
    {
        id: 2,
        name: "Seth",
        start: 130,
        end: 1042,
    },
    {
        id: 3,
        name: "Enosh",
        start: 235,
        end: 1140,
    },
];

const timelineStart = 0; // earliest year
const timelineEnd = 5000;   // latest year
const totalYears = timelineEnd - timelineStart;

const yearWidth = 1; // pixels per year

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
            <div className="body">
                {timelineData.map((event, index) => (
                    <div
                        key={event.id}
                        className="bar"
                        style={{
                            ...getBarStyle(event),
                            top: index * 30, // vertical stacking
                        }}
                    >
                        {event.name}
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
