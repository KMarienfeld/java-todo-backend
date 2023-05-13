import React, {useEffect, useState} from 'react';
import axios from "axios";
import Gallery from "./Gallery";
import "./Card.css"



type TaskCard = {
    description: string
    status: string
    id: string
    getTasks: () => void
}


function Card(props:TaskCard) {

    function showDetails() {

    }

    function showEditPage() {

    }

    function deleteTask() {
        axios.delete("/api/todo/" + props.id)
            .then(props.getTasks)
    }

    function changeStatus() {
            if (props.status === "OPEN") {
                axios.put("api/todo/"+ props.id, {
                    id: props.id,
                    description: props.description,
                    status: "IN_PROGRESS"
                })
                    .then(props.getTasks)
            } else {
                axios.put("api/todo/"+ props.id, {
                    id: props.id,
                    description: props.description,
                    status: "DONE"
                })
                    .then(props.getTasks)
            }
    }


    return (
        <div className="cards" >
            <div className= {props.status === "OPEN"? "open" : props.status === "IN_PROGRESS"? "doing" : "done"}>
                <h2>
                {props.description}
                </h2>
                <button type="button" className="btn btn-secondary btn-sm">details</button>
                <button type="button" className="btn btn-secondary btn-sm" onClick={showEditPage}>edit</button>
                {props.status === "DONE"? <button type="button" className="btn btn-danger btn-sm" onClick={deleteTask}>delete</button> : <button type="button" className="btn btn-secondary btn-sm" onClick={changeStatus}>next Stage</button>}
            </div>
        </div>
    );
}

export default Card;