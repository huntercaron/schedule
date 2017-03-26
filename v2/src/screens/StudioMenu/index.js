import React, { Component }                     from 'react';
import StudioMenuItem                           from '../../components/StudioMenuItem'
import ViewAllButton                            from '../../components/ViewAllButton'
import IntroArea                                from '../../components/IntroArea'
import Wrapper                                  from './Wrapper'
import MenuBox                                  from './MenuBox'
import MemberInfoLink                           from './MemberInfoLink'


class StudioMenu extends Component {
    render() {
        return(
            <Wrapper>
                <IntroArea
                    title="Good Afternoon"
                    text="Select a studio to see it's availibility." />

                <MenuBox>
                    {this.props.studios ? (
                        this.props.studios.map((studio, i) => {
                            return <StudioMenuItem
                                        studioName={studio.facultyName}
                                        studioClass={studio.facultyClass}
                                        studioTimes={studio.days[0]}
                                        key={i}/>
                        })
                    ) : (
                        <div>Loading...</div>
                    )}

                    <ViewAllButton />

                    <MemberInfoLink />

                </MenuBox>

            </Wrapper>
        );
    }
}

export default StudioMenu;
