# Happy-Hour-Protocol-Engine

### _A community owned Drink-To-Earn decentralized network for web3._

## Abstract

Food & Beverage (F&B) establishments have been hit hard during the past 2 years of the global pandemic. Many were shuttered in the face of government imposed lockdowns and social distancing measures. The usual bar goers resorted to at-home drinking with many setting up their own makeshift bar to emulate the feeling of going out. The customary happy hour slowly faded away as friends and colleagues were no longer able to drink together in person and enjoy one’s company.

But as we see the global economy slowly opening back up with pandemic restrictions becoming obsolete, people are starting to go back to normal. But it’s not the same anymore. Favorite bars and nightlife venues are no longer around. It’s safe to say the F&B industry is still struggling.

What is needed is a modern incentive to connect post-pandemic F&B establishments to the new post-pandemic modern drinker. What is needed is an infinite positive feedback loop between happy hour goers and F&B establishments through cryptography.

The new modern happy hour goers need the incentive to hit the bars again…

…and the same can be said for those bars themselves.

In this paper, we propose a solution to the lack of incentive for engaging in the once blissful, customary happy hour and to further web3 adoption amongst F&B merchants so that any future arbitrary lockdowns won’t affect their cash flows ever again. Because every web2 bar needs itself a web3 bar.

## What is the happyhourDAO

Introducing the happyhourDAO.

The first decentralized, community-owned Drink-To-Earn web3 network enabling all happy-hour-goers alike to be rewarded in the metaverse.

First, let’s define what is “happy hour”?

Happy hour is that time of day you and your colleagues can take a breather from work. Happy hour is that time of day where you and your colleagues can rant about other colleagues without retribution. Happy hour is that time of day where you can tell your girlfriend you have to work overtime while flirting with chicks at the bar. Happy hour is that time of day where you can completely flip the switch from being a corporate, white-collar robot to the savage filthy animal that you are. Happy hour is that time of day where you deserve that refreshing long island iced tea from the shit duties your imcompetent manager gives you.

Happy hour is that time of day during the week where we all look forward to just… releasing.

According to wiki, “Happy hour is a marketing term for a time when a venue such as a restaurant or bar offers reduced prices on alcoholic drinks. Discounted menu items like appetizers are often served during happy hour. This is a way for bars and restaurants to draw in more business before or after peak business hours”.

We’ve all engaged in happy hour outings at least more than once in our lifetime. It’s as natural as grabbing a cup of coffee first thing in the morning. We need to just get our drink on during the week and let loose with the goose as they say.

The happyhourDAO aims to bridge the gap between happy-hour-goers in the real physical world and traditional F&B merchants with plebs in the metaverse through its native ERC20 token, $HOUR. For once, drinkers have the opportunity to earn from their engagement in happy hour. It shouldn’t be that people have earned the right to attend happy hour from their relentless hard work they put in at the office, but rather their happy hour attendance should also be rewarded.

## happyhourDAO ecosystem

The happyhourDAO will be powered by the Happy Hour Protocol Engine, which is the heart and soul of the whole ecosystem. This is what will glue together the drinkers, Participating Drinking Establishments (PDEs), devs, investors, and other stakeholders. All the interaction will be done through the Happy Hour Protocol Engine which will be deployed as a smart contract on the Ethereum network.

**Breakdown of participants in the happyhourDAO ecosystem:**

- Drinkers (holders of $HOUR): These are the users and community members interacting with the Happy Hour Protocol Engine. These are the happy hour goers, nightlife fist-pumpers, bartenders, and all other alcoholics who make it a priority to support the F&B industry.
- Participating Drinking Establishments (PDE): These are the F&B merchants and businesses hosting drinkers. The local bar, the city’s premier club, the skyline lounge, the speakeasy, the hotel restaurant, and etc. All these F&B merchants would be considered a PDE in the happyhourDAO ecosystem.
- Drunkards (holders of $DRNK): These are the all-star drinkers who have been able to accumulate enough $HOUR tokens to burn and mint $DRNK tokens, which fully enable them to be official members of the happyhourDAO.

F&B merchants are at the brink of something new with web3. The happyhourDAO is in position to ready traditional F&B brick and mortar merchants in participating in the internet’s next frontier. The Happy Hour Protocol Engine is geared up with provisions with an open and permissionless onboarding for F&B merchants to be valid PDEs. Each PDEs in the network are eligible for a % of HOUR earned by every drinker. This % rate will start at 10% with the ability for future alterations based on the community’s decisions.

As a PDE grows in popularity in the network, the happyhourDAO is positioned to further fund that PDE in applicable business aspects the community seems viable. This funding also includes support for web3 onboarding into metaverse realms such as in Decentraland, The Sandbox, Otherside, and others.

## $HOUR tokenomics

Based on real-time hours spent at happy hour, drinkers can earn $HOUR tokens via the Happy Hour Protocol Engine. In exchange, these earned $HOUR tokens have a multi-functional utility such as being able to use those $HOUR tokens in purchasing discounted beverages at participating bars/nightclubs. They also can allow drinkers to exchange them into other tokens of their choosing. And with the metaverse spawning nightlife entrepreneurs to take their venues digitally online, $HOUR tokens can also be used at those web3 nightlife venues.

```
function startHOUR(uint _PDEid, uint _accessCode) public payable {
    uint validPDE;
    for (uint i = 0; i < pdes.length; i++) {
        if (pdes[i]._PDEid == _PDEid && pdes[i]._accessCode == _accessCode) {
            validPDE = 1;
        } else {
            validPDE = 0;
        }
    }
    require(validPDE == 1);
    require(msg.value == happyHourFee, "Invalid Happy Hour Fee.");
    givePoolDrinkingId();
    drinkingIDtoPDEid[drinkingID[msg.sender]] = _PDEid;
    happyHourFeePool += 1;
    timeIN = block.timestamp;
}
```

When enough $HOUR tokens have been accumulated, drinkers can then burn them in exchange for $DRNK, which is the governance token of the happyhourDAO. The governance token of $DRNK will enable voting rights, HHIP (happy hour improvement proposals) requests and approvals, premium access to other whitelist nightlife events, and other premium benefits.

We envision the novel Drink-To-Earn model as an infinite positive feedback loop. As drinkers earn $HOUR by the hour, drinking establishments can earn a commission of the $HOUR earned by drinker. Freshly earned $HOUR tokens can then be used at other participating drinking establishments in purchasing deeply discounted drinks or to be burned to earn the happyhourDAO’s governance token, $DRNK.

The $DRNK governance token, with all its benefits, can then in turn steer the happyhourDAO in building a larger engaged ecosystem amongst F&B establishments. The happyhourDAO will be equipped with a VC arm in funding drinking establishments to attract more drinkers to their spot. As more drinkers are attracted to better developed drinking establishments, the more $HOUR tokens are earned which leads to more activity in the happyhourDAO. It’s a positive feedback loop we hope will lead to more real-life use cases in the physical world.

## $DRNK governance tokenomics

$HOUR/$DRNK exchange ratio will be hardcoded at the initial rate of 10/1. All $DRNK governance tokens will be fairly minted, meaning there will be no pre-mined $DRNK to certain individuals.

The $DRNK governance token is the official membership token of the happyhourDAO. Any amount of $DRNK governance token will be accepted and considered sufficient to be part of the happyhourDAO. The larger amount of $DRNK governance tokens owned allows for a larger percentage of influence you can have on any happyhourDAO participation. The below outlines the types of privileges and events you can participate in.

**Membership into the happyhourDAO grants you access to:**

- Voting mechanisms
- Happy Hour Improvement Proposals (HHIP) submissions and approvals
- Special airdrops
- Real world exclusive VIP hosted events
- happyhourDAO VC arm investments
- happyhourNFTs exclusive whitelist
- Exclusive access to Web3 version of PDEs
- Merchandise

## happyhourDAO VC venture

The ultimate goal of the happyhourDAO is to facilitate a healthy ecosystem between web3 users and real world F&B partners, or what we will refer to as PDEs. The model of Drink-To-Earn is not to solely encourage endless amounts of drinking, but rather a healthy and rewarding experience while attending happy hour events. This reward also needs to be mirrored by the PDEs as well and encourage improvement in business by the PDE.

The happyhourDAO VC venture aims to foster the ecosystem of PDEs as well as encourage and onboard web3 adoption amongst these merchants. Their business model shouldn’t just be limited to the four walls they are grounded in.

## happyhourDAO roadmap

- May 2022
  - Whitepaper release
  - Testnet deployment
- June 2022
  - Website release
  - Onboarding of PDEs globally
- August 2022
  - Mainnet contract deployment
  - Happy Hour Protocol Engine release
  - $DRNK governance token release
- September 2022
  - happyhourDAO launch
  - happyhourDAO launch party
- December 2022
  - happyhourNFTs
- Summer 2023
  - Grand opening of physical happyhourDAO bar/restaurant

## $HOUR/$DRNK mint and release schedule

The $HOUR token will conduct a fair launch with zero issuance at contract deployment. Issuance rate will vary based on network growth and $HOUR earned. The ratios of both $HOUR/hour and $HOUR to $DRNK burn minimum threshold will all be adjustable based on the consensus of the community’s outlook.

## Conclusion

The Random House Dictionary of American Slang dates “Happy hour,” as a term for afternoon drinks in a bar, to a Saturday Evening Post article on military life in 1959. The article detailed the lives of government contractors and military personnel who worked at missile-tracking facilities in the Caribbean and the Atlantic. “Except for those who spend too much during ‘happy hour’ at the bar — and there are few of these — the money mounts up fast.”

Happy-hour-goers shouldn’t always have to feel bad when splurging their money at the bar. They deserve incentives for just being able to live and be merry. The $HOUR token is that incentive for happy-hour-goers and all types of drinking establishments. Let’s aim to bring this untapped demographic to web3.

Let’s bring happy hour to the metaverse.
