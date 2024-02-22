import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../home";
import { AddList } from "../addList";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "black", // Define a cor de fundo da barra de navegação
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused, size, color }) => {
          return focused ? (
            <Ionicons size={size} color={color} name="home" />
          ) : (
            <Ionicons size={size} color={color} name="home-outline" />
          );
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return focused ? (
              <Ionicons size={size} color={color} name="home" />
            ) : (
              <Ionicons size={size} color={color} name="home-outline" />
            );
          },
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddList}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return focused ? (
              <Ionicons size={size} color={color} name="list" />
            ) : (
              <Ionicons size={size} color={color} name="list-outline" />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
