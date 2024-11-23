import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 

const CartScreen = ({ cartItems, removeFromCart, navigation }) => {
  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    const quantity = Number(item.quantity); // Ensure quantity is a number
    return total + (isNaN(price) ? 0 : price * (isNaN(quantity) ? 0 : quantity));
  }, 0);

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.cartItemName}>{item.name}</Text>
        <Text style={styles.cartItemPrice}>{item.price} / item</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => removeFromCart(item.id, -1)}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => removeFromCart(item.id, 1)}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => removeFromCart(item.id, -10)}>
        <Icon name="trash-outline" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Cart</Text>
      </View>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total price ({cartItems.length}) :</Text>
        <Text style={styles.totalPrice}>${totalPrice.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D53633',
    padding: 20,
    paddingTop: 45,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center', // Center the title
    alignItems: 'center',
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 24, // Increase font size
    fontWeight: 'bold',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 20,
    backgroundColor: '#f8f8f8',
    marginBottom: 10,
    shadowRadius: 5,
    elevation: 2,
  },
  productImage: {
    width: 70,
    height: 70,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  cartItemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff6f61',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  quantityButton: {
    fontSize: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    top: 5
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 10,
    top: 5
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  checkoutButton: {
    backgroundColor: '#00C2FE',
    borderRadius: 100,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  checkoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CartScreen;