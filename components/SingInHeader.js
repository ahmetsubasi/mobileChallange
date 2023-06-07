import { Text, View, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={{ color:'#eff1f8', fontSize:20, fontWeight:'bold'}}>
        Sign in
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width:'100%',
    height:'15%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#66708b',
    paddingTop:55
  }
});