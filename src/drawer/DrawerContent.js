import React from 'react';
import {View ,StyleSheet} from 'react-native';
import { DrawerContentScrollView ,DrawerItem } from '@react-navigation/drawer';
import { Avatar , Text ,Title , Caption, Paragraph ,Drawer ,TouchableRipple , Switch} from 'react-native-paper';
import { AuthContext } from '../contexts/AuthContext';
import { AntDesign ,Feather} from '@expo/vector-icons'; 
import { UserContext } from '../contexts/UserContext';



export function DrawerContent(props){
const {user} = React.useContext(UserContext);
const {logout} = React.useContext(AuthContext);
    return (
        <View style = {{flex :1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection} >
                        <View style={{flexDirection : 'row' ,marginTop:15 , backgroundColor :'#CCE5FF' , paddingVertical : 10 , borderRadius : 12}}>
                            <Avatar.Icon 
                                style={{backgroundColor:'#fff',
                                borderStyle : "solid" ,
                                borderColor :'black',
                                borderWidth : 3}}
                                size={50}
                                icon={() => <AntDesign name="user" size={45} color='black' />}  
                            />
                            <View style={{marginLeft : 6}}>
                                <Title style={styles.title}>{user.name}</Title>
                                <Caption style={styles.caption}>{user.email}</Caption>
                            </View>
                        </View>
                        <Drawer.Section style={styles.drawerSection}>
                            <DrawerItem 
                                label="Mon Profil" 
                                icon={() => <AntDesign name="user" size={24} color='#007bff' />} 
                                onPress={() =>{props.navigation.navigate('Profile')}} 
                            />
                            <DrawerItem 
                                label="Déconnexion" 
                                icon={() => <AntDesign name="logout" size={24} color='#007bff' />} 
                                onPress={() => logout()} 
                            />
                            
                        </Drawer.Section>
                    </View>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    label="Aide" 
                    icon={() => <Feather name="help-circle" size={24} color='#007bff' />} 
                    onPress={() =>{props.navigation.navigate('Aide')}} 
                />            
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent:{
        flex : 1,
    },
    userInfoSection:{
        margin : 2,
    },
    title :{
        fontSize: 16,
        marginTop : 3,
        fontWeight : 'bold',
    },
    caption :{
        fontSize :14,
        lineHeight :14,
    },
    row : {
        marginTop : 20,
        flexDirection : 'row',
        alignItems: 'center'
    },
    section :{
        flexDirection : 'row',
        alignItems :'center',

    },
    paragraph : {
        fontWeight : 'bold',
        marginRight : 3, 
    },
    drawerSection : {
        marginTop :20,
    },
     bottomDrawerSection : {
         marginBottom : 15,
         borderTopColor : '#f4f4f4',
         borderTopWidth : 1,
     },
     preferance : {
         flexDirection : 'row',
         justifyContent : 'space-between',
         paddingVertical : 12,
         paddingHorizontal : 16,
     },
})