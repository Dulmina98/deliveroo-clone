import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {selectRestaurant} from "../features/restaurantSlice";
import React, {useLayoutEffect} from "react";
import {Ionicons} from "@expo/vector-icons";
import * as Progress from 'react-native-progress';
import MapView, {Marker} from "react-native-maps";

export function DeliveryScreen() {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })

    return (
        <View className={"bg-[#00CCBB] flex-1"}>
            <SafeAreaView className={"z-50 h-60"}>
                <View className={"p-5 flex-row justify-between items-center"}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Ionicons name="close" size={30} color="white"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text className={"text-white font-light text-lg"}>Order Help</Text>
                    </TouchableOpacity>
                </View>

                <View className={"bg-white rounded-lg p-5 shadow-md mx-5 my-2"}>
                    <View className={"flex-row justify-between"}>
                        <View>
                            <Text className={"text-lg text-gray-400"}>Estimated Arrival</Text>
                            <Text className={"text-4xl font-bold"}>45-55 Mins</Text>
                        </View>
                        <Image
                            source={{
                                uri: "http://links.papareact.com/fls"
                            }}
                            className={"h-20 w-20"}
                        />
                    </View>

                    <Progress.Bar size={30} color={"#00CCBB"} indeterminate={true}/>

                    <Text className={"text-gray-500 mt-3"}>Your order at {restaurant.title} is being prepared!</Text>
                </View>


            </SafeAreaView>

            <MapView
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.long,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.005,
                }}
                className={"flex-1 z-0"}
                mapType={"mutedStandard"}
            >
                <Marker
                    coordinate={{
                        latitude: restaurant.lat,
                        longitude: restaurant.long,
                    }}
                    title={restaurant.title}
                    description={restaurant.shortDescription}
                    identifier={"origin"}
                    pinColor={"#00CCBB"}
                />
            </MapView>
        </View>
    )
}