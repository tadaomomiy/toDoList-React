import styles from './ListHeader.module.css'

export function ListHeader () {
    return (
    <header className={styles.container}>
        <div className={styles.created}>
            <h1>Tarefas Criadas</h1>
            <a>0</a>
        </div>
        <div className={styles.finished}>
            <h1>Concluídas</h1>
            <a>0</a>
        </div>
      </header>
    )
}