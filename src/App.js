import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const inputRef = useRef();
  const prevName = useRef("");

  /*
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });
*/

  const focus = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* <div>My name is {name}</div> */}
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
      {/* <div>I rendered {renderCount.current} times</div> */}
      {/* <button onClick={focus}>Focus</button> */}
    </>
  );
}
