import styles from './NotePad.module.css';
import { MdOutlineAddCircle } from 'react-icons/md';
import Notes from '../Notes/Notes';

function NotePad() {
    return ( 
        <div className={styles.container}>  
            <div className={styles.posicionarTextos}>
                <h2> Adicione Uma Tarefa </h2>
                <span> <MdOutlineAddCircle /> </span>
            </div>

            <section className="notas">
                <Notes />
            </section>
        </div>
    );
}

export default NotePad;