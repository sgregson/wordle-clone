import { useState } from "react";
import { useEventListener } from "./useEventListener";

export function GuessGrid({ letters, guesses }) {
  return (
    <div className="font-mono mx-auto uppercase">
      <div className="mt-20 text-5xl">
        {guesses.map((letters, i) => (
          <div key={i}>
            {letters.map((letter, j) => (
              <Cell key={j}>{letter}</Cell>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-20 text-5xl">
        {letters.map((letter, i) => (
          <Cell key={i}>{letter}</Cell>
        ))}
      </div>
    </div>
  );
}
function Cell(props) {
  return (
    <span className="border border-current p-2 m-1 inline-block" {...props} />
  );
}

const keys = "qwertyuiopasdfghjklzxcvbnm".split("");
export function Keyboard({
  onKeyPress = console.log,
  onDelete = console.log,
  onSubmit = console.log,
  ...props
}) {
  const [activeKey, setActiveKey] = useState("");

  function keyListener({ key }) {
    setActiveKey(String(key));
    switch (key) {
      case "Backspace":
        onDelete();
        break;
      case "Enter":
        onSubmit();
        break;
      default:
        // filter out special/meta keys
        if (keys.includes(key)) onKeyPress(String(key));
        else console.log(key);
        break;
    }
  }
  useEventListener("keydown", keyListener);

  const firstRow = "qwertyuiop".split("").map((k) => (
    <Key
      key={k}
      id={k}
      active={k === activeKey}
      onClick={() => {
        keyListener({ key: k });
      }}
    />
  ));
  const secondRow = "asdfghjkl".split("").map((k) => (
    <Key
      key={k}
      id={k}
      active={k === activeKey}
      onClick={() => {
        keyListener({ key: k });
      }}
    />
  ));
  const thirdRow = "zxcvbnm".split("").map((k) => (
    <Key
      key={k}
      id={k}
      active={k === activeKey}
      onClick={() => {
        keyListener({ key: k });
      }}
    />
  ));

  return (
    <div className={`${props.className} flex flex-col // justify-self-center`}>
      <div className="flex justify-center">{firstRow}</div>
      <div className="flex justify-center">{secondRow}</div>
      <div className="flex justify-center">
        <Key
          id={"Enter"}
          active={activeKey === "Enter"}
          onClick={() => {
            keyListener({ key: "Enter" });
          }}
        />
        {thirdRow}
        <Key
          id={"del"}
          active={activeKey === "Backspace"}
          onClick={() => {
            keyListener({ key: "Backspace" });
          }}
        />
      </div>
    </div>
  );
}

function Key({ id, active, ...props }) {
  return (
    <button
      {...props}
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
