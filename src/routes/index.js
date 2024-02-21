import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../home";
import { AddList } from "../addList";
import { Ionicons } from "@expo/vector-icons"

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarBackground: () => {
          color: "black"
        }     
      }}
      
    >

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons size={size} color={color} name="home" />
            }
            return <Ionicons size={size} color={color} name="home-outline" />
          }
        }}
        t
      >
      </Tab.Screen>

      <Tab.Screen
        name="ADD"
        component={AddList}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name="list" size={size} color={color} />
            }
            return <Ionicons name="list-outline" size={size} color={color} />
          }
        }}
      >
      </Tab.Screen>
    </Tab.Navigator>
  )

}