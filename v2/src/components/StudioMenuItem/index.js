import React, { Component }                     from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import moment                                   from 'moment'
import StudioIcon                               from '../StudioIcon'
import WrapperLink                              from './WrapperLink'
import StudioTitle                              from './StudioTitle'

const StudioMenuItem = (props) => {
    let day = moment();

    return (
        <WrapperLink to={`/studio/${props.studioClass}/date/${day.format('YYYY[/]MM[/]DD')}`}>
            <StudioIcon name={props.studioClass} size="small"/>
            <StudioTitle>{props.studioName}</StudioTitle>
        </WrapperLink>
    )
}

export default StudioMenuItem;
