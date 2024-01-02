import styles from './Button.module.css'

import { PlusCircle } from '@phosphor-icons/react'

export function Button() {
    return (
        <button className={styles.button} type='submit'>Criar <PlusCircle/></button>
    )
}