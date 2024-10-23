import React from "react";
import Button from "./Button";

function Gymrat() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl:">
          Lea<span className="text-blue-400">normous</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        I hearby acknoledge that I may become{" "}
        <span className="text-blue-400 font-medium">
          unbelievably Leanormous
        </span>
        . I'm all in on becoming lean, strong, and owning my{" "}
        <span className="text-blue-400 font-medium">masculinity</span>. It's a
        tough journey, but I'm ready to crush it and level up into a more
        powerful, confident version of myself.
      </p>
      <Button func={()=>{window.location.href = '#generate'}} btnMessage={"Accept and Begin"} />
    </div>
  );
}

export default Gymrat;
