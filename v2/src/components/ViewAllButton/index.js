import React                                    from 'react';
import moment                                   from 'moment'
import StudioIcon                                     from '../StudioIcon'
import WrapperLink                              from './WrapperLink'
import Title                                    from './Title'
import StudioInfo                               from './StudioInfo'
import IconBox                                  from './IconBox'

const ViewAllButton = (props) => {
    return (
        <WrapperLink to={`/app/view-all/date/${moment().format('YYYY[-]MM[-]DD')}`}>
            <IconBox>
                <StudioIcon name="compare" size="small"/>
            </IconBox>

            <StudioInfo>
                <Title>Compare All Studios</Title>
            </StudioInfo>

        </WrapperLink>
    )
}

export default ViewAllButton;
