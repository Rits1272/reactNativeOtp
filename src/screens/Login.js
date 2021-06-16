import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Form, Item, Label, Input, Button, Picker, Icon } from 'native-base';

const codes = require('../constants/country.json');

const Login = ({navigation}) => {
    const [code, setCode] = useState('+972');
    const [phone, setPhone] = useState();

    return (
        <View style={styles.container}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1.4, y: 0}} colors={['#000', '#1E71ED']} style={styles.linearGradient}>
                <Text style={styles.text}>Get started</Text>
                <Form style={styles.form}>
                    <Item label="Country/Region" picker>
                        <Picker
                            mode="dropdown"
                            style={{ height: 50, color: '#fff'}}
                            placeholder="India (+91)"
                            placeholderIconColor="#000000"
                            onValueChange={text => setCode(text)}
                        >
                            {codes.map(item => {
                                return(
                                    <Picker.Item 
                                    onValueChange={text => this.setCode(text)}
                                    key={item.code} label={`${item.name} (${item.dial_code})`} value={item.dial_code}/>
                                );
                            })}
                        </Picker>
                    </Item>
                    <Item style={{borderColor: 'transparent'}} inlineLabel>
                        <Label style={styles.label}>Phone number</Label>
                        <Input style={{color: '#fff'}} keyboardType="numeric" onChangeText = {text => setPhone(text)}/>
                    </Item>
                </Form>
                <Button onPress={() => navigation.navigate('Otp', {'phone': `${code} ${phone}`})} full style={styles.loginBtn}>
                     <Text>Login</Text>
                </Button>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E71ED',
    },  
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
    text: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: '20%',
        marginLeft: '5%',
    },
    loginBtn: {
        backgroundColor: '#33E6F6',
        borderRadius: 5,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10
    },
    label: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    form: {
        marginTop: 20,
        borderColor: '#a3a3a3',
        borderWidth: 0.5,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
});

export default Login;