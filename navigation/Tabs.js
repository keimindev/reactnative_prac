import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'react-native';
import { YELLOW_COLOR } from "../colors"
import { Ionicons } from "@expo/vector-icons"

import Movie from "../screen/Movie"
import Tv from "../screen/Tv"
import Search from "../screen/Search"

const Tab = createBottomTabNavigator();

const Tabs = () => { 
  const isDark = useColorScheme() === "dark";

  return ( 
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        backgroundColor: isDark ? "#1e272e" : "white"
        } , 
        tabBarActiveTintColor: isDark ?  YELLOW_COLOR : "#1e272e",
       headerStyle:{
         backgroundColor: isDark? "#1e272e" : "white",
       }, 
       headerTitleStyle : {
         color: isDark ? "white" : "black"
       },
       tabBarLabelStyle: {
         marginTop: -5,
         fontSize: 12,
         fontWeight:"600",
       }
      }}
        >
      <Tab.Screen 
      name="Movie" 
      component={Movie} 
      options={{ tabBarIcon : ({focused, color, size }) =>{ 
        return <Ionicons name={focused ? "film" : "film-outline" } color={color} size={size} />
      },
      }}/>
      <Tab.Screen name="Tv" component={Tv} 
      options={{ tabBarIcon : ({focused, color, size }) =>{  
        return <Ionicons name={focused ? "tv" : "tv-outline"} color={color} size={size} />
      },   
    }}/>
      <Tab.Screen name="Search" component={Search} 
      options={{ tabBarIcon : ({focused, color, size }) =>{  
        return <Ionicons name={focused ? "search" : "search-outline" } color={color} size={size} />
      }, 
    }} />
    </Tab.Navigator>

)
}
export default Tabs