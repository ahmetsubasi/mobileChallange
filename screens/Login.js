import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import SingInHeader from '../components/SingInHeader'


const LoginScreen = ({ navigation, route }) => {
  const { handleLogin } = route.params;

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <SingInHeader/>
      <View style={styles.text}>
        <Text style={{textAlign:'center', fontSize:15,margin:15}}> 
            Sign In Heading
        </Text>
          <Text style={{textAlign:'center', color:'#B4B9C5'}}> 
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Fusce convallis pellentesque
            metus id lacina.
        </Text>
      <View>
        <TextInput
        style={styles.textInput}
        placeholder='Username*'
        value={username}
        onChangeText={setUsername}
        />
        <TextInput
        style={styles.textInput}
        placeholder='Password*'
        value={password}
        onChangeText={setPassword}
        />
      </View>
     </View>
        <TouchableOpacity style={styles.singinBtn}>
        <Button
        style={styles.button}
        title="Sign In"
        color="#fff"
        onPress={handleLogin}  
        onChangeText={setUsername} />
      </TouchableOpacity> 
      <TouchableOpacity style={styles.createBtn}>
      <Button title="Create" color="#fff" onPress={() => navigation.navigate('CreateUser')} />
      </TouchableOpacity>
     <Text style={styles.textP}>
      By proceeding you also agree to the Terms of Service
       and Privacy Policy
      </Text> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#e1e5f2'
  },
  text:{
    paddingTop:50,
    textAlign:'center',
    marginTop:60,
  },
  textInput:{
    width: 350,
    height: 50,
    backgroundColor:'#fff',
    padding: 10,
    marginLeft: 12,
    marginTop:20,
    borderRadius:6
  },
    singinBtn: {
    width: "90%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
    marginLeft:20,
    backgroundColor: "#66708b"
  },
  createBtn:{
    width: "90%",
    height:50,
    alignItems:'center',
    justifyContent: "center",
    backgroundColor:'#66708b',
    borderRadius: 25,
    marginTop: 10,
    marginLeft:20
  },
  singinText: {
    color: '#fff',
    fontWeight:'bold'
  },
  textP:{
    marginTop: 15,
    color: 'gray',
    letterSpacing: 1,
    textAlign:'center'
  }
});

export default LoginScreen;