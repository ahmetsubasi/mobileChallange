import { View, StyleSheet, Text, TextInput } from 'react-native';
import HeaderDetail from '../components/HeaderDetail';

export default function App() {
  return (
    <View style={styles.container}>
     <HeaderDetail/>
     <View>
        <Text style={{color:'gray', fontSize:14,margin:15}}> 
          PROFILE
        </Text>
        <View  style={styles.texInput}>
         <TextInput
          style={{ fontSize:20}}
          placeholder='Username'
          placeholderTextColor="#000"/>
          <Text style={{color:'gray',}}>annielarson</Text>
        </View>
        <View  style={styles.texInput}>
         <TextInput
          style={{ fontSize:20}}
          placeholder='First name'
          placeholderTextColor="#000"/>
          <Text style={{color:'gray',}}>Annie</Text>
        </View>
        <View  style={styles.texInput}>
         <TextInput
          style={{ fontSize:20}}
          placeholder='Last name'
          placeholderTextColor="#000"/>
          <Text style={{color:'gray',}}>Larson</Text>
        </View>
        <View  style={styles.texInput}>
         <TextInput
          style={{ fontSize:20}}
          placeholder='Email'
          placeholderTextColor="#000"/>
          <Text style={{color:'gray',}}>annie.larson@gmail.com</Text>
        </View>
     </View>
         <View>
        <Text style={{color:'gray', fontSize:14,margin:15}}> 
          OTHER
        </Text>
         <View  style={styles.texInput}>
         <TextInput
          style={{ fontSize:20}}
          placeholder='University'
          placeholderTextColor="#000"/>
          <Text style={{color:'gray',}}>Capitol University</Text>
        </View>
         <View  style={styles.texInput}>
         <TextInput
          style={{ fontSize:20}}
          placeholder='Birthday Date'
          placeholderTextColor="#000"/>
          <Text style={{color:'gray',}}>2000-12-25</Text>
        </View>
         <View  style={styles.texInput}>
         <TextInput
          style={{ fontSize:20}}
          placeholder='Blood Group'
          placeholderTextColor="#000"/>
          <Text style={{color:'gray',}}>A-</Text>
        </View>
         <View  style={styles.texInput}>
         <TextInput
          style={{ fontSize:20}}
          placeholder='Age'
          placeholderTextColor="#000"/>
          <Text style={{color:'gray',}}>50</Text>
        </View>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#e1e5f2'
  },
  texInput:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    height:50,
    backgroundColor:'#fff',
    paddingHorizontal:15
  }
});