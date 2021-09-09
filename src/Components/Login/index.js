import React, { useState } from 'react'
import logo from '../../Images/logo.svg'
import iconMan from '../../Images/smallIconCpf.svg'
import key from '../../Images/key.svg'
import {useHistory} from 'react-router-dom'
import './styles.css'

export default function Login() {
    const history = useHistory()
    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        const payload = {
            cpf,
            password,
        }
        console.log(payload)
        //logica de login
        //se login estiver ok, retorne a pagina abaixo
        return history.push('/scrap-engine')
    }


    return (
        <div className="wrapper">
            <div className="logo">
                <img src={logo} alt="Logo Sotran"/>
            </div>
            <form  className="loginWrapper">
                <p>FAÇA SEU LOGIN PARA CONTINUAR</p>
                <div className="inputWrapper">
                    <img className="icon" alt="icon-person" src={iconMan} />
                    <input onChange={(e)=> setCpf(e.target.value)} placeholder="CPF"/>
                </div>
                <div className="inputWrapper">
                    <img className="icon" alt="icon-key" src={key} />
                    <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Senha"/>
                </div>
                <div>
                    <button onClick={()=>handleLogin()}>ENTRAR</button>
                </div>
            </form>
        </div>
    )
}
