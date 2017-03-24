import React                from 'react';
import StudioIcon           from '../StudioIcon'
import BodyText             from './BodyText'
import MoreButton           from './MoreButton'

class StudioInfo extends React.Component {
    constructor(props) {
        super(props);

        let displayInfo = window.innerWidth > 750;

        this.state = {
            displayInfo: displayInfo
        }

        this.handleInfoDisplay = this.handleInfoDisplay.bind(this);
    }

    handleInfoDisplay(e) {
        let display = !this.state.displayInfo;

        this.setState({
            displayInfo: display
        });
    }

    render () {
        return (
            <div>

                <StudioIcon name={this.props.studio.facultyClass} size={"small"}/>

                <MoreButton
                    onClick={this.handleInfoDisplay}
                    show={this.state.displayInfo}
                    text="More about the studio"/>


                <BodyText show={this.state.displayInfo}>
                    {this.props.studio.facultyInfo.split('\n').map(function(text, i){
                        return <p key={i}>{text}<br/></p>
                    })}
                </BodyText>
                
            </div>
        );
    }
}

export default StudioInfo;
