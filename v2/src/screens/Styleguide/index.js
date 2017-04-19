import React, { Component } from 'react';
import moment                                   from 'moment'

import { BrowserRouter as Router, Route, Redirect }   from 'react-router-dom'
import styled               from 'styled-components';
import HeaderArea           from '../../components/HeaderArea'
import Wrapper              from './Wrapper';
import InnerWrapper         from './InnerWrapper';
import SideMenu          from './SideMenu';
import Image          from './images';
import { colors, shadows, breakpoints }  from '../../constants';

import ViewAllButton from '../../components/ViewAllButton'
import IntroArea from '../../components/IntroArea'
import DateSelector from '../../components/DateSelector'

//import images
import componentListImg from './images/componentList.png'
import colorsImg from './images/colors.png'

const Title = styled.h2`
    font-weight: 500;
    margin-bottom: 24px;
    margin-top: 40px;
`

const SubTitle = styled.h4`
    margin-bottom: 12px;
    font-weight: 600;
    margin-left: 5px;
`

const BodyText = styled.div`
    margin-bottom: 54px;

    p {
        margin-bottom: 12px;
    }
`

// Typography Part
const H1 = styled.h1`
    font-weight: 600;
    font-size: 3.6rem;
    line-height: 1;
    margin-bottom: 6px;
`

const H2 = styled.h2`
    width: 100%;
    font-weight: 600;
    text-decoration: none;
    color: ${colors.darkGrey};

    font-size: 1.6rem;
    text-align: center;

    @media screen and (min-width: ${breakpoints.notSmall}) {
        font-size: 2.4rem;
        text-align: left;

    }
`

const H3 = styled.h5`
    font-weight: 600;
`

const SubHead = styled.p`
    font-weight: 500;
    color: ${colors.midGrey};
    padding-bottom: 24px;
    margin-top: 0;
    margin-left: 3px;
`

const SmallText = styled.p`
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1px;
    font-size: 1.2rem;
    font-family: 'MaisonMono', monospace;
    color: ${colors.midGrey};
    font-weight: lighter;
`

class MemberInfo extends Component {

    /*
    {membersInfo.split('\n').map(function(text, i){
        return <p key={i}>{text}<br/></p>
    })}
    */
  render() {
    return (
        <Wrapper>
            <SideMenu/>
                <InnerWrapper>
                    <Route path="/styleguide" exact render={() => (
                        <Redirect to="/styleguide/introduction"/>
                    )} />

                    <Route path="/styleguide/introduction" render={({ match }) => (
                        <div>
                            <Title>Introduction</Title>
                            <BodyText>
                                <p>One thing we wanted to be sensitive to was that some users might want to up their text size, and so we had to ensure that the text would work at multiple sizes on our layout without breaking the code or creating overflow problems.</p>
                            </BodyText>

                            <SubTitle>Challenge</SubTitle>
                            <BodyText>
                                <p>As a studio member at the QEPCCC, it can be difficult to check the schedule availability. Currently members have to either navigate multiple websites, call in at the front-desk, or check a printed schedule at the studio door (requiring them to already be in the building). How can we make this process easier for members and have the information all in one place, where it’s not hidden deep in other pages.</p>

                            </BodyText>

                            <SubTitle>Solution</SubTitle>
                            <BodyText>
                                <p>Create a FUNCTIONAL responsive website that allows people to easily find out the availability of the studios at the QEP.</p>
                            </BodyText>

                            <SubTitle>Key Points</SubTitle>
                            <BodyText>
                                <ul>
                                    <li>The need to display both the times members can drop in AND the drop-in time open to the public (currently the information can only be found on two different websites).</li>
                                    <li>Be user friendly (it needed to be easy to navigate and not have information hidden deep within pages: we wanted to make as few steps needed as possible to find the desired information).</li>
                                    <li>Include basic studio information (descriptions, safety protocols, and costs). In this way the website could promote membership for those that weren’t already.</li>
                                    <li>Allow date selection. While it would land on the current date, this website would need to allow users to check days ahead too so they could plan out their week.</li>
                                </ul>
                            </BodyText>

                            <SubTitle>Key Point to Consider</SubTitle>
                            <BodyText>
                                <ul>
                                    <li>A large majority of the audience are over 50 years old. This means that things like navigation (if they aren’t as tech friendly) and legibility (text size and contrast) needed to be a major focus.</li>
                                </ul>
                            </BodyText>

                            <BodyText>
                                <p>From our research we realized that FOCUS is key. User testing confirmed that participants liked that the website “got to the point” and focused on the schedule of the studios rather than trying to include a lot of other information about the QEP. </p>
                            </BodyText>
                        </div>
                    )} />

                    <Route path="/styleguide/conclusion" render={({ match }) => (
                        <div>
                            <Title>Conclusion</Title>
                            <BodyText>
                                <p>If we were to take QEP.today further, we might try implementing a notification system for users. Other features that might be helpful could include a time bar on the schedules to allow the user to quickly see the current time. It would also be helpful to undergo a second round of user testing with our updates to see if there are any more glaring issues since the design was implemented and some changes were made to the layout. Our focus was on creating a space where members could easily find the availability of studio schedules, without having to go through multiple pages or being overwhelmed with other information that isn’t relevant to them. QEP.today makes this task easier for them, and for customer service reps at the QEP front desk.</p>
                            </BodyText>
                        </div>
                    )} />

                    <Route path="/styleguide/typography" render={({ match }) => (
                        <div>
                            <Title>Typography</Title>
                            <BodyText>
                                <p>Mallory was chosen because of its capability on screens and at small sizes. It has good legibility, which was important for our older audience.</p>

                                <p>One thing we wanted to be sensitive to was that some users might want to up their text size, and so we had to ensure that the text would work at multiple sizes on our layout without breaking the code or creating overflow problems.</p>
                            </BodyText>
                            <H1>Heading 1</H1>
                            <H2>Heading 2</H2>
                            <H3>Heading 3</H3>
                            <h6>Page Title</h6>
                            <SubHead>Subhead</SubHead>
                            <SmallText>Small Text</SmallText>
                        </div>

                    )} />

                    <Route path="/styleguide/layout" render={({ match }) => (
                        <div>
                            <Title>Layout</Title>
                            <BodyText>
                                <p>Designing the layout for mobile screens was a challenge. We wanted to design it so that the user didn’t have to scroll down the page to access any of the studios from the opening page (so all the studios would remain on an “even playing field”). At the same time, if text was enlarged, than the 50% width studio containers might not be wide enough to fit the text (particularly for “Woodworking”). Our solution was to have two mobile layouts. The standard one would have 50% widths so all the studios fit on one page, and the alternate (in cases with smaller screen sizes or when text size was increased) would have 100% widths (and then would involve scrolling).</p>
                            </BodyText>

                            <SubTitle>Grid</SubTitle>
                            <BodyText>
                                <p>The entire app is built into flexible components. We opted to use a 2 column grid to keep everything flexible as possible. Every component is either full width or half width.</p>
                                <p>Here is an example of a full width component (the intro area) and a half width item (a main menu item).</p>
                            </BodyText>

                            <IntroArea title="Intro Area"
                            text="This is a text component of the intro area" />
                            <ViewAllButton />
                        </div>
                    )} />

                    <Route path="/styleguide/interactivity" render={({ match }) => (
                        <div>
                            <Title>Interactivity</Title>
                            <BodyText>
                                <p>It was designed so that as few steps were needed as possible to access the entire website. Every page is one click away from the home page so users can’t get lost.</p>
                                <p>Our application has many interactions, but most of them are quite specific to the action. The view all button here gives an idea of what a fadeIn animation looks like. The date selector is a great indication of our app interaction design.</p>
                                <p> </p>
                                <ViewAllButton />
                                <p> </p>
                                <DateSelector
                                    selectedDate={moment()}
                                    onSelectedDateChange={() => console.log("test")}/>
                            </BodyText>


                        </div>
                    )} />

                    <Route path="/styleguide/colours" render={({ match }) => (
                        <div>
                            <Title>Colour Scheme</Title>
                            <BodyText>
                                <p>The palette was used thoughtfully and sparingly. The schedule was the main event so colour was chosen carefully to support its hierarchy and draw the eye, but to also differentiate the various sections of the schedule (members only, drop-in times, and class times).</p>
                                <p>Also important to create enough contrast between different colours to be considerate of varying vision.</p>
                            </BodyText>
                            <Image src={colorsImg}></Image>
                            <BodyText/>

                            <SubTitle>Other Colours</SubTitle>
                            <BodyText>
                                <p>The rest of the app uses an assortment of greys that correspond with the use case.</p>
                            </BodyText>
                        </div>
                    )} />

                    <Route path="/styleguide/components/overview" render={({ match }) => (
                        <div>
                            <Title>Components</Title>
                            <BodyText>
                                <p>This entire app is built on re-usable modular components. Here is a list of all of them in the respective folder structure:</p>
                            </BodyText>

                            <Image src={componentListImg}></Image>

                        </div>
                    )} />

                    <Route path="/styleguide/base" render={({ match }) => (
                        <div>
                            <Title>Template</Title>
                        </div>
                    )} />
                </InnerWrapper>
        </Wrapper>
    );
  }
}

export default MemberInfo;
