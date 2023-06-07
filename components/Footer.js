import { View, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

export default function Footer() {
  return (
       <View style={styles.footer}>
       <View style={styles.homeicon}>
         <AntDesign name="home" size={24} color="black" />
         <Text>Home</Text>
       </View>   
        <View style={styles.profileicon}>
         <Fontisto name="person" size={24} color="blue" />
         <Text>Profile</Text> 
        </View>
     </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection:'row',
    alignContent:'space-around ',
    backgroundColor:'#fff',
    height:100,
    marginTop:60,
    paddingBottom:40,
    alignItems:'center',
    justifyContent:'center'
  },
  homeicon:{    
      alignItems:'center',
     justifyContent:'center',
      paddingRight:80,
      paddingHorizontal:40
  },
  profileicon:{
    paddingHorizontal:40,
   
    justifyContent:'center',
     alignItems:'center',
  }
});