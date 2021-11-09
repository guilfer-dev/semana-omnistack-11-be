import './style.css'
import logoImg from '../../assets/logo.svg'
import heoresImg from '../../assets/heroes.png'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import api from '../../services/api'


function Login() {

    const history = useHistory();

    const [id, setId] = useState('');

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const res = await api.post('sessions', { id });

            localStorage.setItem('ong_id', id)
            localStorage.setItem('name', res.data.name)
            history.push('/profile')
        }
        catch (err) {
            alert('Erro ao cadastrar, tente novamente');
        }

    }

    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>
                    <input placeholder="Seu ID" value={id} onChange={e => setId(e.target.value)} />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <i className="material-icons" style={{ color: "#e02041", fontSize: "16px", marginRight: "8px" }}>login</i>Não tenho cadastro</Link>
                </form>
            </section>
            <img src={heoresImg} alt="Heores" />
        </div>
    )
}

export default Login;