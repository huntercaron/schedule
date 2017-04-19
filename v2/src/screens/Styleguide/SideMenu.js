import React            from 'react'
import styled           from 'styled-components'
import { colors }          from '../../constants'
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Wrapper = styled.section`
    width: 23%;
    min-width: 200px;

    position: relative;
`

const InnerWrapper = styled.section`
    position: fixed;
    height: 100vh;
    background-color: white;
    max-width: 350px;
`

const Menu = styled.div`
    padding-left: 24px;
`

const MenuItem = styled.dl`
    dt {
        margin-bottom: 6px;
    }

`

const MenuLink = styled(Link)`
    font-size: 1.4rem;
    color: ${colors.midGrey};
    display: block;
    text-decoration: none;

    &:hover {
        color: ${colors.darkGrey};
    }
`

const MenuTitle = styled.h3`
    padding-left: 24px;
    margin: 40px auto;
    font-weight: 600;
`

const TitleLink = styled(Link)`
    text-decoration: none !important;
    color: ${colors.darkGrey};

    &:hover {
        color: ${colors.midGrey};
    }
`

const SideMenu = (props) => {
    return (
        <Wrapper>
            <InnerWrapper>
                <TitleLink to="/styleguide">
                    <MenuTitle> QEP.today Styleguide</MenuTitle>
                </TitleLink>


                <Menu>
                    <MenuItem>
                        <dt>Overview</dt>
                        <dd>
                            <MenuLink to='/styleguide/introduction'>Introduction</MenuLink>
                            <MenuLink to='/styleguide/conclusion'>Conclusion</MenuLink>
                        </dd>
                    </MenuItem>
                    <MenuItem>
                        <dt>Design</dt>
                        <dd>
                            <MenuLink to='/styleguide/typography'>Typography</MenuLink>
                            <MenuLink to='/styleguide/colours'>Colour Scheme</MenuLink>
                            <MenuLink to='/styleguide/layout'>Layout</MenuLink>
                            <MenuLink to='/styleguide/interactivity'>Interactivity</MenuLink>
                        </dd>
                    </MenuItem>
                    <MenuItem>
                        <dt>Components</dt>
                        <dd>
                            <MenuLink to='/styleguide/components/overview'>Overview</MenuLink>
                        </dd>
                    </MenuItem>
                </Menu>
            </InnerWrapper>
        </Wrapper>
    );
}

export default SideMenu;
