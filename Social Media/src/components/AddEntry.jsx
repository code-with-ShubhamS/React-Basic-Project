import { useContext } from "react"
import { MyContext } from "../store/ContextProvider"

const AddEntry = ()=>{
    const {addList} = useContext(MyContext)
  return <>
  <form onSubmit={addList}>
    <div className="addData">

  <div className="mb-3" style={{width:"50%"}}>
  <label htmlFor="examplehtmlFormControlInput1" className="htmlForm-label">Tittle</label>
  <input type="text"  className="htmlForm-control width_100"  placeholder="Enter Your Tittle"/>
</div>
<div className="mb-3" style={{width:"50%"}} >
  <label htmlFor="examplehtmlFormControlTextarea1" className="htmlForm-label">Description</label>
  <textarea className="htmlForm-control width_100" placeholder="Describe your tittle " rows="6"></textarea>
</div>
<div className="mb-3" style={{width:"50%"}}>
  <label htmlFor="examplehtmlFormControlInput1" className="htmlForm-label">Enter Tags</label>
  <input type="text" className="htmlForm-control width_100" id="examplehtmlFormControlInput1" placeholder="vacation,holidays"/>
</div>

<button className="btn btn-primary">Submit</button>
  </div>
  </form>
  </>
}
export default AddEntry;