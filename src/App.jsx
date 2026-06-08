import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import PilgrimsJourney from './pages/games/the_pilgrims_journey';
import GamePage from './components/gamepage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games/:gameId" element={<GamePage />} />
        </Routes>
    );
}

export default App;