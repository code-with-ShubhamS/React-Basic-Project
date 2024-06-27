import TodoName from "./components/TodoName";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import TodoMessage from "./components/TodoMessage";
import { useState } from "react";

function App() {
  let [obj, setObj] = useState([]);
  //   let obj=[{
  //     todo:"going to college",
  //     TodoDate:"12/12/2024"
  //   },
  //   {
  //     todo:"going to school",
  //     TodoDate:"12/12/2024"
  //   },
  //   {
  //     todo:"going to office",
  //     TodoDate:"12/12/2024"
  //   }
  // ]
  const addBtnClicked = (todoName,date) => {
    let newObj= [...obj ,{todo:todoName ,TodoDate:date}]
    setObj(newObj);
  };

  const deleteBtnClick=(itemName)=>{
    let newObjArr= obj.filter(item => item.todo!==itemName)
    setObj(newObjArr)
  }

  return (
    <center>
      <TodoName></TodoName>
      <AddTodo addBtnClicked={addBtnClicked}></AddTodo>
      {obj.length===0 ? <TodoMessage></TodoMessage>:null}
      <Todo todoItems={obj} deleteBtnClick={deleteBtnClick}></Todo>
    </center>
  );
}

export default App;
