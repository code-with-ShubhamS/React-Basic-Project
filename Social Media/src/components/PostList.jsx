import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { MyContext } from "../store/ContextProvider";
import EmptyMessage from "./EmptyMessage";
import LoadingSpinner from "./LoadingSpinner";
const PostList=()=>{
  const [fectching,setFetching]=useState(false)
   const {postList,fetchingDataFromServer} = useContext(MyContext)

      useEffect(()=>{
        setFetching(true)
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then((obj)=>{
          setFetching(false)
           fetchingDataFromServer(obj.posts);
          });
      },[]);

      
    return <>
    {fectching?<LoadingSpinner/> :null}
    {!fectching && postList.length===0?<EmptyMessage></EmptyMessage>:<div className="cardsContanier">
    { postList.map(item=>(
       <Post key={item.id} item={item}></Post>
      ))}
      </div>}
    
    </>
}
export default PostList;