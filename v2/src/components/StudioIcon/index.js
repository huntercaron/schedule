import React                    from 'react';
import styled                   from 'styled-components';

//icons
import artSmallIcon             from './art-small.svg'
import ceramicSmallIcon         from './ceramic-small.svg'
import digitalSmallIcon         from './digital-small.svg'
import woodworkingSmallIcon     from './woodworking-small.svg'
import textileSmallIcon         from './textile-small.svg'

const Icon = styled.img`
    color: white;
    width: 50px;
`

const StudioIcon = (props) => {

    const studioIcons = {
        art: { small: artSmallIcon },
        ceramic: { small: ceramicSmallIcon },
        digital: { small: digitalSmallIcon },
        woodworking: { small: woodworkingSmallIcon },
        textile: { small: textileSmallIcon }
    }

    return (
        <Icon src={studioIcons[props.name][props.size]}></Icon>
    )
}

export default StudioIcon;
