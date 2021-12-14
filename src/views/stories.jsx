import React from 'react';
import Collate from '../components/collate';

export default class Stories extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            images: [
                "https://res.cloudinary.com/dchyongyd/image/upload/v1639176749/OgoLord_5_1_egg6ql.svg",
                "https://res.cloudinary.com/dchyongyd/image/upload/v1639176810/UN0326762_24_1_nrs8uw.svg",
                "https://res.cloudinary.com/dchyongyd/image/upload/v1639176832/UN0326762_25_1_imsqu6.svg",
                "https://res.cloudinary.com/dchyongyd/image/upload/v1639176855/OgoLord_4_1_y9q6ol.svg",
                
            ]
        }
    }

    render(){
        return (
            <div style={{ background: '#EBF2E6', minHeight: '100vh' }}>
                <div className="content" style={{ maxWidth: '600px', boxSizing: 'border-box', padding: '6% 8%' }}>
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
                    <Collate />
                </div>
            </div>
        )
    }
}