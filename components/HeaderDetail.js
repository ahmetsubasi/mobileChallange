import { Text, View, StyleSheet,  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.header}>
        <View style={styles.box}>
           <View style={styles.inner}>
           <Ionicons name="chevron-back" size={24} color="white" />
            <Text style={{paddingLeft:130,paddingVertical:5, fontSize:15, fontWeight:'bold', color:'#fff'}}>User Detail</Text>
        </View>
              <View style={styles.person}>
                <FontAwesome5 name="user-circle" size={72} color="white" />
              </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width:'100&',
    height:'25%',
    backgroundColor:'#66708b',  
    paddingVertical:40,
    flexDirection:'column',
    flexWrap:'wrap'
  },
  box:{
    width:'100%',
    height:100,
    backgroundColor:'#66708b'
  },
  inner:{
    flexDirection:'row',
    backgroundColor:'#66708b',
    padding:5
  },
  person:{
    alignItems:'center',
    paddingTop:20
  }
});