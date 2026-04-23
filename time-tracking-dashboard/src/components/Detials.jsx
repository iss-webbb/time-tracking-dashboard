import React from "react";

const Details = ({
    hours,
    minutes,
    run,
    array,
    setArray,
    isFormValid,
    detials,
    seconds,
    setDetials,
    startTimer,
    resumeTimer,
    pauseTimer,
    stopTimer,
    start,  
    paused,
    totalEarning,
}) => {
    return (
        <div>
            <div className="timer">
                <p className="center">
                    {String(hours).padStart(2, "0")} :{" "}
                    {String(minutes).padStart(2, "0")} :{" "}
                    {String(seconds).padStart(2, "0")}
                </p>
                <button
                    disabled={!isFormValid}
                    onClick={() => {
                        if (run) {
                            setArray([
                                ...array,
                                {
                                    ...detials,
                                    id: Date.now(),
                                    duration: start,
                                    date: new Date().toLocaleDateString(
                                        "en-GB",
                                    ),
                                    hourlyRate: detials.hourlyRate,
                                },
                            ]);

                            (stopTimer(),
                                setDetials({
                                    name: "",
                                    description: "",
                                    hourlyRate: "",
                                }));
                        }
                        run? stopTimer() : startTimer()
                    }}
                >
                    {run ? "stop" : "start"}
                </button>

                <button
                    className="resume"
                    onClick={() => {
                        paused ? resumeTimer() : pauseTimer()
                    }}
                >
                    {paused ? "resume" : "pause"}
                </button>
            </div>

            <p>Total Earning = {totalEarning}</p>

            <div className="values">
                <p>name</p>
                <input
                    type="text"
                    value={detials.name}
                    placeholder="Enter project Name"
                    onChange={(e) =>
                        setDetials((prev) => ({
                            ...prev,
                            name: e.target.value,
                        }))
                    }
                />

                <p>description</p>
                <input
                    type="text"
                    value={detials.description}
                    placeholder="project description"
                    onChange={(e) =>
                        setDetials((prev) => ({
                            ...prev,
                            description: e.target.value,
                        }))
                    }
                />

                <p>Hourly Rate</p>
                <input
                    type="number"
                    value={detials.hourlyRate}
                    placeholder="Hourly Rate for this project"
                    onChange={(e) =>
                        setDetials((prev) => ({
                            ...prev,
                            hourlyRate: e.target.value,
                        }))
                    }
                />
            </div>
        </div>
    );
};

export default Details;
