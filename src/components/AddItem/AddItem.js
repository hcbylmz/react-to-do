import { useState,useEffect } from "react";
import "../AddItem/AddItem.css"

function AddItem({showItem,deleted,deleteItem,complete,setComplete,check}) {
  const [tempItem, setTempItem] = useState();
  const [item, setItem] = useState([{text:"Learn",isComplete:false},{text:"React",isComplete:false}]);

  const addItems = () => {
    let arr = [...item, {text:tempItem, isComplete:false}];
    if (tempItem===""){
        return false;
    }
    setItem(arr);
    setTempItem("");
   deleteItem(item.length+1);
  };



  

  useEffect(() => {
    let arr3 = [...item];
    arr3[complete].isComplete=!arr3[complete].isComplete;
    setItem(arr3);
  },[complete,check])
  



  useEffect(()=>{
    showItem (item);
 
 
 },[item],deleted)




   useEffect(()=>{
       let arr2=[...item];
       arr2.splice(deleted,1);
       setItem(arr2);
       deleteItem(item.length+1);
       
   },[deleted])



  return (
    <div className="add-item">
      <input
        type="text"
        name="items"
        className="input"
        onChange={(e) => setTempItem(e.target.value)}
        value={tempItem}
        placeholder="What do you want to do?"
      />

      <button className="add-button" onClick={addItems}>ADD</button>
    
  
    </div>
  );
}

export default AddItem;
