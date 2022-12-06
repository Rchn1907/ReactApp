function Paragraph(props){
    return (
        <div className="Div">
            <p className="text"> Hello <b>{props.name}</b></p>
        </div>
    );
}

export default Paragraph;