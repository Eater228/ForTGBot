import { useState } from 'react';
import './App.css'
import Form from './Components/Form/Form'
import { MainContainer } from './styled/styles';

function App() {
  const tg = window.Telegram.WebApp;

  const [showMain, setShowMain] = useState(true);

  const handleBuyClick = () => {
    setShowMain(false);
  }

  return (
    <div className="App">
      {showMain ? (
        <MainContainer >
          <h1>Онлайн магазин</h1>
          <img src="https://i.pinimg.com/474x/11/11/49/11114934f6175f6c1600038011acd891.jpg" alt="Photo" />
          <p className='paragrah'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Commodi possimus tempore labore a est. Animi temporibus
            veritatis iste necessitatibus, libero accusantium quibusdam
            quis nostrum ex deserunt, perferendis quia repudiandae quasi?
          </p>
          <button id='buy-button' onClick={handleBuyClick}>Купити</button>
        </MainContainer>
      ) : (
        <Form tg={tg} />
      )}
    </div>
  )
}

export default App
