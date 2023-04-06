import {Image, SafeAreaView, ScrollView, Text, TextInput, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useEffect} from "react";
import {Feather} from '@expo/vector-icons';
import {Categories} from "../components/Categories";
import {FeaturedRow} from "../components/FeaturedRow";


export function HomeScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <SafeAreaView className={'bg-white pt-10'}>
            <View className={'flex-row pb-3 items-center mx-4 space-x-2'}>
                <Image
                    source={{
                        uri: 'https://links.papareact.com/wru'
                    }}
                    className={'h-10 w-10 bg-gray-300 rounded-full'}
                />
                <View className={'flex-1'}>
                    <Text className={'font-bold text-gray-400 text-xs'}>Deliver Now!</Text>
                    <Text className={'text-lg font-bold'}>Current Location <Feather name="chevron-down" size={20}
                                                                                    color="#00CCBB"/></Text>
                </View>

                <Feather name="user" size={35} color="#00CCBB"/>
            </View>

            <View className={'flex-row space-x-2 items-center pb-2 mx-4'}>
                <View className={"flex-row flex-1 space-x-2 bg-gray-200 p-3 items-center"}>
                    <Feather name="search" size={20} color="gray"/>
                    <TextInput placeholder={'Restaurants and cuisines'}
                               keyboardType={"default"}/>
                </View>
                <Feather name="settings" size={24} color="#00CCBB"/>
            </View>

            {/*Body*/}
            <ScrollView
                className={"bg-gray-100"}
                contentContainerStyle={{
                    paddingBottom: 100,
                }}>
                {/*Categories*/}
                <Categories/>
                {/*Featured row*/}
                <FeaturedRow
                    id={12345}
                    title={"Offers near you!"}
                    description={"Why not support your local restaurant tonight!"}
                />
                <FeaturedRow
                    id={"123"}
                    title={"Featured"}
                    description={"Paid placements for our partners"}
                />
                <FeaturedRow
                    id={1234}
                    title={"Tasty Discounts"}
                    description={"Everyone's been enjoying these juicy discounts"}
                />

            </ScrollView>
        </SafeAreaView>
    )
}