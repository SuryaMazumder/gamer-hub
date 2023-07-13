import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface games {
    id: number,
    name: String
}

interface fetchGames {
    count: Number,
    results: games[]
}

const GameGrid = () => {
    const [games, setGames] = useState<games[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        apiClient.get<fetchGames>('/xgames').then(
            res => setGames(res.data.results)
        ).catch(err => {
            setError(err.message)
        })
    })
    return (
        <>
            {error && <text> {error} </text>}
            <ul>
                {games.map(game => <li key={game.id}>{game.name}</li>)}
            </ul>
        </>
    );
};

export default GameGrid;
