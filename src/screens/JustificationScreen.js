import React,{useState} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import ModalComponent from '../components/ModalComponent';

export  function JustificationScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.justification} >
          <View>
            <Text style ={styles.date}>Mardi 19 Mars 2020</Text>
            <Text style ={styles.comment} >justification valide</Text>
          </View>
          <View >
            <TouchableOpacity 
              style={styles.details} 
              onPress = {() => {
                  setModalVisible(true);
                }}>
              <Entypo name="info-with-circle" size={24} color="black" />
              <Text>details</Text>
            </TouchableOpacity>
          </View>
        </View>   
        <ModalComponent 
          propsModalVisible={modalVisible} 
          onPress = {() => {
            setModalVisible(false);
          }}/>
      </View>
      <View>
        <View style={styles.justification} >
          <View>
            <Text style ={styles.date}>Mardi 19 Mars 2020</Text>
            <Text style ={styles.comment} >justification valide</Text>
          </View>
          <View >
            <TouchableOpacity 
              style={styles.details} 
              onPress = {() => {
                  setModalVisible(true);
                }}>
              <Entypo name="info-with-circle" size={24} color="black" />
              <Text>details</Text>
            </TouchableOpacity>
          </View>
        </View>   
        <ModalComponent 
          propsModalVisible={modalVisible} 
          onPress = {() => {
            setModalVisible(false);
          }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    
    container:{
        flex:1,
    },
    justification:{
      flexDirection : 'row' , 
      justifyContent :'space-between',
      borderBottomColor : 'black',
      borderWidth :1 ,
      borderRadius : 2,
      marginTop :16,
      padding : 6,
      marginHorizontal : 6,
    },
    date:{
      fontSize : 16,
      fontWeight : 'bold',
      paddingVertical : 4,
    },
    details:{
      alignItems :'center'
    },
    comment : {
      fontSize : 12,
      fontWeight : 'bold',
      color : 'green',
    },
  });