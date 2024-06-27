import style from "./Buttons.module.css"
const Buttons=({btnArr,printScreen})=>{
    return <>
    {btnArr.map(item=>(
        <button key={item} onClick={()=>{printScreen(item)}} className={style.btn}>{item}</button>
    ))}
    </> 
}
export default Buttons;