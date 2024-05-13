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

## 1A: Single Stake Key as Identity
**User Story:** As an Ada holder or dRep, I want to be able to connect the app to my wallet and use only one stake key at a time so that I can properly manage which dRep I have/will delegate to.
### Acceptance Criteria
- Given that I am seeking to connect to the app with a wallet account that controls multiple stake keys.
- When I seek to connect my wallet to the app.
- Then all my stake keys controlled by the wallet will be listed and I will be asked which stake key I wish to use when connected and will be able to select only one option. Once I give permission to the wallet to connect then the app will connect to the wallet.

## 1B: Wallet Connection with Stake Key is Successful
**User Story:** As an Ada holder or dRep, I want to be able to connect the app to my single stake key wallet so that I can transact with the blockchain.
### Acceptance Criteria
- Given that I am seeking to connect to the app with a wallet account that controls a single stake key and have given the wallet permission to connect.
- When I seek to connect my wallet to the app.
- Then the app will connect to the app with this stake key.

## 1C: Wallet Disconnection is Successful
**User Story:** As an Ada holder or dRep who has their wallet connected to the app, I want to be able to disconnect my wallet so that my wallet is no longer connected to the app.
### Acceptance Criteria
- Given that I have my wallet connected to the app.
- When I press the disconnect button.
- Then my wallet is disconnected from the app.

## 1D: Correct Network on Wallet and dApp
**User Story:** As either an Ada Holder or dRep who is in the act of connecting their wallet to the app, I want the mainnet version of the app to check that the wallet I am connecting with is a mainnet wallet and not connect if it is not a mainnet wallet.
### Acceptance Criteria
- Given that I have a wallet for a different “net” to the version of the app I am using.
- When I attempt to connect that wallet to that app.
- The app will refuse to connect and tell me why.

### 1E: Connect Only CIP95 Compatible Wallets
**User Story:** As either an Ada Holder or DRep, I want to be able to connect only the CIP95 compatible wallets.
#### Acceptance Criteria
- Given that I am looking to connect to the app with a wallet.
- When I seek to connect my wallet to the app.
- Then if I have multiple wallets (CIP95 compatibles & non-compatibles) only CIP95 compatible wallets are listed and I will be asked which wallet to connect. Once I choose the wallet and give permission to the wallet to connect, then the app will connect to the wallet.

## 2A: Show Delegated dRep ID
**User Story:** As an Ada holder or dRep, I want to be able to see the dRep ID of the dRep that I have delegated to so that I know that I have delegated to someone and who I have delegated to. I also know that the delegation has been successful.
### Acceptance Criteria
- Given that I have connected my wallet to the app and I have delegated to a dRep.
- When I look in the top right of my screen on any page.
- Then I see a widget that shows the dRep ID of the dRep I delegated to truncated. And by pressing this widget I can copy the dRep ID to clipboard.

## 2B: Dedicated Page for Delegating to a dRep
**User Story:** As an Ada holder, I want to have one page in the app dedicated to delegating to a dRep so that I can easily delegate to a dRep.
### Acceptance Criteria
- Given that I have the app open.
- When I am seeking to delegate to a dRep.
- I should be able to access a page dedicated to delegating my voting power to a dRep.

## 2C: dRep Delegation Page on Disconnected State
**User Story:** As an Ada holder who has not connected my wallet to the app, I want to be prompted to connect my wallet to the app if I visit the dRep delegation page so that I can delegate my voting power.
### Acceptance Criteria
- Given that I have not connected my wallet to the app.
- When I visit the dRep delegation page.
- I should be prompted to connect my wallet. This page should not show me any other functionality until I do.

## 2D: Form on the dRep Delegation Page
**User Story:** As an Ada holder who has connected their wallet to the app, I want a simple form on the dRep delegation page so that I can delegate to a dRep.
### Acceptance Criteria
- Given that I have connected my wallet to the app.
- When I visit the dRep delegation page.
- Then I will see:
  - A combobox (or combobox style option) with the following options:
    - Delegate to Abstain
    - Delegate to No-confidence
    - Delegate to dRep ID
  - (only if option C is chosen): An input box for inputting the dRep ID of my chosen dRep.
  - A button which when pressed submits the delegation data to the wallet.

## 2E: Delegate to Myself
**User Story:** As a dRep who has connected their wallet to the app, I want a "delegate to myself" option so that I can easily delegate to myself without needing to enter my own dRep ID (thus reducing the chance of error).
### Acceptance Criteria
- Given that I have connected my wallet to the app.
- When I visit the dRep delegation page.
- Then I will see:
  - A combobox (or combobox style option) with the following options:
    - Delegate to Abstain
    - Delegate to No-confidence
    - Delegate to dRep ID
    - Delegate to myself
  - (only if option C is chosen): An input box for inputting the dRep ID of my chosen dRep.
  - A button which when pressed submits the delegation data to the wallet.

## 2F: Delegate to a Different dRep
**User Story:** As an Ada holder who has already delegated to a dRep, I want a way to redelegate my voting power from my current dRep to a different dRep so that I can change dReps.
### Acceptance Criteria
- Given that I am an Ada holder who is logged into the app and has delegated their voting power to a dRep.
- When I use the delegate to dRep page.
- Then I can use it to delegate all my voting power to a different dRep.

## 2G: Retire as dRep
**User Story:** As a dRep, I want to be able to retire so that I can stop being a dRep.
### Acceptance Criteria
- Given that I am logged into the app.
- When I press the retire as dRep button.
- Then my wallet asks me to sign the transaction to retire from being a dRep.

## 2H: State After Retiring as dRep
**User Story:** As a retired dRep, I want to be able to confirm that I am no longer registered as a dRep so that I have peace of mind.
### Acceptance Criteria
- Given that I am logged into the app with the wallet account I used when I registered as a dRep.
- When I am on the governance action page.
- Then I no longer have the option to vote. Furthermore, on all pages, there is no widget informing me of my dRepID or about how much voting power has been delegated to me.

## 2I: Check Valid dRep ID
**User Story:** As a user of the app, I want to ensure that I am delegating to a valid dRep ID so that I do not make a mistake.
### Acceptance Criteria
- Given I have my wallet connected to the app.
- When I attempt to delegate to a dRep using their dRep ID (such as described in 2D & 2H). I press the button to submit my delegation to the wallet.
- Then before the app passes my data to the wallet, it will check it against a list of all registered dRep IDs. If the dRep ID doesn’t exist, It will give an error message to the user and not allow them to delegate to the invalid dRep ID.

## 2J: Prevent Delegation with Insufficient Funds
**User Story:** As either an Ada Holder or DRep, I want to be prevented from delegating when I have insufficient funds.
### Acceptance Criteria
- Given that I have connected to GovTool with zero ADA (or tADA in the case of SanchoNet).
- When I choose the Delegate to DRep ID option and enter a registered DRep ID and press the Delegate button.
- Then I am presented with a warning message and cannot proceed with delegation if my balance is zero or below the transaction costs.

## 2K: Redirect to Homepage if Wallet Not Connected
**User Story:** As a user without a compatible wallet connected to GovTool, I want to be redirected to the homepage when attempting to visit the Delegate to DRep page URL.
### Acceptance Criteria
- Given that I do not have a compatible wallet connected to GovTool.
- When I attempt to visit the URL of the Delegate to DRep page.
- Then I am redirected to the homepage.

## 2L: Delegate to Self for Registered DReps
**User Story:** As a registered DRep connected to GovTool with my wallet, I want to be able to delegate to myself via my connected wallet on the Delegate to DRep page.
### Acceptance Criteria
- Given that I am a registered DRep who is connected to GovTool with my wallet, and I am on the Delegate to DRep page.
- When I choose the Delegate to DRep ID option and enter my own DRep ID and press the Delegate button.
- Then I am able to delegate to myself via my connected wallet.

## 2M: No Delegate to Self Option for Non-Registered DReps
**User Story:** As a non-registered DRep connected to GovTool with my wallet, I want to be unable to see a Delegate to Myself option on the Delegate to DRep page.
### Acceptance Criteria
- Given that I am not a registered DRep and I am connected to GovTool with my wallet.
- When I am on the Delegate to DRep page.
- Then I cannot see a Delegate to Myself option.

## 2N: Change Delegation Prompt for Users Already Delegated
**User Story:** As a user already delegated to a DRep, I want GovTool to prompt me to "change my delegation" instead of delegating again.
### Acceptance Criteria
- Given that I am already delegated to a DRep.
- When I look at the dashboard.
- Then GovTool will recognize that I am delegated and invite me to "change my delegation" rather than to delegate.

## 2O: No Delegate to Self for DReps Already Delegated to Themselves
**User Story:** As a registered DRep and already delegated to myself, I want to be unable to see a Delegate to Myself option on the Delegate to DRep page.
### Acceptance Criteria
- Given that I am a registered DRep and I’ve already delegated to myself.
- When I go to change my delegation.
- Then the option to "delegate to myself" will not be shown.

## 2P: Delegate to Abstain Feature for DReps
**User Story:** As a DRep, I want to be able to delegate using the "delegate to abstain" feature ensuring only my own lovelace's voting power is delegated to Abstain without affecting voting power delegated to me by others.
### Acceptance Criteria
- Given that I am a DRep.
- When I delegate using the "delegate to abstain" feature.
- Then only my own lovelace's voting power will be delegated to Abstain excluding any voting power delegated to me by others, and I will be notified that my delegation transaction was sent.

## 2R: Delegate to No-Confidence Feature for DReps
**User Story:** As a DRep, I want to be able to delegate using the "delegate to no-confidence" feature ensuring only my own lovelace's voting power is delegated to No-Confidence without affecting voting power delegated to me by others.
### Acceptance Criteria
- Given that I am a DRep.
- When I delegate using the "delegate to no-confidence" feature.
- Then only my own lovelace's voting power will be delegated to No-Confidence, excluding any voting power delegated to me by others. And I will be notified that my delegation transaction was sent.

## 2S: Delegate to No-Confidence Feature for Non-DReps
**User Story:** As a non-DRep user, I want to be able to delegate using the "delegate to no-confidence" feature ensuring any voting power I have is delegated to No-Confidence.
### Acceptance Criteria
- Given that I am not a DRep.
- When I delegate using the "delegate to no-confidence" feature.
- Then any voting power I have will be delegated to No-Confidence, and I will be notified that my delegation transaction was sent.


## 3A: Confirmation of dRep Registration
**User Story:** As a dRep, I want to be able to see if I am registered so that I can confirm my registration.
### Acceptance Criteria
- Given that I have registered as a dRep.
- When I look at any page on the app.
- Then I should see a widget at the top right of each page showing the voting power that has been delegated to me and my dRep ID. On the governance action page, I also have the option to cast a vote.

## 3B: Dedicated Page for Registering as a dRep
**User Story:** As a dRep (someone who wants to be a dRep), I want one page dedicated to registering as a dRep so that I can easily register as a dRep.
### Acceptance Criteria
- Given that I have the app open.
- When I am seeking to register as a dRep.
- Then I should be able to access a page dedicated to registering as a dRep.

## 3C: Registering as dRep on Disconnected Wallet State
**User Story:** As a dRep (someone who wants to be a dRep) who has not connected their wallet to the app, I want to be prompted to connect my wallet to the app if I try to register as a dRep so that I can register as a dRep.
### Acceptance Criteria
- Given that I have not logged in to the app.
- When I visit the dRep registration page.
- Then I should be prompted to log into the app before I can register. I cannot begin the process until I have logged in.

## 3D: Registering as a dRep on Connected Wallet State
**User Story:** As a dRep (someone who wants to be a dRep) who has connected their wallet to the app, I want to be able to register as a dRep so that I can fulfill the duties of a dRep.
### Acceptance Criteria
- Given that I have logged into the app.
- When I visit the dRep registration page.
- Then I should be presented with a registration form consisting of:
  - An input box for my dRep metadata URL.
  - An input box for a hash of my dRep metadata.
  - A button for sending this information to the wallet.

## 3E: Validation of dRep Registration Data
**User Story:** As a dRep (someone who wants to be a dRep) who has connected their wallet to the app, I want my registration data to be valid so that my data is readable once it has been stored on the chain.
### Acceptance Criteria
- Given that I am on the dRep registration page.
- If/when I have entered some information into the input box for metadata URL, then it will be checked against the following criteria:
  - It must be ≤ 64 bytes in length.
  - It must be UTF-8 compatible OR
  - It must be empty.
- And if/when I have entered some information into the input box for the hash of my metadata URL, then it should be checked against the following criteria:
  - It must be 32 bytes in length.
  - It must be UTF-8 compatible OR
  - It must be empty.
- Then if these criteria are met then I can submit my dRep registration to the wallet. If these criteria are not met then I will not be able to submit data from the form to the wallet and will instead be told which criteria the information I have entered does not meet so that I can rectify it.

## 3F: Wallet Transaction Handling on Registering as a dRep
**User Story:** As a dRep, I want my wallet to handle the signing of the transaction with the data necessary to register me as a dRep, including the payment of any required deposit, so that this submission of data to the blockchain is secure.
### Acceptance Criteria
- Given that I have entered a URL into the input box for my dRep metadata URL.
- When I press the submit button.
- Then the app should send the relevant data to the wallet, which should pop up and ask me to sign the relevant transactions.

## 3G: Feedback on dRep Registration Transaction Submission
**User Story:** As a dRep, I want to get some feedback from the app that the transaction has been submitted so that I know I have submitted my dRep registration.
### Acceptance Criteria
- Given that I have used my wallet to submit my registration to the Cardano blockchain.
- When the wallet has done this.
- Then I will get confirmation from the app that the registration transaction has been submitted. This will include a link to the transaction on a block explorer.

## 3H: Update dRep Metadata
**User Story:** As a dRep, I want to be able to update my metadata so that my delegates have an accurate representation of what I will do for them.
### Acceptance Criteria
- Given that I am a registered dRep who is logged into the app.
- When I register (again) using the dRep registration page.
- Then the app will allow me to register. The data sent to the wallet will supersede the old data when it is stored on the blockchain.

## 3I: Display Registration Status as "In Progress"
**User Story:** As a user who has submitted a DRep registration transaction, I want the registration status to display as "In Progress" on the dashboard until it is confirmed by the blockchain.
### Acceptance Criteria
- Given that I have just submitted a DRep registration transaction and I am looking at the dashboard.
- When the registration has not yet been confirmed by the blockchain.
- Then the registration status will show as "In Progress" until it is confirmed.

## 4A: Dedicated Governance Actions Page
**User Story:** As any visitor to the app, when I visit the app I need a dedicated page for viewing governance actions (‘governance actions page’) so I can see what is being proposed.
### Acceptance Criteria
- Given that I am using the app (whether or not I have my wallet connected to the app).
- When I want to view a list of current governance actions.
- Then there is a page that will display this to me.

## 4B: No Governance Actions Voting for Ada Holder
**User Story:** As an Ada holder with my wallet connected, when I visit the governance actions page I cannot see any voting functionality so I do not mistakenly think I have the ability to vote.
### Acceptance Criteria
- Given that I am not a dRep with my wallet connected to the app.
- When I look at the governance actions.
- There is no suggestion that I have the ability to vote.

## 4C: Filter Actions on Governance Actions Page
**User Story:** As any user of the app, when I view governance actions I want the ability to be able to filter them based on:
- Governance Action type
- The epoch that the governance action expires in
- Does the number of Constitutional Committee members voting ‘no’ exceed or meet the quorum? (i.e., a veto)
- Does the number of Constitutional Committee members voting ‘yes’ exceed or meet the quorum? (i.e., acceptance)
- And sort them based on the number of ‘yes’ votes they have been given by dReps.
### Acceptance Criteria
- Given that I am viewing the governance actions page.
- When I want to deduce what governance actions will be important to me.
- There is the ability for me to sort and filter governance actions.

## 4D: Default Show Accepted Governance Actions
**User Story:** As any user of the app, when I view the governance actions page the default setting for the filter that tells me if the governance action has been accepted by the Constitutional Committee or not is set to show me those governance actions which have already been accepted.
### Acceptance Criteria
- Given that I am viewing the governance actions page for the first time since opening the app.
- When I look at the governance actions.
- Then the only governance actions I can see are the ones that have been accepted by the Constitutional Committee.

## 4E: Display Voting Power for DReps on Governance Actions Page
**User Story:** As a DRep connected to GovTool, I want my voting power to be displayed when I look at the governance actions page.
### Acceptance Criteria
- Given that I am a DRep and connected to GovTool.
- When I look at the governance actions page.
- Then my voting power is displayed.

## 4F: Ability to Disconnect Wallet and Disable DRep Functionality
**User Story:** As a DRep connected to GovTool, I want the ability to disconnect my wallet from the platform and temporarily disable DRep functionality.
### Acceptance Criteria
- Given that I am a DRep and connected to GovTool and I am on the governance actions page.
- When I click "Disconnect Wallet".
- Then my wallet is disconnected and I am redirected to the same page without DRep functionality enabled, including the ability to vote.

### 4G: View Current Vote Count on Governance Action Details Page
**User Story:** As a DRep, I want to be able to view the current vote count for, against, and abstaining on the details page of an individual governance action.
#### Acceptance Criteria
- Given that I am a DRep.
- When I look at the details page of an individual governance action.
- Then I can see the current number of votes for, against, and abstaining.

## 4H: Verify That Displayed Governance Actions Have Not Expired
**User Story:** As a user on the governance action page, I want to verify that none of the displayed governance actions have expired, been ratified, or enacted.
### Acceptance Criteria
- Given that I am on the governance action page.
- When I examine the governance actions displayed.
- Then none of the governance actions shown on the page have expired, been ratified, or enacted.

## 4I: Count Most Recent Vote in the Same Snapshot
**User Story:** As a DRep, I want my most recent vote to be counted if I submit a different vote for the same transaction within the same snapshot.
### Acceptance Criteria
- Given that I am a DRep and I have already voted on a given governance action.
- When I submit a different vote for the same transaction within the same snapshot.
- Then the most recent vote will be counted.

## 4J: Include Metadata Anchor in Voting Transaction
**User Story:** As a user who has chosen how to vote on the UI of a governance action's details, I want to include a metadata anchor when voting and ensure it's included in the resulting transaction.
### Acceptance Criteria
- Given that I have chosen how to vote on the UI of a governance action's details.
- When I add a metadata anchor to the UI and click the vote button.
- Then the resulting transaction will include my metadata anchor.

## 5A: Required Information Displayed for Governance Action
**User Story:** As any user, when I look at a governance action it will have the following information displayed so that I can make an informed choice.
### Acceptance Criteria
- Given that I am viewing the governance actions page.
- When I look at a governance action.
- Then I can see all the vital information.

## 5B: dRep Can Vote for Governance Action
**User Story:** As a dRep, when I am on the governance action page of the app there will be a vote button so that I can cast a vote.
### Acceptance Criteria
- Given that I have my wallet connected to the app as a dRep (regardless of whether or not I have voted).
- When I look at a governance action.
- Then I can see there is a vote button.

## 5C: dRep Can Cast Vote and Reason for Voting
**User Story:** As a dRep, when I click the vote button a modal window will pop up. It will give me the ability to select 'yes', 'no', or 'abstain' as my vote on that governance action. In addition, it will contain a box where I have the option to input the URL of the location where I have stored my reason for voting (a “reason URL input box”) in the way that I have decided to vote. And an input box for the hash of the reason why I voted the way I did (a “reason hash input box”). There will also be a 'Submit' button.
### Acceptance Criteria
- Given that I have my wallet connected to the app as a dRep.
- When I go to vote I have the option to:
  - Vote ‘yes’, ‘no’, or ‘abstain’.
  - Provide a URL to the JSON file where I have stored my reason for voting in the way that I did AKA a metadata URL.
  - Provide a hash of the aforementioned JSON file.
  - (Points 2 & 3 are optional for casting a vote.)
- Then I can enter a metadata URL (optional) and select the voting option I believe is right in order to submit casting my vote to the wallet. I can then sign the vote transaction with my wallet to submit it to the blockchain.

## 5D: Reason URL and Reason Hash are Valid
**User Story:** As a dRep, I want the data I have input into the reason URL box and reason hash input box to be valid so that my data is readable once it has been stored on the chain.
### Acceptance Criteria
- Given that I am in the process of casting my vote on a governance action.
- If/when I have entered some information into the reason URL input box then it will be checked against the following criteria:
  - It must be ≤ 64 bytes in length.
  - It must be UTF-8 compatible OR.
  - It must be empty.
- And if/when I have entered some information into the reason hash input box then it should be checked against the following criteria:
  - It must be 32 bytes in length.
  - It must be UTF-8 compatible OR.
  - It must be empty.
- Then if these criteria are met then I can submit my vote to the wallet. If these criteria are not met then I will not be able to submit data from the form to the wallet and will instead be told which criteria the information I have entered does not meet so that I can rectify it.

## 5E: dRep Can Recast Their Vote
**User Story:** As a dRep, when I wish to change my mind I can simply recast my vote by voting with different options inputted so that I can react to new information I had not previously considered.
### Acceptance Criteria
- Given that I am logged in as a dRep.
- When I have submitted a vote I can vote again on the same governance action to change how my vote is registered at any time until the governance action expires or is enacted.
- Then I won't have to worry about making a mistake.

## 5F: Confirmation of Voting Transaction Successful Submission
**User Story:** As a dRep, when I (via the wallet) have submitted a vote to the blockchain the app will confirm to me that the transaction has been submitted so that I am not confused about the status of my vote.
### Acceptance Criteria
- Given that I have submitted a vote via my wallet.
- When I look at the app.
- Then it will tell me that my vote has been submitted and will provide me with a link to the transaction details on a block explorer.

## 5G: Redirect to the Governance Action Page
**User Story:** As any user of the app, when I click on the headline of a governance action I will be redirected in a new browser tab to the URL of the JSON metadata payload of the governance action.
### Acceptance Criteria
- Given that I am on the governance actions page.
- When I want to review the details of the governance action.
- Then I will press on the headline to be redirected to the governance action metadata at the location specified by the governance action metadata URL.

## 5H: Warning on Clicking Headline of Governance Action
**User Story:** As any user of the app, when I click on the headline of a governance action BEFORE I am redirected to the JSON metadata payload, I will be warned that the app does not check the hash of the metadata provided against the metadata on chain and the user should do this themselves.
### Acceptance Criteria
- Given that I want to know that the person who submitted the governance action has not changed the metadata of the governance action.
- When I click to visit the metadata of the governance action.
- Then I will be warned that I should hash the metadata myself and compare it against the hash that was posted on-chain for that governance action so that I can be sure that the metadata has not been altered.

## 5I: External URL Warning
**User Story:** As any user of the app, before I am redirected to any external web pages outside of the app I will be shown the full URL, warned that external pages could be dangerous and it is at my own risk that I visit them. I will then have to confirm that I want to be redirected. I will not be redirected until I confirm.
### Acceptance Criteria
- Given that I want to view some externally hosted content which has been linked to in the app (e.g., governance action metadata).
- When I click on the link, I will be shown the full URL and asked if I am sure that I want to visit it at my own risk.
- Then I will either close the warning or indicate that I want to cancel my action in order to not visit the URL or I will indicate that it’s ok to visit the link and I will be redirected to the URL.

## 5J: External Link Open in a New Tab
**User Story:** As any user of the app, when I click on an external link in the app, the link will open in a separate tab so that I can refer to the information in the app and externally at the same time.
### Acceptance Criteria
- Given that I click a link to some externally hosted information.
- When the external website opens.
- Then it will do so in a different tab.

## 5K: View Your Own Vote on Governance Action as dRep
**User Story:** As a dRep, when I view governance actions I can see if and how I have voted on each governance action, so that I can avoid voting multiple times on the same action by mistake.
### Acceptance Criteria
- Given that I am logged into the app as a dRep.
- When I view governance actions, I can see which ones I have personally voted on and how I voted.
- Then I can avoid duplicating my votes.

## 5L: No Retirement Option for Non-Registered DReps
**User Story:** As a non-registered DRep, I want to confirm that there is no retirement option available in GovTool.
### Acceptance Criteria
- Given that I am not registered as a DRep.
- When I look for a retirement option in GovTool.
- Then there is none available.

## 5M: Return of DRep Registration Deposit Upon Retirement
**User Story:** As a DRep, I want my DRep registration deposit to be returned to me when I register a valid retirement transaction on-chain.
### Acceptance Criteria
- Given that I am a DRep.
- When I register a valid retirement transaction on-chain.
- Then my DRep registration deposit will be returned to me.

## 6A: Mobile Responsiveness
**User Story:** As any user of the app, when I am using the app on my mobile phone, I have as good a user experience and functionality as is available to me as on desktop so that I can complete my duties with or without a desktop computer.
### Acceptance Criteria
- Given that I have either a desktop or a mobile.
- When I want to use the app, I can do so on either.
- So that my usage is not limited by my lack of equipment.

## 6B: Error Message Display
**User Story:** As any user of the app, if something goes wrong, I want an error message to inform me what has gone wrong.
### Acceptance Criteria
- Given that I am expecting the app to respond in a given way.
- When the app cannot respond in the intended way.
- Then the app will provide me with an error message which is as helpful as possible.
- Example: I am not connected to the internet and I press "submit"; this should open the wallet but instead, I get an error message "please connect to the internet before submitting".

## 6C: Navigation Within the dApp
**User Story:** As any user of the app, if I am on a given page, I should be able to easily navigate to any other page.
### Acceptance Criteria
- Given that I am on a page of the app.
- When I want to navigate to a different page in the app.
- Then there is an easy way for me to do so, such as a menu.

## 6D: Proper Label and Recognition of the (Testnet) Network
**User Story:** As a user of the app, if I am looking at any page on the UI of the testnet version of the MVP, it is clearly labeled as the testnet version so I know which version of the app I am looking at.
### Acceptance Criteria
- Given that I am using the testnet version of the app.
- When I look at the app.
- Then I can see that I am using the testnet version of the app.

## 6E: Switch Between Testnet and Mainnet Version for User Testing
**User Story:** As a user of the app, I have access to both a testnet version and a mainnet version of the app so that I can test my votes in a risk-free environment.
### Acceptance Criteria
- Given that I have access to the internet.
- When I visit the web address of the testnet MVP.
- Then I can use the testnet MVP.
- And
- When I visit the web address of the mainnet MVP.
- Then I can use the mainnet MVP.

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
