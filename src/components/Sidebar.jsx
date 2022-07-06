import styles from './Sidebar.module.css';

export function Sidebar() {
  return(
    <aside className={styles.Sidebar}>
      <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" ></img>
    

    <div className={styles.profile}>
      <strong>Rodrigo Lopes</strong>
      <span>Web Developer</span>
    </div>

    <footer>
      <a href="#">
        Editar seu perfil
      </a>
    </footer>


    </aside>
  );
}