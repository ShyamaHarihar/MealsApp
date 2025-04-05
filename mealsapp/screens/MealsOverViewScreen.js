import { View, Text, StyleSheet, FlatList } from "react-native";
import { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/dummydata'
import MealItem from "../components/MealItem";
import MealsList from "../components/MealsList";
//route prop has params property
function MealsOverViewScreen({ route, navigation }) {
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
        navigation.setOptions({ title: categoryTitle });
    }, [catId, navigation]);
    return (
        <MealsList items={displayedMeals} />
    )
}
export default MealsOverViewScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});