import styles from './Notes.module.css'
import { RiDeleteBin2Fill } from 'react-icons/ri'
import { FaEdit } from 'react-icons/fa'

function Notes() {
    return (
        <div className={styles.container}>
           <div className={styles.doneNote}> a </div>

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