import { TaskDetail } from "./TaskDetail"
export const TaskList = ({ tasks, removeTask , isChecked, editing}) => {
    const notdonetodos = tasks.filter((el)=>{
        return el.checked===false;
    })
    return (
        <div>
        {
            notdonetodos.map((el) => (
                <TaskDetail title={ el.title } key={ el.id } edit={()=>editing(el.id)} onDelete={ () => removeTask(el.id) } onChecked={(e)=>isChecked(e.target.checked, el.id)}/>
            ))
        }
        </div>
    )
}