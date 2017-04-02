import React                from 'react';
import StudioIcon           from '../StudioIcon'
import BodyText             from './BodyText'
import MoreButton           from './MoreButton'
import Wrapper              from './Wrapper'
import Title              from './Title'
import IconBox              from './IconBox'

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
            <Wrapper>

                <IconBox>
                    <StudioIcon name={this.props.studio.facultyClass} size={"small"}/>
                </IconBox>

                <Title>
                    {this.props.studio.facultyName}
                </Title>

                <MoreButton
                    onClick={this.handleInfoDisplay}
                    show={this.state.displayInfo}
                    text="Learn more about it"/>


                <BodyText show={this.state.displayInfo}>
                    {this.props.studio.facultyInfo.split('\n').map(function(text, i){
                        return <p key={i}>{text}<br/></p>
                    })}
                </BodyText>

            </Wrapper>
        );
    }
}

export default StudioInfo;
