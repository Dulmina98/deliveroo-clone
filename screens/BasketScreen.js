import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {selectRestaurant} from "../features/restaurantSlice"
import {removeFromBasket, selectBasketItems, selectBasketTotal} from "../features/basketSlice";
import {useMemo, useState} from "react";
import {urlFor} from "../sanity";
import {AntDesign, Ionicons} from "@expo/vector-icons";
import {currencyFormat} from "simple-currency-format";

export function BasketScreen() {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState({});
    const basketTotal = useSelector(selectBasketTotal)
    const dispatch = useDispatch();

    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item)
            return results;
        }, {})

        setGroupedItemsInBasket(groupedItems);
    }, [items])

    console.log(groupedItemsInBasket)


    return (
        <SafeAreaView className={"flex-1 bg-white"}>
            <View className={"relative flex-1 bg-gray-100"}>
                <View className={"p-5 shadow-sm flex-row items-center bg-white"}>
                    <View className={"flex-1"}>
                        <Text className={"font-bold text-lg text-center"}>Basket</Text>
                        <Text className={"text-gray-400 text-center"}>{restaurant.title}</Text>
                    </View>
                    <TouchableOpacity onPress={navigation.goBack}>
                        <AntDesign name="closecircleo" size={28} color="#00CCBB"/>
                    </TouchableOpacity>
                </View>


                <View className={"px-4 py-3 my-5 bg-white flex-row items-center space-x-4"}>
                    <Image
                        source={{
                            uri: 'https://links.papareact.com/wru'
                        }}
                        className={'h-7 w-7 bg-gray-300 rounded-full'}
                    />
                    <Text className={"flex-1"}>Deliver in 50-75 min</Text>
                    <TouchableOpacity>
                        <Text className={"text-[#00CCBB]"}>Change</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView className={"divide-y divide-gray-200"}>

                    {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                        <View
                            key={key}
                            className={"flex-row items-center bg-white space-x-3 p-4"}
                        >
                            <Text className={"text-[#00CCBB]"}>{items.length} x</Text>
                            <Image
                                source={{
                                    uri: urlFor(items[0]?.image).url()
                                }}
                                className={"h-12 w-12 rounded-full"}
                            />
                            <Text className={"flex-1 "}>{items[0]?.name}</Text>
                            <Text className={"mr-5"}>{currencyFormat(items[0]?.price, 'en-US', 'USD')}</Text>
                            <TouchableOpacity onPress={() => dispatch(removeFromBasket({id: key}))}>
                                <Ionicons name="trash-outline" size={24} color="#00CCBB"/>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>


            </View>
            <View className={"p-4 w-full bg-white mt-5 space-y-4"}>
                <View className={"flex-row justify-between"}>
                    <Text className={"text-gray-400"}>Subtotal</Text>
                    <Text className={"text-gray-400"}>{currencyFormat(basketTotal, 'en-US', 'USD')}</Text>
                </View>
                <View className={"flex-row justify-between"}>
                    <Text className={"text-gray-400"}>Delivery Fee</Text>
                    <Text className={"text-gray-400"}>{currencyFormat(5, 'en-US', 'USD')}</Text>
                </View>
                <View className={"flex-row justify-between"}>
                    <Text>Order Total</Text>
                    <Text className={"font-bold"}>{currencyFormat(basketTotal + 5, 'en-US', 'USD')}</Text>
                </View>
                <TouchableOpacity className={"bg-[#00CCBB] p-4 rounded-lg"}>
                    <Text className={"font-bold text-lg text-white text-center"}>Place Order</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}