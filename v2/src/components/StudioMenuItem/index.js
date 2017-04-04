import React                                    from 'react';
import moment                                   from 'moment'
import StudioStatus                             from '../StudioStatus'
import StudioIcon                               from '../StudioIcon'
import WrapperLink                              from './WrapperLink'
import Subtitle                                 from './Subtitle'
import Title                                    from './Title'
import StudioInfo                               from './StudioInfo'
import IconBox                                  from './IconBox'

const StudioMenuItem = (props) => {
    return (
        <WrapperLink to={`/app/studio/${props.studioClass}/date/${moment().format('YYYY[-]MM[-]DD')}`}>
            <IconBox>
                <StudioIcon name={props.studioClass} size="small"/>
            </IconBox>

            <StudioInfo>
                <Title>{props.studioName}</Title>
                <Subtitle><StudioStatus />Open All Day</Subtitle>
            </StudioInfo>
        </WrapperLink>
    )
}

export default StudioMenuItem;
