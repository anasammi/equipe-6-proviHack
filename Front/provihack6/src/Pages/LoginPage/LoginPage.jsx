import { useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"
import { LoginDiv } from "./styled"
import persona from '../../assests/persona.svg'
import { goToLocation } from "../../routes/coordinator"


export default function SignUp(){
    const navigate = useNavigate()
    return(
        <>
            <Header name={'Login'} />
            <LoginDiv>
                <img src={persona} alt={'Account Circle'}/>
                    <div className="alert alert-primary" role="alert">
                     Versão Beta, Clique em Login para entrar no App. 
                    </div>
                <input className="form-control" type="text" placeholder="Email" aria-label="Disabled input example" disabled></input>
                <input className="form-control" type="text" placeholder="Senha" aria-label="Disabled input example" disabled></input>
                <button type="button" className="btn btn-dark" onClick={() => goToLocation(navigate)}>Login</button>
            </LoginDiv>
        </>
    )
}