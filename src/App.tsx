import { PlusCircle } from "@phosphor-icons/react";
import styles from "./App.module.css";

import Button from "./components/Button";
import Header from "./components/Header";
import Input from "./components/Input";
import ListHeader from "./components/ListHeader";
import Empty from "./components/Empty";

import { useState } from "react";
import Task from "./components/Task";

export interface ITask {
  id: number;
  text: string;
  isChecked: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [inputValue, setInputValue] = useState("");

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1;
    }

    return prevValue;
  }, 0);

  function handleAddTask() {
    if (!inputValue) {
      return;
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    };

    setTasks((state) => [...state, newTask]);
    setInputValue("");
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    if (!confirm("Deseja mesmo apagar essa tarefa?")) {
      return;
    }

    setTasks(filteredTasks);
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value };
      }

      return { ...task };
    });

    setTasks(updatedTasks);
  }

  return (
    <div>
      <Header />
      <section className={styles.content}>
        <div className={styles.inputContainer}>
          <Input
            placeHolder="Adicione uma nova tarefa"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <Button onClick={handleAddTask} disabled={inputValue ? false : true}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>
        <div className={styles.tasksList}>
          <ListHeader
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />
          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
