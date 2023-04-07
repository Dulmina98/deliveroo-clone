import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import React, {useLayoutEffect} from "react";
import {urlFor} from "../sanity";
import {AntDesign, Feather, Ionicons} from '@expo/vector-icons';
import {DishRow} from "../components/DishRow";
import {BasketIcon} from "../components/BasketIcon";

export function RestaurantScreen() {

    const navigation = useNavigation()

    const {
        params: {
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            shortDescription,
            dishes,
            long,
            lat
        }
    } = useRoute()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    })

    return (
        <>
            <BasketIcon/>
            <ScrollView className={"bg-white"}>
                <View className={"relative"}>
                    <Image
                        source={{
                            uri: urlFor(imgUrl).url()
                        }}
                        className={"h-64 w-full rounded-t-sm bg-gray-300 p-4"}/>
                    <TouchableOpacity onPress={navigation.goBack}
                                      className={"absolute top-14 left-5 p-2 bg-gray-100 rounded-full"}>
                        <Ionicons name="arrow-back" size={20} color="#00CCBB"/>
                    </TouchableOpacity>
                </View>
                <View className={"bg-white"}>
                    <View className={"pt-4"}>
                        <Text className={"font-bold text-3xl px-4 "}>{title}</Text>
                        <View className={"flex-row space-x-2 px-4 "}>
                            <View className={"flex-row items-center mt-1 space-x-1"}>
                                <Ionicons name="star" size={22} opacity={0.5} color="green"/>
                                <Text className={'text-xs text-green-500'}>{rating}</Text>
                                <Text className={"text-xs text-gray-500"}>• {genre} </Text>
                            </View>
                            <View className={"flex-row items-center mt-1 space-x-1"}>
                                <Ionicons name="location-sharp" size={22} opacity={0.4} color="green"/>
                                <Text className={'text-xs ml-1 text-gray-500'}>Nearby • {address}</Text>
                            </View>
                        </View>
                        <Text className={"mt-2 pb-4 text-gray-500 px-4 "}>{shortDescription}</Text>

                        <TouchableOpacity className={"flex-row items-center space-x-2 border-y p-4 border-gray-300"}>
                            <AntDesign name="questioncircleo" size={20} color="gray" opacity={0.5}/>
                            <Text className={"pl-2 flex-1 font-bold"}>Have a food allergy?</Text>
                            <Feather name="chevron-right" size={20} color="#00CCBB" opacity={0.5}/>
                        </TouchableOpacity>

                        <View className={"pb-32"}>
                            <Text className={"pt-6 font-bold text-xl px-4 mb-4"}>Menu</Text>

                            {/*Dishes*/}
                            {dishes.map((dish) => (
                                <DishRow
                                    key={dish._id}
                                    id={dish._id}
                                    name={dish.name}
                                    description={dish.shortDescription}
                                    price={dish.price}
                                    image={dish.image}
                                />
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}