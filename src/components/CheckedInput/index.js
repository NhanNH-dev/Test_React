import React, { useState } from "react";

function CheckedInput() {
  const arrCate = [
    { id: "a123", name: "corn" },
    { id: "a124", name: "carrot" },
    { id: "a125", name: "cabbage" },
    { id: "a126", name: "cucumber" },
  ];
  const [check, setCheck] = useState([]);
  const handleToggle = (e) => () => {
    const clickedItem = check.indexOf(e);
    const all = [...check];
    if (clickedItem === -1) {
      all.push(e);
    } else {
      all.splice(clickedItem, 1);
    }
    console.log("all", all);
    setCheck(all);
  };
  const initCate = () => {
    return (
      arrCate &&
      arrCate.map((c, i) => (
        <li style={{ listStyleType: "none" }} key={i}>
          <input onChange={handleToggle(c.id)} type="checkbox" />
          <label>{c.name}</label>
        </li>
      ))
    );
  };
  return initCate()
}
export default CheckedInput;
