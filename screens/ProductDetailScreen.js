import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { useNavigation, useRoute } from '@react-navigation/native'; 

const ProductDetailScreen = ({ addToCart, cartItems }) => {
  const navigation = useNavigation(); 
  const route = useRoute(); 
  const { product } = route.params; 

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('Cart')}>
          <Icon name="cart-outline" size={24} color="#000" />
          {cartItems.length > 0 && (
            <View style={styles.cartItemCount}>
              <Text style={styles.cartItemCountText}>{cartItems.length}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.productImageContainer}>
        <Image
          source={product.image} 
          style={styles.productImage}
        />
      </View>

      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{product.name}</Text>
        <View style={styles.reviewContainer}>
          <Text style={styles.reviewText}>5.0</Text>
          <Icon name="star" size={16} color="#F5A623" />
          <Text style={styles.reviewText}> | 874 Reviews</Text>
          <Text style={styles.reviewText}> | 1.2k Sold</Text>
        </View>

        <View style={styles.specificationContainer}>
          <Text style={styles.sectionTitle}>Specification</Text>
          <View style={styles.specRow}>
            <Text style={styles.specText}>Size: </Text>
            <Text style={styles.specValue}>13 * 5 cm</Text>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specText}>Material: </Text>
            <Text style={styles.specValue}>PVC</Text>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specText}>Type: </Text>
            <Text style={styles.specValue}>Model</Text>
          </View>
          <View style={styles.specRow}>
            <Text style={styles.specText}>Condition: </Text>
            <Text style={styles.specValue}>New 100%</Text>
          </View>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.priceValue}>{product.price}</Text> 
        </View>

        <TouchableOpacity style={styles.addToCartButton} onPress={() => addToCart(product)}>
          <Icon name="cart-outline" size={20} color="#fff" />
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00C2FE',
    paddingTop: 35
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  backButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
  },
  cartButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
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
  productImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: 275,
    height: 275,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productDetails: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  reviewText: {
    fontSize: 14,
    color: '#666',
    marginHorizontal: 5,
  },
  specificationContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  specRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  specText: {
    fontSize: 16,
    color: '#666',
  },
  specValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  priceContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  priceValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F39C12',
  },
  addToCartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F39C12',
    paddingVertical: 15,
    borderRadius: 12,
    marginTop: 20,
  },
  addToCartText: {
    color: '#fff',
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProductDetailScreen;
