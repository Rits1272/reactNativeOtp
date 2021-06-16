import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, View } from 'react-native';

const Gradient = () => {
    return(
     
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1.4, y: 0}} colors={['#000', '#1E71ED']} style={styles.linearGradient}/>
      
    );
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
      },
});

export default Gradient;