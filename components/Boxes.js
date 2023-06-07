import { Text, View, StyleSheet,  } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

export default function Boxes() {
  return (
    <View style={styles.container}>
      <View>
          <View style={styles.box}>
              <View style={styles.inner}>
                  <View style={{marginTop:10}}>
                    <FontAwesome name="user-circle-o" size={56} color="black" />
                  </View>
                  <View style={{marginTop:10}} >
                    <FontAwesome name="user-circle-o" size={56} color="black" />
                  </View>
                  <View style={{marginTop:10}}>
                    <FontAwesome name="user-circle-o" size={56} color="black" />
                  </View>
                  <View style={{marginTop:10}}>
                    <FontAwesome name="user-circle-o" size={56} color="black" />
                  </View>
                  <View style={{marginTop:10}}>
                    <FontAwesome name="user-circle-o" size={56} color="black" />
                  </View>
                  <View style={{marginTop:10}}>
                    <FontAwesome name="user-circle-o" size={56} color="black" />
                  </View>
                  <View style={{marginTop:10}}>
                    <FontAwesome name="user-circle-o" size={56} color="black" />
                  </View>
              </View>
          </View>
      </View>
          <View style={styles.box2}>
            <Text style={{fontSize:20}}>First Item</Text>
            <Text style={{fontSize:10, color:'gray', marginTop:5}}>
            Lorem ipsum dolor sit amet,
             consectetur adipiscing elit.
            </Text>
            <Text style={{fontSize:20,marginTop:25}}>First Item</Text>
            <Text style={{fontSize:10, color:'gray', marginTop:5}}>
            Lorem ipsum dolor sit amet,
             consectetur adipiscing elit.
            </Text>
            <Text style={{fontSize:20,marginTop:25}}>First Item</Text>
            <Text style={{fontSize:10, color:'gray', marginTop:5}}>
            Lorem ipsum dolor sit amet,
             consectetur adipiscing elit.
            </Text>
            <Text style={{fontSize:20,marginTop:25}}>First Item</Text>
            <Text style={{fontSize:10, color:'gray', marginTop:5}}>
            Lorem ipsum dolor sit amet,
             consectetur adipiscing elit.
            </Text>
            <Text style={{fontSize:20,marginTop:25}}>First Item</Text>
            <Text style={{fontSize:10, color:'gray', marginTop:5}}>
            Lorem ipsum dolor sit amet,
             consectetur adipiscing elit.
            </Text>
            <Text style={{fontSize:20,marginTop:25}}>First Item</Text>
            <Text style={{fontSize:10, color:'gray', marginTop:5}}>
            Lorem ipsum dolor sit amet,
             consectetur adipiscing elit.
            </Text>
            <Text style={{fontSize:20,marginTop:25}}>First Item</Text>
            <Text style={{fontSize:10, color:'gray', marginTop:5}}>
            Lorem ipsum dolor sit amet,
             consectetur adipiscing elit.
            </Text>
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
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'85%',
    padding:5,
    flexDirection:'row'
  },
  box:{
    width:100,
    height:'90%',
    padding:5,
    alignItems:'center'
  },
  inner:{
    flex:1,
    backgroundColor:'#fff',
    flexDirection:'column'
  },
  box2:{
    marginTop:20,
    height:'85%',
    backgroundColor:'#fff'
  },
  footer: {
    flexDirection:'row',
    alignContent:'space-around ',
    backgroundColor:'#fff',
    height:100,
    marginTop:160,
    paddingBottom:20,
    alignItems:'center',
    justifyContent:'center'
  },
  homeicon:{    
      alignItems:'center',
     justifyContent:'center',
      paddingRight:30,
      paddingVertical:20
  },
  profileicon:{
    paddingHorizontal:100,
    paddingLeft:80,
    justifyContent:'center',
    alignItems:'center'
  }
});