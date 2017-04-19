import React            from 'react'
import styled           from 'styled-components'
import { shadows }      from '../../../constants'

const ImageBox = styled.div`
    width: 100%;
`

const Img = styled.img`
    margin: 0 auto;
    width: auto;
    height: auto;
    border-radius: 3px;
    box-shadow: ${shadows.diffuseDark};
    max-width: 100%;
`

const Image = (props) => {
    return (
        <ImageBox>
            <Img src={props.src}/>
        </ImageBox>
    )
}

export default Image;
