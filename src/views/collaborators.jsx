import React from 'react';
import Title from '../components/title';
import Text from '../components/text';
import Button from '../components/button';

export default class Collaborators extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div>
                <Title color="#0061A0" text="Collaborators"/>
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '400px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Text text="ABP Programs builds and executes high-touch programs that scale across the organization. Our people drive operations, logistics, narrative development, and content production for the ABP Stories program." color="#0061A0" />
                            <Button text="ABP Programs wiki" bgColor="#00A0D7" textColor="#E1EDF7" link="" margin="20px 0 40px 0" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Text text="Studio X powers Ads & Business Products with thought provoking creativity through design and experiences. Our team drives the creative direction, art direction, and experience design across all ABP Stories channels." color="#0061A0" />
                            <Button text="Studio X wiki" bgColor="#00A0D7" textColor="#E1EDF7" link="" margin="20px 0 40px 0" />
                        </div>
                    </div>
                    <div style={{ width: '400px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <div>
                            <Text text="Photographers" color="#0061A0" />
                            <Text text="We have partnered with award-winning photographers and filmmakers from around the word to capture our customers' voices with care and authenticity." color="#0061A0" />
                            <Text text="Rick Gershon Brooklyn, NY, USA" color="#0061A0" />
                            <Text text="Mauricio Lima São Paulo, Brazil" color="#0061A0" />
                            <Text text="Ezra Acayan Manila, Philippines" color="#0061A0" />
                            <Text text="Jonathan Torgovnik South Africa" color="#0061A0" />
                            <Text text="Alejandro Kirchuk" color="#0061A0" />
                            <Text text="Hector Guerrero Mexico City, Mexico" color="#0061A0" />
                        </div>
                        <div>
                            <Text text="Agency partners" color="#0061A0" />
                            <Text text="AMP Creative, Brainrider, First&Third, HUSH" color="#0061A0" />
                            <Text text="Present Medium, LLC, Verbatim Photography" color="#0061A0" />
                        </div>
                    </div>
                    <div style={{ width: '400px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

                    </div>
                </div>
            </div>
        )
    }
}