import { View, Text, StyleSheet, FlatList } from "react-native";
import { useEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/dummydata'
import MealItem from "../components/MealItem";
//route prop has params property
function MealsOverViewScreen({ route, navigation }) {
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })
    useEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
        navigation.setOptions({ title: categoryTitle });
    }, [catId, navigation]);

    function renderMealItem(itemData) {
        const item = itemData.item;
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            duration: item.duration,
            complexity: item.complexity
        }
        return <MealItem {...mealItemProps} />
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}
export default MealsOverViewScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});