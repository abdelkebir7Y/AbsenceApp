import React from "react";
import { Modal, StyleSheet, Text , View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
export default function QrcodeSccess ({propsModalVisible , onPress , message}){
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={propsModalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                <AntDesign name="checkcircleo" size={60} color="green" style={{paddingBottom : 4}}/>
                <Text style={styles.modalText}>{message}</Text>
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
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
});

