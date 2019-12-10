import React, { useState } from 'react';

import './DragNDrop01.css';

const initialTodos = [
    {
        id: 1,
        task: 'Walk the walk along the river'
    },
    {
        id: 2,
        task: 'Talk the talk with Jim'
    },
    {
        id: 3,
        task: 'Jump the jump with the cow'
    },
    {
        id: 4,
        task: 'Swim under the bridge'
    }
  ];

export default function DragNDrop01 () {
    const [ todos, setTotdos ] = useState(initialTodos);
    const [ completedTodos, setCompletedTodos ] = useState([]);
    const [ draggedTodo, setDraggedTodo ] = useState({});
    const [ isDragging, setIsDragging ] = useState(false);

    const onDrag = (e, todo) => {
        e.preventDefault();
        setIsDragging(true);
        //console.log('>>>-DragNDrop-onDrag-e->',e);
        setDraggedTodo(todo);
    };
    
    const onDragOver = e => e.preventDefault();
    
    const onDrop = e => {
        e.preventDefault();

        setCompletedTodos([...completedTodos, draggedTodo]);
        setTotdos(todos.filter(todo => todo.id !== draggedTodo.id));
        setDraggedTodo({});
        setIsDragging(false);
    };

    return (
        <React.Fragment>
            <div 
                className="todos"
            >
                {todos.map((todo) =>
                    <div
                        key={todo.id}
                        draggable
                        onDrag={e => onDrag(e, todo)}
                    >
                    {todo.task}
                    </div>
                )}
            </div>

            <div
                className="done"
                onDrop={e => onDrop(e)}
                onDragOver={e => onDragOver(e)}
            >
                {completedTodos.map((todo) =>
                    <div
                        key={todo.id}
                    >
                    {todo.task}
                    </div>
                )}
            </div>

            <div 
            className="dragging"
            >
                {
                    isDragging ? <p>dragging</p> : <p>not dragging</p>
                }
            </div>
        </React.Fragment>
    );
}

