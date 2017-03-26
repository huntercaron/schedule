import React, { Component }                     from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import moment                                   from 'moment'
import Icon                                     from '../Icon'
import WrapperLink                              from './WrapperLink'
import StudioTitle                              from './StudioTitle'

const ViewAllButton = (props) => {
    return (
        <WrapperLink to={`/view-all/date/${moment().format('YYYY[-]MM[-]DD')}`}>
            <Icon icon="compare_arrows" />
            <StudioTitle>Compare All Studios</StudioTitle>
        </WrapperLink>
    )
}

export default ViewAllButton;
