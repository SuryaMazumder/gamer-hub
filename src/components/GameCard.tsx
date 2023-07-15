import React from "react";
import { games } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface game {
    gamesCard: games
}
const GameCard = ({ gamesCard }: game) => {
    return (
        <Card overflow='hidden' borderRadius={10}>
            <Image src={gamesCard.background_image} />
            <CardBody>
                <Heading fontSize='2xl'>{gamesCard.name}</Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;
