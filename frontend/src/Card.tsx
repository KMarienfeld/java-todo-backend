import React, {useEffect, useState} from 'react';
import axios from "axios";
import Gallery from "./Gallery";


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
        <div>
            <h2>
            {props.description}
                {props.status}
            </h2>
            <button>details</button>
            <button onClick={showEditPage}>edit</button>
            {props.status === "DONE"? <button onClick={deleteTask}>delete</button> : <button onClick={changeStatus}>next Stage</button>}

        </div>
    );
}

export default Card;