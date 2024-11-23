import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'; 
import HomeScreen from './screens/HomeScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
  
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
   
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId, change) => {
    setCartItems((prevItems) => {
      return prevItems.map(item => {
        if (item.id === productId) {
          const newQuantity = item.quantity + change;
          if (newQuantity <= 0) {
        
            return null;
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(item => item !== null); 
    });
  };

  function ProductStackNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen 
          name="ProductList" 
          options={{ headerShown: false }}
        >
          {props => <ProductListScreen {...props} cartItems={cartItems} />}
        </Stack.Screen>
        <Stack.Screen 
          name="ProductDetail" 
          options={{ headerShown: false }}>
         {props => <ProductDetailScreen {...props} addToCart={addToCart} cartItems={cartItems} />}
        </Stack.Screen>
      </Stack.Navigator>
    );
  }

  function MainTabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = 'home-outline';
                break;
              case 'Products':
                iconName = 'list-outline';
                break;
              case 'Cart':
                iconName = 'cart-outline';
                break;
              case 'Profile':
                iconName = 'person-outline';
                break;
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="Products" component={ProductStackNavigator} options={{ headerShown: false }}/>
        <Tab.Screen name="Cart" options={{ headerShown: false }}>
          {props => <CartScreen {...props} cartItems={cartItems} removeFromCart={removeFromCart} />}
        </Tab.Screen>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainTabs" component={MainTabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
