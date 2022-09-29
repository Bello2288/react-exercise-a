import Form from '../components/Form';
import './App.css';
import {useState} from 'react';


const INITIAL_POSTS = [{title: 'Coding is hard to learn!', body: 'This is a short blog about coding. I have been learning about coding for four and a half weeks now. There is so much to learn! I feel like I am behind and should be furher along then I am. I do remind myself that I have come a long way from where I started. I know there are a lot of other classmates in the same shoes as me. It does help to talk with them and try to solve things together. I know I still have a long way to go. I am excited for my future in coding!'}];


function App() {
  const [posts, setPosts] = useState(INITIAL_POSTS);

  const addPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
      <Form posts={posts} addPost={addPost} />
    </div>
  );
}

export default App;
