import { Text, View, StyleSheet,  } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={{ color:'#eff1f8', fontSize:20, fontWeight:'bold', padding:25}}>
        Profile
      </Text>
    <FontAwesome5 name="user-circle" size={72} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width:'100%',
    height:'25%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#66708b'
  }
});