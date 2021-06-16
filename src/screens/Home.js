import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import { Card, CardItem, Body, Header, Container, Content, Button } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';

const data = [
    {
        title: 'Competition 1 name',
        desc: 'Lorem Ipsum Ipsum Lorem',
        prize: '$50',
        endTime: '05m:09 to end',
    },
    {
        title: 'Competition 2 name',
        desc: 'Lorem Ipsum',
        prize: '$150',
        endTime: '05m:09 to end',
    },
    {
        title: 'Competition 3 name',
        desc: 'Lorem Ipsum',
        prize: '$500',
        endTime: '05m:09 to end',
    },
]

const Home = () => {
    return(
        <View style={styles.container}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1.1, y: 0}} colors={['#000', '#1E71ED']} style={styles.linearGradient}>
            <ScrollView style={{marginTop: 20}}>
           {data.map((item, key) => {
               return(
                   <Content key={key}>
                       <View style={styles.card}>
                       <LinearGradient start={{x: 0.1, y: 0}} end={{x: 1.2, y: 0}} colors={['#232B2B', '#1E71ED']} style={styles.linearGradient}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.desc}>{item.desc}</Text>
                            <Text style={styles.prize}><Text style={{fontWeight: 'bold'}}>Prize</Text>: {item.prize}</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.time}>{item.endTime}</Text>
                                <Icon name={'sharealt'} size={20} style={styles.icon}/>
                                <Button style={styles.btn}><Text style={styles.btnText}>Register Now</Text></Button>
                            </View>
                       </LinearGradient>
                       </View>
                   </Content>
               )
           })}
           </ScrollView>
           </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    card: {
        marginRight: 8,
        marginLeft: 8,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#1E71ED',
        borderRadius: 5,
        marginTop: 10,
        elevation: 5,
        borderWidth: 0,
    },
    title: {
        marginTop: 10,
        marginLeft: 10,
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    desc: {
        marginTop: 5,
        marginLeft: 10,
        color: '#fff',
        fontSize: 12,
        maxWidth: 150,
    },
    prize: {
        marginTop: 25,
        marginLeft: 10,
        color: '#fff',
        fontSize: 13,
        maxWidth: 150,
    },
    time: {
        marginTop: 20,
        marginLeft: 10,
        color: '#fff',
        fontSize: 13,
        maxWidth: 150,
        marginBottom: 10,
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
    btn: {
        backgroundColor: '#33E6F6',
        borderRadius: 20,
        position: 'absolute',
        right: 15,
        bottom: 10,
    },
    btnText: {
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 10,
        fontWeight: 'bold',
    },
    icon: {
        color: '#fff',
        fontSize: 25,
        position: 'absolute',
        bottom: 20,
        right: 100,
    },
});

export default Home;