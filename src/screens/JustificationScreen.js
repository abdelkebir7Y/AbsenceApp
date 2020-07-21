import React,{useState} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity ,ScrollView , RefreshControl} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import ModalComponent from '../components/ModalComponent';
import { AuthContext } from '../contexts/AuthContext';
import { UserContext } from '../contexts/UserContext';

export  function JustificationScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const {refreshJustification} = React.useContext(AuthContext);
  const [refreshing, setRefreshing] = React.useState(false);
  const {justification} = React.useContext(UserContext);

  console.log(justification);
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await refreshJustification();
    setRefreshing(false);
  }, []);

  return (
    <View style={styles.container}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
          }
        >
          <View>
            {
              Object.keys(justification).map((i)=> (
                <View key = {i}>
                  <View style={styles.justification} >
                    <View>
                      <Text style ={styles.date}>{justification[i].date}</Text>
                      <Text style ={[styles.comment , {color : (justification[i].validité)? 'green' : 'red' }] } >{(justification[i].validité)? 'justification valide' : 'justification n\'est pas  valide'}</Text>
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
                      de = {justification[i].dateDebut}
                      au = {justification[i].dateFin}
                      motif = {justification[i].motif}
                      commentaire = {justification[i].commentaire}
                      valide = {justification[i].validité}
                      propsModalVisible={modalVisible} 
                      onPress = {() => {
                        setModalVisible(false);
                      }}/>
                </View>
                
              ))
            }
          </View>
        </ScrollView>
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