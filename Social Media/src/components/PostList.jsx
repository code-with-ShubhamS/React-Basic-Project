import { useContext } from "react";
import Post from "./Post";
import { MyContext } from "../store/ContextProvider";
const PostList=()=>{
      const {postList} = useContext(MyContext)
    return <>
    <div className="cardsContanier">
    { postList.map(item=>(
       <Post key={item.id} item={item}></Post>
      ))}
      </div>
    </>
}
export default PostList;