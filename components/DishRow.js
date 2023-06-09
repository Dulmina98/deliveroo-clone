import {Image, Text, TouchableOpacity, View} from "react-native";
import {urlFor} from "../sanity";
import {currencyFormat} from "simple-currency-format";
import {useState} from "react";
import {AntDesign} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, removeFromBasket, selectBasketItemsWithId} from "../features/basketSlice";

export function DishRow({id, name, price, image, description}) {
    const [isPressed, setIsPressed] = useState(false)
    const dispatch = useDispatch();
    const items = useSelector(state => selectBasketItemsWithId(state, id))

    const addItemToBasket = () => {
        dispatch(addToBasket({id, name, price, image, description}))
    }

    const removeItemFromBasket = () => {
        if (!items.length > 0) return;
        dispatch(removeFromBasket({id}))
    }

    /*console.log(items)*/

    return (
        <>
            <TouchableOpacity onPress={() => setIsPressed(!isPressed)}
                              className={`p-4 border-gray-200 border ${isPressed ? "border-b-0" : ""}`}>
                <View className={"flex-row items-center"}>
                    <View className={"flex-1 pr-2"}>
                        <Text className={"text-lg mb-1"}>{name}</Text>
                        <Text className={"text-gray-400"}>{description}</Text>
                        <Text className={"mt-2 text-gray-400"}>{currencyFormat(price, 'en-US', 'USD')}</Text>
                    </View>
                    <View>
                        <Image
                            style={{
                                borderWidth: 1,
                                borderColor: "#F3F3F4"
                            }}
                            source={{
                                uri: urlFor(image).url()
                            }}
                            className={"w-20 h-20 bg-gray-300 p-4"}
                        />
                    </View>
                </View>
            </TouchableOpacity>

            {isPressed && (
                <View className={"bg-white px-4 pb-2"}>
                    <View className={"flex-row items-center space-x-2 pb-3"}>
                        <TouchableOpacity disabled={!items.length} onPress={removeItemFromBasket}>
                            <AntDesign name="minuscircleo" size={28}
                                       color={items.length > 0 ? "#00CCBB" : "gray"}/>
                        </TouchableOpacity>
                        <Text className={"min-w-[10] text-center"}>{items.length}</Text>
                        <TouchableOpacity onPress={addItemToBasket}>
                            <AntDesign name="pluscircleo" size={28} color="#00CCBB"/>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </>
    )
}