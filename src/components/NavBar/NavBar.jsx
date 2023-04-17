import styles from "./NavBar.module.css";
import { SiFastapi } from "react-icons/si";

function NavBar() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <span> <SiFastapi /> </span>
                <h1> FastTodo </h1>
            </div>

            <div className={styles.links}>
                <h2> Sobre </h2>
                <h2> Dicas </h2>
                <h2> Contato </h2>
            </div>
        </div>
    )
}

export default NavBar;