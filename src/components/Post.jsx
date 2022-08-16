import { Comment } from './Comment';
import styles from './Post.module.css';

import { Avatar } from './Avatar';

export function Post(props) {
  console.log(props);
  return(
    <article className={styles.post}> 
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src="https://github.com/rodrigoczlopes.png" />
          <div className={styles.authorInfo}>
            <strong>Rodrigo Lopes</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de maio ás 08:13h " dateTime="2022-05-11 08:13:30" >Publicado há 1h</time>
      </header>

      <div className={styles.content}>

      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder="Deixe um comentário"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
        
      </form>

       <div className={styles.commentList}>
        <Comment />  
        <Comment />  
        <Comment />  
       </div>
    </article>
  )
}