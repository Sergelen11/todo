import { TaskDetail } from "./TaskDetail"
export const TaskList = ({ tasks, removeTask , isChecked}) => {
    return (
        <div>
        {
            tasks.map((el) => (
                <TaskDetail title={ el.title } key={ el.id } onDelete={ () => removeTask(el.id) } onChecked={(e)=>isChecked(e.target.checked, e.target)}/>
            ))
        }
        </div>
    )
}