import styles from './ListHeader.module.css'

interface Props {
    tasksCounter: number;
    tasksDoneCounter: number;
}

export function ListHeader ({ tasksCounter, tasksDoneCounter }: Props) {
    return (
    <header className={styles.container}>
        <div className={styles.created}>
            <h1>Tarefas Criadas</h1>
            <a>{tasksCounter}</a>
        </div>
        <div className={styles.finished}>
            <h1>Concluídas</h1>
            <a>
                {tasksCounter === 0 ? tasksCounter : `${tasksDoneCounter} de ${tasksCounter}`}
            </a>
        </div>
      </header>
    )
}