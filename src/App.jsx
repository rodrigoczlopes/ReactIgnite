import { Header } from './components/Header';
import {Post} from './Post';
import './global.css';
import styles from './App.module.css';
import {Sidebar} from './components/Sidebar';

function App() {
 

  return (
    <div>
      <Header />
        <div className={styles.whapper}>
          <Sidebar/>
            <main>
              <Post 
                author="Rodrigo Lopes"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia labore optio sint quidem, voluptatum quo
                corrupti, dolore aliquam distinctio fugit architecto odio illo consequuntur iusto perferendis sequi at quaerat nisi
                ?"
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
