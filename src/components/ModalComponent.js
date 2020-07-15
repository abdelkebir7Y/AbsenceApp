import React from "react";
import { Modal, StyleSheet, Text ,TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
export default function ModalComponent ({propsModalVisible , onPress}){
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={propsModalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TouchableOpacity
            style ={styles.close}
            onPress={onPress}
            >
            <AntDesign name="closecircleo" size={30} color="#007bff" />  
          </TouchableOpacity>
            
          <Text style={styles.modalText}>TextTextTextTextTextTextTextTextTextTextTextText</Text>
          <Text style={styles.modalText}>TextTextTextTextTextTextTextTextTextTextTextText</Text>

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
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  close:{
      alignSelf : 'flex-end',
      padding :6,
      marginBottom : 16,
  }
});

