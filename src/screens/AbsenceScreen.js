import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { UserContext } from '../contexts/UserContext';
import { ScrollView } from 'react-native-gesture-handler';


export  function AbsenceScreen({navigation}) {
  const user = React.useContext(UserContext);
  return (
    <View style={styles.container}>
      <ScrollView>
          <View style ={styles.date}>
            <Text style ={styles.headerText}>Lundi 16 Mars 2020</Text>
          </View>
          <View style ={styles.absenceInfo}>
            <View style = {{flexDirection : 'row' , justifyContent :'space-between'}}>
              <Text style ={styles.cours}>Programmation Web</Text>
              <Text style ={styles.heure}>16h00</Text>
            </View>
              <Text style ={styles.justification}>absence non justifiée</Text>
          </View>
          <View style ={styles.absenceInfo}>
            <View style = {{flexDirection : 'row' , justifyContent :'space-between'}}>
              <Text style ={styles.cours}>Programmation Web</Text>
              <Text style ={styles.heure}>16h00</Text>
            </View>
              <Text style ={[styles.justification , {color:'green'}]}>absence justifiée</Text>
          </View>
          <View style ={styles.date}>
            <Text style ={styles.headerText}>Lundi 16 Mars 2020</Text>
          </View>
          <View style ={styles.absenceInfo}>
            <View style = {{flexDirection : 'row' , justifyContent :'space-between'}}>
              <Text style ={styles.cours}>Programmation Web</Text>
              <Text style ={styles.heure}>16h00</Text>
            </View>
              <Text style ={styles.justification}>absence non justifiée</Text>
          </View>
          <View style ={styles.absenceInfo}>
            <View style = {{flexDirection : 'row' , justifyContent :'space-between'}}>
              <Text style ={styles.cours}>Programmation Web</Text>
              <Text style ={styles.heure}>16h00</Text>
            </View>
              <Text style ={[styles.justification , {color:'green'}]}>absence justifiée</Text>
          </View>
          <View style ={styles.date}>
            <Text style ={styles.headerText}>Lundi 16 Mars 2020</Text>
          </View>
          <View style ={styles.absenceInfo}>
            <View style = {{flexDirection : 'row' , justifyContent :'space-between'}}>
              <Text style ={styles.cours}>Programmation Web</Text>
              <Text style ={styles.heure}>16h00</Text>
            </View>
              <Text style ={styles.justification}>absence non justifiée</Text>
          </View>
          <View style ={styles.absenceInfo}>
            <View style = {{flexDirection : 'row' , justifyContent :'space-between'}}>
              <Text style ={styles.cours}>Programmation Web</Text>
              <Text style ={styles.heure}>16h00</Text>
            </View>
              <Text style ={[styles.justification , {color:'green'}]}>absence justifiée</Text>
          </View>
          <View style ={styles.date}>
            <Text style ={styles.headerText}>Lundi 16 Mars 2020</Text>
          </View>
          <View style ={styles.absenceInfo}>
            <View style = {{flexDirection : 'row' , justifyContent :'space-between'}}>
              <Text style ={styles.cours}>Programmation Web</Text>
              <Text style ={styles.heure}>16h00</Text>
            </View>
              <Text style ={styles.justification}>absence non justifiée</Text>
          </View>
          <View style ={styles.absenceInfo}>
            <View style = {{flexDirection : 'row' , justifyContent :'space-between'}}>
              <Text style ={styles.cours}>Programmation Web</Text>
              <Text style ={styles.heure}>16h00</Text>
            </View>
              <Text style ={[styles.justification , {color:'green'}]}>absence justifiée</Text>
          </View>
          <View style ={styles.date}>
            <Text style ={styles.headerText}>Lundi 16 Mars 2020</Text>
          </View>
          <View style ={styles.absenceInfo}>
            <View style = {{flexDirection : 'row' , justifyContent :'space-between'}}>
              <Text style ={styles.cours}>Programmation Web</Text>
              <Text style ={styles.heure}>16h00</Text>
            </View>
              <Text style ={styles.justification}>absence non justifiée</Text>
          </View>
          <View style ={styles.absenceInfo}>
            <View style = {{flexDirection : 'row' , justifyContent :'space-between'}}>
              <Text style ={styles.cours}>Programmation Web</Text>
              <Text style ={styles.heure}>16h00</Text>
            </View>
              <Text style ={[styles.justification , {color:'green'}]}>absence justifiée</Text>
          </View>
          <View style ={styles.date}>
            <Text style ={styles.headerText}>Lundi 16 Mars 2020</Text>
          </View>
          <View style ={styles.absenceInfo}>
            <View style = {{flexDirection : 'row' , justifyContent :'space-between'}}>
              <Text style ={styles.cours}>Programmation Web</Text>
              <Text style ={styles.heure}>16h00</Text>
            </View>
              <Text style ={styles.justification}>absence non justifiée</Text>
          </View>
      </ScrollView>  
    </View>
  );
}

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        paddingBottom : 1
    },
    date : {
      fontSize : 20,
      fontWeight : 'bold',
      justifyContent : "center",
      alignItems : "center",
      borderColor : 'black',
      borderWidth : 1,
      marginHorizontal : 6,
      marginTop : 16,
      padding : 6,
      borderTopRightRadius :6,
      borderTopLeftRadius : 6,
      backgroundColor : '#CCE5FF',
    },
    headerText:{
      fontSize : 16,
      fontWeight : 'bold',
    },
    absenceInfo :{
      borderColor : 'black',
      borderWidth : 1,
      borderTopWidth : 0,
      marginHorizontal : 6,
      marginBottom : 0,
      padding : 6,
    },
    cours : {
      fontSize : 14,
      fontWeight : 'bold',
      paddingVertical : 6,
    },
    heure : {
      fontSize : 14,
      fontWeight : 'bold',
      paddingVertical : 6,
    },
    justification : {
      fontSize : 12,
      fontWeight : 'bold',
      color : '#f00',
    }
  });