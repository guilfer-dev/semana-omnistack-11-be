import './style.css'
import logoImg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react';
import api from '../../services/api';

function NewIncident() {

    const history = useHistory();

    const [title, setTitle] = useState([]);
    const [discription, setDiscription] = useState([]);
    const [value, setValue] = useState([]);

    const ongId = localStorage.getItem('ong_id')

    async function handleNewIncident(e) {

        e.preventDefault();

        const data = {
            title,
            discription,
            value
        }

        try {
            await api.post('/incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            });
            history.push('/profile')

        } catch (error) {
            alert("Não foi possível cadastrar novo incidente, tente novamente")
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section className="form">
                    <img src={logoImg} alt="Be the Hero" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Cadastre o caso detalhadamente para encontrar um herói!</p>
                    <Link className="back-link" to="/profile">
                        <i className="material-icons" style={{ color: "#e02041", fontSize: "16px", marginRight: "8px" }}>subdirectory_arrow_left</i>Voltar para Home</Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input
                        placeholder="Titulo do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)} />
                    <
                        textarea placeholder="Descrição"
                        value={discription}
                        onChange={e => setDiscription(e.target.value)} />
                    <input
                        placeholder="Valor em R$"
                        value={value}
                        onChange={e => setValue(e.target.value)} />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>

        </div>
    )
}

export default NewIncident;