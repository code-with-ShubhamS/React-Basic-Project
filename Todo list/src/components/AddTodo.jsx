import { useRef, useState } from "react";

function AddTodo({ addBtnClicked }) {

  const todoName = useRef();
  const dueDate = useRef();

  function resetVal(e){
    let todoNam= todoName.current.value;
    let date= dueDate.current.value;
    dueDate.current.value=""
    todoName.current.value=""
    e.preventDefault()
    addBtnClicked(todoNam, date);
  }

  return (
    <div className="container left">
      <form  onSubmit={resetVal} className="row sh-margin">
        <div className="col-6 col-width ">
          <input
          ref={todoName}
            type="text"
            placeholder="Enter todo here"          
          />
        </div>
        <div className="col-4 col-width">
          <input type="date" name="" id="" ref={dueDate}/>
        </div>
        <div className="col-2">
          <button
          
            className="btn btn-success sh-width-btn"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
