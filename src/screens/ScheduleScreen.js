import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView ,RefreshControl } from 'react-native';
import { UserContext } from '../contexts/UserContext';
import { Table, TableWrapper, Row, Col } from 'react-native-table-component';
import { ScrollView } from 'react-native-gesture-handler';
import { AuthContext } from '../contexts/AuthContext';
import {DAYS , HOURS} from '../config/index';

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export  function ScheduleScreen() {
  const [refreshing, setRefreshing] = React.useState(false);
  const {refresh} = React.useContext(AuthContext);
  const {emploi} = React.useContext(UserContext);
  const tableHead = ['' , '8h00-9h45', '10h00-11h45', '12h00-13h45', '14h00-15h45', '16h00-17h45', '18h00-19h45'];
  const tableTitle = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi' , 'Vendredi' , 'Samedi'];
  let tableData = [
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', '']
    ];
  Object.keys(emploi).map((i)=>{
    for (let j = 0; j < 6; j++) {
      if (  emploi[i].jour === DAYS[j]) {
        for (let k = 0; k < 6; k++) {
          if(emploi[i].heureD === HOURS[k]) {
            tableData[j][k] = emploi[i].module + '\n' + emploi[i].enseignant+'\n'  + emploi[i].type +'\n'+ emploi[i].salle ;
            break;
          }
        }
        break;
      }
    }
  });

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await refresh();
    wait(2000).then(() => setRefreshing(false));
  }, []);


  return (
    <SafeAreaView  style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
        }
      >
        <Text style = {styles.title}>Emploi de temps :</Text>
        <View style={styles.table}>
          <ScrollView horizontal={true} >
              <View>
                <Table borderStyle={{borderWidth: 1, borderColor: '#000'}}>
                  <Row data={tableHead} widthArr={[101 , 161 , 161 , 161 , 161 , 161 , 161]} style={styles.head} textStyle={styles.text}/>
                </Table>

                <ScrollView style={styles.dataWrapper}>
                  <Table borderStyle={{borderWidth: 1, borderColor: '#000'}}>
                    <TableWrapper style={styles.wrapper}>
                      <Col data={tableTitle} style={styles.tableTitle}  textStyle={styles.textTitle}/>
                      <TableWrapper>
                      {
                          tableData.map((rowData, index) => (
                            <Row
                              key={index}
                              data={rowData}
                              style={[styles.row, index%2 && {backgroundColor: '#CCE5FF'}]}
                              textStyle= {[styles.textData, index%2 && {color: 'black'}]}
                            />
                          ))
                        }
                      </TableWrapper>
                    </TableWrapper>
                  </Table>
                </ScrollView>
              </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom  :1
    },
    table : {
      paddingHorizontal : 6,
      backgroundColor: '#fff' ,
    },
    head: { 
      height: 40, 
      backgroundColor: '#CCE5FF' 
    },
    text: { 
      fontWeight : 'bold',
      width : 160,
      textAlign : 'center',
    },
    textTitle: { 
      fontWeight : 'bold',
      width : 100,
      textAlign : 'center',
    },
    textData: { 
      alignItems :'center',
      fontWeight : 'bold',
      width : 160,
      color: '#333',
      textAlign : 'center',
    },
    title : {
      marginHorizontal :6,
      marginVertical :16,
      width : 180,
      fontSize : 20,
      fontWeight : 'bold',
      paddingLeft :8,
      borderColor : '#000',
      borderBottomWidth : 2,
      borderLeftWidth : 2,
      
    },
    wrapper: { 
      flexDirection: 'row' 
    },
    tableTitle: { 
      backgroundColor: '#CCE5FF' 
    },
    row: { 
       height: 100, 
    },
  });