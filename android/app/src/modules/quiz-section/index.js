import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Image, Dimensions
} from 'react-native'

import screens from "../../navigation/screens";

const quiz1 = require('./quiz1.json')
const quiz2 = require('./quiz2.json')
const quiz3 = require('./quiz3.json')
const width = Dimensions.get('window').width
const quiz1No6 = require('../../assets/quiz_1_no_6.png')
const quiz1No7 = require('../../assets/quiz_1_no_7.png')
const quiz2No2 = require('../../assets/quiz_2_no_2.png')
const quiz3no5 = require('../../assets/quiz_3_no_5.jpg')
const quiz3no6 = require('../../assets/quiz_3_no_6.jpg')
const quiz3no7 = require('../../assets/quiz_3_no_7.jpg')
const quiz3no8 = require('../../assets/quiz_3_no_8.jpg')
const quiz3no9 = require('../../assets/quiz_3_no_9.png')

class QuizSectionScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exercise: 0,
            answered: false,
            answer: null,
            seeSolution: false,
            quiz: this.props.navigation.state.params.quiz
        }
    }

    pickAnswer(quiz){
        let answer = this.quizSelector(quiz)[this.state.exercise].answer
        this.setState({
            answer: answer,
            answered: true
        })
    }

    goToSolution(){
        this.setState({
            seeSolution: true
        })
    }
    
    nextEx(quiz){
        if(this.quizSelector(quiz).length !== this.state.exercise+1){
            this.setState({
                exercise: this.state.exercise + 1,
                answered: false,
                answer:null,
                seeSolution:false
            })
        } else {
            this.props.navigation.navigate(screens.PICK_GENDER)
        }
    }

    imageExtractor(image){
        if(image === 'quiz1No6'){
            return quiz1No6
        } else if(image === 'quiz1No7'){
            return quiz1No7
        } else if(image === 'quiz2No2'){
            return quiz2No2
        } else if(image === 'quiz3No5'){
            return quiz3no5
        } else if(image === 'quiz3No6'){
            return quiz3no6
        } else if(image === 'quiz3No7'){
            return quiz3no7
        } else if(image === 'quiz3No8'){
            return quiz3no8
        } else {
            return quiz3no9
        }
    }

    quizSelector(quiz){
        if(quiz === 1){
            return quiz1
        } else if(quiz === 2){
            return quiz2
        } else{
            return quiz3
        }
    }

    renderOption(quiz){
        let option = []
        this.quizSelector(quiz)[this.state.exercise].option.map((x, id) => {
            option.push(
                <TouchableOpacity
                    key={id}
                    style={{...styles.quizOption, backgroundColor: this.state.answer === id ? '#66cdaa' : 'whitesmoke'}}
                    onPress={() => this.pickAnswer(quiz)}
                >
                    <Text>{id === 0 ? 'A.' : id === 1 ? 'B.' : id === 2 ? 'C.' : 'D.'} {x}</Text>
                </TouchableOpacity>
            )
        })
        return option
    }

    componentDidMount() {

    }

    render() {
        const {background, gender, quiz} = this.props.navigation.state.params
        return(
            <View style={styles.mainContainer}>
                <ImageBackground
                    source={background}
                    style={styles.imageBackgroundContainer}
                >
                    {
                        !this.state.seeSolution ? (
                            <View style={styles.quizContainer}>
                                <View style={styles.quizTopic}>
                                    <Text>
                                        Topic: {this.quizSelector(quiz)[this.state.exercise].topic}
                                    </Text>
                                </View>
                                <View style={styles.quizExContainer}>
                                    {
                                        this.quizSelector(quiz)[this.state.exercise].image ? (
                                            <Image
                                                source={this.imageExtractor(this.quizSelector(quiz)[this.state.exercise].image)}
                                                style={{width:width * 0.6, height:width * 0.6, resizeMode: 'contain'}}
                                            />
                                            ) : (<></>)
                                    }
                                    <Text>
                                        {this.quizSelector(quiz)[this.state.exercise].exercise}
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{fontWeight:'bold', color:'whitesmoke'}}>Jawaban:</Text>
                                    {this.renderOption(quiz)}
                                </View>
                                {
                                    this.state.answered ? (
                                        <TouchableOpacity
                                            style={styles.quizSolutionButton}
                                            onPress={()=> this.goToSolution()}
                                        >
                                            <Text style={{textAlign:'center', fontWeight:'bold', color:'whitesmoke'}}>Lihat Jawaban</Text>
                                        </TouchableOpacity>
                                    ) : (<></>)
                                }
                            </View>
                        ) : (
                            <View style={styles.quizSolutionContainer}>
                                <View style={styles.quizSolution}>
                                    <Text style={{fontWeight:'bold', textAlign:'center'}}>PEMBAHASAN{'\n'}</Text>
                                    <Text>{this.quizSelector(quiz)[this.state.exercise].solver}</Text>
                                </View>
                                <View style={styles.quizImageContainer}>
                                    <Image
                                        source={gender}
                                        style={{width:width*0.3, height:width*0.6}}
                                    />
                                    <TouchableOpacity style={styles.quizNextEx}
                                        onPress={() => this.nextEx(quiz)}
                                    >
                                        <Text style={{color:'whitesmoke', fontWeight:'bold'}}>
                                            {this.quizSelector(quiz).length !== this.state.exercise+1 ? 'Soal berikutnya' : 'Kembali ke halaman utama'}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1
    },
    imageBackgroundContainer:{
        flex:1,
        resizeMode:'stretch',
        justifyContent:'center',

    },
    quizContainer:{
        flex:1,
        justifyContent: 'space-evenly',
        margin:30,
    },
    quizTopic:{
        borderRadius:5,
        padding:10,
        backgroundColor: 'whitesmoke'
    },
    quizExContainer:{
        borderRadius:5,
        padding:10,
        backgroundColor: 'whitesmoke'
    },
    quizOption:{
        borderRadius:5,
        padding:10,
        backgroundColor: 'whitesmoke',
        marginVertical:5
    },
    quizSolutionContainer:{
        flex:1,
        justifyContent: 'space-evenly',
        margin:30,
    },
    quizSolutionButton:{
        borderRadius:5,
        padding:10,
        backgroundColor: '#66cdaa'
    },
    quizSolution:{
        padding:20,
        backgroundColor: 'whitesmoke',
        borderRadius:5,
    },
    quizImageContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    quizNextEx:{
        borderRadius: 5,
        alignSelf:'center',
        padding:10,
        backgroundColor: '#66cdaa'
    }
})

export default QuizSectionScreen