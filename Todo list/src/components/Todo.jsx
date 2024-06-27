const Todo=({todoItems,deleteBtnClick})=>{
    return <>
    {todoItems.map(items=>(
        <div key={items.todo} className="container left">
        <div className="row sh-margin">
          <div className="col-6 col-width">
         {items.todo}
          </div>
          <div className="col-4 col-width">
          {items.TodoDate}
          </div>
          <div className="col-2">
          <button type="button" onClick={()=>{deleteBtnClick(items.todo)}} className="btn btn-danger sh-width-btn">Delete</button>
          </div>
        </div>
        </div>
    ))}
    </>
}
export default Todo;