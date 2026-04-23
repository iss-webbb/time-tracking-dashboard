import React from "react";
import { useState, useEffect, useMemo } from "react";

const useTimeTracker = () => {
    const [start, setStart] = useState(0);
    const [run, setRun] = useState(false);
    const [paused, setPaused] = useState(false);
    const [detials, setDetials] = useState({
        name: "",
        description: "",
        hourlyRate: "",
    });

    const hours = Math.floor(start / 3600);
    const minutes = Math.floor((start % 3600) / 60);
    const seconds = start % 60;

    const isFormValid = useMemo(
        () => detials.name.length !== 0 && detials.description.length !== 0,
        [detials],
    );

    const [array, setArray] = useState([]);
    const [filterWord, setFilterWord] = useState("");
    const [load, setLoad] = useState(false);
    const [modal, setModal] = useState(false);
    const [editingId, setEditingId] = useState("");
    const totalEarning = useMemo(
        () =>
            array.reduce((total, item) => {
                const totalAmount = (item.duration / 3600) * item.hourlyRate;
                return total + totalAmount;
            }, 0),
        [array],
    );

    const fitlered = useMemo(
        () =>
            filterWord === ""
                ? array
                : array.filter((items) =>
                      items.name
                          .toLowerCase()
                          .includes(filterWord.toLowerCase()),
                  ),

        [array, filterWord],
    );

    useEffect(() => {
        const saving = localStorage.getItem("timetracking");
        if (saving) {
            const data = JSON.parse(saving);
            if (data.detials) setDetials(data.detials);
            if (data.array) setArray(data.array);
        }
        setLoad(true);
    }, []);

    useEffect(() => {
        if (!load) return;
        localStorage.setItem(
            "timetracking",
            JSON.stringify({ detials, array }),
        );
    }, [detials, array, load]);

    useEffect(() => {
        if (run && !paused) {
            const running = setInterval(() => {
                setStart((prev) => prev + 1);
            }, 1000);
            return () => clearInterval(running);
        }
    }, [run, paused]);

    const startTimer = () => {
        setRun(true);
    };

    const pauseTimer = () => {
        setPaused(true);
    };

    const stopTimer = () => {
        setRun(false);
        setPaused(false);
        setStart(0);
    };

    const resumeTimer = () => {
        setPaused(false)
    }

    return {
        start,
        startTimer,
        array,
        setArray,
        detials,
        setDetials,
        fitlered,
        isFormValid,
        filterWord,
        setFilterWord,
        totalEarning,
        modal,
        setModal,
        editingId,
        setEditingId,
        hours,
        minutes,
        seconds,
        run,
        stopTimer,
        paused,
        pauseTimer,
        resumeTimer
    };
};

export default useTimeTracker;
