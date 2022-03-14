export const TaskDetail = ({ title, onDelete, onChecked, element, edit}) => {
    return (
        <div>
            <input type={'checkbox'} onClick={onChecked} checked={element}></input>
            <span>{ title }</span>
            <button onClick={edit}>Edit</button>
            <button onClick={ onDelete }>X</button>
        </div>
    );
}