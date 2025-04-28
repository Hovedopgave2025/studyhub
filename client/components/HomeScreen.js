import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={require('../assets/studyHub-logo.png')} 
          style={styles.icon}
        />

        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupButtonText}>SignUp</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4da6ff', 
    justifyContent: 'center',

  },
  topSection: {
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: 'white',
    width: 200,
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    marginTop: 20,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#000',
    fontSize: 16,
  },
  signupButton: {
    borderColor: 'white',
    borderWidth: 1,
    width: 200,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  signupButtonText: {
    color: 'white',
    fontSize: 16,
  },
  icon: {
    width: 400,
    height: 100,
    marginBottom: 20,
  },

});
