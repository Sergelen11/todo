import { TaskDetail } from "./TaskDetail"
export const TaskListdone = ({ tasks, removeTask , isChecked, editing}) => {
    const donetodos = tasks.filter((el)=>{
        return el.checked===true;
    })
    return (
        <div>
        {
            donetodos.map((el) => (
                <TaskDetail element={el.checked} edit={ ()=>editing(el.id)} title={ el.title } key={ el.id } onDelete={ () => removeTask(el.id) } onChecked={(e)=>isChecked(e.target.checked, el.id)}/>
            ))
        }
        </div>
    )
}