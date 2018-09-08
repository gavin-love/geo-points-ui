import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import firebase from 'react-native-firebase';

const SignOut = (props) => {
  return (
    <View style={styles.signOut}>
      <Button title="Sign Out" onPress={() => {
        firebase.auth().signOut()
          .then(() => console.log('You were signed out'))
          .catch(error => console.log(error.message))
      }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  signOut: {
    borderColor: 'blue'
  }
})

export default SignOut;