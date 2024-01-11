import style from './Container.module.css'
import { useState,useEffect } from 'react'
import Spinner from './Spinner'

function FortalezaCard(props) {
const [deg,setDeg] = useState('')
const[morning,setMorning] = useState({})
const[afternoon,setAfternoon] = useState({})
const[night,setNight] = useState({})
const[dawn,setDawn] = useState({})

const apiKey = "b914a04447ff7a71e119ea61319951be"
const city = 'Fortaleza'

useEffect(()=> {
fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
.then((response) => response.json())
.then((data) => {
let dataDeg = Math.floor(data.main.temp / 10)
setDeg(dataDeg)
})
.catch((error) => console.log('Erro' , error))
},[deg])

useEffect(()=> {
fetch( `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`)
.then((response) => {
if (!response.ok) {throw new Error('nao foi possivel obter os dados da api')   
} return response.json()
})
.then((data) => {
let received = data.list 
let Rmorning = received[0].weather[0].description
let Rafternoon = received[4].weather[0].description
let Rnight = received[8].weather[0].description
let Rdawn = received[12].weather[0].description
setMorning({status:props.statusCheck(Rmorning),img:props.imgCheck(Rmorning,props.boxImg)})
setAfternoon({status:props.statusCheck(Rafternoon),img:props.imgCheck(Rafternoon,props.boxImg)})
setNight({status:props.statusCheck(Rnight),img:props.imgCheck(Rnight,props.boxImg)})
setDawn({status:props.statusCheck(Rdawn),img:props.imgCheck(Rdawn,props.boxImg)})
})
.catch((error) => {console.log('Erro' , error);
});
},[props.boxImg])

return <div className={style.card}>
{ deg && morning && afternoon && night && dawn ? (  <div>  
<h3>Fortaleza</h3>
<p>Temperatura atual: {deg}º</p>
<h4>Previsao de Hoje:</h4>
<p><span>Manha: {morning.status}</span><img src={morning.img} alt='img'/></p>
<p><span>Tarde: {afternoon.status}</span><img src={afternoon.img} alt='img'/></p>
<p><span>Noite: {night.status}</span><img src={night.img} alt='img'/></p>
<p><span>Madrugada: {dawn.status}</span><img src={dawn.img} alt='img'/></p></div>) : <Spinner/>
}
</div>
}

export default FortalezaCard