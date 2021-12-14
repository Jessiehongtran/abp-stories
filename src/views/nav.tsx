import React from 'react';
import '../styles/nav.css';

export default class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div style={{ position: 'fixed', top: '0', left: '0', padding: '15px 10%', background: "#F6F6F6", opacity: '0.5', zIndex: 5, width: '100vw'}}>
                <div style={{ width: '100%', display: 'flex', zIndex: 6 }}>
                    <a className="nav item" href="/" >Home</a>
                    <a className="nav item" href="/">Stories</a>
                    <a className="nav item" href="/">About</a>
                    <a className="nav item" href="/">Collaborators</a>
                </div>
            </div>
        )
    }
}