# User Story Inventory

## Document Summary

Upon socializing of this Inventory, and eventual agreement, we will progress to detailing how the Acceptance will be accomplished and sign-off achieved, the ‘Accepted’ column will be marked Yes once consensus is reached.

## Change Management

Upon agreement on the User Story Inventory, a suitable level of Change Management will be applied, this will enable us to phase-deliver Governance on Cardano and to fulfill the ongoing Ecosystem and Community needs. Additional User Stories will be proposed, reviewed, approved and accepted using

## Source Areas Under Consideration

This section shows the areas or sources thus far

| Source          | Outline Contribution                                                     | State                    | Key Contract         |
|-----------------|--------------------------------------------------------------------------|--------------------------|----------------------|
| CIP-1694        | Blockchain level User Stories on voting, delegation, identity, consensus | Initial Capture Complete | Outreach in progress |
| Voltaire        | Use Cases for Governance, voting, delegation                             | Initial Capture Complete | Outreach in progress |
| Smart Contracts | Plutus v3 and BLS                                                        | Initial Capture Complete | Outreach in progress |
| CLI-API         | Interface outline and definition                                         | Initial Capture Complete | Outreach in progress |
| Side chains      | Interaction with BLS primitives                                          | Outreach in progress     | Outreach in progress |
| DApps           | To be defined and elaborated                                             | To be defined            | Outreach in progress |
| Exchanges       | To be defined and elaborated                                             | To be defined            | Outreach in progress |
| Other           | To be defined and elaborated                                             | To be defined            | Outreach in progress |

---
<br>


# PERSONA TYPES
|ID|NAME|DESCRIPTION|
|----|:----|:----|
|HOLDER | ADA Holder | Someone who owns ADA and is not another persona type, these are usually individuals who delegate their voting power to DReps|
|DRep | DRep | Anyone can be a DRep. DReps can vote on governance actions, their voting power is equal to the number of Lovelace that is delegated to them |
|CCM | Constitutional Community Member | The Cardano Constitutional Committee exists to allow only the governance actions that are compliant with the Cardano Constitution to be ratified. Each member of this committee gets one vote. |
|SPO | Stake Pool Operator | SPOs run stake pools, they will be able to vote on certain key governance actions, and their voting power will be equal to the amount of Lovelace that is staked with them |

# User Story (Voltaire, API, CIP-1694, Community et al)

# VOLTAIRE

## User Story ID: VO1
- [ ] Enabler
### Title: As a DRep or Ada Holder I want to connect my wallet to GovTool so that I can post transactions on-chain
### User Story
 - As a DRep or Ada Holder I want to connect my wallet to GovTool so that I can post transactions on-chain
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| Connect with multiple stake key wallet | Given I am on the homepage <br>And my wallet is not connected.<br>When I click the Connect Wallet button <br>And select (one of) my CIP-95 compatible wallet(s) with multiple stake keys containing more than zero ADA (or tADA for SanchoNet)<br>And select from a list which stake key I wish to connect with<br>Then the wallet will prompt me to connect and I can connect to GovTool with it on the selected stake key. |
|  | Given I am on the homepage
<br>And my wallet is not connected
<br>When I click the Connect Wallet button
<br>Then I am not shown any non CIP-95 compatible wallets. |
|  | Given I am on the homepage <br>And my wallet is not connected<br>When I click the Connect Wallet button and select a CIP-95 compliant, multiple stake key wallet, containing zero ADA (or tADA for SanchoNet) <br>And I select a wallet with multiple stake keys from this list<br>Ans select which stake key I wish to connect with<br>When I select a stake key <br>Then the wallet will prompt me to connect and I can connect to GovTool with it on the selected stake key. |
| Connect with single stake key wallet | Given I am on the homepage with no wallet connected
<br>When I click the Connect Wallet button and select a CIP-95 compliant single stake key wallet
<br>Then my wallet appears and I can connect with it |
|  | Given I am on the homepage without my wallet connected<br>When I click the Connect Wallet button<br>Then I am not shown any non CIP-95 compatible wallets. |
|  | Given I am on the homepage without my wallet connected<br>When I click the Connect Wallet button and select a CIP-95 compliant, single stake key wallet, containing zero ADA (or tADA for SanchoNet)<br>Then my wallet appears and I can connect with it |
|  | Given I am on the homepage without my wallet connected<br>When I click the Connect Wallet button and select a CIP-95 compliant, single stake key wallet, containing more than zero ADA (or tADA for SanchoNet)<br>Then my wallet appears and I can connect with it |
| Disconnect wallet | Given that I am on the dashboard with my wallet connected<br>If I click the Disconnect button<br>Then my wallet is disconnected from GovTool and I am redirected to the homepage |
|  | Check the wallet is on the correct network<br>Given I am on the homepage<br>When I compare the networkId with the environment value set on the deployment for the network.<br>Then if there are exceptions raised, fail the test.<br>If no exceptions, connect the wallet to the network (pass)<br> |



# CIP-1694

# VOLTAIRE

## User Story ID:  CH.VO.001
- [ ] Enabler
### Title: As a DRep or Ada Holder I want to connect my wallet to GovTool so that I can post transactions on-chain
### User Story
- As a DRep or Ada Holder I want to connect my wallet to GovTool so that I can post transactions on-chain
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| Connect with multiple stake key wallet | Given I am on the homepage <br>And my wallet is not connected.<br>When I click the Connect Wallet button <br>And select (one of) my CIP-95 compatible wallet(s) with multiple stake keys containing more than zero ADA (or tADA for SanchoNet)<br>And select from a list which stake key I wish to connect with<br>Then the wallet will prompt me to connect and I can connect to GovTool with it on the selected stake key. |
|  | Given I am on the homepage <br>And my wallet is not connected<br>When I click the Connect Wallet button<br>Then I am not shown any non CIP-95 compatible wallets. |
|  | Given I am on the homepage <br>And my wallet is not connected<br>When I click the Connect Wallet button and select a CIP-95 compliant, multiple stake key wallet, containing zero ADA (or tADA for SanchoNet) <br>And I select a wallet with multiple stake keys from this list<br>Ans select which stake key I wish to connect with<br>When I select a stake key <br>Then the wallet will prompt me to connect and I can connect to GovTool with it on the selected stake key. |
| Connect with single stake key wallet | Given I am on the homepage with no wallet connected<br>When I click the Connect Wallet button and select a CIP-95 compliant single stake key wallet <br>Then my wallet appears and I can connect with it |
|  | Given I am on the homepage without my wallet connected<br>When I click the Connect Wallet button<br>Then I am not shown any non CIP-95 compatible wallets. |
|  | Given I am on the homepage without my wallet connected<br>When I click the Connect Wallet button and select a CIP-95 compliant, single stake key wallet, containing zero ADA (or tADA for SanchoNet)<br>Then my wallet appears and I can connect with it |
|  | Given I am on the homepage without my wallet connected<br>When I click the Connect Wallet button and select a CIP-95 compliant, single stake key wallet, containing more than zero ADA (or tADA for SanchoNet)<br>Then my wallet appears and I can connect with it |
| Disconnect wallet | Given that I am on the dashboard with my wallet connected<br>If I click the Disconnect button<br>Then my wallet is disconnected from GovTool and I am redirected to the homepage |
|  | Check the wallet is on the correct network<br>Given I am on the homepage<br>When I compare the networkId with the environment value set on the deployment for the network.<br>Then if there are exceptions raised, fail the test.<br>If no exceptions, connect the wallet to the network (pass) |


### Link:


## User Story ID:  CH.VO.002
- [ ] Enabler
### Title: As an Ada Holder I want to delegate my voting power to a DRep so that I can claim my staking rewards
### User Story
 - As an Ada Holder I want to delegate my voting power to a DRep so that I can claim my staking rewards
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| Delegate to DRep ID | Given that I have my wallet connected, and I am on the Delegate to DRep page<br>When I select the delegate to DRep ID option and I enter a DRep ID which has not been registered and I press delegate<br>Then I will be presented with an error message explaining that the DRep ID was not found |
|  | Given that I have my wallet connected, and I am on the delegate to DRep page,<br>When I choose the Delegate to DRep ID option and I enter a registered DRep ID and I press the Delegate button <br>Then I am able to delegate to that DRep ID via my connected wallet |
|  | Given that I have connected to GovTool with zero* ADA (or tADA in the case of SanchoNet)<br>When I choose the Delegate to DRep ID option and I enter a registered DRep ID and I press the Delegate button <br>Then I am presented with a warning message and cannot proceed with delegation. <br>*or at least a number below transaction costs |
| Access Delegate to DRep page | Given that I do not have a compatible wallet connected to GovTool<br>When I attempt to visit the URL of the Delegate to DRep page<br>Then I am redirected to the homepage |
|  | Given that I  have a compatible wallet connected to GovTool and I am looking at the dashboard<br>When I click on the the Delegate button (or Change Delegation button if you are already registered) <br>Then I am shown the Delegate to DRep page |
| Verify DRep behaviour in connected state  | Given that I'm not connected to the wallet<br>When I visit the DRep delegation page, and I click the delegate-connect-wallet-button<br>Then the connect your wallet-modal is visible |
| Verify DRep behaviour in disconnected state | Given that I have a preset DdRep wallet loaded<br>Then Delegate button is clicked<br>Then it is expected that delegation options card is visible<br>delegate to myself is expected to be visible<br>Then Other options is clicked<br>Expect that signal no confidence card and vote abstain cards are visible <br>Next, delegate to dRep card is clicked, followed by next step button<br>Then expected that dRep ID input is visible along with delegate button |
| Delegate to myself | Given that I am a registered DRep who is connected to GovTool with my wallet, and I am on the Delegate to DRep page <br>When I choose the Delegate to DRep ID option and I enter my own DRep ID and I press the Delegate button <br>Then I am able to delegate to myself via my connected wallet |
|  | Given that I am a registered DRep who is connected to GovTool with my wallet, and I am on the Delegate to DRep page <br>When I select the Delegate to Myself option and press the Delegate button <br>Then I will be able to send a transaction to delegate to myself via my wallet |
|  | Given that I am not a registered DRep, and I am connected to GovTool with my wallet,<br>When I am on the Delegate to DRep page<br>I cannot see a Delegate to Myself option |
| Change my DRep delegation | Given that I am I am already delegated to a DRep<br>When I look at the dashboard <br>GovTool will know that I am delegated and it will invite me to “change my delegation” rather than to delegate. |
|  | Given that I am already delegated <br>When I go to change my delegation<br>I can delegate to any registered DRep, If I am delegated to myself then the option to “delegate to myself” will not be shown, If I am delegated to a specific predefined DRep then this predefined option will not be shown |
| Check the validity of a DRep ID | Given that I have selected the “delegate to a DRep ID” option in the delegation user journey.<br>When I enter anything in the DRep ID input box that is not a registered DRep ID. <br>Then I will not be able to delegate to this DRep ID and will get a warning message. |
| Delegate to Abstain | Given that I am a DRep <br>When I delegate using the “delegate to abstain” feature <br>Then it will only delegate my own lovelace’s voting power to Abstain and NOT the voting power (if any) that has been delegated to me by others.  I will be notified that my delegation transaction was sent. |
|  | Given that I am not a DRep<br>When I delegate using the “delegate to abstain” feature <br>Then it will delegate any voting power I have to Abstain. I will be notified that my delegation transaction was sent |
| Delegate to No-Confidence | Given that I am a DRep <br>When I delegate using the “delegate to no-confidence” feature <br>Then it will only delegate my own lovelace’s voting power to No-Confidence and NOT the voting power (if any) that has been delegated to me by others.  I will be notified that my delegation transaction was sent. |
|  | Given that I am not a DRep<br>When I delegate using the “delegate to no-confidence” feature <br>Then it will delegate any voting power I have to No-Confi. I will be notified that my delegation transaction was sent |


### Link:


## User Story ID: VO3
- [ ] Enabler
### Title: As a DRep I want to register so that I can vote on governance actions
### User Story
 - As a DRep I want to register so that I can vote on governance actions
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| Register as a DRep | Given that I am connected to GovTool with a compatible wallet<br>When I go through the DRep registration process, and do not include a metadata anchor  <br>Then I can register as a DRep via my wallet (because metadata anchors are optional) |
|  | Given that I am connected to GovTool with a compatible wallet<br>When I go through the DRep registration process, and include metadata anchor information in the wrong format <br>Then I will not be able to progress further in the process and I will be told that it is because the format is incorrect |
|  | Given that I am connected to GovTool with a compatible wallet<br>When I go through the DRep registration process, and include metadata anchor information in the correct format <br>Then I will be able to register as a DRep via my wallet, GovTool will include the metadata anchor in the registration certificate transaction. |
| Confirm transaction has been sent | Given that I have gone through the DRep registration process <br>When I press the button on my wallet to submit the transaction <br>Then I will receive a confirmation message from GovTool that will include a link to the transaction in a block explorer |
| Status of transaction is displayed | Given that I have just submitted a DRep registration transaction, and I am looking at the dashboard <br>When the registration has not yet been confirmed by the blockchain, <br>Then the registration status will show as “In Progress” until it is confirmed |


### Link:


## User Story ID:  CH.VO.004
- [ ] Enabler
### Title: As a DRep I want to vote so that I can fulfil my role
### User Story
 - As a DRep I want to vote so that I can fulfil my role
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| Should be able to access the governance actions page as a DRep with my wallet connected | Given that I am a DRep and I am connected to GovTool<br>When I visit the url of the governance actions page <br>Then the governance actions page is displayed |
|  | Given that I am a DRep and connected to GovTool<br>When I look at the governance actions page <br>Then my voting power is displayed |
|  | Given that I am a DRep and Connected to GovTool, and I am on the governance actions page<br>When I click Disconnect Wallet<br>Then my wallet is disconnected and I am redirected to the same page, but without the DRep functionality (i.e. ability to vote) |
|  | Given that I am a DRep and I am on the governance actions page <br>When I click on the “view proposal details” button<br>Then I will be shown the page for that individual governance action and be able to view its details |
| A DRep should be able to vote on a live governance action | Given that I am a DRep <br>When I look at the details page of an individual governance action <br>Then I can see how many votes the governance action currently has for, against and abstaining |
|  | Given that I am a DRep<br>When I look at the details page of an individual governance action <br>Then there are buttons allowing me to vote for, against or abstain. |
|  | Given that I am a DRep, on the details page of an individual governance action<br>When I select yes/ no/ abstain, and click vote <br>Then I can sign & submit this vote via my wallet |
|  | Given that I am a DRep<br>When I have submitted a vote <br>Then Immediately after this GovTool will display a message informing me that my transaction has been sent and providing me with a link to a block explorer where I can view the transaction |
| People without the (t)ADA needed to pay for voting transactions should not be able to submit a voting transaction | Given that I do not have a wallet connected to GovTool<br>When I visit the details of a governance action<br>Then I am not shown a vote button |
| People without their wallet connected or who do have their wallet connected but have not registered as DReps should not be able to vote | Given that I am on the governance action page<br>When I examine the governance actions<br>None of the governance actions shown on the page have expired or been ratified or enacted. |
| No one should be able to vote on a governance action that has expired, or been ratified, or enacted. | Given that I am a DRep and I have already voted on a given governance action <br>When I submit a different vote for the same transaction within the same snapshot <br>Then the most recent vote will be counted |
|  | Given that I have already cast a vote on a given governance action <br>When I examine this specific governance action’s page<br>Then instead of seeing a “vote” button I should see a “change vote” button |
| Only the votes of participants who are still DReps at the relevant epoch boundary will be accepted | Given that I am a DRep and I vote yes or abstain on a live governance action.<br>At the epoch boundary<br>My votes are counted |
|  | Given that I was a DRep that voted yes or abstain on a live governance action but then retired.<br>At the next epoch boundary<br>My votes will not be counted towards the total tally of DRep votes. |
| DReps can attach a metadata anchor to their votes | Given that I have chosen how to vote on the UI of a governance action’s details<br>When I add a metadata anchor to the UI also and click the vote button <br>Then the resulting transaction will include my metadata anchor |


### Link:

# SMART CONTRACTS

## User Story ID:  SMC.001
- [ ] Enabler
### User Story
Write the story here.

Use as many lines as needed.
### Functional requirements
- FR1
- FR2
- FR3
### Acceptance Criteria
- AC1
- AC2
- AC3

# SIDE CHAIN

## User Story ID:  SCH.001
- [ ] Enabler
### User Story
Write the story here.

Use as many lines as needed.
### Functional requirements
- FR1
- FR2
- FR3
### Acceptance Criteria
- AC1
- AC2
- AC3

# DAPPS

## User Story ID:  DAPP.001
- [ ] Enabler
### User Story
Write the story here.

Use as many lines as needed.
### Functional requirements
- FR1
- FR2
- FR3
### Acceptance Criteria
- AC1
- AC2
- AC3

# EXCHANGES

## User Story ID:  EX.001
- [ ] Enabler
### User Story
Write the story here.

Use as many lines as needed.
### Functional requirements
- FR1
- FR2
- FR3
### Acceptance Criteria
- AC1
- AC2
- AC3

# OTHER

## User Story ID:  OTHER.001
- [ ] Enabler
### User Story
Write the story here.

Use as many lines as needed.
### Functional requirements (n.m) with Associated Criteria (AC n.m.o)
- FR1.1.1
- AC1.1.1.1 - this is the 1st AC for FR1.1
- FR1.1.2
- AC1.1.2.1 - this is the 1st AC for FR1.1
- AC1.1.2.1 - this is the 1st AC for FR1.1
- FR1.1.3
- AC1.1.3.1 - this is the 1st AC for FR1.1
- AC1.1.3.1 - this is the 1st AC for FR1.1
