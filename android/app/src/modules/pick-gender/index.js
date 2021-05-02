import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    Dimensions,
    TouchableOpacity
} from "react-native"

import Button from "../../components/button";

import screens from "../../navigation/screens";

const width = Dimensions.get('window').width

class PickGenderScreen extends React.Component {
    constructor(props) {
        super(props);

    }

    goToPickQuiz(gender){
        let background = ''
        if(gender === 'male'){
            background = require('../../assets/background_male.png')
            gender = require('../../assets/male_solver.png')
        } else{
            background = require('../../assets/background_female.png')
            gender = require('../../assets/female_solver.png')
        }
        this.props.navigation.navigate(screens.PICK_QUIZ, {background:background, gender})
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <ImageBackground
                    source={require('../../assets/background_pilih_gender.png')}
                    style={{
                        flex:1,
                        resizeMode:'stretch'
                    }}
                >
                    <Text style={styles.textLogo}>
                        fay {'\n'}math
                    </Text>
                    <View style={styles.imageContainer}>
                        <View
                            // style={{borderColor: 'red', borderWidth: 3}}
                        >
                            <Image
                                source={require('../../assets/male.png')}
                                style={{
                                    width: width * 0.4,
                                    height: width * 0.4,

                                }}
                            />
                            <Button
                                txt = {'Laki-laki'}
                                onButtonPress={()=>this.goToPickQuiz('male')}
                                stylingText={styles.textGender}
                                stylingButton={styles.buttonGender}
                            />
                        </View>
                        <View
                            // style={{borderColor: 'red', borderWidth: 3}}
                        >
                            <Image
                                source={require('../../assets/female.png')}
                                style={{
                                    width: width * 0.4,
                                    height: width * 0.4,
                                }}
                            />
                            <Button
                                txt = {'Perempuan'}
                                onButtonPress={()=>this.goToPickQuiz('female')}
                                stylingText={styles.textGender}
                                stylingButton={styles.buttonGender}
                            />
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
      flex:1,
    },
    textLogo: {
        color:'whitesmoke',
      fontSize: width * 0.1,
        marginHorizontal: 10
    },
    textGender: {
        textAlign:'center',
        color:'whitesmoke',
        fontWeight:'bold'
    },
    imageContainer:{
        // borderWidth:10,
        // borderColor:'yellow',
        alignItems:'center',
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttonGender:{
        backgroundColor: '#66cdaa',
        padding:10,
        borderRadius: 5,
        marginTop:12
    },
})

export default PickGenderScreen