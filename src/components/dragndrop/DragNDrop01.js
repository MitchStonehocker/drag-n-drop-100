import React, { useState } from 'react';

import './DragNDrop01.css'

const initialTodos = [
    {
      taskID: 1,
      task: 'Walk the walk along the river'
    },
    {
      taskID: 2,
      task: 'Talk the talk with Jim'
    },
    {
      taskID: 3,
      task: 'Jump the jump with the cow'
    },
    {
      taskID: 4,
      task: 'Swim under the bridge'
    }
  ];

export default function DragNDrop01 () {
    const [ todos, setTotdos ] = useState(initialTodos);
    const [ completedTasks, setCompletedTasks ] = useState([]);
    const [ draggedTask, setDraggedTask ] = useState({});

    const onDrag = (event, todo) => {
        event.preventDefault();
        console.log('>>>-DragNDrop-onDrag-event->',event);
        setDraggedTask(todo);
    };
    
    const onDragOver = (event) => {
        event.preventDefault();
    };
    
    const onDrop = (event) => {
        event.preventDefault();

        setCompletedTasks([...completedTasks, draggedTask]);
        setTotdos(todos.filter(task => task.taskID !== draggedTask.taskID));
        setDraggedTask({});
    };

    return (
        <React.Fragment>
            <div className="todos">
                {
                    todos.map((todo) =>
                    <div
                        key={todo.taskID}
                        draggable
                        onDrag={(event) => onDrag(event, todo)}
                        >
                        {todo.task}
                    </div>
                    )
                }
            </div>
            <div
                onDrop={event => onDrop(event)}
                onDragOver={(event => onDragOver(event))}
                className="done"
            >
                {completedTasks.map((task) =>
                    <div
                        key={task.taskID}
                    >
                    {task.task}
                    </div>
                )}
            </div>
        </React.Fragment>
    );
}

