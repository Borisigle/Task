import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

const deleteTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id))
}

const toggleReminder = (id) => {
  setTasks(tasks.map( task => task.id === id ? {...task, reminder : !task.reminder} : task))
}

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

  return (
    <div className="container">
      <Header title='Hello World!' toggleAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd= {addTask} />}
      {tasks.length > 0 ? <Tasks task= {tasks} onDelete= {deleteTask} onToggle={toggleReminder}/> : 'No task to show'}
      
    </div>
  );
}

export default App;
