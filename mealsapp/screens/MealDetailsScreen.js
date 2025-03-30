import { Text, View, StyleSheet } from 'react-native'
function MealDetailsScreen({ route }) {
    const mealId = route.params.mealId;
    return (
        <Text>This is a meal detail</Text>
    )
}
export default MealDetailsScreen;