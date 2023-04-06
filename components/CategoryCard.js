import {Image, Text, TouchableOpacity} from "react-native";
import React from "react";

export function CategoryCard({title, imgUrl}) {

    return (
        <TouchableOpacity className={"mr-2 relative"}>
            <Image
                source={{
                    uri: imgUrl
                }}
                className={"h-20 w-20 rounded"}
            />

            <Text className={"absolute bottom-1 left-1 text-white font-bold shadow-2xl"}>{title}</Text>
        </TouchableOpacity>
    )
}