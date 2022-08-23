import { Header } from './components/Header';
import {Post} from './components/Post';
import {Sidebar} from './components/Sidebar';
import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author:{
      avatarUrl:'http://github.com/rodrigoczlopes.png',
      name: 'Rodrigo Lopes',
      role: 'Developer'
    },
    content:[       
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'jane.design/doctorcare'},
      
    ],
    publishedAt: new Date('2022-08-10 20:00:00'),
  },
  {
    id: 2,
    author:{
      avatarUrl:'http://github.com/rodrigoczlopes.png',
      name: 'Juliete Figueiredo',
      role: 'Educator'
    },
    content:[       
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'jane.design/doctorcare'},
      
    ], 
    publishedAt: new Date('2022-08-16 20:00:00'),
  },
]


//iteração no post percorrer o array e mostrar em cada posição

export function App() {
 

  return (
    <div>
      <Header />
        <div className={styles.whapper}>
          <Sidebar/>
            <main>
              {posts.map(post =>{
                return (
                  <Post
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                  />
                )
              })}
            </main>
        </div>
    </div>
    
  )
}


export default App
