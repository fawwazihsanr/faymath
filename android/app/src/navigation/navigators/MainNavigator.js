import React from 'react'
import {createStackNavigator} from "react-navigation-stack";
import screens from "../screens";

import PickGenderScreen from "../../modules/pick-gender";
import PickQuizScreen from "../../modules/pick-quiz";
import QuizSectionScreen from "../../modules/quiz-section";

export default createStackNavigator({
    [screens.PICK_GENDER]:{
        screen: PickGenderScreen,
        navigationOptions: () => ({
            headerBackTitle: null,
            headerLeft:null,
            headerShown:false
        })
    },
    [screens.PICK_QUIZ]:{
        screen: PickQuizScreen,
        navigationOptions: () => ({
            headerBackTitle: null,
            headerLeft:null,
            headerShown:false
        })
    },
    [screens.QUIZ_SECTION]:{
        screen: QuizSectionScreen,
        navigationOptions: () => ({
            headerBackTitle: null,
            headerLeft:null,
            headerShown:false
        })
    }
},
    {
        headerBackTitleVisible: true,
        initialRouteName: screens.PICK_GENDER
    })