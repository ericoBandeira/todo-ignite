import styles from "./ListHeader.module.css";

interface Props {
  tasksCounter: number;
  checkedTasksCounter: number;
}

function ListHeader({ tasksCounter, checkedTasksCounter }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.allTasksContainer}>
        <p>Tarefas Criadas</p>
        <span>{tasksCounter}</span>
      </div>
      <div className={styles.finishTaskContainer}>
        <p>Concluídas</p>
        <span>
          {tasksCounter === 0
            ? tasksCounter
            : `${checkedTasksCounter} de ${tasksCounter}`}
        </span>
      </div>
    </div>
  );
}

export default ListHeader;
