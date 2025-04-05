import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import { useContext, useLayoutEffect } from 'react';
import { MEALS } from '../data/dummydata'
import MealDetails from '../components/MealDetails';
import SubTitle from '../components/SubTitle';
import List from '../components/List';
import IconButton from '../components/IconButton';
import { FavoritesContext } from '../store/context/favorites-context'
function MealDetailsScreen({ route, navigation }) {
    const favoriteMealsCtx = useContext(FavoritesContext)
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
    //console.log(selectedMeal);
    function changeFavoriteStatusHandler() {
        if (mealIsFavorite) {
            favoriteMealsCtx.removeFavorite(mealId);
            console.log(favoriteMealsCtx.ids);
        }
        else {
            favoriteMealsCtx.addFavorite(mealId);
            console.log(favoriteMealsCtx.ids);
        }
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        onPress={changeFavoriteStatusHandler}
                        icon={mealIsFavorite ? 'star' : 'star-outline'}
                        color="white" />
                )
            }
        });
    }, [navigation, changeFavoriteStatusHandler])
    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                textStyle={styles.detailText}
                affordability={selectedMeal.affordability} />
            <View style={styles.outerContainer}>
                <View style={styles.widthContainer}>
                    <SubTitle>Ingredients</SubTitle>
                    <List data={selectedMeal.ingredients} />
                    <SubTitle>Steps</SubTitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    )
}
export default MealDetailsScreen;
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350
    },
    rootContainer: {
        marginBottom: 32
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 4,
        textAlign: 'center',
        padding: 6
    },
    subtitleContainer: {
        padding: 6,
        marginHorizontal: 24,
        marginVertical: 4,
        borderBottomColor: 'white',
        borderBottomWidth: 2
    },
    widthContainer: {
        width: '80%',
    },
    outerContainer: {
        alignItems: 'center',
        //marginBottom: 20,
        padding: 10,
        margin: 15
    }
})