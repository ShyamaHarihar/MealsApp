import { View, StyleSheet, Text, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation();
    function selectMealItemHandler() {
        navigation.navigate('MealDetails', {
            mealId: id
        });
    }
    return (
        <View style={styles.mealItem}>
            <Pressable onPress={selectMealItemHandler}>
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.details}>
                        <Text style={styles.detailsItem}>{duration} mins</Text>
                        <Text style={styles.detailsItem}>{complexity}</Text>
                        <Text style={styles.detailsItem}>{affordability}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}
export default MealItem;
const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    image: {
        height: 200,
        width: '100%'
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',//actually centered it
        padding: 8
    },
    detailsItem: {
        marginHorizontal: 4,
        fontSize: 14
    }
})