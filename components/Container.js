import style from './Container.module.css'
import RjCard from './RjCard' 
import SpCard from './SpCard'
import SalvadorCard from './SalvadorCard' 
import imgSunny from './images/sunny.png'
import imgScattered from './images/scattered.png'
import imgScatteredClouds from './images/scattered.png'
import imgBrokenClouds from './images/brokenClouds.png'
import imgClouds from './images/clouds.png'
import imgOvercastClouds from './images/overcastClouds.png'
import imgLightRain from './images/lightRain.png'
import imgRain from './images/rain.png'
import FortalezaCard from './FortalezaCard'

function Container() {
const boxImg = [imgSunny,imgScattered,imgScatteredClouds,imgBrokenClouds,imgClouds,imgOvercastClouds,imgLightRain,imgRain] 

const statusCheck = (condition) => {
if (condition === 'sunny' ) {return 'Ensolarado'}
if (condition === 'clear sky' ) {return 'Céu limpo'}
if (condition === 'scattered' ) {return 'Parcialmente nublado'}
if (condition === 'scattered clouds' ) {return 'Parcialmente nublado'}
if (condition === 'few clouds' ) {return 'Poucas nuvens'}     
if (condition === 'broken clouds' ) {return 'Nuvens esparsas'}     
if (condition === 'clouds' ) {return 'Nublado'}  
if (condition === 'overcast clouds' ) {return 'Nuvens carregadas'} 
if (condition === 'light rain' ) {return 'Chuva fraca'}    
if (condition === 'moderate rain' ) {return 'Chuva moderada'}    
if (condition === 'rain' ) {return 'Chuvoso'} 
if (condition === 'heavy intensity rain' ) {return 'Chuva intensa'} 
}

const imgCheck = (shift ,boxImg) => {
if (shift === 'sunny' ) {return boxImg[0]}
if (shift === 'clear sky' ) {return boxImg[0]}
if (shift === 'scattered' ) {return boxImg[1]}
if (shift === 'scattered clouds' ) {return boxImg[2]}
if (shift === 'few clouds' ) {return boxImg[3]}
if (shift === 'broken clouds' ) {return boxImg[3]}
if (shift === 'clouds' ) {return boxImg[4]}
if (shift === 'overcast clouds' ) {return boxImg[5]}
if (shift === 'light rain' ) {return boxImg[6]}
if (shift === 'moderate rain' ) {return boxImg[6]}
if (shift === 'rain' ) {return boxImg[7]}
if (shift === 'heavy intensity rain' ) {return boxImg[7]}
}

return <div className={style.bgCloud}>
<div className={style.container}>
<RjCard statusCheck={statusCheck} imgCheck={imgCheck} boxImg={boxImg}/>
<SpCard statusCheck={statusCheck} imgCheck={imgCheck} boxImg={boxImg}/>
<SalvadorCard statusCheck={statusCheck} imgCheck={imgCheck} boxImg={boxImg}/>
<FortalezaCard statusCheck={statusCheck} imgCheck={imgCheck} boxImg={boxImg}/>
</div></div>
}

export default Container
