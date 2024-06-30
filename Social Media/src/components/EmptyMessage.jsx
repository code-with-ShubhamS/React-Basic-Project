// import { useContext } from "react";
// import { MyContext } from "../store/ContextProvider";

function EmptyMessage(){
    // const {fetchingDataFromServer}=useContext(MyContext)
    // function fetchData(){
    //     fetch('https://dummyjson.com/posts')
    //     .then(res => res.json())
    //     .then((obj)=>fetchingDataFromServer(obj.posts));
    // }
    return <>
     <center className="myEmptyMessage"><h1>There is no post </h1>
     <button /*onClick={fetchData}*/ type="button" className="btn btn-primary">Fetch all the post From Server</button>
     </center>
    </>
    
}
export default EmptyMessage;