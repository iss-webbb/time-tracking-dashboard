import React from "react";

const Modal = ({
    detials,
    setDetails,
    array,
    setArray,
    editingId,
    modal,
    setModal,
}) => {
    return (
        <div>
            {modal && (
                <div className="modal">
                    <div className="modalInput">
                        <p>Name</p>
                        <input
                            type="text"
                            className="inputVal"
                            value={detials.name}
                            onChange={(e) =>
                                setDetails((prev) => ({
                                    ...prev,
                                    name: e.target.value,
                                }))
                            }
                        />

                        <p>description</p>
                        <input
                            type="text"
                            className="inputVal"
                            value={detials.description}
                            onChange={(e) =>
                                setDetails((prev) => ({
                                    ...prev,
                                    description: e.target.value,
                                }))
                            }
                        />

                        <p>Hourly Rate</p>
                        <input
                            type="number"
                            className="inputVal"
                            value={detials.hourlyRate}
                            onChange={(e) =>
                                setDetails((prev) => ({
                                    ...prev,
                                    hourlyRate: e.target.value,
                                }))
                            }
                        />

                        <button
                            className="modalSubmit"
                            onClick={() => {
                                setArray(
                                    array.map((items) =>
                                        items.id === editingId
                                            ? { ...items, ...detials }
                                            : items,
                                    ),
                                );
                                setModal(false);

                                setDetails({
                                    name: "",
                                    description: "",
                                    hourlyRate: "",
                                });
                            }}
                        >
                            Submit
                        </button>
                        <button
                            className="cancelBtn"
                            onClick={() => setModal(false)}
                        >
                            cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
