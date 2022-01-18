import React from 'react';
import { Link } from 'react-router-dom';

export default class Button extends React.Component <any,any> {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){

        const { text, bgColor, textColor, link, margin } = this.props;

        return (
                <div style={{ display: 'flex', backgroundColor: `${bgColor}`, alignItems: 'center', padding: '0 10%', borderRadius: '40px', cursor: 'pointer', margin: `${margin}` }}>
                    <Link to={link} style={{textDecoration: 'none'}}>
                        <div style={{ display: 'flex'}}>
                            <p style={{ fontFamily: 'Optimistic Display', fontSize: '24px', lineHeight: '31px', color: `${textColor}`, margin: '12px 0 18px 0' }}>{text}</p>
                            <img style={{ marginLeft: '10px'}} src="https://res.cloudinary.com/dfulxq7so/image/upload/v1642523604/Group_175_2_culabe.svg" alt="white right arrow"/>
                        </div>
                    </Link>
                </div>
            
        )
    }
}

