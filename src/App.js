import { useEffect, useState } from "react";
import { TaskAdd } from "./components/TaskAdd";
import { TaskList } from "./components/TaskLists";
import { TaskListdone } from "./components/TaskListsdone";
import { db } from './firebase'
import './App.css'

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [editingValue, setediting] = useState('')
  useEffect(() => {
    db.collection('todos').onSnapshot((snapshot) => {
      const myDocs = snapshot.docs.map((doc) => {
        return {
          id: doc.id ,
          ...doc.data() }
      })
      setTasks(myDocs)
    })
  }, []);

  const isChecked = (checked, id) => {
    db.collection('todos').doc(id).set({
      checked: checked,
    }, { merge: true });
  }
  const editing = async (id) => {
    const editingData = await db.collection('todos').doc(id).get()
    setediting(editingData.data().title)
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
      <TaskAdd/>
      <ul>
        <h1><li>Not done todos</li></h1>
      </ul>
      <TaskList tasks={tasks} removeTask={removeTask} isChecked={isChecked} editing={editing} />
      <div>
        <ul>
          <h1><li>Done todos</li></h1>
        </ul>
        <TaskListdone tasks={tasks} removeTask={removeTask} isChecked={isChecked} editing={editing} />
      </div>
    </div>
  );
}
export default TodoApp;