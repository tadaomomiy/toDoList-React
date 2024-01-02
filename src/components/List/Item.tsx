import { Trash, Check } from '@phosphor-icons/react'
import styles from './Item.module.css';

interface ItemTask {
    id: number
    text: string
    isChecked?: boolean
  }

export function Item({id, text, isChecked}: ItemTask) {

    const inputChecked = isChecked
    ? styles['task-checked']
    : styles['task-unchecked']

    const taskTextChecked = isChecked
        ? styles['task-text-checked']
        : ''

    return (
        <div className={styles.taskContainer}>
            <div className={styles.task}>
                <label htmlFor='checkbox' >
                    <input readOnly type="checkbox" checked={isChecked}/>
                    <span className={`${styles.checkbox} ${inputChecked}`}>
                        {isChecked && <Check size={14} weight='bold'/>}
                    </span>
                </label>
                <p className={`${styles.taskText} ${taskTextChecked}`}>
                    {text}
                </p>
            </div>

            <button className={styles.button}>
                <Trash size={24}/>
            </button>
        </div>
    )
}