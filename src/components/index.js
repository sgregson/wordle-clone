import { useState } from "react";
import { useEventListener } from "./useEventListener";



export function GuessGrid() {
return <>guesses!</>
}




const keys = "qwertyuiopasdfghjklzxcvbnm".split("");
export function Keyboard({ logKey = console.log,...props }) {
  const [activeKey, setActiveKey] = useState("");

  function keyListener({ key }) {
    console.log(key);
    // filter out special/meta keys
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
    <div className={`${props.className} flex flex-col // justify-self-center`}>
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
          : "bg-gray-300 dark:bg-gray-800"
      } uppercase rounded-md p-4 m-1 hover:bg-yellow-100 dark:hover:bg-yellow-700`}
    >
      {id}
    </button>
  );
}
