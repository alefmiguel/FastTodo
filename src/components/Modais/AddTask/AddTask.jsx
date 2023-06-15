import styles from "./AddTask.module.css";

function AddTask() {
  return (
    <div className={styles.container}>
      <main className={styles.addTask}>
        <p> Nome da Tarefa </p>
        <input placeholder="digite" />
      </main>
    </div>
  );
}

export default AddTask;
