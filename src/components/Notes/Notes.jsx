import styles from './Notes.module.css'
import { RiDeleteBin2Fill, RiSettings2Fill } from 'react-icons/ri'
import { FaEdit } from 'react-icons/fa'
import { useState } from 'react';

function Notes() {
    const [doneNote, setDoneNote] = useState(false);

    function handleClick() {
        setDoneNote(!doneNote);
    }

    function handleDeleteDiv() {
        const campo = document.querySelector('#peidei').style.display = 'none'
        alert(campo.style.display)
    }

    return (
        <div onClick={handleClick} className={styles.container}>
           {doneNote && 
            <div className={styles.doneNoteIn}> ⠀ </div>
           }
           
           {!doneNote &&
            <div id="peidei" onAnimationEnd={handleDeleteDiv} className={styles.doneNoteOut}> ⠀ </div>
            }

           <section className={styles.spacingNote}>
            <h3 className={styles.noteName}>
                fazer caminhada
            </h3>

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
    );
}

export default Notes;