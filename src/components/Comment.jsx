import styles from './Comment.modules.css';

export function Comment() {
  return(
    <div className={styles.comment}>
      <img src="https://github.com/rodrigoczlopes.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rodrigo Lopes</strong>
              <time title="11 de maio ás 08:13h " dateTime="2022-05-11 08:13:30" >Cerca de 1h atrás</time>
            </div>
          </header>

          <button title="Deletar comentário">
            <Trash size={20}/>
          </button>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <TumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}