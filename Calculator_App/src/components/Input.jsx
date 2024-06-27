import style from "./Input.module.css"
const Input=({Data})=>{
  return <input type="text" className={style.inputBox} value={Data} readOnly/>
}
export default Input;