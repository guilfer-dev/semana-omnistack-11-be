import api from '../../services/api'
import './style.css'
import logoImg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'

function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }

        try {
            const res = await api.post('ongs', data);

            alert(`Seu ID de acesso: ${res.data.id}`);
            history.push('/')
        }
        catch (err) {
            alert('Erro ao cadastrar, tente novamente');
        }

    }

    return (
        <div className="register-container">
            <div className="content">
                <section className="form">
                    <img src={logoImg} alt="Be the Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça o seu, entre na plataforma e ajude pessoas a encontrarem os cados da sua ONG!</p>
                    <Link className="back-link" to="/">
                        <i className="material-icons" style={{ color: "#e02041", fontSize: "16px", marginRight: "8px" }}>subdirectory_arrow_left</i>Voltar para página de login</Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da Ong"
                        value={name}
                        onChange={e => setName(e.target.value)} />
                    <input type="email" placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <input placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)} />
                    <div className="input-group">
                        <input placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)} />
                        <input placeholder="UF" style={{ width: 80 }}
                            value={uf}
                            onChange={e => setUf(e.target.value)} />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>

        </div>
    )
}

export default Register;