import styles from './Header.module.css'

import toDoLogo from '../assets/ToDo-logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={toDoLogo} alt="Logotipo todo" />
            <a>to</a>
            <a className={styles.do}>do</a>
        </header>
    )
}