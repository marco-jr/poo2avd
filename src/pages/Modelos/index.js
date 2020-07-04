import React, {useState ,useEffect} from 'react'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api';
import './styles.css'
import { Link, useParams } from 'react-router-dom';


export default function List() {
  const [modelos, setModelos] = useState([]);
  const { id, marca } = useParams();

  useEffect(() => {
    api.get(`marcas/${id}/modelos`).then(response => {
      setModelos(response.data.modelos)
    })
  }, []);

  return (
    <div className="profile-container">
      <h1>Modelos Cadastrados de {marca}</h1>
      <ul>
        {modelos.map(modelo => (
        <li key={modelo.codigo}>
          <strong>Nome do modelo: </strong>
          <p>{modelo.nome}</p>

          <strong>Código do modelo: </strong>
          <p>{modelo.codigo}</p>

          <button>
          <Link to="/" ><FiArrowLeft size={40} color="#a8a8b3" /></Link>
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
}