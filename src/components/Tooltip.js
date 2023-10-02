import style from './Tooltip.module.css'
import { useState } from 'react'

function Tooltip() {
const [interrupt,setInt] = useState(false)

return <>
<div className={style.container}>
<span className={`${style.toolSon} ${interrupt ? style.toolHover: ''}  `}>Tooltip</span>
<span className={style.toolDad} onMouseEnter={() => {setInt(true)} } onMouseLeave={() => {setInt(false)}} >texto qualquer</span>
</div>   
</>
}

export default Tooltip
