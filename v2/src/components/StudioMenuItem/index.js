import React                                    from 'react';
import moment                                   from 'moment'
import StudioIcon                               from '../StudioIcon'
import WrapperLink                              from './WrapperLink'
import StudioTitle                              from './StudioTitle'

const StudioMenuItem = (props) => {
    return (
        <WrapperLink to={`/studio/${props.studioClass}/date/${moment().format('YYYY[-]MM[-]DD')}`}>
            <StudioIcon name={props.studioClass} size="small"/>
            <StudioTitle>{props.studioName}</StudioTitle>
        </WrapperLink>
    )
}

export default StudioMenuItem;
