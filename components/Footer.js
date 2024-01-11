import style from './Footer.module.css'
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';


function Footer() {
    
return <div className={style.container}>

 <div className={style.content}>   

<span>Desenvolvido por: Gabriel Brandão</span>

<div className={style.divContact}>
<span >Contato: 
<a href='https://www.linkedin.com/in/gabriel-brand%C3%A3o-42174223a/'>
<BsLinkedin className={style.icon}/></a>
<a href='https://github.com/Gabriel372'><BsGithub className={style.icon}/></a>
</span>
</div>

</div>

</div>

}

export default Footer
