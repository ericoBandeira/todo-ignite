import { PlusCircle } from "@phosphor-icons/react";

import styles from "./App.module.css";

import Button from "./components/Button";
import Header from "./components/Header";
import Input from "./components/Input";

function App() {
  return (
    <div>
      <Header />
      <section className={styles.content}>
        <div className={styles.inputContainer}>
          <Input placeHolder="Adicione uma nova tarefa" />
          <Button>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>
      </section>
    </div>
  );
}

export default App;
