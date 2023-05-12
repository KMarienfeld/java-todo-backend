import React, {useEffect, useState} from 'react';


type TaskCard = {
    "description": string
    "status": string
    "id": string
}

function Card(props:TaskCard) {
    const [task, setTask] = useState<TaskCard[]>([])
    function showDetails(props:TaskCard) {

    }

    function showEditPage() {

    }

    function deleteTask() {

    }

    function changeStatus() {

    }

    return (
        <div>
            <h2>
            {props.description}
            </h2>
            <button>details</button>
            <button onClick={showEditPage}>edit</button>
            {props.status === "Done"? <button onClick={deleteTask}>delete</button> : <button onClick={changeStatus}>next</button>}

        </div>
    );
}

export default Card;