import React from "react";
import {
    ImageBackground
} from 'react-native'

class BackgroundScreen extends React.Component {
    render() {
        return (
            <ImageBackground
                source={require('../assets/background_pilih_gender.png')}
                style={{
                    flex:1,
                    resizeMode:'stretch'
                }}
            />
        )
    }
}

export default BackgroundScreen