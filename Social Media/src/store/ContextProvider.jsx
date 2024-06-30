import { createContext, useReducer} from "react";

export const MyContext = createContext({
  postList: [],
  addList: () => {},
  deleteList: () => {},
  fetchingDataFromServer:() => {}
});
 
function postListReducer(currValPostList,action){
    let finalVal=currValPostList;
    let finalId;

     if(action.type==="DELETE_POST"){
      finalVal = currValPostList.filter(item=>item.id!=action.payload.postId)
     }
     else if(action.type==="FETCH_DATA"){
      finalVal=action.payload.posts;
     }
     else if(action.type==="ADD_ITEM"){
      if(currValPostList.length===0){
        finalId=1;
      }
      else{
        let lastIdx=currValPostList.length-1
         finalId= parseInt(currValPostList[lastIdx].id) + 1;
      }
       finalVal=[...currValPostList,{
        id:finalId,
        title:action.payload.tittle,
        body:action.payload.description,
        tags:action.payload.tags,
        reactions:Math.floor(Math.random()*100)
       }]
     }
    return finalVal;
}
function ContextProvider({ children }) {
  const [postList, dispacher] = useReducer(postListReducer,[]);

  function addList(e) {
    e.preventDefault();
    if( e.target[0].value===""){
      alert("The tittle box is empty ")
      return;
    }
    else{
      alert(`Post is added`)
    }
    let tittle = e.target[0].value
    let description = e.target[1].value
    let tagsArr = e.target[2].value.split(",")
    e.target[0].value="";
    e.target[1].value="";
    e.target[2].value="";
    dispacher({
      type:"ADD_ITEM",
      payload:{
        tittle,
        description,
        tags:tagsArr
      }
    })
  }

  function fetchingDataFromServer(posts){
      dispacher({
        type:"FETCH_DATA",
        payload:{
          posts
        }
      })
  }

  function deleteList(postId){
    dispacher({
      type:"DELETE_POST",
      payload:{
        postId
      }
    });
  }
  return(
    <MyContext.Provider value={{postList,addList,deleteList,fetchingDataFromServer}}>
      {children}
    </MyContext.Provider>
  );
};
export default ContextProvider;

// const default_post_list= [{
//     id:'1',
//     tittle:"Tittle",
//     description:"Description",
//     tags:["tags","ViralTags"],
//     likes:5
//     },
//    {
//     id:'2',
//     tittle:"going To Chennai",
//     description:"My school holiday is started and in this holiday we are going to mumbai for enjoying my vacations",
//     tags:["holidays","Chennai","coding","Vacations","enjoying"],
//     likes:100
//     },
//    {
//     id:'3',
//     tittle:"Vacation",
//     description:"Vacations are a wonderful escape from daily routines, offering relaxation and adventure. They provide an opportunity to explore new places, enjoy nature, and create lasting memories with family and friends.",
//     tags:["holidays","Vacations","enjoying"],
//     likes:69
//     }
// ];

