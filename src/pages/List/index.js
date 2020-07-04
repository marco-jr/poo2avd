import React, {useState ,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi'

import api from '../../services/api';
import './styles.css'


export default function List() {
  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
    api.get('marcas').then(response => {
      setMarcas(response.data)
    })
  }, []);

  return (
    <div className="profile-container">
      <h1>Marcas Cadastrados</h1>
      <ul>
        {marcas.map(marca => (
        <li key={marca.codigo}>
          <strong>Nome da marca: </strong>
          <p>{marca.nome}</p>

          <strong>Código da marca: </strong>
          <p>{marca.codigo}</p>

          <button>
          <Link to={`${marca.nome}/${marca.codigo}`} ><FiArrowRight size={40} color="#a8a8b3" /></Link>
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
}