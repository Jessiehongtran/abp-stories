import { BlockList } from 'net';
import React from 'react';

export default class Story extends React.Component<any,any> {
    constructor(props: any){
        super(props);
        this.state = {
            pos: {
                x: 0,
                y: 0
            }
        }
        this.handleMouseWheel = this.handleMouseWheel.bind(this)
    }

    componentDidMount(){
        window.scrollTo(0,0)
        const container = document.getElementById("story-container");
        container?.addEventListener("wheel", this.handleMouseWheel);
    }

    handleMouseWheel(e){
        e.preventDefault();
        e.stopPropagation();

        let { pos } = this.state;

        if (e.deltaY > 0) pos.x += 15;
        else pos.x -= 15;

        pos.y = window.pageYOffset;

        this.setState({ pos:pos })

        window.scrollTo(pos.x, pos.y);
    }

    render(){

        const { story } = this.props;

        return (
            <div id="story-container" style={{ display: 'flex',  width: `${story.blocks.length*100}%`, alignItems: 'center', height: '100vh', padding: '0 60px'}}>
                <div style={{ marginRight: '60px', marginTop: '-250px'}}>
                    <div className="top" style={{ display: 'flex'}}>
                        <div style={{ border: '1px solid black', borderRadius: '6px', padding: '3px 5px', fontSize: '12px', marginRight: '20px'  }}>{story.category}</div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ marginRight: '12px', fontWeight: '400' }}>{story.reading_duration} MINUTE READ</div>
                            <img src="https://res.cloudinary.com/dchyongyd/image/upload/v1636059541/Group_339_xyqtui.svg" style={{ width: '17px' }}/>
                        </div>
                    </div>
                    <div style={{ fontSize: '36px', textAlign: 'left', marginTop: '20px', maxWidth: '500px'}}>
                        {story.title}
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center'}}>
                    <div style={{ display: 'flex' }}>
                        {story.blocks.map(block => block.type === "quote"
                                            ? <div style={{ marginTop: '-50px', width: '300px', marginRight: '80px', textAlign: 'left' }}>
                                                <p style={{ fontSize: '24px', marginTop: 0 }}>{block.text}</p>
                                                <p style={{ fontSize: '16px', fontWeight: 400 }}> - {block.author}</p>
                                              </div>
                                            : <div style={{ width: '300px', marginRight: '80px', textAlign: 'left' }}>{block.text}</div>)}
                    </div>
                </div>
            </div>
        )
    }
}