import { View, Text, StyleSheet } from "react-native"

function List({ data }) {
    return data.map((datap) => (
        <View key={datap} style={styles.listItem}>
            <Text style={styles.itemText}>{datap}</Text>
        </View>
    ));
}
export default List;
const styles = StyleSheet.create({
    listItem: {
        backgroundColor: '#e2b497',
        marginHorizontal: 12,
        marginVertical: 4,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6
    },
    itemText: {
        color: '351401',
        textAlign: 'center',
    }
})