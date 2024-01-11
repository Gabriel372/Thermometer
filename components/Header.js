import Clock from './Clock'
import style from './Header.module.css'
import {BsThermometerSun} from 'react-icons/bs'

function Header() {
    
return <div className={style.header} >
{/* <div className={style.container} >    */}
<h1 >Thermometer<BsThermometerSun className={style.iconTherm}/>
</h1>
<Clock/>
{/* </div> */}
</div>

}

export default Header



