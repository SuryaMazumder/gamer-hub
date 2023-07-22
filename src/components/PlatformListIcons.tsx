import React from "react";
import { Platfrom } from "../hooks/useGames";
import { Text } from "@chakra-ui/react";

interface props {
    platform: Platfrom[]
}

const PlatformListIcons = ({ platform }: props) => {
    return (
        <>
            {platform.map((platfrom) => <Text>{platfrom.name}</Text>)}

        </>

    )
};

export default PlatformListIcons;
