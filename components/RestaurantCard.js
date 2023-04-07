import {Image, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {Ionicons} from '@expo/vector-icons';
import {urlFor} from "../sanity";
import {useNavigation} from "@react-navigation/native";

export function RestaurantCard({id, imgUrl, title, rating, genre, address, shortDescription, dishes, long, lat}) {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate("Restaurant", {
                    id, imgUrl, title, rating, genre, address, shortDescription, dishes, long, lat
                })
            }}
            className={"shadow bg-white mr-3 rounded-b-sm"}>
            <Image
                source={{
                    uri: urlFor(imgUrl).url()
                }}
                className={"h-[150] w-[250] rounded-t-sm"}
            />
            <View className={'pt-3 px-4 pb-5'}>
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