import React, { useState } from 'react';
import { View, StyleSheet, Button, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Item, Container, Header, Icon, Input } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { FlatGrid } from 'react-native-super-grid';
import CardFlip from 'react-native-card-flip';



import useStatusBar from '../hooks/useStatusBar';
import * as firebase from '../components/Firebase/firebase';

export default function ChooseScreen ({ route, navigation }) {

  
// ChooseScreen
  // refer here to pass parameter https://reactnavigation.org/docs/params/
  const { title } = route.params;
  console.log("terima ni",title);
  const quest = firebase.db.collection('Category').doc(title).collection('Question').get()
    .then(querySnapshot => {
      this.statements = [];
      this.answers = [];
      querySnapshot.docs.forEach(doc => {
        // console.log(doc.data().Answer);
        this.statements.push(doc.data().Statement);
        this.answers.push(doc.data().Answer);
      });
  });

return(

  <View style={styles.container}>
        {this.statements.map((value, index) => {
          const answer = this.answers[index];
          return <CardFlip style={styles.cardContainer} ref={card => (index = card)}>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.card, styles.card1]}
          onPress={() => index.flip()}>
          <Text style={styles.label}>{value}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.card, styles.card2]}
          onPress={() => index.flip()}>
          <Text style={styles.label}>{answer}</Text>
        </TouchableOpacity>      
      </CardFlip>
        })}
    </View>
    
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  cardContainer: {
    width: 300,
    height: 265,
    marginTop: 14,
    marginBottom: 14,
  },
  card: {
    width: 300,
    height: 265,
    backgroundColor: '#FE474C',
    borderRadius: 9,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card1: {
    backgroundColor: '#FE474C',
  },
  card2: {
    backgroundColor: '#FEB12C',
  },
  label: {
    lineHeight: 20,
    lineWidth: 20,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
