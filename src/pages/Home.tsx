import { Subtitle, Text, Title } from "../components";
import { HomeStyle } from "../themes/HomeStyle";
import { TbLeaf } from "react-icons/tb"
import { useEffect, useState } from "react";
import { TaskWindow } from "../components/taksWindow";

interface Task {
    id: number,
    task: string,
    isItDone: boolean,
};

export const Home = () => {
    const allTaskSample: Task[] = [
        {
            id: 0,
            task: "Cavar todos os fosseis",
            isItDone: false,
        },
        {
            id: 1,
            task: "Fazer a árvore de dinheiro",
            isItDone: true,
        },
        {
            id: 2,
            task: "Encontrar a mensagem na garrafa",
            isItDone: true,
        },
    ];

    const [newTask, setNewTask] = useState<string>("");
    const [allTask, setAllTask] = useState<Task[]>(allTaskSample);

    function addOneTask() {
        event?.preventDefault();
        let newTaskObj: Task = {
            id: allTask.length+1,
            task: newTask,
            isItDone: false,
        };
        setAllTask([...allTask, newTaskObj]);
        setNewTask("");
    };

    return (
        <HomeStyle>
            
            <Title>toDo</Title>

            <Subtitle>
                <TbLeaf className="leafIcon" />
                <Text>O que você precisa fazer hoje?</Text>
                <TbLeaf className="leafIcon" />
            </Subtitle>

            <form onSubmit={addOneTask} className="form">
                <input 
                    className="inputBar"
                    placeholder="Adicione a tarefa a ser feita aqui."
                    type="text"
                    value={newTask}
                    onChange={e => setNewTask(e.target.value)}
                />
                <button type="submit" className="button">Enviar</button>
            </form>

            <Subtitle>
                <Text>Tarefas já registradas:</Text>
            </Subtitle>
            

            {(allTask.map((allTask) => (
                <TaskWindow 
                    task={allTask.task}
                    isItDone={allTask.isItDone}
                />
            )))}
            
        </HomeStyle>
    );
};