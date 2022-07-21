import React, { Component } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

class WordleKeyboard extends Component {
    onChange = (input: any) => {
        console.log("Input changed", input);
    }

    onKeyPress = (button: any) => {
        console.log("Button pressed", button);
    }

    render() {
        return (
            <Keyboard
                onChange={this.onChange}
                onKeyPress={this.onKeyPress}
                layout={{
                    'default': [
                        'q w e r t y u i o p',
                        'a s d f g h j k l',
                        '{bksp} z x c v b n m {enter}'
                    ]
                }}
                theme=""
            />
        );
    }
}

export default WordleKeyboard;