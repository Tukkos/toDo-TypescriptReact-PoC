import { useState } from "react";
import { Line, TaskWindowStyle } from "../../themes";
import { Text } from "../text";

type Props = {
    task: string,
    isItDone: boolean,
}

export const TaskWindow = ({ task, isItDone  }: Props) => {
    const [isDone, setIsDone] = useState<boolean>(isItDone);
    function changeBoolean() {
        setIsDone(!isDone);
    };

    return (
        <TaskWindowStyle>
            <Line />
            {!isDone ?
            <Text onClick={changeBoolean}>{task}</Text>:
            <Text style={{textDecoration: 'line-through'}} onClick={changeBoolean}>{task}</Text>
            }
        </TaskWindowStyle>
    );
};

