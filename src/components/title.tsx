import React from 'react';

export default class Title extends React.Component <any, any> {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){

        const { color, text } = this.props;

        return (
            <div className="title" style={{ fontSize: '80px', lineHeight: '115.35%', color: `${color}`, textAlign: 'left' }}>
                {text}
            </div>
        )
    }
}