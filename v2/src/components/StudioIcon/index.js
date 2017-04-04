import React                    from 'react';
import styled                   from 'styled-components';

//icons
import artSmallIcon             from './art-small.svg'
import ceramicSmallIcon         from './ceramic-small.svg'
import digitalSmallIcon         from './digital-small.svg'
import woodworkingSmallIcon     from './woodworking-small.svg'
import textileSmallIcon         from './textile-small.svg'

import artMediumIcon             from './art-medium.svg'
import ceramicMediumIcon         from './ceramic-medium.svg'
import digitalMediumIcon         from './digital-medium.svg'
import woodworkingMediumIcon     from './woodworking-medium.svg'
import textileMediumIcon         from './textile-medium.svg'

import CompareSmallIcon         from './compare-small.svg'

const Icon = styled.img`
    color: white;
    width: 50px;
`

const StudioIcon = (props) => {

    const studioIcons = {
        art: { small: artSmallIcon, medium: artMediumIcon },
        ceramic: { small: ceramicSmallIcon, medium: ceramicMediumIcon },
        digital: { small: digitalSmallIcon, medium: digitalMediumIcon },
        woodworking: { small: woodworkingSmallIcon, medium: woodworkingMediumIcon },
        textile: { small: textileSmallIcon, medium: textileMediumIcon },
        compare: { small: CompareSmallIcon}
    }

    return (
        <Icon src={studioIcons[props.name][props.size]}></Icon>
    )
}

export default StudioIcon;
