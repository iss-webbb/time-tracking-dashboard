import React from "react";
import useTimeTracker from "./hook/hook";
import Modal from "./components/Modal";
import Detials from "./components/Detials";
import Search from "./components/Search";
import Listed from "./components/Listed";

const App = () => {
    const {
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
        resumeTimer,
    } = useTimeTracker();

    return (
        <>
           
            <Detials
                hours={hours}
                minutes={minutes}
                seconds={seconds}
                run={run}
                array={array}
                setArray={setArray}
                isFormValid={isFormValid}
                detials={detials}
                setDetials={setDetials}
                startTimer={startTimer}
                stopTimer={stopTimer}
                pauseTimer={pauseTimer}
                resumeTimer={resumeTimer}
                start={start}
                paused={paused}
                totalEarning={totalEarning}
            />

             <Modal
                detials={detials}
                setDetails={setDetials}
                array={array}
                setArray={setArray}
                editingId={editingId}
                setEditingId={setEditingId}
                modal={modal}
                setModal={setModal}
            />

            <Search setFilterWord={setFilterWord} filterWord={filterWord} />
            
            <Listed
                fitlered={fitlered}
                setArray={setArray}
                array={array}
                setModal={setModal}
                setEditingId={setEditingId}
            />
        </>
    );
};

export default App;
