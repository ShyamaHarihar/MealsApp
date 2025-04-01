import { View, Text, Pressable, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
function IconButton({ icon, color, onPress }) {
    return (
        <Pressable style={styles.pressed} onPress={onPress}>
            <Ionicons name={icon} color={color} size={24} />
        </Pressable>
    )
}
export default IconButton;
const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5
    }
})