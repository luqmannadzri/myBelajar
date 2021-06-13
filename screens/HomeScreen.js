import React, { useState } from 'react';
import { View, StyleSheet, Button, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Item, Container, Header, Icon, Input } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { FlatGrid } from 'react-native-super-grid';


import useStatusBar from '../hooks/useStatusBar';
import { logout } from '../components/Firebase/firebase';
import * as firebase from '../components/Firebase/firebase';
import * as fire from 'firebase';

export default function HomeScreen() {

const Tab = createBottomTabNavigator();
  
  return (
    
      <Tab.Navigator
      
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Trending') {
              iconName = focused ? 'ios-search' : 'ios-search-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            } 

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#3498DB',
          inactiveTintColor: 'gray',
        }}
      >

        <Tab.Screen name="Home" component={MainScreen} />
        <Tab.Screen name="Trending" component={TrendingScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />


      </Tab.Navigator>
  );
}

function MainScreen({ navigation }) {

   useStatusBar('dark-content');

   var Category = firebase.db.collection('Category').get()
  .then(querySnapshot => {
    this.category = []
    this.colors = ['#1abc9c','#2ecc71','#3498db','#9b59b6','#34495e','#16a085','#27ae60','#2980b9','#8e44ad',                               '#2c3e50','#f1c40f','#e67e22','#e74c3c','#ecf0f1','#95a5a6','#f39c12','#d35400','#c0392b','#bdc3c7','#7f8c8d'];

    querySnapshot.docs.forEach(doc => {
      this.category.push({ name: doc.data().Name , code: this.colors[Math.floor(Math.random()*this.colors.length)]});
    })
  })

  const [items, setItems] = useState(this.category);

  const toQuestionPage = (title) => {
    firebase.db.collection('Category').doc(title).update({Hit: fire.firestore.FieldValue.increment(1)});
    navigation.navigate('Information',{
            title: title,
    })
  };

  return (
      <ScrollView style={styles.container}>
      
        <Text style={{textAlign:'center', color: '#3498db', fontSize: 18, fontWeight: 'bold', marginTop: 20}}
        >Choose a category</Text>
    
      <FlatGrid 
      itemDimension={130}
      data={items}
      style={styles.gridView}

      spacing={10}
      renderItem={({ item }) => (
       <TouchableOpacity onPress={() => toQuestionPage(item.name)}
        style={[styles.itemContainer, { backgroundColor: item.code }]} >
        
          <Text style={styles.itemName}>{item.name}</Text>

        </TouchableOpacity>
      )}
    />
    </ScrollView>

  );
}

function TrendingScreen({ navigation }) {
 

   var Trend = firebase.db.collection('Category').orderBy('Hit','desc').limit(4).get()
  .then(querySnapshot => {
    this.cat = []
    this.colors = ['#1abc9c','#2ecc71','#3498db','#9b59b6','#34495e','#16a085','#27ae60','#2980b9','#8e44ad','#2c3e50','#f1c40f','#e67e22','#e74c3c','#ecf0f1','#95a5a6','#f39c12','#d35400','#c0392b','#bdc3c7','#7f8c8d'];
   
    querySnapshot.docs.forEach(doc => {
      this.cat.push({ name: doc.data().Name, code: this.colors[Math.floor(Math.random()*this.colors.length)]});
      
    }) 
  })


  const [items, setItems] = useState(this.cat);
  const toQuestionPage = (title) => {
    firebase.db.collection('Category').doc(title).update({Hit: fire.firestore.FieldValue.increment(0)});
    navigation.navigate('Information',{
            title: title,
    })
  };

 
  return (
    <ScrollView style={styles.container}>
      
        <Text style={{textAlign:'center', color: '#3498db', fontSize: 18, fontWeight: 'bold', marginTop: 20}}
        > Trending Category</Text>
      
      <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      spacing={10}
      renderItem={({ item }) => (

          <TouchableOpacity onPress={() => toQuestionPage(item.name)}
        style={[styles.itemContainerTrend, { backgroundColor: item.code }]} >
        
          <Text style={styles.itemName}>{item.name}</Text>

        </TouchableOpacity>
        
      )}
    />
    </ScrollView>
  );
}

async function handleSignOut() {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }

  }

function ProfileScreen({ navigation }) {

  
     var email;
     var firstName;
     var lastName;
   

  const uid = firebase.auth.currentUser.uid;

 var user = firebase.db.collection('User').doc(uid).get().then(res => {
  
    this.email=res.data()['email'];
    this.firstName=res.data()['fName'];
    this.lastName=res.data()['lName'];

  })

  return (
    <ScrollView style={{ flex: 1  }}>

 <View style={styles.header}></View>

          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.nameprofile}>{this.firstName} {this.lastName}</Text>
            
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>{this.firstName}</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>{this.lastName}</Text> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>{this.email}</Text> 
              </TouchableOpacity>
            </View>
        </View>

<Button title="Sign Out" onPress={handleSignOut} />

   
    </ScrollView>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={MainScreen} />
      
    </HomeStack.Navigator>
  );
}

const TrendingStack = createStackNavigator();

function TrendingStackScreen() {
  return (
    <TrendingStack.Navigator>
      <TrendingStack.Screen name="Trending" component={TrendingScreen} />
    </TrendingStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Logout" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
    borderRadius: 20,
  },
   container: {
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemContainerTrend: {
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
    height: 100,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
   header:{
    backgroundColor: "#00BFFF",
    height:110,
  },

  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:45
  },
  body:{
    marginTop:40,
  },

  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  nameprofile:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});






