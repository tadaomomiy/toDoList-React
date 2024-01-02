import styles from './Empty.module.css'
import clipboard from '../../assets/Clipboard.svg'
import {} from '@phosphor-icons/react'

export function Empty () {
    return (
        <div className={styles.container}>
            <img src={clipboard} alt="" className={styles.img}/>
            <p>
                <strong>Você ainda não tem tarefas cadastradas</strong><br/>
                Crie tarefas e organize seus itens a fazer
            </p>
      </div>
    )
}