import './style.css'
import logoImg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../services/api'


function Profile() {

    const history = useHistory();

    const [incidents, setIncidents] = useState([]);
    const ongId = localStorage.getItem('ong_id');
    const ongName = localStorage.getItem('name');

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(res => setIncidents(res.data))
    }, [ongId])

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });
            setIncidents(incidents.filter(incident => incident.id !== id));

        } catch (error) {

            alert('Erro ao deletar caso, tente novamente.')

        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/');

    }
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero" />
                <span>Bem vinda, {ongName}</span>
                <Link className="button" to="/incidents/new">
                    Cadastrar novo caso</Link>
                <button className="logout-buttom" type="button" onClick={handleLogout}><i className="material-icons" style={{ color: "#e02041", lineHeight: 0 }}>power_settings_new</i></button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO: </strong>
                        <p>{incident.title}</p>
                        <strong>DESCRIÇÃO</strong>
                        <p>{incident.discription}</p>
                        <strong>VALOR</strong>
                        <p>{Intl.NumberFormat('pt-BR', {
                            style: 'currency', currency: 'BRL'
                        }).format(incident.value)}</p>
                        <button type="button" onClick={(() => handleDeleteIncident(incident.id))}><i class="material-icons">delete_forever</i></button>
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default Profile;