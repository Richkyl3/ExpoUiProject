import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView,TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// ข้อมูลสินค้า
const allProducts = [
  { id: '1', name: 'Luffy Gear5', price: '\$299',   quantity: 1, image: require('./img/LuffyGear5.png'), category: 'Luffy' },
  { id: '2', name: 'Wanokuni Luffy', price: '\$299',   quantity: 1, image: require('./img/Luffywano.png'), category: 'Luffy' },
  { id: '3', name: 'Roronoa Zoro', price: '\$299',   quantity: 1, image: require('./img/Zoro.png'), category: 'Zoro' },
  { id: '4', name: 'Wanokuni Zoro', price: '\$299',   quantity: 1, image: require('./img/Zorowano.png'), category: 'Zoro' },
  { id: '5', name: 'Sanji Winsmoke', price: '\$299',   quantity: 1, image: require('./img/Sanji.png'), category: 'Sanji' },
  { id: '6', name: 'Wanokuni Sanji ', price: '\$299',   quantity: 1, image: require('./img/Sanjiwano.png'), category: 'Sanji' },
  { id: '7', name: 'Chopper', price: '\$299',   quantity: 1, image: require('./img/Chopper.png'), category: 'Chopper' },
  { id: '8', name: 'Wanokuni Chopper', price: '\$299',   quantity: 1, image: require('./img/Chopperwano.png'), category: 'Chopper' },
  { id: '9', name: 'Nami', price: '\$299',   quantity: 1, image: require('./img/Nami.png'), category: 'Nami' },
  { id: '10', name: 'Wanokuni Nami', price: '\$299',   quantity: 1, image: require('./img/Namiwano.png'), category: 'Nami' },
  { id: '11', name: 'Nico Robin', price: '\$299',   quantity: 1, image: require('./img/Robin.png'), category: 'Robin' },
  { id: '12', name: 'Wanokuni Robin', price: '\$299',   quantity: 1, image: require('./img/Robinwano.png'), category: 'Robin' },
];

export default function ProductListScreen({ navigation, cartItems }) {
  const [numColumns, setNumColumns] = useState(2); // กำหนดจำนวนคอลัมน์
  const [selectedCategory, setSelectedCategory] = useState('All'); // กำหนดหมวดหมู่ที่เลือก

  const filteredProducts = allProducts.filter(product => product.category === selectedCategory || selectedCategory === 'All');

  const renderProduct = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { product: item })}>
      <View style={styles.productCard}>
        <Image source={item.image} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productSubtitle}>S.H.Figuarts</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.productPrice}>{item.price}</Text>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>BUY</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Most Popular</Text>
       
        <View style={styles.iconContainer}>
      
          <TouchableOpacity style={styles.cartButton} >
            <Ionicons name="search-outline" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.cartButton}>
            <Ionicons name="cart-outline" size={24} color="#000" />
            {cartItems.length > 0 && (
              <View style={styles.cartItemCount}>
                <Text style={styles.cartItemCountText}>{cartItems.length}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.subHeaderText}>One Piece Figure!</Text> 
   <View  style={{  paddingBottom: 120}}>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
        {['All', 'Luffy', 'Zoro', 'Sanji', 'Chopper', 'Nami', 'Robin'].map(category => (
          <TouchableOpacity key={category} onPress={() => setSelectedCategory(category)}>
            <Text style={[styles.categoryText, selectedCategory === category && styles.selectedCategory]}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
          
      <FlatList 
   
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        key={numColumns}
        contentContainerStyle={styles.flatListContent}
        />
 

   
        </View>
        
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D53633',
    padding: 10,
    paddingTop: 40,
  },
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartButton: {
  
    padding: 10,
    position: 'relative',
  },
  cartItemCount: {
    position: 'absolute',
    right: -5,
    top: -5,
    backgroundColor: '#ff6f61',
    borderRadius: 10,
    padding: 5,
    minWidth: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartItemCountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  categoryScroll: {
    marginBottom: 15,

  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 25,
    
    
  },
  selectedCategory: {
    color: '#fff', // เปลี่ยนสีเมื่อเลือกหมวดหมู
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    flex: 1,
    alignItems: 'center',
    width: 175,
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  productSubtitle: {
    fontSize: 14,
    color: '#808080',
    paddingBottom: 15,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: '#ff6f61',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  flatListContent: {
    alignItems: 'center',
  },
  subHeaderText: {
    fontSize: 16, // Smaller font size
    color: '#fff', // Gray color
    marginBottom: 10, // Space below the text
    position: 'absolute',
    right: 237,
    top: 90,
  },
});