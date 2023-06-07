import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import Headerhome from '../components/HeaderHome';
import Boxes from '../components/Boxes';

const HomeScreen = ({ navigation, route }) => {
  const { handleLogout } = route.params;

  const handleLogoutPress = () => {
    handleLogout();
  };

  return (
    <View style={styles.container}>
      <Headerhome/>
       <View style={styles.searchInput}>
     <EvilIcons name="search" size={24} color="black" />
    <TextInput placeholder='Search'/>
     </View>
      <Button title="Logout" onPress={handleLogoutPress} />
      <Boxes />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  searchInput:{
    height:40,
    width:'90%',
    marginLeft:20,
    borderRadius:10,
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:10,
    borderWidth:1,
  }
});

export default HomeScreen;