import {Image, SafeAreaView, ScrollView, Text, TextInput, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useEffect, useState} from "react";
import {Feather} from '@expo/vector-icons';
import {Categories} from "../components/Categories";
import {FeaturedRow} from "../components/FeaturedRow";
import createClient from "../sanity";


export function HomeScreen() {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([])

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    useEffect(() => {
        createClient.fetch(`
            *[_type == "featured"] {
                ...,
                restaurants[]->{
                ...,
                dishes[]->
            }
        }`
        )
            .then((data) => {
                setFeaturedCategories(data)
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

                {featuredCategories?.map((category) => (
                        <FeaturedRow
                            key={category._id}
                            id={category._id}
                            title={category.name}
                            description={category.shortDescription}
                        />
                    )
                )}


            </ScrollView>
        </SafeAreaView>
    )
}