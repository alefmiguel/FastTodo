import styles from './NotePad.module.css';
import { MdOutlineAddCircle } from 'react-icons/md';
import Notes from '../Notes/Notes';
import { useState } from 'react';

function NotePad() {
    const [components, setComponents] = useState([]);

    function handleAddNote() {
        const newComp = <Notes />
        setComponents([...components, newComp])
    }

    function handleDeleteNote() {
    }

    return ( 
        <div className={styles.container}>  
            <div className={styles.posicionarTextos}>
                <h2> Adicione Uma Tarefa </h2>
                <span onClick={handleAddNote}> <MdOutlineAddCircle /> </span>
            </div>

            <div className="notas">
                {components.map((component, index) => (
                    <section key={index}>
                        {component}
                    </section>
                ))}
            </div>
        </div>
    );
}

export default NotePad;