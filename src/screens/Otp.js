import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';

let timer = () => { };
const TIME = 60;

const Otp = (props) => {
    const [timeLeft, setTimeLeft] = useState(TIME);
    const [otp, setOtp] = useState(['-', '-', '-', '-', '-', '-']);
    const [otpVal, setOtpVal] = useState('');
    const [confirmResult, setConfirmResult] = useState(null);
    const [val, setVal] = useState(0);
    let phone = props.route.params.phone;

    sendOtp = () => {
        setTimeLeft(TIME)
        clearTimeout(timer);
        startTimer();
        console.log("OTP SENT to ", phone);
        auth()
            .signInWithPhoneNumber(phone)
            .then(confirmResult => {
                setConfirmResult(confirmResult);
            })
            .catch(err => {
                Alert.alert("Invalid OTP");
                console.log(err.toString());
            })
    }

    const verify = (code) => {
        if (code.length === 6) {
            if(confirmResult === null){
                Alert.alert("invalid otp");
                return;
            }
            console.log("Verification started")
            confirmResult
                .confirm(code)
                .then(user => {
                    if (user) {
                        console.log("Correct")
                        props.navigation.navigate('Account');
                        return true;
                    }
                    Alert.alert("invalid otp!")
                    return false;
                })
                .catch(err => {
                    console.log(err);
                    return false;
                })
        }
        return false;
    }

    const startTimer = () => {
        timer = setTimeout(() => {
            if (timeLeft <= 0) {
                clearTimeout(timer);
                return false;
            }
            setTimeLeft(timeLeft - 1);
        }, 1000)
    }

    useEffect(() => {
        startTimer();
        return () => clearTimeout(timer);
    });

    if(val === 0){
        sendOtp();
        setVal(val+1);
    }

    const getTime = () => {
        let t = timeLeft;
        t = t.toString();
        if (t.length == 1) {
            t = `0${t}`;
        }
        t = `00:${t}`;
        return t;
    }

    return (
        <View style={styles.container}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1.4, y: 0 }} colors={['#000', '#1E71ED']} style={styles.linearGradient}>
                <Text style={styles.timer}>{getTime()}</Text>
                <Text style={styles.text}>
                    Type the vetification code we've sent you
                </Text>
                <TextInput
                    keyboardType="numeric"
                    onChangeText={value => {
                        if (isNaN(value)) {
                            return;
                        }
                        if (value.length > 6) {
                            return;
                        }
                        let val =
                            value + '------'.substr(0, 6 - value.length);
                        let a = [...val];
                        setOtpVal(a);
                        setOtp(value);
                        if(verify(value)){
                            navigation.navigate('Account')
                        }
                    }}
                    style={{ height: 0 }}
                    autoFocus={true}
                />
                <View elevation={5} style={styles.otpBoxesContainer}>
                    {[0, 1, 2, 3, 4, 5].map((item, index) => (
                        <Text style={styles.otpBox} key={index}>
                            {otp[item]}
                        </Text>
                    ))}
                </View>
                <TouchableOpacity onPress={() => sendOtp()}>
                    <Text style={styles.send}>Send again</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E71ED',
        justifyContent: 'center',
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    timer: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: '25%',
    },
    text: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        marginLeft: 40,
        marginRight: 40,
        marginTop: 10,
    },
    otpBoxesContainer: {
        flexDirection: 'row',
    },
    otpBox: {
        marginTop: 20,
        padding: 5,
        marginRight: 5,
        backgroundColor: '#1E71ED',
        borderRadius: 12,
        height: 50,
        width: 'auto',
        minWidth: 40,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        color: '#fff',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    send: {
        marginTop: 20,
        fontWeight: 'bold',
        color: '#33E6F6',
        fontSize: 16,
    }
});

export default Otp;