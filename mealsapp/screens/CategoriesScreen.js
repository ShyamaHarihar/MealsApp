import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummydata';
import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
function renderCategoryItem(itemData) {
    return (<CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
    />);
}
const CategoriesScreen = () => {
    console.log(CATEGORIES);
    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CategoriesScreen;