import React from 'react';
import Title from '../components/title';
import Collate from '../components/collate';
import { aboutList } from '../data/about_list';
import Block from '../components/block';
import Text from '../components/text';
import Button from '../components/button';

export default class About extends React.Component <any, any> {
    constructor(props){
        super(props);
        this.state = {
            images: [
                "https://res.cloudinary.com/dfulxq7so/image/upload/v1642546962/Group_388_1_hilhps.svg",
                "https://res.cloudinary.com/dfulxq7so/image/upload/v1642546886/UN0326762_26_bsibf7.svg",
                "https://res.cloudinary.com/dfulxq7so/image/upload/v1642546893/BB1c_5_joyc8g.svg",
                "https://res.cloudinary.com/dfulxq7so/image/upload/v1642546897/BB1c_4_srybsl.svg"
            ]
        }
    }

    render(){
        return (
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F0EBF5' }}>
                <div className="content" style={{ display: 'flex', padding: '0 8%', alignItems: 'center' }}>
                    <div className="intro" style={{ maxWidth: '400px', marginRight: '80px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Title color="#5C1D62" text="About"/>
                        <Text text="Meta is one of the top drivers of economic growth and enablement in the world. With over 280 million businesses relying on our products, the connections we enable have changed countless lives for the better. " color="#5C1D62" />
                        <Text text="ABP Stories is an internal channel that captures real customer voices from around the world and brings them into the workplace, across any device. These stories inspire and challenge us — reminding us why the work we do matters, and why there is still so much to do." color="#5C1D62" />
                        <Text text="Never miss an opportunity to be inspired. Click Subscribe below to join our email list. " color="#5C1D62" />
                        <Button text={"Subscribe"} bgColor={"#874B91"} textColor={"#EBF2E6"} link={""} margin={'30px 0 20px 0'} />
                        <Text text="By clicking Subscribe, you agree to receive marketing related electronic communications from Facebook, including news, events, updates, and promotional emails. You may withdraw your consent and unsubscribe from these at any time, for example by clicking the unsubscribe link included in our emails." color="#5C1D62" fontSize="14px" />
                        <Text text="For more information about how Facebook handles your data please read our Data Policy. " color="#5C1D62" fontSize="14px" />
                    </div>
                    <div className="list" style={{ marginRight: '40px'}}>
                        {aboutList.map(textBlock => <Block title={textBlock.title} text={textBlock.text} color="#5C1D62" />)}
                    </div>
                </div>
                <div className="images">
                    <Collate images={this.state.images} />
                </div>
                
            </div>
        )
    }
}