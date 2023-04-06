import {ScrollView} from "react-native";
import {CategoryCard} from "./CategoryCard";
import {useEffect, useState} from "react";
import sanityClient, {urlFor} from "../sanity";

export function Categories() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        sanityClient.fetch(`
            *[_type == "category"]
        `).then((data) => {
            setCategories(data)
        })
    })

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 15, paddingTop: 10}}>
            {/* Category card*/}

            {categories.map((category) => (
                <CategoryCard
                    key={category._id}
                    imgUrl={urlFor(category.image).url()}
                    title={category.name}
                />
            ))}
        </ScrollView>
    )
}