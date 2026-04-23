import { List } from "@hugeicons/core-free-icons";
import React from "react";

const Listed = ({ fitlered, setArray, array, setModal, setEditingId }) => {
    return (
        <div>
            <ul className="input">
                {fitlered.map((item) => (
                    <li key={item.id}>
                        NAME: {item.name} <br /> <br />
                        DESCRIPTON: {item.description} <br />
                        <br />
                        TIME:{" "}
                        {String(Math.floor(item.duration / 3600)).padStart(
                            2,
                            "0",
                        )}{" "}
                        :{" "}
                        {String(
                            Math.floor((item.duration % 3600) / 60),
                        ).padStart(2, "0")}{" "}
                        :{" "}
                        {String(Math.floor(item.duration % 60)).padStart(
                            2,
                            "0",
                        )}{" "}
                        <br />
                        <br />
                        DATE: {item.date} <br />
                        <br />
                        HOURLY RATE: {item.hourlyRate}
                        <button
                            className="but"
                            onClick={() =>
                                setArray(
                                    array.filter((dlt) => dlt.id !== item.id),
                                )
                            }
                        >
                            Delete
                        </button>
                        <button
                            className="edit"
                            onClick={() => {
                                setModal(true);
                                setEditingId(item.id);
                            }}
                        >
                            Edit
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Listed;
