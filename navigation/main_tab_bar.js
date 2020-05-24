import React from 'react';
// import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome';

import SearchTab from './search_tab';
import About from '../components/about';

// const AboutTab = (props) => {
//   return <View style={{ flex: 1, justifyContent: 'center' }}><Text>about</Text></View>;
// };

// const SearchTab = (props) => {
//   return <View style={{ flex: 1, justifyContent: 'center' }}><Text style={{ color: 'red' }}>Search</Text></View>;
// };

const tabColor = '#FF5722';

const Tab = createBottomTabNavigator();

// const MainTabBar = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Search" component={SearchTab} />
//         <Tab.Screen name="About" component={AboutTab} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

const MainTabBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Search"
        tabBarOptions={{
          activeTintColor: tabColor,
          // showLabel: false,
          // style: { color: 'yellow' },
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'About') {
              iconName = 'info-circle';
            } else if (route.name === 'Search') {
              iconName = 'search';
            }

            return <Ionicons name={iconName} size={26} color={focused ? tabColor : 'grey'} />;
          },
        })}
      >
        <Tab.Screen name="Search" component={SearchTab} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default MainTabBar;
