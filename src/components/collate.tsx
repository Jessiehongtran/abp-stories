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
            <div>
                {images && images.length > 0
                ? images.map(image => <img src={image}/>)
                : null}
            </div>
        )
    }
}