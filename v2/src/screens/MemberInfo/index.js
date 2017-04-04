import React, { Component } from 'react';
import HeaderArea           from '../../components/HeaderArea'
import Wrapper              from './Wrapper';
import BodyText             from './BodyText'

let membersInfo = "QEPCCC Guild members may purchase a monthly membership for $25 +HST. A non-resident fee of $10 +HST will be charged as applicable.\n Individual/Artist memberships are available for $35 +HST, for one month. A non-resident fee of $10 +HST will be charged as applicable. Please note there are no discounts available on this membership.\n All members must be over the age of 18.\n Please see the Front Desk for sign up options.\n \n Rules and Obligations\n Members are expected to exhibit a good understanding of the materials, tools and processes required to safely practice independently in our specialized studios.\n Members get access to the QEPCCC Wood Working Studio, Pottery Studio, Fine Arts Studio and Digital Arts Lab during studio drop-in times and can use the studios Monday-Thursday from 8 a.m.-10 p.m. on Fridays 8 a.m.-9 p.m. on weekends 8 a.m.-7 p.m. when there are no programmed classes or bookings. Some restrictions do apply. Studio schedules and facility availability can be checked online.\n Members must sign-in at customer service.\n Members must show demonstrated ability and complete prerequisite courses for access to specialized studio equipment (i.e. wood shop, pottery wheels). Details are provided in the studio descriptions below.\n Members are responsible for cleaning the studio space after use.\n Members receive half of a locker and an open storage shelf. Additional locker rental is available for members on a first-come, first-served basis. Full locker: $15 per month.\n Additional storage shelves (open) in the wood shop, ceramic studio and fine art studio can be purchased for $10 per month, per shelf.";


class MemberInfo extends Component {

    /*
    {membersInfo.split('\n').map(function(text, i){
        return <p key={i}>{text}<br/></p>
    })}
    */
  render() {
    return (
        <Wrapper>
            <HeaderArea text={"Member Info"}/>

            <BodyText>
                <h3>Benefits</h3>
                <ol>
                <li>Access to a clean space to work independently on your projects</li>
                <li>Access to professional equipment to get your best results</li>
                <li>Access to store projects in the studio instead of cluttering up your house</li>
                <li>Be a part of the community and see what other members are doing</li>
                </ol>

                <h3>Costs</h3>

                <p>QEPCCC Guild members may purchase a monthly membership for $25 +HST. A non-resident fee of $10 +HST will be charged as applicable.</p>

                <p>Individual/Artist memberships are available for $35 +HST, for one month. A non-resident fee of $10 +HST will be charged as applicable. Please note there are no discounts available on this membership.</p>

                <p><em>Please see the Front Desk for sign up options.</em></p>

                <h3>Stipulation</h3>

                <p>All members must be over the age of 18.</p>

                <h3>Rules and Obligations</h3>

                <ul>
                <li>Members are expected to exhibit a good understanding of the materials, tools and processes required to safely practice independently in our specialized studios.</li>
                <li>Members get access to the QEPCCC Wood Working Studio, Pottery Studio, Fine Arts Studio and Digital Arts Lab during studio drop-in times and can use the studios Monday-Thursday from 8 a.m.-10 p.m. on Fridays 8 a.m.-9 p.m. on weekends 8 a.m.-7 p.m. when there are no programmed classes or bookings. Some restrictions do apply. Studio schedules and facility availability can be checked online.</li>
                <li>Members must sign-in at customer service.</li>
                <li>Members must show demonstrated ability and complete prerequisite courses for access to specialized studio equipment (i.e. wood shop, pottery wheels). Details are provided in the studio descriptions below.</li>
                <li>Members are responsible for cleaning the studio space after use.</li>
                <li>Members receive half of a locker and an open storage shelf. Additional locker rental is available for members on a first-come, first-served basis. Full locker: $15 per month.</li>
                <li>Additional storage shelves (open) in the wood shop, ceramic studio and fine art studio can be purchased for $10 per month, per shelf.</li>
                </ul>
            </BodyText>
        </Wrapper>
    );
  }
}

export default MemberInfo;
