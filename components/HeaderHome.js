import { Text, View, StyleSheet,  } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


export default function Headerhome() {
  return (
    <View style={styles.header}>
      <Text style={{color:'#000',
       fontSize:20, 
       fontWeight:'bold',
       paddingTop:80,
       paddingHorizontal:140,
       paddingVertical:100}}>
        Users
      </Text>
      <FontAwesome5 name="plus" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width:'100%',
    height:'10%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff',
    marginTop:15
  }
});