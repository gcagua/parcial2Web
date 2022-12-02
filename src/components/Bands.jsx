import Row from 'react-bootstrap/Row';
import table from 'react-bootstrap/Col';
import React from "react";
import { Link } from "react-router-dom";
const { useEffect, useState } = require("react");

const Bands = () => {
    const[bands, setBands] = useState([]);

    useEffect(() => {
        const URL = "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json";

        fetch(URL).then(data => data.json()).then(data => setBands(data))
        console.log(bands)
    }, [])

    function bandaMasAntigua(){

    }
    
    return (
        <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Pais</th>
            <th scope="col">Genero</th>
            <th scope="col">Fundacion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>{bands.id} </td>
            <td> <Link to = "/bands/">{bands.name}</Link></td>
            <td>{bands.country}</td>
            <td>{bands.genre}</td>
            <td>{bands.foundation_year}</td>
          </tr>
        </tbody>
      </table>
    )
}

export default Bands;