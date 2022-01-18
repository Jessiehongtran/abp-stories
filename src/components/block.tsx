import React from 'react';

export default class Block extends React.Component <any, any> {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){

        const { title, text, color } = this.props;

        return (
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '230px', alignItems: 'left', textAlign: 'left', marginBottom: '30px', color: `${color}` }}>
                <div className="line" style={{ width: '30px', border: `2px solid ${color}`, marginBottom: '10px' }}></div>
                <div style={{ fontFamily: "Optimistic Display", fontSize: "20px", lineHeight: "140%", marginBottom: "5px" }}>
                    {title}
                </div>
                <div>
                    {text}
                </div>
            </div>
        )
    }
}