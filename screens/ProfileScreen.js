import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
       
        <Image 
          source={{ uri: 'https://pbs.twimg.com/profile_images/1306319460152864768/DYSTA0df_400x400.jpg' }} // Profile image URL
          style={styles.profileImage} 
        />
        <Text style={styles.name}>Monkey D.Luffy</Text>
        <Text style={styles.email}>Luffy007@gmail.com</Text>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option}>
          <Icon name="folder-outline" size={20} color="#fff" />
          <Text style={styles.optionText}>My Order</Text>
          <Icon name="chevron-forward-outline" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon name="person-outline" size={20} color="#fff" />
          <Text style={styles.optionText}>Account</Text>
          <Icon name="chevron-forward-outline" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon name="people-outline" size={20} color="#fff" />
          <Text style={styles.optionText}>Share with friends</Text>
          <Icon name="chevron-forward-outline" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon name="star-outline" size={20} color="#fff" />
          <Text style={styles.optionText}>Review</Text>
          <Icon name="chevron-forward-outline" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Icon name="information-circle-outline" size={20} color="#fff" />
          <Text style={styles.optionText}>Setting</Text>
          <Icon name="chevron-forward-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.saveText}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D53633', // Light background color
    padding: 20,
    paddingTop: 80
  },
  header: {
    justifyContent: "center",
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#000', // White background for the card
    borderRadius: 20,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    height: 300
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 2.5,
    borderColor: '#fff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  email: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 20,
  },
  optionsContainer: {
    width: '100%',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#000', // White background for options

  
    borderRadius: 10,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 18,
    fontWeight: '500',
    flex: 1,
    marginLeft: 10,
    color: "#fff"
  },
  saveButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#00C2FE', // Blue color for the button
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 100,
    alignItems: 'center',
  },
  saveText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});