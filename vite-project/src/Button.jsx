import React from "react";
import { useState } from "react";
export const Button = () => {
  let [color, setColor] = useState("pink");
  console.log(color);

  return (
    <div
      className="h-screen w-full duration-700"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 bg-white inset-x-0 border rounded-2xl">
        <div className="flex flex-wrap justify center text-white border rounded-3xl px-3 py-1 bg-white gap-3">
          <button
            className=" bg-red-500 border rounded-full px-3 py-1"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className=" bg-green-800 border rounded-full px-3 py-1"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className=" bg-blue-800 border rounded-full px-3 py-1"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className=" bg-yellow-400 border  rounded-full px-3 py-1"
            onClick={() => setColor("yellow")}
          >
            yellow
          </button>
        </div>
      </div>
    </div>
  );
};
