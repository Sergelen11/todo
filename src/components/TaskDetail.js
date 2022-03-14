export const TaskDetail = ({ title, onDelete, onChecked }) => {
    return (
        <div>
            <input type={'checkbox'} onClick={onChecked}></input>
            <span>{ title }</span>
            <button onClick={ onDelete }>X</button>
        </div>
    );
}