import React from "react";
import { Modal, StyleSheet, Text ,TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
export default function ModalComponent ({propsModalVisible , onPress ,de,au,motif,commentaire , valide}){
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={propsModalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{flexDirection : "row" ,justifyContent :'space-between' , alignSelf: 'stretch'}}>
              <Text style={styles.title}>Détails</Text>
              <TouchableOpacity
                style ={styles.close}
                onPress={onPress}
                >
                <AntDesign name="closecircleo" size={30} color="#007bff" />  
              </TouchableOpacity>
            </View>
            
            <View style={styles.userInfo}>
              <View style={{borderWidth : 0.5, margin : 3, marginBottom : 0}}/>
              <View style={{borderWidth : 0.5, margin : 3}}/>
                <Text style={styles.text}> Période du : {de} </Text>
              
              <View style={{borderWidth : 0.5, margin : 3}}/>
                <Text style={styles.text}>au : {au} </Text>
              
              <View style={{borderWidth : 0.5, margin : 3}}/>
                <Text style={styles.text}>Motif : {motif} </Text>
              <View style={{borderWidth : 0.5, margin : 3}}/>
                <Text style={styles.text}>Commentaire : {commentaire} </Text>

              <View style={{borderWidth : 0.5, margin : 3}}/>
                <Text style={styles.text}>Validité : {valide ? 'oui' : 'non'} </Text>

              <View style={{borderWidth : 0.5 , margin : 3 , marginBottom : 0}}/>
              <View style={{borderWidth : 0.5, margin : 3}}/>
            </View>

          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor : 'rgba(0,0,0,0.5)'
  },
  modalView: {
    margin: 6,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 6,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width:'96%'
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  close:{
      padding :6,
      marginBottom : 12,
  },
  userInfo : {
    marginHorizontal : 6 , 
    width : '100%',
    marginBottom : 16,
  },
  title : {
    color : '#007bff',
    backgroundColor : 'white',
    padding :6,
    marginBottom : 12,
    fontSize :20
  },
  text : {
    paddingHorizontal : 6
  }
});

