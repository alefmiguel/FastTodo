import styles from "./AddTask.module.css";

function AddTask(props) {
  const keyDown = (event) => {
    if (event.key === "Enter") {
      // alert(props.showAddTask);
      var valorShow = props.showAddTask;
      valorShow = !valorShow;
      console.log(valorShow);
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.addTask}>
        <p> Nome da Tarefa </p>
        <input placeholder="digite" type="text" onKeyDown={keyDown} />
      </main>
    </div>
  );
}

export default AddTask;
