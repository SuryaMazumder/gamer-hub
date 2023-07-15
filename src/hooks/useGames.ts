import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface games {
    id: number,
    name: string,
    background_image:string
}

interface fetchGames {
    count: Number,
    results: games[]
}

const useGames = () => {
    const [games, setGames] = useState<games[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        apiClient.get<fetchGames>('/games').then(
            res => setGames(res.data.results)
        ).catch(err => {
            setError(err.message)
        })
    })
  return {games,error}
}

export default useGames;