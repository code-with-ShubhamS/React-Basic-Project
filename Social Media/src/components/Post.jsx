import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { MyContext } from "../store/ContextProvider";

const Post=({item})=>{
  const {deleteList} = useContext(MyContext)
    return <div className="card" style={{width: "18rem"}}>
    <div className="card-body">
      <div className="head_sh">
      <h5 className="card-title card-heading">{item.tittle}</h5>
      <MdDelete className="myDeleteBtn" onClick={()=>{deleteList(item.id)}}></MdDelete>
      </div>
      <p className="card-text">{item.description}</p>
      {item.tags.map(arr=>(
       <span key={arr} className="myTags badge text-bg-primary">{arr}</span>
      ))}  
       <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {item.likes}
  </span>  
    </div>
  </div>
}
export default Post;