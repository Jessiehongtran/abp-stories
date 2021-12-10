import React from 'react';
import { stripes } from '../data/stripes';
import { Link } from 'react-router-dom'

export default class Home extends React.Component<any,any> {
    constructor(props){
        super(props);
        this.state = {
            stripeData: stripes
        }
        this.handleHoverStripe = this.handleHoverStripe.bind(this)
    }

    handleHoverStripe(toShowStripeId){
        console.log('hovering', toShowStripeId)
        let { stripeData } = this.state;
        stripeData.forEach(stripe => stripe.id === toShowStripeId ? stripe.shown = true : stripe.shown = false)
        this.setState({ stripeData: stripeData })
    }

    render(){

        const { stripeData } = this.state;

        return (
            <div style={{ display: 'flex', margin: '-6px' }}>
                <div style={{ textAlign: 'left', backgroundColor: "#4B0550", minHeight: '100vh', padding: '10%', boxSizing: 'border-box', margin: '6px 0' }}>
                    <div style={{ fontWeight: 400, fontSize: '90px', lineHeight: '100%', letterSpacing: '-0.02em', color: '#9B69AA'}}>
                        Ads &
                        <br/>Business
                        <br/>Products
                    </div>
                    <div style={{ fontWeight: 400, fontSize: '90px', lineHeight: '94.85%', letterSpacing: '-0.02em', color: '#D7C8E1', margin: '40px 0' }}>Stories</div>
                    <div style={{ fontSize: '18px', lineHeight: '140.35%', color: '#D7C8E1', maxWidth: '600px' }}>The Ads & Business Products (ABP) organization empowers businesses around the world. We are inspired by the ingenuity and bravery of the business community. Hearing their stories is the very heart of our culture.</div>
                    <div style={{ fontSize: '14px', lineHeight: '140.35%', color: '#D7C8E1', maxWidth: '600px', margin: '20px 0' }}>Powered by ABP Programs</div>
                </div>
                <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', margin: '0' }}>
                    {stripeData.map(stripe => 
                        stripe.type === "stripe" 
                        ? <img alt={stripe.alt} src={stripe.data} onMouseOver={() => this.handleHoverStripe(stripe.connected_to)} />
                        : stripe.shown 
                            ? <Link to={stripe.link}>
                                <div style={{ position: "relative", minHeight: "100vh", margin: '0', cursor: 'pointer'}}>
                                    <img alt={stripe.alt} src={stripe.data} style={{marginTop: '5px'}} /> 
                                    <div className="info" style={{ position: 'absolute', bottom: '150px', left: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                                        <p style={{ fontWeight: 'bold', fontSize: '18px', lineHeight: '15px', letterSpacing: '0.085em', textTransform: 'uppercase', color: '#F0EBF5', marginBottom: '30px'}}>FEATURE</p>
                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                                            <div style={{ marginRight: '15px', fontSize: '34px', lineHeight: '32px', color: '#F1F4F7' }}>{stripe.header}</div>
                                            <img src="https://res.cloudinary.com/dchyongyd/image/upload/v1639087269/Group_175_1_hpivlr.svg"/>
                                        </div>
                                        <p style={{fontSize: '18px', lineHeight: '140%', color: '#EBF2E6' }}>{stripe.author}</p>
                                        <p style={{fontSize: '18px', lineHeight: '140%', color: '#EBF2E6', marginTop: '-10px' }}>{stripe.location}</p>
                                    </div>
                                </div>
                              </Link>
                            : null)}
                </div>
            </div>
        )
    }
}