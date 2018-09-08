import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput} from 'react-native';
import firebase from 'react-native-firebase';
// import PropTypes from 'prop-types';


class Landing extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      isLoading: false,
      loggedIn: false
    }
  }

  fetchUserPoints = () => {
    return fetch('http://localhost:3000/api/v1/users')
  }

  handleSignIn = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {

      })
      .then(() => console.log('Welcome Back!'))
      .catch(error => {
        console.log(error.message)
      })
  }

  componentDidMount() {
    firebase.auth()
      .onAuthStateChanged(user => {
        if(user) {
          this.setState({
            loggedIn: true,
            userName: user._user.displayName
          })
        }
      })
  }

  render() {
    return (
      <View>
        <Text>Email</Text>
        <TextInput style={styles.textInput} value={this.state.name} onChangeText={(name) => this.setState({ name })}/>
        <Text>Password</Text>
        <TextInput style={styles.textInput} value={this.state.email} onChangeText={(email) => this.setState({ email })}/>
        <View style={styles.submit}>
          <Button title='submit' onPress={this.handleSignIn}/>
        </View>
        <Text>{this.state.loggedIn ? `Welcome ${this.state.userName}`: 'You should log in'}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    width: 200
  },
  submit: {
    borderColor: 'grey',
    borderWidth: 1,
    height: 30,
    width: 100,
    borderRadius: 5
  }
})

export default Landing;