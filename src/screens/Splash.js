
import React, { useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({navigation}) => {

    const performTimeConsumingTask = async () => {
        return new Promise((resolve) =>
            setTimeout(
                () => { resolve('result') },
                1800
            )
        )
    }

    useEffect(async () => {
        const data = await performTimeConsumingTask();
        if (data !== null) {
            navigation.navigate('Login');
        }
    }, []);


    return (
        <View style={{ flex: 1}}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1.4, y: 0 }} colors={['#000', '#1E71ED']} style={styles.linearGradient}>
                <ImageBackground source={require('../constants/logo2.png')}
                    style={{ width: 250, height: 125 }}>
                    <View style={styles.viewStyles}>
                        <Text style={styles.textStyles}>
                            Pet Care
                        </Text>
                        <Text style={{ color: 'white', marginTop: 10 }}>Delivering Pet Happiness At Your Door Step</Text>
                    </View>
                </ImageBackground>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyles: {
        flex: 1,
        marginBottom: 450
    },
    textStyles: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default SplashScreen;