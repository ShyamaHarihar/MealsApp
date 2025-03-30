import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: '#3f2f25' },
      }}>
        <Stack.Screen
          name="MealsCategories"
          component={CategoriesScreen}
          options={{ title: 'All Categories' }} />
        <Stack.Screen
          name="MealsOverview"
          component={MealsOverViewScreen}
        // options={({ route, navigation }) => {
        //   const catId = route.params.categoryId;
        //   return {
        //     title: catId,
        //   }
        // }}
        />
        <Stack.Screen
          name="MealDetails"
          component={MealDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
});
