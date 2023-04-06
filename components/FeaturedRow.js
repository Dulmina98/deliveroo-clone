import {ScrollView, Text, View} from "react-native";
import {Feather} from "@expo/vector-icons";
import {RestaurantCard} from "./RestaurantCard";

export function FeaturedRow({id, title, description}) {

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
                className={'pt-4'}
            >
                {/*Restaurant card*/}
                <RestaurantCard
                    id={123}
                    imgUrl={'https://links.papareact.com/gn7'}
                    title={'Yo! Sushi'}
                    rating={4.5}
                    genre={"Japanese"}
                    address={"123, Main St."}
                    shortDescription={"This a test description"}
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={123}
                    imgUrl={'https://links.papareact.com/gn7'}
                    title={'Yo! Sushi'}
                    rating={4.5}
                    genre={"Japanese"}
                    address={"123, Main St."}
                    shortDescription={"This a test description"}
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={123}
                    imgUrl={'https://links.papareact.com/gn7'}
                    title={'Yo! Sushi'}
                    rating={4.5}
                    genre={"Japanese"}
                    address={"123, Main St."}
                    shortDescription={"This a test description"}
                    dishes={[]}
                    long={20}
                    lat={0}
                />
            </ScrollView>
        </View>


    )
}