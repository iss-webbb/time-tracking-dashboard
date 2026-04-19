import { Setup01FreeIcons } from "@hugeicons/core-free-icons";
import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [sec, setSec] = useState(0);
  const [run, setRun] = useState(false);
  const [paused, setPaused] = useState(false);
  const [project, setProject] = useState({
    name: "",
    description: "",
    hourlyRate: "",
  });

  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor((sec % 3600) / 60);
  const seconds = sec % 60;
  const disable = project.name.length !== 0 && project.description.length !== 0;
  const [arr, setArr] = useState([]);
  const [filterWord, setFilterWord] = useState("");
  const [load, setLoad] = useState(false);
  const [modal, setModal] = useState(false);
  const [editingId, setEditingId] = useState("");
  const totalEarning = arr.reduce((total, item) => {
    const totalAmount = (item.duration / 3600) * item.hourlyRate;
    return total + totalAmount;
  }, 0);
  const fitlered =
    filterWord === ""
      ? arr
      : arr.filter((items) =>
          items.name.toLowerCase().includes(filterWord.toLowerCase()),
        );

  useEffect(() => {
    const saving = localStorage.getItem("timetracking");
    if (saving) {
      const data = JSON.parse(saving);
      if (data.project) setProject(data.project);
      if (data.arr) setArr(data.arr);
    }
    setLoad(true);
  }, []);

  useEffect(() => {
    if (!load) return;
    localStorage.setItem("timetracking", JSON.stringify({ project, arr }));
  }, [project, arr, load]);

  useEffect(() => {
    if (run && !paused) {
      const start = setInterval(() => {
        setSec((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(start);
    }
  }, [run, paused]);

  return (
    <div className="timer">
      <p className="center">
        {String(hours).padStart(2, "0")} : {String(minutes).padStart(2, "0")} :{" "}
        {String(seconds).padStart(2, "0")}
      </p>
      <button
        disabled={!disable}
        onClick={() => {
          if (run) {
            setArr([
              ...arr,
              {
                ...project,
                id: Date.now(),
                duration: sec,
                date: new Date().toLocaleDateString("en-GB"),
                hourlyRate: project.hourlyRate,
              },
            ]);

            (setSec(0),
              setProject({
                name: "",
                description: "",
                hourlyRate: "",
              }));
          }
          setRun(!run);
        }}
      >
        {run ? "stop" : "start"}
      </button>

      <button
        onClick={() => {
          setPaused(!paused);
        }}
      >
        {paused ? "resume" : "pause"}
      </button>

      {modal && (
        <div className="modal">
          <div className="modalInput">
            <p>Name</p>
            <input
              type="text"
              className="inputVal"
              value={project.name}
              onChange={(e) =>
                setProject((prev) => ({ ...prev, name: e.target.value }))
              }
            />

            <p>description</p>
            <input
              type="text"
              className="inputVal"
              value={project.description}
              onChange={(e) =>
                setProject((prev) => ({ ...prev, description: e.target.value }))
              }
            />

            <p>Hourly Rate</p>
            <input
              type="number"
              className="inputVal"
              value={project.hourlyRate}
              onChange={(e) =>
                setProject((prev) => ({ ...prev, hourlyRate: e.target.value }))
              }
            />

            <button
              className="modalSubmit"
              onClick={() => {
                (setArr(
                  arr.map((items) =>
                    items.id === editingId ? { ...items, ...project } : items,
                  ),
                ),
                  (setModal(false),
                  setProject({
                    name: "",
                    description: "",
                    hourlyRate: "",
                  })));
              }}
            >
              Submit
            </button>
            <button className="cancelBtn" onClick={() => setModal(false)}>
              cancel
            </button>
          </div>
        </div>
      )}

      <p>Total Earning = {totalEarning}</p>

      <div className="values">
        <p>name</p>
        <input
          type="text"
          value={project.name}
          placeholder="Enter project Name"
          onChange={(e) =>
            setProject((prev) => ({ ...prev, name: e.target.value }))
          }
        />

        <p>description</p>
        <input
          type="text"
          value={project.description}
          placeholder="project description"
          onChange={(e) =>
            setProject((prev) => ({ ...prev, description: e.target.value }))
          }
        />

        <p>Hourly Rate</p>
        <input
          type="number"
          value={project.hourlyRate}
          placeholder="Hourly Rate for this project"
          onChange={(e) =>
            setProject((prev) => ({ ...prev, hourlyRate: e.target.value }))
          }
        />

        <p>Search</p>
        <input
          type="text"
          placeholder="search by project name"
          value={filterWord}
          onChange={(e) => setFilterWord(e.target.value)}
        />
      </div>

      <ul className="input">
        {fitlered.map((item) => (
          <li key={item.id}>
            NAME: {item.name} <br /> <br />
            DESCRIPTON: {item.description} <br />
            <br />
            TIME: {String(Math.floor(item.duration / 3600)).padStart(
              2,
              "0",
            )} :{" "}
            {String(Math.floor((item.duration % 3600) / 60)).padStart(2, "0")} :{" "}
            {String(Math.floor(item.duration % 60)).padStart(2, "0")} <br />
            <br />
            DATE: {item.date} <br />
            <br />
            HOURLY RATE: {item.hourlyRate}
            <button
              className="but"
              onClick={() => setArr(arr.filter((dlt) => dlt.id !== item.id))}
            >
              Delete
            </button>
            <button
              className="edit"
              onClick={() => {
                (setModal(true), setEditingId(item.id));
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

export default App;
