import './Button.css'
import {useState} from 'react';
import Paragraph from "./Paragraph";

function Input(){
    const [message, setMessage] = useState('');

    const handleChange = event => {
        setMessage(event.target.value);

        console.log('value is:', event.target.value);
    };
    return (
        <div className="Div">
            <input
                type="text"
                id="message"
                name="message"
                onChange={handleChange}
                value={message}></input>
            <Paragraph name={message}></Paragraph>
        </div>
    );
}

export default Input;