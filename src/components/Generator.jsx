import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/Leanormous";
import Button from "./Button";

function Header(props) {
  const { index, title, description } = props;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-3">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}

function Generator(props) {
  const [showModal, setShowModal] = useState(false);
  const {split, setSplit, muscles, setMuscles, goals, setGoals, updateWorkout} = props

  function toggleShowModal() {
    setShowModal(!showModal);
  }

  function updateMuscles(muscleGrp) {
    
    if (muscles.includes(muscleGrp)) {
      setMuscles(muscles.filter((val) => val !== muscleGrp));
      return;
    }

    if (muscles.length > 2) {
      return;
    }

    if (split !== "individual") {
      setMuscles([muscleGrp]);
      setShowModal(false)
      return;
    }

    setMuscles([...muscles, muscleGrp]);

    if(muscles.length === 2){
      setShowModal(false)
    }
    
  }

  return (
    <SectionWrapper
      id={'generate'}
      header={"Generate your workout"}
      title={["It's ", "Huge ", "o'clock"]}
    >
      <Header
        index={"01"}
        title={"Pick your split"}
        description={"Select the workout you enjoy."}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              onClick={() => {
                setMuscles([]);
                setSplit(type);
              }}
              className={
                "bg-slate-950 border py-3 px-4 rounded-lg duration-200 hover:border-blue-600 " +
                (type === split ? "border-blue-600" : "border-blue-400")
              }
              key={typeIndex}
            >
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>

      <Header
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscles to destroy."}
      />
      <div className="bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col">
        <button
          onClick={toggleShowModal}
          className="relative p-3 flex items-center justify-center"
        >
          <p className="capitalize">
            {muscles.length === 0 ? "Select muscle groups" : muscles.join(", ")}
          </p>
          <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
        </button>
        {showModal && (
          <div className="flex flex-col px-3 pb-3">
            {(split === "individual"
              ? WORKOUTS[split]
              : Object.keys(WORKOUTS[split])
            ).map((muscleGrp, muscleGrpIndex) => {
              return (
                <button
                  onClick={() => {
                    updateMuscles(muscleGrp);
                  }}
                  key={muscleGrpIndex}
                  className={
                    "hover:text-blue-400 duration-200 " +
                    (muscles.includes(muscleGrp) ? "text-blue-400" : "")
                  }
                >
                  <p className="uppercase">{muscleGrp.replaceAll("_", " ")}</p>
                </button>
              );
            })}
          </div>
        )}
      </div>

      <Header
        index={"03"}
        title={"Become wolverine"}
        description={"Select you ultimate goal."}
      />
      <div className="grid lg:grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              onClick={() => {
                setGoals(scheme);
              }}
              className={
                "bg-slate-950 border py-3 px-3 rounded-lg duration-200 hover:border-blue-600 " +
                (scheme === goals ? "border-blue-600" : "border-blue-400")
              }
              key={schemeIndex}
            >
              <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Button btnMessage={"Formulate"} func={updateWorkout} />
    </SectionWrapper>
  );
}

export default Generator;
