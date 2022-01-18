import React from 'react';
import Collate from '../components/collate';

export default class Stories extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            images: [
                "https://res.cloudinary.com/dfulxq7so/image/upload/v1642521471/OgoLord_5_2_lebgw3.svg",
                "https://res.cloudinary.com/dfulxq7so/image/upload/v1642521477/UN0326762_24_2_hkkhhr.svg",
                "https://res.cloudinary.com/dfulxq7so/image/upload/v1642521520/UN0326762_25_2_t4fq86.svg",
                "https://res.cloudinary.com/dfulxq7so/image/upload/v1642521552/OgoLord_4_2_vfxt4u.svg",
                "https://res.cloudinary.com/dfulxq7so/image/upload/v1642521690/BB1c_3_1_adfgpb.png",
                "https://res.cloudinary.com/dfulxq7so/image/upload/v1642521718/BB1c_2_1_ze8m7i.svg"
            ]
        }
    }

    render(){
        return (
            <div style={{ background: '#EBF2E6', minHeight: '100vh', maxWidth: '100vw', display: 'flex', alignItems: 'center' }}>
                <div className="content" style={{ maxWidth: '600px', boxSizing: 'border-box', padding: '0 8% 6% 8%' }}>
                    <div className="title" style={{ fontSize: '80px', lineHeight: '115.35%', color: '#006B4E', textAlign: 'left' }}>
                        Stories
                    </div>
                    <div className="text" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', fontSize: '18px', lineHeight: '140%', color: '#006B4E'}}>
                        <p>Transitioning to a New Era</p>
                        <p>Trends and innovation that were once thought to be years away have been accelerated by recent disruptions. The future has arrived ahead of schedule and whether they’re just starting out or staying vital, all businesses are adapting accordingly.</p>
                        <p>This transformation has not always been easy or by choice, but the future is bright for businesses that are ushering in the new era.</p>
                    </div>
                </div>
                <div className="images">
                    <Collate images={this.state.images}/>
                </div>
            </div>
        )
    }
}