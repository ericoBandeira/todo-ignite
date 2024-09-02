import styles from "./Empty.module.css";
import pranchetaImg from "../assets/Clipboard.svg";

function Empty() {
  return (
    <div className={styles.container}>
      <img src={pranchetaImg} alt="Ícone de prancheta" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}

export default Empty;
