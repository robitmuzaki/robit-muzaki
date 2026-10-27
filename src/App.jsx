import { useState, ViewTransition, startTransition } from 'react';
import photo from './assets/photo.jpg';
import './App.css';
import Profile from './components/Profile.jsx';
import Works from './components/Works.jsx';
import Contact from './components/Contact.jsx';

function App() {
  const [selected, setSelected] = useState('profile');
  console.log(selected)
  return (
    <>
      <header>
        <h1>My Resume</h1>
        <img src={photo} alt="Profile Picture" />
        <nav>
          <div className="nav-inner">
            <button className={selected === 'profile' ? 'active' : ''} onClick={() => startTransition(() => setSelected('profile'))}>Profile</button>
            <button className={selected === 'works' ? 'active' : ''} onClick={() => startTransition(() => setSelected('works'))}>works</button>
            <button className={selected === 'contact' ? 'active' : ''} onClick={() => startTransition(() => setSelected('contact'))}>contact</button>
          </div>
        </nav>
      </header>
      <main>
        
        {selected === 'profile' && <ViewTransition><Profile /></ViewTransition>}
        
        {selected === 'works' && <ViewTransition><Works /></ViewTransition>}
        {selected === 'contact' && <ViewTransition><Contact /></ViewTransition>}
      </main>
    </>
  )
}

export default App
