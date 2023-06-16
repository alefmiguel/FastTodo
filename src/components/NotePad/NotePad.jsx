import styles from "./NotePad.module.css";
import { MdOutlineAddCircle } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import AddTask from "../Modais/AddTask/AddTask";
import NavBar from "../NavBar/NavBar";

function NotePad() {
  const [noteName, setNoteName] = useState("");
  const [noteDeadline, setNoteDeadline] = useState("");
  const [doneNoteList, setDoneNoteList] = useState([]);
  const [showAddTask, setShowAddTask] = useState("");

  function handleAddNote(props) {
    const fundo = document.querySelector("#bg");
    const modal = document.querySelector("#modalAddTask");

    fundo.style.filter = "blur(3px)";

    modal.style.filter = "none";
    modal.style.position = "absolute";
    modal.style.display = "flex";
    modal.style.top = "0";
    modal.style.bottom = "0";
    modal.style.left = "0";
    modal.style.right = "0";
    modal.style.zIndex = "999";

    const newNote = {
      id: Math.floor(Math.random() * 100),
      name: noteName,
      checked: false,
    };

    setShowAddTask(!showAddTask);
    setDoneNoteList([...doneNoteList, newNote]);
  }

  function handleDeleteDiv() {
    const campo = document.querySelector("#doneNoteOut");
    campo.style.display = "none";
  }

  function SwitchDone() {
    const containerNote = document.querySelector("#containerNote");
    console.log(containerNote);
    // a alterar ainda

    try {
      doneNoteList.map((note) => (note.checked = !note.checked));
      console.log("Nota alterada.");
    } catch {
      console.log("Erro na checagem.");
    } finally {
      console.log(
        "FEITA OU NÃO)",
        doneNoteList.map((note) => note.checked)
      );
      console.log(
        "NOTA E INDEX)",
        doneNoteList.map((note, index) => console.log(index, note))
      );
    }
  }

  return (
    <section>
      <div className={styles.modalAddTask} id="modalAddTask">
        {showAddTask && <AddTask showAddTask={showAddTask} />}
      </div>

      <section id="bg">
        <NavBar />

        <div className={styles.container}>
          <header className={styles.posicionarTextos}>
            <h2> Adicione Uma Tarefa </h2>
            <span onClick={handleAddNote}>
              <MdOutlineAddCircle />
            </span>
          </header>

          <main>
            {doneNoteList.map((note, index) => (
              <div
                key={index}
                onClick={SwitchDone}
                id="containerNote"
                className={styles.containerNote}
              >
                {note.checked && (
                  <div id="doneNoteIn" className={styles.doneNoteIn}>
                    ⠀
                  </div>
                )}

                {!note.checked && (
                  <div
                    id="doneNoteOut"
                    onAnimationEnd={handleDeleteDiv}
                    className={styles.doneNoteOut}
                  >
                    ⠀
                  </div>
                )}

                <section className={styles.spacingNote}>
                  <h3 className={styles.noteName}>{noteName}</h3>

                  <section className={styles.spacingIcons}>
                    <h3 className={styles.editNote}>
                      <FaEdit />
                    </h3>

                    <h3 className={styles.deleteNote}>
                      <RiDeleteBin2Fill />
                    </h3>
                  </section>
                </section>
              </div>
            ))}
          </main>
        </div>
      </section>
    </section>
  );
}

export default NotePad;
