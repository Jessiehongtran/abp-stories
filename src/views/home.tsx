import React from 'react';

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div style={{ textAlign: 'left', backgroundColor: "#4B0550", minHeight: '100vh', padding: '10%' }}>
                <div style={{ fontWeight: 400, fontSize: '90px', lineHeight: '100%', letterSpacing: '-0.02em', color: '#9B69AA'}}>
                    Ads &
                    <br/>Business
                    <br/>Products
                </div>
                <div style={{ fontWeight: 400, fontSize: '90px', lineHeight: '94.85%', letterSpacing: '-0.02em', color: '#D7C8E1', margin: '40px 0' }}>Stories</div>
                <div style={{ fontSize: '18px', lineHeight: '140.35%', color: '#D7C8E1', maxWidth: '600px' }}>The Ads & Business Products (ABP) organization empowers businesses around the world. We are inspired by the ingenuity and bravery of the business community. Hearing their stories is the very heart of our culture.</div>
                <div style={{ fontSize: '14px', lineHeight: '140.35%', color: '#D7C8E1', maxWidth: '600px', margin: '20px 0' }}>Powered by ABP Programs</div>
            </div>
        )
    }
}