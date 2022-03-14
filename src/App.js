import { useEffect, useState } from "react";
import { TaskAdd } from "./components/TaskAdd";
import { TaskList } from "./components/TaskLists";
import { db } from './firebase'
import './App.css'

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    db.collection('todos').onSnapshot((snapshot) => {
      const myDocs = snapshot.docs.map((doc) => {
        return {
          id: doc.id ,
          ...doc.data() }
      })
      console.log(myDocs)
      setTasks(myDocs)
    })
  }, []);

  const isChecked = (checked, el) => {
    console.log(checked, el)
  }

  const removeTask = (id) => {
    db.collection("todos").doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  return (
    <div>
      <TaskAdd />
      <ul>
        <h1><li>Not done todos</li></h1>
      </ul>
      <TaskList tasks={tasks} removeTask={removeTask} isChecked={isChecked} />
      <div>
        <ul>
          <h1><li>Done todos</li></h1>
        </ul>
      </div>
    </div>
  );
}
export default TodoApp;