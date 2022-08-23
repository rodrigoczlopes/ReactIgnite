import { Comment } from './Comment';
import styles from './Post.module.css';

import { Avatar } from './Avatar';

export function Post({author, publishedAt}) {
  return(
    <article className={styles.post}> 
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="11 de maio ás 08:13h " dateTime="2022-05-11 08:13:30" >
          {publishedAt.toString()}
        </time>
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