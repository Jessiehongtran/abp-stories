import React from 'react';

export default class Text extends React.Component <any, any> {
    constructor (props){
        super(props);
        this.state = {

        }
    }

    render(){

        const { text, color, fontSize } = this.props;

        return (
            <p style={{ textAlign: 'left', fontSize: `${fontSize || '18px'}`, lineHeight: '140%', color: `${color}`}}>
                {text}
            </p>
        )
    }
}