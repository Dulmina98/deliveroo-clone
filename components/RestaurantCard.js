import {Image, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {Ionicons} from '@expo/vector-icons';

export function RestaurantCard({id, imgUrl, title, rating, genre, address, shortDescription, dishes, long, lat}) {

    return (
        <TouchableOpacity className={"shadow bg-white mr-3"}>
            <Image
                source={{
                    uri: imgUrl
                }}
                className={"h-[150] w-[250] rounded-t-sm"}
            />
            <View className={'pt-3 px-4 pb-5 rounded-b-sm'}>
                <Text className={"text-lg font-bold"}>{title}</Text>
                <View className={"flex-row items-center mt-1 space-x-1"}>
                    <Ionicons name="star" size={20} opacity={0.5} color="green"/>
                    <Text className={'text-xs text-green-500'}>{rating}</Text>
                    <Text className={"text-xs text-gray-500"}>• {genre} </Text>


                </View>
                <View className={"flex-row items-center mt-1 space-x-1"}>
                    <Ionicons name="location-sharp" size={20} opacity={0.5} color="green"/>
                    <Text className={'text-xs ml-1 text-gray-500'}>Nearby • {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}