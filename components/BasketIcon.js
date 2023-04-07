import {useSelector} from "react-redux";
import {selectBasketItems, selectBasketTotal} from "../features/basketSlice";
import {useNavigation} from "@react-navigation/native";
import {Text, TouchableOpacity, View} from "react-native";
import {currencyFormat} from "simple-currency-format";

export function BasketIcon() {

    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal);

    return (
        <View className={"absolute bottom-10 w-full z-50"}>
            <TouchableOpacity className={"bg-[#00CCBB] mx-5 p-4 rounded-lg flex-row items-center space-x-1"}>
                <Text className={"text-white font-extrabold text-lg bg-[#01A296] py-1 px-2"}>{items.length}</Text>
                <Text className={"flex-1 text-center font-extrabold text-white"}>View Basket</Text>
                <Text className={"text-white font-bold"}>{currencyFormat(basketTotal, 'en-US', 'USD')}</Text>
            </TouchableOpacity>
        </View>
    )
}