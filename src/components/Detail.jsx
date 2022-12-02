
import React from "react";
import Card from 'react-bootstrap/CardImg';
import { useParams } from 'react-router-dom';
const { useEffect, useState } = require("react");
import React from "react";

export function Detail(props) {

    return (
        <div className="col d-flex justify-content-center">
        <Card style={{ width: "24rem", height: "20rem" }} className="mb-3 ">
        <Card.Img style={{ height: '14rem' }}  variant="top" src={props.band.image} alt={props.band.description} />
        <Card.Title>{props.name}</Card.Title>
        <Card.Body>
        <Card.Text>{props.id}</Card.Text>
        </Card.Body>
        </Card>
    </div>
    )
}