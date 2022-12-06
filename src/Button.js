import React from 'react';
import './Button.css'

class Button extends React.Component {
    render() {
        function sayHello() {
            alert('You clicked me!');
        }

        return (
            <div className="Div">
                <div className="Center">
                    <button className="Button" onClick={sayHello}>React Button</button>
                </div>
            </div>
        );
    }
}
export default Button;