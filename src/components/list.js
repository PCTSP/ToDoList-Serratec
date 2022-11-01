import React, {useState} from 'react'
import Form from './form'
import Todo from './todo';

function List() {

  const [tasks, setTasks] = useState([]);

  const addTask = task => {

    const newTasks = [task, ...tasks]

    setTasks(newTasks)
  };

  const removeTask = id => {
    const removeArr = [...tasks].filter(task => task.id !== id);

    setTasks(removeArr);
  };

  const completeTask = id => {
    let updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
      <div>
        <h1>Tarefas para completar o jogo</h1>
        <Form onSubmit={addTask} />
        <Todo tasks={tasks} completeTask={completeTask} removeTask={removeTask} />
      </div>
  )
}

export default List