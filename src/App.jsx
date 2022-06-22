import { Header } from './components/Header';
import {Post} from './Post';
import './global.css';

function App() {
 

  return (
    <div>
    <Header />

    <Post 
      author="Rodrigo Lopes"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia labore optio sint quidem, voluptatum quo corrupti, dolore aliquam distinctio fugit architecto odio illo consequuntur iusto perferendis sequi at quaerat nisi?"
    />

    <Post 
      author="Juliete Figueiredo"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia labore optio sint quidem, voluptatum quo corrupti, dolore aliquam distinctio fugit architecto odio illo consequuntur iusto perferendis sequi at quaerat nisi?"
    />
    </div>
    
  )
}

export default App
