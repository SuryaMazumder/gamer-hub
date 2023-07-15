import { SimpleGrid } from '@chakra-ui/react';
import useGames from '../hooks/useGames.js'
import GameCard from './GameCard.js';

const GameGrid = () => {
    const { games, error } = useGames();
    return (

        <>

            {error && <text> {error} </text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10} padding='10px'>
                {games.map(
                    (game) => (
                        <GameCard key={game.id} gamesCard={game} />
                    )
                )}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;
