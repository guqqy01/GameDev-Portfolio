import {useParams} from 'react-router-dom';

function GamePage(){
    const { gameId } = useParams();
    const game = games.find(g => g.id === gameId);
    
    if (!game) {
        return <div>Game not found</div>;
    }

    return (
        <div className="game-page">
            <h1>{game.title}</h1>
            <p>{game.description}</p>
        </div>
    );
}