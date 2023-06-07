import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
    
     <View>
          <TextInput 
            style={styles.texInput}
            placeholder='Username*'
          />
          <TextInput 
            style={styles.texInput}
            placeholder='Name*'
          />
          <TextInput 
            style={styles.texInput}
            placeholder='Surname*'
          />
          <TextInput 
            style={styles.texInput}
            placeholder='Email*'
          />
     </View>
       <TouchableOpacity style={styles.singinBtn}>
        <Text style={styles.singinText}>Create</Text> 
      </TouchableOpacity> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#e1e5f2'
  },
  texInput:{
    width: 350,
    height: 50,
    backgroundColor:'#fff',
    padding: 10,
    marginTop:10,
    borderRadius:6,
    alignSelf:'center'
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
  singinText: {
    color: '#fff',
    fontWeight:'bold'
  }
});