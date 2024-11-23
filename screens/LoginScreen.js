import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();


  const handleLogin = () => {
    // Navigate to HomeScreen on login button press
    navigation.navigate('MainTabs');
  };

  return (
    <View style={styles.container}>
             <Image
        // source={{ uri: 'https://i.pinimg.com/736x/7f/30/dd/7f30dd5a9aa7aa1250f811217825dd33.jpg' }} // ใช้ URL ของรูปที่คุณต้องการ
        source={require('./img/logo_onepiece.png')}
        style={styles.headerImage}
      />
      <Text style={styles.welcomeText}>ONE PIECE</Text>
      <Text style={styles.subText}>“ワンピース”</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          placeholderTextColor="#ffffff"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#ffffff"
        />
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>forget password?</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>LOG IN</Text>
      </TouchableOpacity>

      {/* <Text style={styles.orText}>OR</Text>
      
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>f</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>G</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>t</Text>
        </TouchableOpacity>
      </View>
       */}
      <TouchableOpacity style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't have a account? <Text style={styles.signUpLink }  onPress={() => navigation.navigate('SignUp')}>Sign Up</Text></Text>
      </TouchableOpacity>
      
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00C2FE', // สีพื้นหลังเข้ม
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 40,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
    
  },
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 100,
    color: '#fff',

  },
  forgotPassword: {
    color: '#3b82f6',
    textAlign: 'right',
  },
  loginButton: {
    backgroundColor: '#D53633',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 80,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  orText: {
    color: '#fff',
    marginVertical: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    padding: 10,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialText: {
    color: '#1e1e1e',
    fontWeight: 'bold',
  },
  signUpContainer: {
    marginBottom: 40,
  },
  signUpText: {
    color: '#fff',
  },
  signUpLink: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  footerImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  headerImage: {
    width: 275,
    height: 170,
    resizeMode: 'contain',
    marginBottom: 10, // Add space between the image and the welcome text
  },
});
