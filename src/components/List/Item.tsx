import { Trash, Check } from '@phosphor-icons/react'
import styles from './Item.module.css';
import { ItemTask } from '../../App';

interface Props {
    data: ItemTask;
    deleteTask: (id: number) => void;
    taskStatusDone: ({id, value}: {id: number; value: boolean}) => void
}

export function Item({data, deleteTask, taskStatusDone}: Props) {
    function handleDelete () {
        deleteTask(data.id)
    }

    function handleTaskStatus () {
        taskStatusDone({id: data.id, value: !data.isChecked})
    }

    const inputChecked = data.isChecked
    ? styles['task-checked']
    : styles['task-unchecked']

    const taskTextChecked = data.isChecked
        ? styles['task-text-checked']
        : ''

    return (
        <div className={styles.taskContainer}>
            <div className={styles.task}>
                <label htmlFor='checkbox' onClick={handleTaskStatus}>
                    <input readOnly type="checkbox" checked={data.isChecked}/>
                    <span className={`${styles.checkbox} ${inputChecked}`}>
                        {data.isChecked && <Check size={14} weight='bold'/>}
                    </span>
                </label>
                <p className={`${styles.taskText} ${taskTextChecked}`}>
                    {data.text}
                </p>
            </div>

            <button
                onClick={handleDelete}
                className={styles.button}
            >
                <Trash size={24}/>
            </button>
        </div>
    )
}