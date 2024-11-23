import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignUp = () => {
    // Handle the sign-up logic here
    // For now, navigate to the HomeScreen
    navigation.navigate('MainTabs');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>SIGN UP</Text>
      <Text style={styles.subText}>“登録する”</Text>
      
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Icon name="mail-outline" size={20} color="#fff" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="email"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#fff"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Icon name="person-outline" size={20} color="#fff" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="username"
            value={username}
            onChangeText={setUsername}
            placeholderTextColor="#fff"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Icon name="lock-closed-outline" size={20} color="#fff" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#fff"
          />
        </View>
      </View>
      
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>SIGN UP</Text>
      </TouchableOpacity>

      <View style={styles.orContainer}>
        <View style={styles.orLine} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.orLine} />
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="logo-facebook" size={24} color="#ffffff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="logo-google" size={24} color="#ffffff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="logo-twitter" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.loginContainer} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Already have an account? <Text style={styles.loginLink}>Log In</Text></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00C2FE', // Dark background color
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
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 10, // Add padding around the TextInput and Icon
  },
  input: {
    flex: 1,
    
    padding: 15,
    color: '#fff',
    borderRadius: 100,
  },
  icon: {
    paddingLeft: 10,
  },
  signUpButton: {
    backgroundColor: '#D53633',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 80,
    marginBottom: 20,
  },
  signUpButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  loginContainer: {
    marginBottom: 40,
  },
  loginText: {
    color: '#fff',
  },
  loginLink: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  socialButton: {
    backgroundColor: '#D53633',
    borderRadius: 50,
    padding: 10,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 20,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'white',
  },
  orText: {
    color: '#fff',
    marginHorizontal: 10,
  },
});
