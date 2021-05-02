import AppNavigator from './navigators/MainNavigator'
import React from "react";
import {createAppContainer} from "react-navigation";
import {connect} from "react-redux";

const Navigator = createAppContainer(AppNavigator)

class AppNavigation extends React.Component {
    render(){
        return(
            <>
                <Navigator/>
            </>
        )
    }
}

export default AppNavigation