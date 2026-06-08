import { useParams } from 'react-router-dom';
import PilgrimsJourney from '../pages/games/the_pilgrims_journey';

const gamePages = {
    'the-pilgrims-journey': PilgrimsJourney,
};

function GamePage() {
    const { gameId } = useParams();
    const Page = gamePages[gameId];

    if (!Page) return <div>Game not found</div>;

    return <Page />;
}

export default GamePage;