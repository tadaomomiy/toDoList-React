import { Button } from './components/Button'
import { Header } from './components/Header'
import { Input } from './components/Input'

import styles from './App.module.css'
import './global.css'
import { ListHeader } from './components/List/ListHeader'
import { Empty } from './components/List/Empty'
import { Item } from './components/List/Item'
import { ChangeEvent, useState } from 'react'

export interface ItemTask {
  id: number;
  text: string;
  isChecked: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ItemTask[]>([])

  const [inputText, setInputText] = useState ('')

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputText(event?.target.value)
  }

  function handleAddTask() {
    if(!inputText) {
      return
    }

    const newTask: ItemTask = {
      id: new Date().getTime(),
      text: inputText,
      isChecked: false
    }

    setTasks((state)=>[...state, newTask])
    setInputText('')
    console.log(tasks)
  }

  function handleDeleteTask(id: number) {
    const tasksWithoutDeletedOne =  tasks.filter((task) => {
      return task.id !== id
    })

    if(!confirm('Deseja mesmo apagar essa tarefa?')){
      return
    }

    setTasks(tasksWithoutDeletedOne);
  }

  function handleTaskDone({id, value}: {id: number; value: boolean}) {
    const updateStatus = tasks.map((task) =>{
      if (task.id === id) {
        return {...task, isChecked: value}
      }

      return {...task}
    })

    setTasks(updateStatus);
  }

  const tasksDoneCounter = tasks.reduce((doneValue, currentTask) => {
    if (currentTask.isChecked){
      return doneValue + 1
    }

    return doneValue
  }, 0)

  return (
    <main>
      <Header />
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <Input
            type="text"
            placeholder='Adicione uma nova tarefa'
            value={inputText}
            onChange={handleInputChange}
          />
          <Button onClick={handleAddTask}/>
        </div>

        <div className={styles.taskList}>
          <ListHeader
            tasksCounter={tasks.length}
            tasksDoneCounter={tasksDoneCounter}
          />
          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) =>
                <Item
                  key={task.id}
                  data={task}
                  deleteTask={handleDeleteTask}
                  taskStatusDone={handleTaskDone}
                />
              )}
            </div>
          ): (
            <Empty />
          )}
        </div>
      </section>
    </main>
  )
}