import React from 'react';
import { StyleSheet, View } from 'react-native';

export function AuthContainer({children}) {
  return (
    <View style={styles.container}>
      {children} 
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        paddingTop:120,
        alignItems: 'center',
      },
});