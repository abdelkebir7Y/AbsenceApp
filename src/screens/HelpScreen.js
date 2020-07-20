
import React from "react";
import { ScrollView ,View, Text,StyleSheet } from "react-native";

export function HelpScreen() {
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Aide</Text>
        <ScrollView>
          <Text style={styles.content}>
            Minim aute quis laborum duis esse commodo excepteur esse anim velit nisi dolore. Ea consequat adipisicing fugiat ipsum quis. Irure labore sunt nulla do. Consectetur aliquip commodo sit sint aliqua ullamco incididunt occaecat.

            Occaecat tempor consequat voluptate sunt tempor exercitation enim aliquip voluptate consequat et. Magna esse consequat esse pariatur veniam magna. Pariatur et nulla ea elit dolore dolore ex nulla tempor.

            Amet adipisicing aliquip aute sint dolore fugiat veniam minim. Fugiat Lorem mollit do tempor sit esse. Dolore anim sint nostrud labore nostrud magna labore aute tempor voluptate incididunt. Nulla laborum Lorem nostrud ipsum mollit laboris pariatur aliqua id tempor mollit magna.

            Cillum tempor cupidatat ex mollit ipsum. Ullamco officia qui ipsum enim esse amet dolore ut mollit deserunt elit. Elit eiusmod qui do id et elit commodo nisi deserunt laborum qui adipisicing proident. Id officia nulla aliquip amet veniam dolor. Elit labore consequat Lorem non commodo tempor aliqua ullamco proident dolore nulla. Do voluptate enim laborum nulla amet ex culpa culpa anim. Pariatur occaecat aliqua exercitation ut laboris cillum anim mollit.
            Nisi incididunt labore qui magna nostrud aute in ipsum amet culpa ipsum ullamco velit sint. Lorem deserunt enim esse in qui. Voluptate ad ipsum reprehenderit Lorem elit velit labore eiusmod anim laboris officia exercitation quis irure.
          </Text>
        </ScrollView>
      </View>
    );
  }

  
const styles = StyleSheet.create({
    
    container:{
        flex:1,
        paddingHorizontal : 6,
        paddingVertical : 20,
        alignItems: 'center',
    },
    title :{
      fontSize : 20,
      paddingHorizontal: 48,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      backgroundColor : '#007bff',
      padding : 12,
      color : 'white'
    },
    content :{
      borderWidth : 1,
      marginVertical : 16,
      paddingHorizontal : 6,
      paddingVertical : 12
      
    }
  });