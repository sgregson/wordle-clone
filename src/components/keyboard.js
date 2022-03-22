import { useState } from "react";
import { useEventListener } from "./useEventListener";

const keys = "qwertyuiopasdfghjklzxcvbnm".split("");

export default function Keyboard({ logKey = console.log }) {
  const [activeKey, setActiveKey] = useState("");

  function keyListener({ key }) {
    console.log(key);
    if (keys.includes(key)) {
      setActiveKey(String(key));
      logKey(String(key));
    }
  }
  useEventListener("keydown", keyListener);

  const firstRow = "qwertyuiop"
    .split("")
    .map((k) => <Key key={k} id={k} active={k === activeKey} />);
  const secondRow = "asdfghjkl"
    .split("")
    .map((k) => <Key key={k} id={k} active={k === activeKey} />);
  const thirdRow = "zxcvbnm"
    .split("")
    .map((k) => <Key key={k} id={k} active={k === activeKey} />);

  return (
    <div className="flex flex-col // justify-self-center fixed bottom-10">
      <div className="flex justify-center">{firstRow}</div>
      <div className="flex justify-center">{secondRow}</div>
      <div className="flex justify-center">{thirdRow}</div>
    </div>
  );
}

function Key({ id, active }) {
  return (
    <button
      className={`${
        active
          ? "bg-red-800 text-gray-200 dark:bg-red-200 dark:text-gray-800"
          : ""
      } uppercase rounded-md p-4 m-1 // bg-gray-300 dark:bg-gray-800 hover:bg-yellow-100 dark:hover:bg-yellow-700`}
    >
      {id}
    </button>
  );
}
