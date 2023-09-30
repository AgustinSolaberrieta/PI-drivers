import {Link} from 'react-router-dom'

const LandingPage = () =>{
    return(
        <div>
            <h1>Landig para entrar a la pagina </h1>
            <button>
                <Link to="/home">Entro</Link>
            </button>
        </div>
    )
}
export default LandingPage;