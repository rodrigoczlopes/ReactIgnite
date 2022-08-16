import { Header } from './components/Header';
import {Post} from './components/Post';
import {Sidebar} from './components/Sidebar';
import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author:{
      avatarUrl:'http://github.com.br/rodrigoczlopes.png',
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
      avatarUrl:'http://github.com.br/rodrigoczlopes.png',
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



export function App() {
 

  return (
    <div>
      <Header />
        <div className={styles.whapper}>
          <Sidebar/>
            <main>
              <Post 
                author="Rodrigo Lopes"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia labore optio sint quidem, voluptatum 
                quo corrupti, dolore aliquam distinctio fugit architecto odio illo consequuntur iusto perferendis sequi at quaerat 
                nisi?"
              />
              <Post 
                author="Juliete Figueiredo"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia labore optio sint quidem, voluptatum 
                quo corrupti, dolore aliquam distinctio fugit architecto odio illo consequuntur iusto perferendis sequi at quaerat 
                nisi?"
              />
            </main>
        </div>
    </div>
    
  )
}


export default App
