import React, {ChangeEvent, useEffect, useState} from 'react';
import axios from "axios";
import Card from "./Card";

type Task = {
    "description": string
    "status": string
    "id": string
}

function Gallery() {
    const [allTasks, setAllCards] = useState<Task[]>([]);
    const [inputDescription, setInputDescription] = useState<string>("")

    useEffect(getTasks, [])

    function getTasks() {
        axios.get("api/todo")
            .then((response) => {
                setAllCards(response.data)
            })
    }
    function addNewTask() {
        axios.post("api/todo", {description: inputDescription,status: "OPEN"})
            .then(getTasks)

    }

    function useTextInput(event: ChangeEvent<HTMLInputElement>) {
        setInputDescription(event.target.value)
    }

    return (
        <div>
        <div>
            <input type="text" value={inputDescription} placeholder="Add a new task" onChange={useTextInput}/>
            <button type="button" className="btn btn-light btn-sm" onClick={addNewTask}>add</button>
            {allTasks.map((task) => <Card key={task.id} description={task.description} status={task.status} id={task.id} getTasks={getTasks}/>)}
        </div>
        </div>
    );
}

export default Gallery;