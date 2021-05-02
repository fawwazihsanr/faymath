import React from "react"
import {
    TouchableOpacity,
    Text
} from 'react-native';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {txt, stylingButton, stylingText, onButtonPress} = this.props
        return (
            <TouchableOpacity style={stylingButton}
                onPress = {onButtonPress}
            >
                <Text style={stylingText}>{txt}</Text>
            </TouchableOpacity>
        );
    }
}

export default Button