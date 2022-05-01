import { useNavigate } from "react-router-dom"
import { ButtonDiv, LoginDiv } from "./styled"
import persona from '../../assests/persona.svg'
import { goToHomePage, goToLocation } from "../../routes/coordinator"


export default function SignUp() {
    const navigate = useNavigate()
    return (
        <>
            {/* <Header name={'Login'} /> */}
            <LoginDiv>

                <img src={persona} alt={'Account Circle'} />
                <div className="alert alert-primary" role="alert">
                    Versão Beta, Clique em Login para entrar no App.
                </div>
                <input className="form-control" type="text" placeholder="Email" aria-label="Disabled input example" disabled></input>
                <input className="form-control" type="text" placeholder="Senha" aria-label="Disabled input example" disabled></input>
                <ButtonDiv>
                    <button type="button" className="btn btn-dark" onClick={() => goToHomePage(navigate)}>Voltar</button>
                    <button type="button" className="btn btn-dark" onClick={() => goToLocation(navigate)}>Login</button>
                </ButtonDiv>
            </LoginDiv>
        </>
    )
}