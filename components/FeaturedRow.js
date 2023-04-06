import {ScrollView, Text, View} from "react-native";
import {Feather} from "@expo/vector-icons";
import {RestaurantCard} from "./RestaurantCard";
import {useEffect, useState} from "react";
import createClient from "../sanity";

export function FeaturedRow({id, title, description}) {

    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        createClient.fetch(`
        *[_type == "featured" && _id == $id] {
              ...,
              restaurants[]-> {
                ...,
                dishes[]->,
                type->  {
                name
                }
              }
            }[0]
        `, {id})
            .then((data) => {
                setRestaurants(data?.restaurants)
            })
    }, [])

    return (
        <View>
            <View className={"mt-4 flex-row items-center justify-between px-4"}>
                <View>
                    <Text className={"font-bold text-lg"}>{title}</Text>
                    <Text className={"text-gray-400"}>{description}</Text>
                </View>
                <Feather name="arrow-right" size={24} color="#00CCBB"/>
            </View>

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal: 15}}
                className={'py-4'}
            >
                {/*Restaurant card*/}

                {restaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant._id}
                        id={restaurant._id}
                        imgUrl={restaurant.image}
                        title={restaurant.name}
                        rating={restaurant.rating}
                        genre={restaurant.type?.name}
                        address={restaurant.address}
                        shortDescription={restaurant.shortDescription}
                        dishes={restaurant.dishes}
                        long={restaurant.long}
                        lat={restaurant.lat}
                    />
                ))}


            </ScrollView>
        </View>


    )
}