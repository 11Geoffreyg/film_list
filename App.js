import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{ flex: 1, backgroundColor: '#ff7500', borderRadius: 10, justifyContent: 'center', padding: 10}}>
        <View style={{ height: 50, backgroundColor: 'white', borderRadius: 15, flex: 0, justifyContent: 'center', padding: 10}}>
          <Text style={{ color: 'red'}}>Bonjour</Text>
        </View>
      </View>
      <View style={{ flex: 5, backgroundColor: 'green'}}>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
