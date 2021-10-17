import { useState, useEffect } from "react";
import "../AddItem/AddItem.css";

function AddItem({
  showItem,
  deleted,
  deleteItem,
  complete,
  setComplete,
  check,
}) {
  const [tempItem, setTempItem] = useState("");
  const [place, setPlace] = useState("What do you want to do?");
  const [item, setItem] = useState([
    { text: "Learn", isComplete: false },
    { text: "React", isComplete: false },
  ]);

  const addItems = () => {
    if (tempItem === "" || tempItem.trim() == "") {
      setPlace("Please fill this field.");
      setTempItem("");
      return false;
    }

    let arr = [...item, { text: tempItem, isComplete: false }];
    setPlace("What do you want to do?");
    setItem(arr);
    setTempItem("");
    deleteItem(item.length + 1);
  };

  useEffect(
    () => {
      let arr3 = [...item];
      arr3[complete].isComplete = !arr3[complete].isComplete;
      setItem(arr3);
    },
    [complete, check],
    [item]
  );

  useEffect(
    () => {
      showItem(item);
    },
    [item],
    deleted
  );

  useEffect(() => {
    let arr2 = [...item];
    arr2.splice(deleted, 1);
    setItem(arr2);
    deleteItem(item.length + 1);
  }, [deleted]);

  return (
    <div className="add-item">
      <input
        type="text"
        name="items"
        className="input"
        onChange={(e) => setTempItem(e.target.value)}
        value={tempItem}
        placeholder={place}
      />

      <button className="add-button" onClick={addItems}>
        ADD
      </button>
    </div>
  );
}

export default AddItem;
