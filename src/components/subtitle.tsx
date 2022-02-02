import React from 'react';

export default class SubTitle extends React.Component <any, any> {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){

        const { text, color } = this.props;

        return (
            <p style={{ fontFamily: 'Optimistic Display', fontSize: '30px', lineHeight: '116.5%', color:`${color}` }}>
                {text}
            </p>
        )
    }
}