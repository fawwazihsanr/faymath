import React from "react";
import {
    TouchableOpacity,
    View,
    Text,
    ImageBackground,
    StyleSheet,
} from 'react-native'
import Button from "../../components/button";
import screens from "../../navigation/screens";

class PickQuizScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    renderButton(){
        let button = []
        for (let x = 0; x < 3; x++){
            button.push(
                <Button
                    txt = {`Quiz ${x+1}`}
                    stylingButton = {styles.buttonQuiz}
                    stylingText = {styles.quizText}
                    onButtonPress={()=>this.props.navigation.navigate(screens.QUIZ_SECTION, {
                        background:this.props.navigation.state.params.background,
                        gender:this.props.navigation.state.params.gender,
                        quiz: x + 1
                    })}
                />
            )
        }
        return button
    }


    render() {
        const {background} = this.props.navigation.state.params
        return (
            <View style={styles.mainContainer}>
                <ImageBackground
                    source={background}
                    style={styles.imageBackgroundContainer}
                >
                <View style={styles.buttonContainer}>
                    {this.renderButton()}
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
    imageBackgroundContainer:{
        flex:1,
        resizeMode:'stretch',
        justifyContent:'center',

    },
    buttonContainer:{
        margin:12
    },
    buttonQuiz:{
        backgroundColor: '#66cdaa',
        padding:10,
        borderRadius: 5,
        marginTop:12
    },
    quizText:{
        textAlign: 'center',
        color: 'whitesmoke',
        fontWeight:'bold',
        fontSize: 20
    }
})

export default PickQuizScreen