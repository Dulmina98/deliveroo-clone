import {ActivityIndicator, Animated, Dimensions, Image, SafeAreaView, Text, View} from "react-native";
import {useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/native";

export function PreparingOrderScreen() {
    const [width, height] = [Dimensions.get('window').width, Dimensions.get('window').height];
    const [deliverImageOpacity] = useState(new Animated.Value(0));
    const [deliverImagePosition] = useState(new Animated.ValueXY({x: width / 2 - 125, y: height / 2 - 100}));
    const [textOpacitiy] = useState(new Animated.Value(0));
    const [textPosition] = useState(new Animated.ValueXY({x: width / 2 - 300, y: height / 2 - 100}));
    const navigation = useNavigation();

    useEffect(() => {
        Animated.timing(deliverImagePosition, {
            toValue: {x: width / 2 - 125, y: height / 2 - 200},
            duration: 1000,
            delay: 200,
            useNativeDriver: true
        }).start();

        Animated.timing(deliverImageOpacity, {
            toValue: 1,
            duration: 1000,
            delay: 200,
            useNativeDriver: true
        }).start();

        Animated.timing(textPosition, {
            toValue: {x: width / 2 - 300, y: height / 2 - 210},
            duration: 1000,
            delay: 500,
            useNativeDriver: true
        }).start();

        Animated.timing(textOpacitiy, {
            toValue: 1,
            duration: 1000,
            delay: 500,
            useNativeDriver: true
        }).start();

    }, []);

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery")
        }, 4000)
    }, [])

    return (
        <SafeAreaView className={"flex-1 bg-[#00CCBB]"}>
            <View className={" flex-1"}>
                <Animated.View style={[{
                    opacity: deliverImageOpacity,
                    transform: [{translateX: deliverImagePosition.x}, {translateY: deliverImagePosition.y}]
                }]}>
                    <Image source={require("../assets/delivery-guy.gif")}
                           className={"w-[250] h-[250]"}/>
                </Animated.View>
                <Animated.View style={[{
                    opacity: textOpacitiy,
                    transform: [{translateX: textPosition.x}, {translateY: textPosition.y}]
                }]}>
                    <Text className={"text-white font-bold text-sm text-center w-[600]"}>Waiting for Restaurant to
                        accept your order!</Text>
                </Animated.View>
            </View>
            <View className={"mb-44"}>
                <ActivityIndicator size={"small"} color={"white"}/>
            </View>
        </SafeAreaView>
    );
}
