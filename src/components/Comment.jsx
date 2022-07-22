import styles from './Comment.modules.css';

export function Comment() {
  return(
    <div className={styles.comment}>
      <img src="https://github.com/rodrigoczlopes.png" />

      <div className={styles.commentBox}>
        
      </div>

      <footer>
        Aplaudir
      </footer>

    </div>
  )
}