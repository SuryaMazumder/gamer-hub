import React from "react";
import { games } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformListIcons from "./PlatformListIcons";

interface game {
    gamesCard: games
}
const GameCard = ({ gamesCard }: game) => {
    return (
        <Card overflow='hidden' borderRadius={10}>
            <Image src={gamesCard.background_image} />
            <CardBody>
                <Heading fontSize='2xl'>{gamesCard.name}</Heading>
                <PlatformListIcons platform={gamesCard.parent_platforms.map(p => p.platfrom)} />
            </CardBody>
        </Card>
    );
};

export default GameCard;
