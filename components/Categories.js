import {ScrollView} from "react-native";
import {CategoryCard} from "./CategoryCard";

export function Categories() {

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 15, paddingTop: 10}}>
            {/* Category card*/}
            <CategoryCard title={"Testing 1"} imgUrl={'https://links.papareact.com/gn7'}/>
            <CategoryCard title={"Testing 2"} imgUrl={'https://links.papareact.com/gn7'}/>
            <CategoryCard title={"Testing 3"} imgUrl={'https://links.papareact.com/gn7'}/>
            <CategoryCard title={"Testing 1"} imgUrl={'https://links.papareact.com/gn7'}/>
            <CategoryCard title={"Testing 2"} imgUrl={'https://links.papareact.com/gn7'}/>
            <CategoryCard title={"Testing 3"} imgUrl={'https://links.papareact.com/gn7'}/>
            <CategoryCard title={"Testing 1"} imgUrl={'https://links.papareact.com/gn7'}/>
            <CategoryCard title={"Testing 2"} imgUrl={'https://links.papareact.com/gn7'}/>
            <CategoryCard title={"Testing 3"} imgUrl={'https://links.papareact.com/gn7'}/>
        </ScrollView>
    )
}