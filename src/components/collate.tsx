import React from 'react';

export default class Collate extends React.Component<any,any> {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){

        const { images } = this.props;

        return (
            <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', maxHeight: '1200px',  }}>
                {images && images.length > 0
                ? images.map(image => <img alt="frame" src={image} style={{ margin: '0 3px 3px 0'}}/>)
                : null}
            </div>
        )
    }
}