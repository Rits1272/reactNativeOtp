import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { Item, Label, Input, Form, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';

const Account = ({navigation}) => {
    const [filePath, setFilePath] = useState('');
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [fname, setFname] = useState();
    const [slame, setLname] = useState();
    const [email, setEmail] = useState();

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const chooseFile = () => {
        let options = {
            title: 'Select Image',
            customButtons: [
                {
                    name: 'customOptionKey',
                    title: 'Choose Photo from Custom Option'
                },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                let img = response.assets[0].uri;
                img = img.toString;
                console.log(img)
                setFilePath(img);
            }
        });
    }

    const getDate = () => {
        Moment.locale('en');
        let dt = Moment(date).format('DD/MM/YYYY');
        return dt;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Account info</Text>
            <ImageBackground source={require('../constants/User.png')} style={styles.img}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.buttonStyle}
                    onPress={chooseFile}>
                    <Icon name="camera" size={20} color="white" style={{ padding: 3 }} />
                </TouchableOpacity>
            </ImageBackground>

            <Form style={styles.form}>
                <Item rounded stackedLabel style={styles.item}>
                    <Label style={styles.label}>First name</Label>
                    <Input onChangeText={text => setFname(text)} style={{ color: '#fff', marginLeft: 5 }} />
                </Item>
                <Item rounded style={styles.item} stackedLabel>
                    <Label style={styles.label}>Last name</Label>
                    <Input onChangeText={text => setLname(text)} style={{ color: '#fff', marginLeft: 5 }} />
                </Item>
                <Item rounded stackedLabel style={styles.item}>
                    <Label style={styles.label}>Email ID</Label>
                    <Input onChangeText={text => setEmail(text)} style={{ color: '#fff', marginLeft: 5 }} />
                </Item>
                <Item rounded style={styles.calendar}>
                    <TouchableOpacity onPress={showDatepicker} style={{flexDirection: 'row'}}>
                        <Icon name="calendar" size={20} style={{color: '#33E6F6'}}/>
                        <Text style={styles.date}>{getDate().toString()}</Text>
                     </TouchableOpacity>
                </Item>
                <View style={{width: 'auto', borderRadius: 10}}>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
                <Button onPress={() => navigation.navigate('Home')} full style={styles.btn}>
                    <Text style={{ fontWeight: 'bold' }}>Confirm</Text>
                </Button>
            </Form>
        </View>
    );
};

const styles = StyleSheet.create({
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 20,
    },
    textStyle: {
        padding: 10,
        color: 'black',
    },
    buttonStyle: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5,
        width: 'auto',
        height: 'auto',
        position: 'absolute',
        bottom: 5,
        right: 10,
        borderRadius: 50,
        backgroundColor: '#33E6F6',
    },
    imageStyle: {
        width: 200,
        height: 200,
        margin: 5,
    },
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    text: {
        fontSize: 33,
        color: '#fff',
        marginTop: 50,
        marginLeft: 35,
    },
    form: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
    },
    item: {
        borderWidth: 0.3,
        borderRadius: 12,
        marginTop: 10,
    },
    label: {
        color: '#33E6F6',
        marginLeft: 10,
    },
    btn: {
        backgroundColor: '#33E6F6',
        borderRadius: 5,
        marginLeft: 10,
        marginTop: 20
    },
    img: {
        width: 125,
        height: 125,
        alignSelf: 'center',
        marginTop: 20
    },
    calendar: {
        borderWidth: 0.3,
        borderRadius: 12,
        marginTop: 10,
        padding: 10,
        marginLeft: 15,
    },
    date: {
        color: '#fff',
        fontSize: 17,
        textAlign: 'center',
        alignSelf: 'center',
        marginLeft: 20,
        color: '#33E6F6',
    }
});


export default Account;
