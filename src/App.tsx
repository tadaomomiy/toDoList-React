import { Button } from './components/Button'
import { Header } from './components/Header'
import { Input } from './components/Input'

import styles from './App.module.css'
import './global.css'
import { ListHeader } from './components/List/ListHeader'
import { Empty } from './components/List/Empty'
import { Item } from './components/List/Item'

export function App() {
  return (
    <main>
      <Header />
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <Input />
          <Button />
        </div>

        <div className={styles.taskList}>
          <ListHeader />
          {/* <Empty /> */}
          <Item id={1} text='Fazer a janta' isChecked={true}/>
          <Item id={2} text='Fazer o almoço' isChecked={true}/>
          <Item id={3} text='Fazer a janta' isChecked={false}/>
          <Item id={4} text='Fazer a janta' isChecked={false}/>
        </div>
      </section>
    </main>
  )
}