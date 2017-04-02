import React                from 'react';
import BackButton           from '../../components/BackButton'
import Wrapper              from './Wrapper'
//import Title                from './Title'
import PageTitle                from './PageTitle'
import Toolbar                from './Toolbar'

const HeaderArea = ({text, ...props}) => {
    return (
        <Wrapper {...props}>
            <Toolbar>
                <BackButton />

                <PageTitle text={text} />
            </Toolbar>

            {props.children}
        </Wrapper>
    )
}

export default HeaderArea;
