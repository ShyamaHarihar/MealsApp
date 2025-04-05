import 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'
import IconButton from './components/IconButton';
import FavoritesContextProvider from './store/context/favorites-context';
//import './gesture-handler';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (<Drawer.Navigator
    style={{ marginTop: 30 }}
    screenOptions={{
      headerStyle: { backgroundColor: '#351401' },
      sceneStyle: { backgroundColor: "#3f2f25" },
      drawerContentStyle: { backgroundColor: "#351401" },
      drawerInactiveTintColor: "white",
      drawerActiveTintColor: "#351401",
      drawerActiveBackgroundColor: "#e4baa1",
      headerTintColor: 'white',
    }}>
    <Drawer.Screen
      name="Categories"
      options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons name="list" color="white" size={25} />
        ),
      }}
      component={CategoriesScreen} />
    <Drawer.Screen
      name="Favorites"
      options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons name="heart" color="white" size={25} />
        )
      }}
      component={FavoritesScreen} />
  </Drawer.Navigator>)
}
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FavoritesContextProvider>
        <NavigationContainer>
          <StatusBar style='light' />
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#351401",
              },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            //first screen that should come is drawer
            //options={{ title: 'All Categories' }} 
            />
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
      </FavoritesContextProvider>
    </GestureHandlerRootView>
  );
}
//npx expo start -- --clear
const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
});
//push splice includes filter indexOf
