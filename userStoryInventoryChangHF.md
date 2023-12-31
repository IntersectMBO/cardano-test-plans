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

## User Story ID:  CIP1694.001
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
### Link:

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


# CARDANO-CLI

## User Story ID:  CLI.001
- [ ] Enabler
### Title: Obtain constitution hash for verification (HOLDER)
### User Story
- As an Ada holder,<br>
I want to obtain the hash of the off-chain text of a Constitution, <br>
So that I can compare it against the hash registered on-chain to verify its authenticity.

### Functional requirements
| Requirements  | Acceptance Criteria  |
|:----|:----|
| When I provide the off-chain text of the Constitution, the cardano-cli calculatea and returns the corresponding blake2b-256 hash of the document.| Given that a holder provides the off-chain text of the constitution then cardano-cli returns the corresponding blake2b-256 hash. Provided that it is the same document, the resulting hash match the one registered on-chain.|

## User Story ID:  CLI.002
- [ ] Enabler
### Title: Generate hash of the off-chain constitution (HOLDER)
### User Story
- As an Ada holder,<br>
I want to generate the hash of the off-chain text for a proposed Constitution<br>
So that the hash can be utilized in a governance action.

### Functional requirements
| Requirements  | Acceptance Criteria  |
|:----|:----|
| When I provide the off-chain text of the Constitution, the cardano-cli calculates and returns the corresponding blake2b-256 hash of the document.| Given that a holder provides the off-chain text of the constitution then cardano-cli returns the corresponding blake2b-256 hash.|


## User Story ID:  CLI.003
- [ ] Enabler
### Title: Generate Committee member cold key pair (CCM)
### User Story
- As a potential Constitutional Committee member,<br>
I want to generate COLD key pair, <br>
so that I can be proposed for the Committee in a Governance action

### Functional requirements
| Requirements  | Acceptance Criteria  |
|:----|:----|
| The feature implementation includes a new command: `cardano-cli conway governance committee key-gen-cold`    | Running `cardano-cli conway governance committee key-gen-cold` with accepted input parameters generates a COLD key pair. If a parameter or the command format is incorrect an error is raised    |
| Includes a corresponding CLI usage  describing the feature, how to use it and the types of the inputs and outputs.   | Running `cardano-cli conway governance committee key-gen-cold —-help` displays command usage page.    |
| The command must accept two flags to be consistent with similar commands:  <br>`--cold-verification-key-file`<br>`--cold-signing-key-file`  |  Running `cardano-cli conway governance committee key-gen-cold` with accepted input parameters generates a COLD key pair. If a parameter or the command format is incorrect an error is raised    |
| The generated key pair must be stored in the specified files:<br>- the verification key is saved in the file specified by `--cold-verification-key-file`<br> - the signing key saved in the file specified by `--cold-signing-key-file`|Both flags are mandatory and each produces the corresponding verification or signing key file.|
| Given that the user specifies a valid path and file name, then the keys are saved on that file and location.|
| The generated keys adhere to text envelope format used for other artifacts, and contains the fields Type, Description and cborHex.|Given that the cli has created the verification and signing keys, then these conform to the text envelope format used  consisting of a json object with `type`, `description` and `cborHex` fields.|
| The signing key text envelope contains the correct type and description <br>- Type: "ConstitutionalCommitteeColdSigningKey_ed25519"<br>- Description: "Constitutional Committee Cold Signing Key"|Given that the signing key is saved on a text envelope format, the type and description fields are: <br>- Type: "ConstitutionalCommitteeColdSigningKey_ed25519"<br>- Description: "Constitutional Committee Cold Signing Key"
| The verification key text envelope has: <br>- Type: "CConstitutionalCommitteeColdVerificationKey_ed25519"<br>- Description: "Constitutional Committee Cold Verification Key"|Given the user has *not* inputted either `--cold-verification-key-file` OR `--cold-signing-key-file`, then the command fails and returns an error to the users informing them to fill those parameters in. The error message should prompt the user to consult the command usage (--help)|
| Failing to provide a file name for any of `--cold-verification-key-file` `--cold-signing-key-file` returns an appropriate error message.|Given the user has inputted *wrong* `--cold-verification-key-file` OR `--cold-signing-key-file`, then the command fails and returns an error to the users informing them that the supplied files do not match the expected type.|


### Link:

## User Story ID:  CLI.004
- [ ] Enabler
### Title: Generate committee member hot key pair (CCM)
### User Story
- As Constitutional Committee member,<br>
I want to generate HOT key pair,<br>
So that I can authorize the Hot key to sign votes on behalf of the Cold key.

### Functional requirements
| Requirements  | Acceptance Criteria  |
|:----|:----|
| The feature implementation includes a new command `cardano-cli conway governance committee key-gen-hot`|Running `cardano-cli conway governance committee key-gen-hot` command with all the required and correct parameters then the command is executed successfully and a HOT key pair is generated.  If an argument or the command format is incorrect an error is raised.|
| Running `cardano-cli conway governance committee key-gen-hot —-help` displays command usage page.
| The command must accept two flags <br> `--verification-key-file`<br> `--signing-key-file`|Running `cardano-cli conway governance committee key-gen-hot` displays command usage.|
| The generated key pair must be saved in the specified files: <br>- The verification key saved in the file specified by `--verification-key-file`<br>- The signing key saved in the file specified by  `--signing-key-file`|Both `--verification-key-file` and `--signing-key-file` are mandatory and each produces the corresponding verification or signing key file.|
| The generated keys must adhere to text envelope format used for other artifacts and contains the fields Type, Description and cborHex.|Given that the user specifies a valid path and file name, then the keys are saved on that file and location.|
| The signing key text envelope contains the correct type, description, and cborHex values.<br>- Type: "ConstitutionalCommitteeColdSigningKey_ed25519"<br>- Description: "Constitutional Committee Cold Signing Key"|Given that the cli has created the verification and signing keys, then these conform to the text envelope format consisting of a json object with `type`, `description` and `cborHex` fields.|
| The verification key text envelope has: <br>-  Type:  "CConstitutionalCommitteeColdVerificationKey_ed25519" <br>- Description: "Constitutional Committee Cold Verification Key" |Given that the verification key is saved on a text envelope format, the type and description fields are: <br>- Type: "CConstitutionalCommitteeColdVerificationKey_ed25519" <br>- Description: "Constitutional Committee Cold Verification Key" |
| Failing to provide a file name for any of the flags `--verification-key-file` `--signing-key-file` returns an appropriate error message.|Given the user has not inputted either `--verification-key-file` OR `--signing-key-file`, then the command fails and returns an error.|


## User Story ID:  CLI.005
- [ ] Enabler
### Title: Authorization certificate (CCM)
### User Story
- As a committee member,<br>
I want to issue an authorization certificate from my cold key to a hot key,<br>
so that I can sign votes using the hot key and keep the cold key in cold storage.

### Functional requirements
| Requirements  | Acceptance Criteria  |
|:----|:----|
| The feature implementation should include a new command `cardano-cli conway governance committee create-hot-key-authorization-certificate`| Running `cardano-cli conway governance committee create-hot-key-authorization-certificate` with accepted input parameters generates a hot key authorization certificate. If a parameter or the command format is incorrect an error is raised |
| Includes the necessary flags to obtain cold and hot credentials.| The command allows passing credentials as follows <br>-  Cold verification key <- string <br>-  Cold verification key file <- file <br>-  Cold verification key hash <- string <br>-  Hot verification key <- string <br>-  Hot verification key file <- file <br>-  Hot verification key hash <- string  |
| Running the command with the appropriate flags should generate a hot key authorization certificate and be saved in the specified output file.| Given that the user specifies a valid path and file name, then the command produces a Cold to Hot authorization certificate on the right location and name.  |
| The hot key authorization certificate follows the text envelope format of other existing certificates, including the type, description, and CBOR hex fields| Given that the authorization certificate is saved, then it is in a text envelope format consisting of a json object with type, description and cbor hex field ```json { "type": "CertificateConway", "description": "Constitutional Committee Hot Key Authorization Certificate", "cborHex": ""}```
| The certificate must comply with the cddl: `auth_committee_hot_cert = (14, committee_cold_credential, committee_hot_credential)`| Generates a authorization certificate compliant with the conway cddl.   `auth_committee_hot_cert = (14, committee_cold_credential, committee_hot_credential)`  |
| The command handles potential errors, such as missing or invalid flags, and provide appropriate error messages indicating the missing or required parameters.| The command handles potential errors, such as missing or invalid flags, and provide appropriate error messages indicating the missing or required parameters. Failing to provide the right input results in a clear error message that helps the user to identify the problem  |
| Documentation should be provided, including a corresponding CLI usage, describing the feature, its purpose, and how to use it, along with the expected types of inputs and outputs.| Running `cardano-cli conway governance committee create-hot-key-authorization-certificate —-help` displays command usage  |


## User Story ID:  CLI.006
- [ ] Enabler
### Title: Generate committee member key hash (CCM)
### User Story
- As a potential constitutional committee member,<br>
I want to generate the key hashes for my cold verification key,<br>
so that it can be used by third parties to propose me as a new committee member;<br>
and for identification purposes once Ive been elected as committee member.
### Functional requirements
| Requirements  | Acceptance Criteria  |
|:----|:----|
| The implementation includes the new command `cardano-cli conway governance committee key-hash`<br> Generates the blake2b 256 hash of the verification key. | Running `cardano-cli conway governance committee key-hash` with accepted input parameters generates blake2b 256 hash of the verification key. If a parameter or the command format is incorrect an error is raised
| Allows passing credentials with Cold verification key <- string and Cold verification key file <- file | Passing the cold-verification-key or cold-verification-key-file is mandatory. If the key or file is of a different type, an exception is raised |
| Gives the option to save the key hash to a file, default is printing to stdout | Given that the user specifies the `-–out-file` option and a valid path and file name, then the key hash is saved on that file and location.<br> If `--out-file` is not used, the hash in printed to stdout |
| Handles potential errors, such as missing flags or invalid input, and provides appropriate error messages or exceptions to guide the user. | Given that the user has executed the correct command but has either filled incorrectly any of the parameters, missed any mandatory flag and/or parameter  then an exception should be raised and an error message should be returned with clear indication as to how to fix the issue. When not feasible, the user should be directed to the usage page of the command (`cardano-cli conway governance committee key-hash --help`). |
| Documentation should be provided, including a corresponding CLI usage, describing the feature, its purpose, and how to use it, along with the expected types of inputs and outputs. | Running  `cardano-cli conway governance committee key-hash --help` display the command usage page. |

## User Story ID:  CLI.007
- [ ] Enabler
### Title: Committee member resignation certificate (CCM)
### User Story
- As a constitutional committee member,<br>
I want to be able to generate a resignation certificate,<br>
so that i can submit it to the chain on a transaction to signal to the ada holders that I’m resigning from my duties.

### Functional requirements
| Requirements  | Acceptance Criteria  |
|:----|:----|
| The command should be implemented in the cardano-cli as `cardano-cli conway governance committee create-cold-resignation-certificate` | Running `cardano-cli governance committee create-cold-resignation-certificate` with accepted input parameters generates a cold resignation certificate. |
| Allows passing credentials via:<br> Cold verification key <- string<br> Cold verification key file <- file<br>Cold verification key hash <- string | Passing the cold credential is mandatory, achieved with any of the flags:<br> `--cold-verification-key-file`<br> `--cold-verification-key-hash`<br> `--cold-verification-key`<br> If the input has the wrong format or type the cli raises an exception. |
| Allows an optional anchor (url/hash) to express motives for resignation. The CLI does not need to check for the validity of the URL, the contents, or that the documents and declared hash match. | Passing an anchor is achieved with the flags:<br> `--resignation-metadata-url`<br> `--resignation-metadata-hash`.<br> If the user chooses to pass an achor both flags are mandatory, passing only the url or only the hash is not allowed.
| Includes a mandatory flag for saving the certificate to a file. | Given that a valid path and file name are specified, then the certificate is saved on the specified location. |
| The resignation certificate follows the text envelope format of other existing certificates, including the type, description, and CBOR hex fields<br> The certificate type must be `CertificateConway`.<br> The certificate description must be `Constitutional Committee Cold Key Resignation Certificate`. | Given that the resignation certificate is saved, then it is in a text envelope format consisting of a json object with type, description and cbor hex fields. <br><br> {<br>"type": "CertificateConway",<br> "description": "Constitutional Committee Cold Key Resignation Certificate",<br> "cborHex": ""<br>} |
| Generates a resignation certificate compliant with the conway cddl: `resign_committee_cold_cert = (15, committee_cold_credential, anchor / null)` | The cborHex field conforms to the conway cddl: `resign_committee_cold_cert = (15, committee_cold_credential, anchor / null)` |
| The command handles potential errors, such as missing or invalid flags or keys, and provide appropriate error messages indicating the missing or required parameters. | Given that the user has executed the correct command but has either filled incorrectly any of the parameters, missed any mandatory flag and/or parameter  then an exception should be raised and an error message should be returned with clear indication as to how to fix the issue. When not feasible, the user should be directed to the usage page of the command (`cardano-cli conway governance committee key-hash --help`). |
| Documentation should be provided, including a corresponding CLI usage, describing the feature, its purpose, and how to use it, along with the expected types of inputs and outputs. | Running `cardano-cli conway governance committee create-cold-resignation-certificate --help` displays the command usage page |

## User Story ID:  CLI.008
- [ ] Enabler
### Title: Generate Drep keys (HOLDER)
### User Story
- As an ada holder,<br>
I want to generate Ed25519 keys,<br>
so that I can register as a DRep.

### Functional requirements
| Requirements  | Acceptance Criteria  |
|:----|:----|
| The command is implemented as `cardano-cli conway governance drep key-gen` | Running `cardano-cli conway governance drep key-gen` with accepted input parameters generates an Ed25519 key pair |
| Supports the `--verification-key-file` option to specify the file where the verification key will be saved. | When valid paths and file names are specified, the key files is saved on the specified location. <br> The flag `--verification-key-file` is mandatory, failing to provide it raises an error. |
| Supports the `--signing-key-file` option to specify the file where the signing key will be saved |When valid paths and file names are specified, the key files is saved on the specified location.<br> The flag `--signing-key-file` is mandatory, failing to provide it raises an error. |
| The generated key files must adhere to text envelope format used for other artifacts and contains the fields Type, Description and cborHex. | The signing key text envelope contains the correct type, description, and cborHex values.<br> `Type: "DRepVerificationKey_ed25519"` <br> `Description: "Delegate Representative Verification Key"` |

## User Story ID:  CLI.009
- [ ] Enabler
### Title: Generate Drep ID (DRep)
### User Story
- As a DRep,<br>
I want to generate a Drep Id,<br>
so that my voting record can be tracked,<br>
and ada holders can use the DrepId to delegate their votes to me.

### Functional requirements
| Requirements  | Acceptance Criteria  |
|:----|:----|
| The command is implemented as `cardano-cli conway governance drep id` and generates the blake2b-224 hash digest of the serialized DRep credential (verification key). | Running  `cardano-cli conway governance drep id` with accepted input parameters generates a DRep ID: the blake2b-224 hash digest of the verification key.|
| The command accepts supplying the verification key with either:<br> Drep verification key<br> Drep verification key file |Using one of the flags is mandatory, the flags are mutually exclusive:<br> `--drep-verification-key <- string`<br> `-–drep-verification-key-file  <- file` |
| Supports an optional flag to allow users to save the generated DRep ID to a file. Default is printing to stdout. | Given that a valid path and file name are supplied, then, using the `–out-file` flag saves the drep id to a file on the specified location. If the specified path does not exist or is inaccessible the cli returns an error message.<br> If the –out-flag is not used the Drep ID is printed on stdout |
| Provides an option to specify the output format. Accepted output formats are "hex" and "bech32". "bech32" is the default format.| The flag `--output-format` is optional. <br> When not used, the output defaults to bech32. <br> When used with “bech32” as argument, then the DRep Id is printed in bech32 format with the “drep” prefix.<br> When used with "hex" as argument, then the DRep Id is printed in hex format.|
| Handles errors gracefully and provides helpful error messages when required options are missing or invalid inputs are provided. | If any required input parameter is missing or incorrect, the command should raise an error indicating the missing or incorrect argument. |
| Documentation should be provided, including a corresponding CLI usage, describing the feature, its purpose, and how to use it, along with the expected types of inputs and outputs. | Running `cardano-cli conway governance drep id --help` displays the command usage page. |

## User Story ID:  CLI.010
- [ ] Enabler
### Title: DRep Registration Certificate Generation (DRep)
### User Story
As a DRep,<br>
I want to generate a DRep registration certificate,<br>
so that I can submit it in a transaction and be eligible for receiving delegation.

### Functional requirements
| Requirements  | Acceptance Criteria  |
|:----|:----|
| The command is implemented as `cardano-cli conway governance drep registration-certificate`. | Running `cardano-cli conway governance drep registration-certificate` with accepted input parameters generates a DRep registration certificate.|
| Requires the user to provide the DRep key deposit amount. | The flag `--key-reg-deposit-amt` is mandatory and takes the deposit amount in lovelace as an argument.|
| The command allows the user to provide the DRep credential in the following ways:<br> DRep verification key. <br> DRep verification key file <br> DRep ID | The command presents the options to pass the DRep credential: <br>`--drep-verification-key STRING` <br> `--drep-verification-key-file FILE`<br>`--drep-id STRING`<br> Using one of these flags is mandatory but mutually exclusive. |
| Allows adding an optional anchor (url/hash) to submit any DRep metadata. | Adding metadata is optional, but when used the flags are mandatory<br>  `--drep-metadata-url TEXT`<br> `--drep-metadata-hash HASH`<br> When used, the anchor is included in the certificate on the last position, otherwise the field is null: `reg_drep_cert = (16, drep_credential, coin, anchor / null)`.|
| Supports a mandatory flag to specify the file where the generated DRep registration certificate will be saved. | The flag `--out-file` is mandatory and takes the file path and name as an argument.<br> Failing to provide the right input results in a clear error message that helps the user identify the problem. |
| Generates a registration certificate compliant with the Conway CDDL. | The ccborHex of the certificate complies with the format specified on the cddl `reg_drep_cert = (16, drep_credential, coin, anchor / null)`|
| The certificate should be in a text envelope format, containing a json object with the fields type, description and cborHex.| Given that the certificate is saved, it should be in a text envelope format consisting of a JSON object with type, description, and CBOR hex fields, where:<br>{<br> "type": "CertificateConway",<br> "description": "DRep Registration Certificate",<br> "cborHex": ""<br>}<br> |
| The feature implementation should be well-documented, providing clear usage instructions.| Running `cardano-cli conway governance drep registration-certificate --help` displays the command usage page. |
| Handles errors gracefully and provide helpful error messages when required options are missing or invalid inputs are provided. |If any required input parameter is missing or incorrect, the command should raise an error indicating the missing or incorrect parameter.|

## User Story ID:  CLI.011
- [ ] Enabler
### Title: DRep Retirement Certificate Generation (DRep)
### User Story
As a DRep,<br>
I want to generate a DRep retirement (unregistration) certificate,<br>
so that I can submit it in a transaction stop acting as a governance actor,<br>
and retrieve my DRep deposit.

### Functional requirements
| Requirements  | Acceptance Criteria  |
|:----|:----|
| The command is implemented as `cardano-cli conway governance drep retirement-certificate`. | Running `cardano-cli conway governance drep retirement-certificate` with accepted input parameters generates a DRep retirement certificate.|
| Allows supplying the DRep credentials in the following ways:<br> DRep verification key <br> DRep verification key file<br> Drep Id| The command accepts any the flags:<br>`--drep-verification-key STRING`<br>`--drep-verification-key-file FILE`<br>`--drep-id STRING`<br> Supplying the credential is mandatory, so the group of flags is mandatory |
| Has the mandatory flag to require the user to input the DRep deposited amount that is to be returned. <br> Must match the deposit originally paid when registering as DRep but is only checked when submitting the transaction.| The flag `--deposit-amt` is mandatory and takes the deposit amount in lovelace as an argument.|
| Supports a mandatory flag to specify the file where the generated DRep retirement certificate will be saved.| The flag `--out-file` is mandatory and takes the file path and name as an argument.|
| The certificate should be in a text envelope format similar to stake pools deregistration certificates. | Given that the certificate is saved, it should be in a text envelope format consisting of a JSON object with type, description, and CBOR hex fields, where:<br>{<br>"type": "CertificateConway",<br> "description": "DRep Retirement Certificate",<br>"cborHex": ""<br>}<br> |
| The output certificate complies with the Conway CDDL: `unreg_drep_cert = (17, drep_credential, coin)`.|The cborHex field conforms to the conway cddl: `unreg_drep_cert = (17, drep_credential, coin)`.|
| The feature implementation should be well-documented, providing clear usage instructions. | Running `cardano-cli conway governance drep retirement-certificate --help` displays the command usage page.|
| Handles errors gracefully and provides helpful error messages when required options are missing or invalid inputs are provided. | If any required input parameter is missing or incorrect, the command raise an error indicating the missing or incorrect parameter.|

## User Story ID: CLI.012
- [ ] Enabler
### Title: DRep Metadata Hash Generation (DRep)
### User Story
 - As a DRep,<br>I want to generate the hash of my DRep metadata,<br>so that I can supply it when registering as a DRep.
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| The command is implemented as `cardano-cli conway governance drep metadata-hash`. | Running `cardano-cli conway governance drep metadata-hash` successfully generates the blake2b 256 hash of the specified DRep metadata file. |
| Calculates the blake2b 256 hash of the file supplied by the user.<br> |  The command requires the user to provide the DRep metadata file using the `--drep-metadata-file FILE` option. |
| Requires the `--drep-metadata-file FILE` option to specify the file containing the DRep metadata. | The command allows users to use the optional `--out-file FILE` option to save the calculated metadata hash to the specified file. If not used, the hash is printed to stdout. |
| Supports the `--out-file FILE` option (optional) to enable users to save the calculated metadata hash to the specified file. If the flag is not used, the hash is printed to stdout. | Running `cardano-cli conway governance drep metadata-hash --help` displays the command usage page. |
| The command handles errors gracefully and provides helpful error messages when required options are missing or invalid inputs are provided. | If any required input parameter is missing or incorrect, the command raises an error indicating the missing or incorrect parameter. |
| The feature implementation should be well-documented, providing clear usage instructions. | Running `cardano-cli conway governance drep metadata-hash --help` displays the command usage page. |


## User Story ID: CLI.013
- [ ] Enabler
### Title: Create Update Constitution Governance Action (HOLDER)
### User Story
 - As an ADA holder,<br>I want to create a governance action that updates the constitution,<br>so that it can be submitted to the chain and be voted on by the governance bodies.
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| The command is implemented as `cardano-cli conway governance action create-constitution`. | Running `cardano-cli conway governance action create-constitution` successfully creates a governance action for updating the constitution. |
| Requires the user to specify the target network for which the governance action is created. | The command requires the user to specify the target network using either `--mainnet` or `--testnet-magic NATURAL`. |
| Requires the user to provide the deposit amount for submitting governance actions via the flag `--governance-action-deposit`. | The command prompts the user to provide the deposit amount for submitting governance actions via the flag `--governance-action-deposit`.<br>    - The deposit amount must match the original deposit when registering the governance action but is only checked when submitting the transaction. |
| Requires the user to provide the stake credential that will receive the deposit return when the action is enacted/expired. It accepts: | The user provides the deposit return stake credential using one of the following options:<br>    - `--deposit-return-stake-verification-key STRING`<br>    - `--deposit-return-stake-verification-key-file FILE` to specify the file containing the deposit return stake verification key. |
|  | `--deposit-return-stake-key-hash HASH` to directly specify the deposit return stake key hash as a string. |
| Allows the user to provide the transaction ID and index of the previously enacted action of this type. These flags are optional, but if one is used, the other one must be used too, to support the very first action of this type on the system that does not require information about previously enacted actions. The flags are:<br>  - `--prev-governance-action-tx-id`<br>  - `--prev-governance-action-index` | The optional flags `--prev-governance-action-tx-id` and `--prev-governance-action-index`are available to support the very first action of this type on the system, which does not require information about previously enacted actions. |
| Asks the user to provide a mandatory anchor (URL/hash) of the proposal, a document where the proposer exposes the reasoning behind the proposed change. | The user provides an anchor (URL/hash) of the proposal document the following options:<br>    - `--anchor-url`<br>    - `--anchor-data-hash` |
| Requires the user to provide an anchor of the new constitution |  The user provides an anchor (URL/hash) of the new constitution the following options:<br>    - `--constitution-url`<br>    - `--constitution-hash` |
| The command has a flag to specify the path where the output file will be saved. | The `--out-file` flag is available to specify the file where the generated governance action (proposal) will be saved. |
| The generated governance action complies with the Conway CDDL, where:<br>    - proposal_procedure = [ deposit : coin, reward_account, gov_action, anchor ]<br>    -  new_constitution = (5, gov_action_id / null, constitution)<br>    -  constitution = [ anchor, scripthash / null ] | The generated governance action complies with the Conway CDDL:<br>    - proposal_procedure = [ deposit : coin, reward_account, gov_action, anchor ]<br>    - new_constitution = (5, gov_action_id / null, constitution)<br>    - constitution = [ anchor, scripthash / null ] |
| The command handles errors gracefully and provides helpful error messages when required options are missing or invalid inputs are provided. | If any required input parameter is missing or incorrect, the command raises an error indicating the missing or incorrect parameter. |
| The feature implementation should be well-documented, providing clear usage instructions. | Running `cardano-cli conway governance drep metadata-hash --help` displays the command usage page. |


## User Story ID:  CLI.014
- [ ] Enabler
### Title: Create Update Constitutional Committee Governance Action (HOLDER)
### User Story
As an ADA holder,<br>
I want to create a governance action that updates the constitutional committee,<br>
so that it can be submitted to the chain and be voted on by the governance bodies.

### Functional requirements
| Requirements  | Acceptance Criteria  |
|:----|:----|
| The command is implemented as `cardano-cli conway governance action create-constitutional-committee`. | Running `cardano-cli conway governance action create-constitutional-committee` successfully creates a governance action for updating the constitutional committee.
| Requires the user to specify the target network for which the governance action is created. | The command requires the user to specify the target network using either `--mainnet` or `--testnet-magic NATURAL`.
| Requires the user to provide the deposit amount for submitting governance actions via the flag `--governance-action-deposit`. | The command prompts the user to provide the deposit amount for submitting governance actions via the flag `--governance-action-deposit`.
| Requires the user to provide the stake credential that will receive the deposit return when the action is enacted/expired. It accepts: | The user provides the deposit return stake credential using one of the following options:<br>  `--deposit-return-stake-verification-key STRING`<br>  `--deposit-return-stake-verification-key-file FILE` to specify the file containing the deposit return stake verification key.<br> `--deposit-return-stake-key-hash HASH` to directly specify the deposit return stake key hash as a string.
| Allows the user to provide the transaction ID and index of the previously enacted action of this type. These flags are optional, but if one is used, the other one must be used too, to support the very first action of this type on the system that does not require information about previously enacted actions. The flags are:<br> `--prev-governance-action-tx-id`<br>  `--prev-governance-action-index`  |  |
| Asks the user to provide a mandatory anchor (URL/hash) of the proposal, a document where the proposer exposes the reasoning behind the proposed change.  | The user provides an anchor (URL/hash) of the proposal document using the following flags:<br> `--anchor-url`<br> `--anchor-data-hash`| The command offers the option to remove many constitutional committee members, it accepts:<br>- Cold verification key <- string<br>-   Cold verification key file <- file<br>- Cold verification key hash <- string  | The command offers the option to remove many constitutional committee members, it accepts any of: <br> `--remove-cc-cold-verification-key-hash`<br> `--remove-cc-cold-verification-key`<br> `--remove-cc-cold-verification-key-file`
| The command offers the option to add many constitutional committee members, it accepts<br>-  Cold verification key <- string<br>-   Cold verification key file <- file<br>- Cold verification key hash <- string<br>- When adding a new member, the command requires the user to also provide a term in epochs for each new member  |  The command offers the option to add many constitutional committee members, it acceptw any of:<br> `--add-cc-cold-verification-key`<br> `--add-cc-cold-verification-key-file`<br> `--add-cc-cold-verification-key-hash`<br>- When adding a new member, the command requires the user to also provide a term for each new member using the flag `--epoch`.
| The command allows proposing a new quorum threshold:<br>-  When adding members<br>-   When removing members<br>-  As a standalone action (no adds or removals)  | The command allows proposing a new quorum threshold:<br>-  When adding members<br>-  When removing members<br>- As a standalone action (no adds or removals)
| Flag to specify where the generated governance action (proposal) will be saved.  | The `--out-file` flag is available to specify the file where the generated governance action (proposal) will be saved.
| The generated governance action complies with the Conway CDDL:<br>  `proposal_procedure = [ deposit : coin, reward_account, gov_action, anchor ]`<br>  `update_committee = (4, gov_action_id / null, set<committee_cold_credential>, { committee_cold_credential => epoch }, unit_interval)` |  The generated governance action complies with the Conway CDDL:<br> ` proposal_procedure = [ deposit : coin, reward_account, gov_action, anchor ]`<br>`update_committee = (4, gov_action_id / null, set<committee_cold_credential>, { committee_cold_credential => epoch }, unit_interval)`
| Documentation should be provided, including a corresponding CLI usage, describing the feature, its purpose, and how to use it, along with the expected types of inputs and outputs.  | Running `cardano-cli conway governance action create-constitutional-committee --help` displays the command usage page.<br>- If any required input parameter is missing or incorrect, the command raise an error indicating the missing or incorrect parameter.


## User Story ID:  CLI.015
- [ ] Enabler
### Title: Create Treasury Withdrawal Governance Action (HOLDER)
### User Story
As an ADA holder,<br>
I want to create a governance action to withdraw funds from the treasury,<br>
so that it can be submitted to the chain and be voted on by the governance bodies.

### Functional requirements

| Requirements  | Acceptance Criteria  |
|:----|:----|
| The command is implemented as `cardano-cli conway governance action create-treasury-withdrawal`. | Running `cardano-cli conway governance action create-treasury-withdrawal` successfully creates a governance action for withdrawing funds from the treasury.
| Requires the user to specify the target network for which the governance action is created using either `--mainnet` or `--testnet-magic NATURAL`. | The command requires the user to specify the target network using either `--mainnet` or `--testnet-magic NATURAL`.
| Requires the user to provide the deposit amount for submitting governance actions via the flag `--governance-action-deposit`. | The command prompts the user to provide the deposit amount for submitting governance actions via the flag `--governance-action-deposit`.
| Requires the user to provide the stake credential that will receive the deposit return when the action is enacted/expired. | The user provides the deposit return stake credential using one of the following options:<br> `--deposit-return-stake-verification-key STRING`<br> `--deposit-return-stake-verification-key-file FILE`<br> `--deposit-return-stake-key-hash HASH`<br>Using one of these is mandatory
| Requires the user to provide an anchor (URL/hash) | The user provides an anchor (URL/hash) of the proposal document using the following flags:<br>`--anchor-url`<br> `--anchor-data-hash`
| Requires the user to provide the stake credential that will receive the funds if the governance action is ratified. | The user provides the stake credential that will receive the funds if the governance action is ratified using one of the following options:<br> `--funds-receiving-stake-verification-key-file FILE`<br>`--funds-receiving-stake-verification-key STRING`<br>`--funds-receiving-stake-key-hash HASH` <br> Using one of these is mandatory
| Requires the user to provide the amount in lovelace that will be transferred from the treasury to the stake credential if the action is ratified. | The user can use the flag `--transfer`to specify the amount in lovelace that will be transferred from the treasury to the stake credential if the action is ratifieduse the flag
| The command has the `--out-file` flag available to specify the file where the generated governance action (proposal) will be saved. | Given that the user specifies a valid flag, path and file name, Then the governace action is saved on that file and location. **The flag is mandatory.**
| The generated governance action complies with the Conway CDDL | <br>`proposal_procedure = [ deposit : coin, reward_account, gov_action, anchor ]`<br>`treasury_withdrawals_action = (2, { reward_account => coin })`
| Documentation should be provided, including a corresponding CLI usage, describing the feature, its purpose, and how to use it, along with the expected types of inputs and outputs. | Running `cardano-cli conway governance action create-treasury-withdrawal --help` displays the command usage page.<br>mIf any required input parameter is missing or incorrect, the command raise an error indicating the missing or incorrect parameter.


## User Story ID: CLI.016
- [ ] Enabler
### Title: Create info governance action (HOLDER)
### User Story
 - As an ada holder<br>I want to create an info governance action<br>So that it can be submitted to the chain and be voted by the governance bodies<br>cardano-cli conway governance action create-info
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| The command is implemented as `cardano-cli conway governance action create-info`. | Running `cardano-cli conway governance action create-info` successfully creates an info governance action for updating the constitution. |
| Requires the user to specify the target network for which the governance action is created using either `--mainnet` or `--testnet-magic NATURAL`.	 | The command requires the user to specify the target network using either `--mainnet` or `--testnet-magic NATURAL`. |
| Requires the user to provide the deposit amount for submitting governance actions via the flag `--governance-action-deposit`. | The command prompts the user to provide the deposit amount for submitting governance actions via the flag `--governance-action-deposit`. |
| The command requires the user to provide the stake credential that will receive the deposit return when the action is enacted/expired. <br><br>It must accept a return stake verification key file, a return stake verification key or the return stake key hash | It accepts: <br><br>`--stake-verification-key-file`<br>`--stake-verification-key`<br>`--stake-key-hash`<br><br>Using one of these is mandatory |
| The command requires the user to provide an anchor (url / hash) of the proposal. A document where the proposer exposes the reasoning behind the proposed change. <br> | The user provides an anchor (URL/hash) of the proposal document using the following flags:<br>`--anchor-url`<br>`--anchor-data-hash` |
| The command has a flag to specify the path where the output file will be saved. | The `--out-file` flag is available to specify the file where the generated governance action (proposal) will be saved. |
| The generated governance action complies with the conway cddl  | The generated governance action complies with the Conway CDDL where:<br>`proposal_procedure =`<br> `[ deposit : coin`<br> `, reward_account`<br> `, gov_action`<br> `, anchor`<br> `]`<br>`info_action = 6` |
| The command handles errors gracefully and provides helpful error messages when required options are missing or invalid inputs are provided. | If any required input parameter is missing or incorrect, the command raises an error indicating the missing or incorrect parameter. |
| The feature implementation should be well-documented, providing clear usage instructions. | Running `cardano-cli conway governance action create-info --help` displays the command usage page. |


## User Story ID: CLI.017
- [ ] Enabler
### Title: Create update protocol parameters governance action (HOLDER)
### User Story
 - As an ada holder<br>I want to create a governance action to update protocol parameters<br>So that it can be submitted to the chain and be voted by the governance bodies
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| The command is implemented as `cardano-cli conway governance action create-protocol-parameters-update`. | Running `cardano-cli conway governance action create-protocol-parameters-update` successfully creates an info governance action for updating the protocol parameters. |
| Requires the user to specify the target network for which the governance action is created using either `--mainnet` or `--testnet-magic NATURAL`.	 | The command requires the user to specify the target network using either `--mainnet` or `--testnet-magic NATURAL`. |
| Requires the user to provide the deposit amount for submitting governance actions via the flag `--governance-action-deposit`. | The command prompts the user to provide the deposit amount for submitting governance actions via the flag `--governance-action-deposit`. |
| The command requires the user to provide the stake credential that will receive the deposit return when the action is enacted/expired. <br><br>It must accept a return stake verification key file, a return stake verification key or the return stake key hash | It accepts: <br><br>`--stake-verification-key-file`<br>`--stake-verification-key`<br>`--stake-key-hash`<br><br>Using one of these is mandatory |
| The command allows the user to provide the transaction id and index of the previously enacted action of this type.  | These flags are optional (but if one is used the other one must be used too)  to support the very first action of this type on the system which does not require information about previously enacted actions. <br>`--governance-action-tx-id` <br>`--governance-action-index` |
| The command includes dedicated flags to reference the protocol parameter that the user is attempting to modify. The parameters that can be included in this type of proposal are:<br><br><br>The network group consists of:<br>- maximum block body size (maxBBSize)<br>- maximum transaction size (maxTxSize)<br>- maximum block header size (maxBHSize)<br>- maximum size of a serialized asset value (maxValSize)<br>- maximum script execution units in a single transaction (maxTxExUnits)<br>- maximum script execution units in a single block (maxBlockExUnits)<br>- maximum number of collateral inputs (maxCollateralInputs)<br><br>The economic group consists of:<br>- minimum fee coefficient (minFeeA)<br>- minimum fee constant (minFeeB)<br>- delegation key Lovelace deposit (keyDeposit)<br>- pool registration Lovelace deposit (poolDeposit)<br>- monetary expansion (rho)<br>- treasury expansion (tau)<br>- minimum fixed rewards cut for pools (minPoolCost)<br>- minimum Lovelace deposit per byte of serialized UTxO (coinsPerUTxOByte)<br>- prices of Plutus execution units (prices)<br><br>The technical group consists of:<br>- pool pledge influence (a0)<br>- pool retirement maximum epoch (eMax)<br>- desired number of pools (nOpt)<br><br>Plutus execution cost models (costModels)<br>- proportion of collateral needed for scripts (collateralPercentage)<br><br>The governance group consists of all the new protocol parameters that are introduced in this CIP:<br>- governance voting thresholds<br>- dRepVotingThresholds<br>- dvtCommitteeNoConfidence<br>- dvtCommitteeNormal<br>- dvtHardForkInitiation<br>- dvtMotionNoConfidence<br>- dvtPPEconomicGroup<br>- dvtPPGovGroup<br>- dvtPPNetworkGroup<br>- dvtPPTechnicalGroup<br>- dvtTreasuryWithdrawal<br>- dvtUpdateToConstitution<br>- poolVotingThresholds<br>- pvtCommitteeNoConfidence<br>- pvtCommitteeNormal<br>- pvtHardForkInitiation<br>- pvtMotionNoConfidence<br>- governance action maximum lifetime in epochs (govActionLifetime)<br>- governance action deposit (govActionDeposit)<br>- DRep deposit amount (drepDeposit)<br>- DRep activity period in epochs (drepActivity)<br>- minimal constitutional committee size (ccMinSize)<br>- maximum term length (in epochs) for the constitutional committee members (ccMaxTermLength) | The command must accept these flags and execute with the required outcome.<br><br>**The network group consists of:** <br>`--max-block-body-size` (NATURAL) <br>`--max-tx-size` (NATURAL) <br>`--max-block-header-size` (NATURAL) <br>`--max-value-size` (INT) <br>`--max-tx-execution-units` (INT, INT) <br>`--max-block-execution-units` (INT, INT) <br>`--max-collateral-inputs` (INT)<br><br>**The economic group consists of:** <br>`--min-fee-constant` (LOVELACE) <br>`--min-fee-linear` (LOVELACE) <br>`--key-reg-deposit-amt` (NATURAL) <br>`--pool-reg-deposit` (NATURAL) <br>`--monetary-expansion` (RATIONAL) <br>`--treasury-expansion` (RATIONAL) <br>`--min-pool-cost` (NATURAL) <br>`--utxo-cost-per-byte` (LOVELACE) <br>`--price-execution-steps` (RATIONAL)<br><br>**The technical group consists of:** <br>`--pool-influence` (RATIONAL) <br>`--pool-retirement-epoch-boundary` (EPOCH_BOUNDARY) <br>`--number-of-pools` (NATURAL)<br><br>**Plutus execution cost models (costModels)** <br>`--collateral-percent` (INT)<br><br>**The governance group:** <br>`--drep-voting-threshold-motion-no-confidence` (RATIONAL) <br>`--drep-voting-threshold-committee-normal` (RATIONAL) <br>`--drep-voting-threshold-committee-no-confidence` (RATIONAL) <br>`--drep-voting-threshold-committee-normal` (RATIONAL) <br>`--drep-voting-threshold-hard-fork-initiation` (RATIONAL) <br>`--drep-voting-threshold-pp-economic-group` (RATIONAL) <br>`--drep-voting-threshold-pp-governance-group` (RATIONAL) <br>`--drep-voting-threshold-pp-network-group` (RATIONAL) <br>`--drep-voting-threshold-pp-technical-group` (RATIONAL) <br>`--drep-voting-threshold-treasury-withdrawal` (RATIONAL) <br>`--drep-voting-threshold-update-to-constitution` (RATIONAL) <br>`--pool-voting-threshold-committee-no-confidence` (RATIONAL) <br>`--pool-voting-threshold-committee-normal` (RATIONAL) <br>`--pool-voting-threshold-hard-fork-initiation` (RATIONAL) <br>`--governance-action-lifetime` (NATURAL) <br>`--governance-action-deposit` (NATURAL) <br>`--drep-deposit` (LOVELACE) <br>`--drep-activity` (NATURAL) <br>`--min-committee-size` (INT) <br>`--committee-term-length` (INT) |
| The command requires the user to provide an anchor (url / hash) of the proposal. A document where the proposer exposes the reasoning behind the proposed change. <br> | The user provides an anchor (URL/hash) of the proposal document using the following flags:<br>`--anchor-url`<br>`--anchor-data-hash` |
| The command has a flag to specify the path where the output file will be saved. | The `--out-file` flag is available to specify the file where the generated governance action (proposal) will be saved. |
| The generated governance action complies with the conway cddl  | The generated governance action complies with the Conway CDDL where:<br>`proposal_procedure =`<br> `[ deposit : coin`<br> `, reward_account`<br> `, gov_action`<br> `, anchor`<br> `]`<br>`parameter_change_action = (0, gov_action_id / null, protocol_param_update)` |
| The command handles errors gracefully and provides helpful error messages when required options are missing or invalid inputs are provided. | If any required input parameter is missing or incorrect, the command raises an error indicating the missing or incorrect parameter. |
| The feature implementation should be well-documented, providing clear usage instructions. | Running `cardano-cli conway governance action create-protocol-parameters-update --help` displays the command usage page. |


## User Story ID: CLI.018
- [ ] Enabler
### Title: Create no-confidence governance action (HOLDER)
### User Story
 - As an ada holder<br>I want to create a no-confidence governance action<br>So that it can be submitted to the chain and be voted by the governance bodies
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| The command is implemented as `cardano-cli conway governance action create-no-confidence`. | Running `cardano-cli conway governance action create-no-confidence` successfully creates  no-confidence governance action. |
| Requires the user to specify the target network for which the governance action is created using either `--mainnet` or `--testnet-magic NATURAL`.	 | The command requires the user to specify the target network using either `--mainnet` or `--testnet-magic NATURAL`. |
| Requires the user to provide the deposit amount for submitting governance actions via the flag `--governance-action-deposit`. | The command prompts the user to provide the deposit amount for submitting governance actions via the flag `--governance-action-deposit`. |
| The command requires the user to provide the stake credential that will receive the deposit return when the action is enacted/expired. <br><br>It must accept a return stake verification key file, a return stake verification key or the return stake key hash | It accepts: <br><br>`--stake-verification-key-file`<br>`--stake-verification-key`<br>`--stake-key-hash`<br><br>Using one of these is mandatory |
| The command allows the user to provide the transaction id and index of the previously enacted action of this type.  | These flags are optional (but if one is used the other one must be used too)  to support the very first action of this type on the system which does not require information about previously enacted actions. <br>`--governance-action-tx-id` <br>`--governance-action-index` |
| The command requires the user to provide an anchor (url / hash) of the proposal. A document where the proposer exposes the reasoning behind the proposed change. <br> | The user provides an anchor (URL/hash) of the proposal document using the following flags:<br>`--anchor-url`<br>`--anchor-data-hash` |
| The command has a flag to specify the path where the output file will be saved. | The `--out-file` flag is available to specify the file where the generated governance action (proposal) will be saved. |
| The generated governance action complies with the conway cddl  | The generated governance action complies with the Conway CDDL where:<br>`proposal_procedure =`<br> `[ deposit : coin`<br> `, reward_account`<br> `, gov_action`<br> `, anchor`<br> `]`<br>`no_confidence = (3, gov_action_id / null)` |
| The command handles errors gracefully and provides helpful error messages when required options are missing or invalid inputs are provided. | If any required input parameter is missing or incorrect, the command raises an error indicating the missing or incorrect parameter. |
| The feature implementation should be well-documented, providing clear usage instructions. | Running `cardano-cli conway governance action create-no-confidence --help` displays the command usage page. |


## User Story ID: CLI.019
- [ ] Enabler
### Title: Create Hard-fork initiation governance action (HOLDER)
### User Story
 - As an ada holder<br>I want to create a governance action to initiate a hardfork<br>So that it can be submitted to the chain and be voted by the governance bodies
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| The command is implemented as `cardano-cli conway governance action create-hf-init`. | Running `cardano-cli conway governance action create-hf-init` successfully creates a hard-fork initiation governance action. |
| Requires the user to specify the target network for which the governance action is created using either `--mainnet` or `--testnet-magic NATURAL`.	 | The command requires the user to specify the target network using either --mainnet or --testnet-magic NATURAL. |
| Requires the user to provide the deposit amount for submitting governance actions via the flag `--governance-action-deposit`. | The command prompts the user to provide the deposit amount for submitting governance actions via the flag `--governance-action-deposit`. |
| The command requires the user to provide the stake credential that will receive the deposit return when the action is enacted/expired. <br><br>It must accept a return stake verification key file, a return stake verification key or the return stake key hash | It accepts: <br><br>`--stake-verification-key-file`<br>`--stake-verification-key`<br>`--stake-key-hash`<br><br>Using one of these is mandatory |
| The command allows the user to provide the transaction id and index of the previously enacted action of this type.  | These flags are optional (but if one is used the other one must be used too)  to support the very first action of this type on the system which does not require information about previously enacted actions. <br>`--governance-action-tx-id` <br>`--governance-action-index` |
| The command requires the user to provide an anchor (url / hash) of the proposal. A document where the proposer exposes the reasoning behind the proposed change. <br> | The user provides an anchor (URL/hash) of the proposal document using the following flags:<br>`--anchor-url`<br>`--anchor-data-hash` |
| The command requires the user to input the new protocol version number | The user provides an the protocol version number using the following flags: <br>`–protocol-version`<br>(e.g 10) |
| The command has a flag to specify the path where the output file will be saved. | The `--out-file` flag is available to specify the file where the generated governance action (proposal) will be saved. |
| The generated governance action complies with the conway cddl  | The generated governance action complies with the Conway CDDL where:<br>`proposal_procedure =`<br> `[ deposit : coin`<br> `, reward_account`<br> `, gov_action`<br> `, anchor`<br> `]`<br>`hard_fork_initiation_action = (1, gov_action_id / null, [protocol_version])` |
| The command handles errors gracefully and provides helpful error messages when required options are missing or invalid inputs are provided. | If any required input parameter is missing or incorrect, the command raises an error indicating the missing or incorrect parameter. |
| The feature implementation should be well-documented, providing clear usage instructions. | Running `cardano-cli conway governance action create-hf --help` displays the command usage page. |


## User Story ID: CLI.020
- [ ] Enabler
### Title: View governance action file (HOLDER)
### User Story
 - As an ada holder<br>I want to inspect the contents of a governance action file <br>So that I can verify it is correct before submitting it in a transaction
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| The command is implemented as `cardano-cli conway governance action view`. | Running `cardano-cli conway governance action view` successfully shows the content of a governance action file. |
| Requires the user to specify the target network for which the governance action is created using either --mainnet or --testnet-magic NATURAL.	 | The command requires the user to specify the target network using either --mainnet or --testnet-magic NATURAL. |
| The command has a flag to specify the path where the output file will be saved. | The `--out-file` flag is available to specify the file where the generated governance action (proposal) will be saved. |
| Gives an option to select the output format (json or yaml)  | The `--output json`  and `--output yaml` are available to select the output format. |
|  | By default if no flag is picked, the JSON format will be applied |
| The generated governance action complies with the conway cddl  | The generated governance action complies with the Conway CDDL where:<br>`proposal_procedure =`<br> `[ deposit : coin`<br> `, reward_account`<br> `, gov_action`<br> `, anchor`<br> `]` |
| The command handles errors gracefully and provides helpful error messages when required options are missing or invalid inputs are provided. | If any required input parameter is missing or incorrect, the command raises an error indicating the missing or incorrect parameter. |
| The feature implementation should be well-documented, providing clear usage instructions. | Running `cardano-cli conway governance action view --help` displays the command usage page. |


## User Story ID: CLI.021
- [ ] Enabler
### Title: Create a governance action vote (DRep/SPO/CCM)
### User Story
 - As a Drep, SPO or CC member <br>I want to create a vote for a governance action <br>So that I can include it in a transaction and submit it to the chain <br>
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| The command is implemented as `cardano-cli conway governance vote create` | Running `cardano-cli conway governance vote create` creates a vote file for it to be included in a transaction. |
| The command provides a way to vote <br>yes, <br>no <br>abstain | The command supports the mutually exclusive and mandatory flags `–yes`, ` –no`and ` –abstain` to express the direction of the vote. |
| Requires to specify the governance action ID and index that the vote is about. <br><br>The cli will not verify on real time the existence of the governance action. It is only at submission time when the node (ledger) validates the existence of the governance action. | The mandatory flag group: <br>`--governance-action-tx-id TXID`<br>`--governance-action-index WORD32`<br>Is used to indicate what governance action the vote corresponds to. <br><br>Failing to provide any of these flags returns an error message. |
| Requires the user to provide DRep, SPO or CC credentials | Drep can pass credentials using ANY of: <br>`--drep-verification-key`<br>`--drep-verification-key-file `<br>`–drep-key-hash (drep-id)`<br><br>Stake pool operators can pass credentials using ANY of <br>`–stake-pool-verification-key`<br>`–cold-verification-key-file`<br>`–stake-pool-id`<br> <br>Committee members can pass credentials using ANY of: <br>`--cc-hot-verification-key`<br>`--cc-hot-verification-key-file` <br>`--cc-hot-key-hash` |
| The command requires the user to provide an anchor (url / hash) of the proposal. A document where the proposer exposes the reasoning behind the proposed change. | The user provides an anchor (URL/hash) of the proposal document using the following flags:<br>`--anchor-url`<br>`--anchor-data-hash` |
| The command has a flag to specify the path where the output file will be saved. | The `--out-file` flag is available to specify the file where the vote for a governance action will be saved. |
| The output shows the information of the proposal based on the voting procedures in a human readable format (english):<br><br><br>`voting_procedures = { + voter => { + gov_action_id => voting_procedure } }`<br>`voting_procedure =`<br> ` [ vote`<br> ` , anchor / null`<br> ` ]`<br>`; no - 0`<br>`; yes - 1`<br>`; abstain - 2`<br>`vote = 0 .. 2` | The output shows the following information in human readable format (english):<br><br><br>credential (voter)<br>governance action ID#IX<br>Anchor if it exists<br>Decision: yes, no or abstain |
| The command handles errors gracefully and provides helpful error messages when required options are missing or invalid inputs are provided. | If any required input parameter is missing or incorrect, the command raises an error indicating the missing or incorrect parameter. |
| The feature implementation should be well-documented, providing clear usage instructions. | Running `cardano-cli conway governance action view --help` displays the command usage page. |


## User Story ID: CLI.022
- [ ] Enabler
### Title: View vote file (DRep/SPO/CCM)
### User Story
 - As a DRep, SPO or CC member <br>I want to inspect the contents of a vote file <br>So that I can verify it is correct before submitting it in a transaction
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| The command is implemented as `cardano-cli conway governance vote view` | Running `cardano-cli conway governance vote view` successfully shows the content of a governance action file. |
| The command takes a vote file as an input | The mandatory flag `--vote-file`is used to pass a vote file. |
| Gives an option to select the output format (json or yaml) | The `--output-format` takes the arguments `yaml` or `json`. If yaml is given the output is in yaml format, if json is given returns a json. Any other argument returns an error. |
| The command has a flag to specify the path where the output file will be saved. | The `--out-file` flag is available to specify the file where the vote for a governance action will be saved. |
| The output shows the information of the proposal based on the voting procedures in a human readable format (english):<br><br>`voting_procedures = { + voter => { + gov_action_id => voting_procedure } }`<br>`voting_procedure =`<br>` [ vote`<br>` , anchor / null`<br>` ]`<br>`; no - 0`<br>`; yes - 1`<br>`; abstain - 2`<br>`vote = 0 .. 2` | The output shows the following information in human readable format (english): <br><br>credential (voter)<br>governance action ID#IX<br>Anchor if it exists<br>Decision: yes, no or abstain |
| The command handles errors gracefully and provides helpful error messages when required options are missing or invalid inputs are provided. | If any required input parameter is missing or incorrect, the command raises an error indicating the missing or incorrect parameter. |
| The feature implementation should be well-documented, providing clear usage instructions. | Running `cardano-cli conway governance vote view --help` displays the command usage page. |


## User Story ID: CLI.023
- [ ] Enabler
### Title: Build a transaction with to submit proposal (HOLDER)
### User Story
 - As an ada holder <br>I want to build a transaction that includes a proposal (containing a governance action)<br>So that I can later sign and submit to the chain <br><br>`transaction build`
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| Transaction build has a new flag to supply a proposal file as input for the transaction body | An ADA holder can include a proposal in a transaction when by passing the proposal file in the transaction body using the `--proposal-file FILE` flag where FILE is the filepath of the proposal |
| When constructing a transaction body that includes a proposal, the resulting tx body conforms to the conway cddl so that proposal procedures are recorded with the key 20 | The generated transaction body complies with the Conway CDDL where:<br><br>transaction_body =<br> { 0 : set<transaction_input> ; inputs<br> , 1 : [* transaction_output]<br> , 2 : coin ; fee<br> , ? 3 : uint ; time to live<br> , ? 4 : certificates<br> , ? 5 : withdrawals<br> , ? 7 : auxiliary_data_hash<br> , ? 8 : uint ; validity interval start<br> , ? 9 : mint<br> , ? 11 : script_data_hash<br> , ? 13 : nonempty_set<transaction_input> ; collateral inputs<br> , ? 14 : required_signers<br> , ? 15 : network_id<br> , ? 16 : transaction_output ; collateral return<br> , ? 17 : coin ; total collateral<br> , ? 18 : nonempty_set<transaction_input> ; reference inputs<br> , ? 19 : voting_procedures ; New; Voting procedures<br> , ? 20 : proposal_procedures ; New; Proposal procedures<br> , ? 21 : coin ; New; current treasury value<br> , ? 22 : positive_coin ; New; donation<br> } |


## User Story ID: CLI.024
- [ ] Enabler
### Title: Build transaction for proposal vote (DRep, SPO, CCM)
### User Story
 - As a DRep, SPO or CC member<br>I want to build a transaction that includes my vote on a particular governance action<br>So that I can later sign and submit to the chain<br><br>`transaction build`<br>
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| Transaction build has a new flag to supply a vote file as input for the transaction body | A DRep, SPO or CC member can include their vote in a transaction by passing a vote file in the transaction body using the `--vote-file FILE` flag where FILE is the filepath of the vote |
| When constructing a transaction body that includes a vote, the resulting tx body conforms to the conway cddl so that voting procedures are recorded with the key 19 | When constructing a transaction body that includes a vote, the resulting tx body conforms to the conway cddl where:<br><br>transaction_body =<br> { 0 : set<transaction_input> ; inputs<br> , 1 : [* transaction_output]<br> , 2 : coin ; fee<br> , ? 3 : uint ; time to live<br> , ? 4 : certificates<br> , ? 5 : withdrawals<br> , ? 7 : auxiliary_data_hash<br> , ? 8 : uint ; validity interval start<br> , ? 9 : mint<br> , ? 11 : script_data_hash<br> , ? 13 : nonempty_set<transaction_input> ; collateral inputs<br> , ? 14 : required_signers<br> , ? 15 : network_id<br> , ? 16 : transaction_output ; collateral return<br> , ? 17 : coin ; total collateral<br> , ? 18 : nonempty_set<transaction_input> ; reference inputs<br> , ? 19 : voting_procedures ; New; Voting procedures<br> , ? 20 : proposal_procedures ; New; Proposal procedures<br> , ? 21 : coin ; New; current treasury value<br> , ? 22 : positive_coin ; New; donation<br> } |


## User Story ID: CLI.025
- [ ] Enabler
### Title: Build RAW transaction for proposal vote (HOLDER)
### User Story
 - As an ada holder <br>I want to build a transaction that includes a proposal (containing a governance action)<br>So that I can later sign and submit to the chain <br>transaction build-raw
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| Transaction build-raw has a new flag to supply a proposal file as input for the transaction body | A ADA Holder can include a proposal in a transaction when by passing the proposal file in the transaction body using the `--proposal-file FILE` flag where FILE is the filepath of the proposal |
| When constructing a transaction body that includes a proposal, the resulting tx body conforms to the conway cddl | When constructing a transaction body that includes a proposal, the resulting tx body conforms to the conway cddl where:<br><br>transaction_body =<br> { 0 : set<transaction_input> ; inputs<br> , 1 : [* transaction_output]<br> , 2 : coin ; fee<br> , ? 3 : uint ; time to live<br> , ? 4 : certificates<br> , ? 5 : withdrawals<br> , ? 7 : auxiliary_data_hash<br> , ? 8 : uint ; validity interval start<br> , ? 9 : mint<br> , ? 11 : script_data_hash<br> , ? 13 : nonempty_set<transaction_input> ; collateral inputs<br> , ? 14 : required_signers<br> , ? 15 : network_id<br> , ? 16 : transaction_output ; collateral return<br> , ? 17 : coin ; total collateral<br> , ? 18 : nonempty_set<transaction_input> ; reference inputs<br> , ? 19 : voting_procedures ; New; Voting procedures<br> , ? 20 : proposal_procedures ; New; Proposal procedures<br> , ? 21 : coin ; New; current treasury value<br> , ? 22 : positive_coin ; New; donation<br> } |


## User Story ID: CLI.026
- [ ] Enabler
### Title: Build RAW transaction for proposal vote (DRep/SPO/CCM)
### User Story
 - As a DRep, SPO or CC member<br>I want to build a transaction that includes my vote on a particular governance action<br>So that I can later sign and submit to the chain<br><br>`transaction build-raw`<br>
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| Transaction build-raw has a new flag to supply a vote file as input for the transaction body | A DRep, SPO or CC member can include a proposal in a transaction when by passing the proposal file in the transaction body using the `--proposal-file FILE` flag where FILE is the filepath of the proposal |
| When constructing a transaction body that includes a vote, the resulting tx body conforms to the conway cddl so that voting procedures are recorded with the key 19 | When constructing a transaction body that includes a vote, the resulting tx body conforms to the conway cddl where:<br><br>transaction_body =<br> { 0 : set<transaction_input> ; inputs<br> , 1 : [* transaction_output]<br> , 2 : coin ; fee<br> , ? 3 : uint ; time to live<br> , ? 4 : certificates<br> , ? 5 : withdrawals<br> , ? 7 : auxiliary_data_hash<br> , ? 8 : uint ; validity interval start<br> , ? 9 : mint<br> , ? 11 : script_data_hash<br> , ? 13 : nonempty_set<transaction_input> ; collateral inputs<br> , ? 14 : required_signers<br> , ? 15 : network_id<br> , ? 16 : transaction_output ; collateral return<br> , ? 17 : coin ; total collateral<br> , ? 18 : nonempty_set<transaction_input> ; reference inputs<br> , ? 19 : voting_procedures ; New; Voting procedures<br> , ? 20 : proposal_procedures ; New; Proposal procedures<br> , ? 21 : coin ; New; current treasury value<br> , ? 22 : positive_coin ; New; donation<br> } |


## User Story ID: CLI.027
- [ ] Enabler
### Title: Create stake registration certificate (HOLDER)
### User Story
 - As an ada holder<br>I want to create a conway cddl-compliant stake registration certificate <br><br>`stake-address`<br>
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| Allows the user to provide credentials in any of the following forms:<br><br>Stake verification key <br>Stake verification key file <br>Stake address<br>Stake script file | The command accepts the following and executes with the expected outcome:<br><br>`--stake-verification-key`(STRING)<br>`--stake-verification-key-file`(FILE)<br>`--stake-address`(ADDRESS)<br>`--stake-script-file` (FILE)<br><br>Using one of these is mandatory |
| Requires the user to provide the required key deposit in lovelace | ADA Holder can pass the key deposit in lovelace using the following flag<br>`--key-reg-deposit-amt` (NATURAL)<br><br> The argument is a decimal, providing any other type of input will result in an exception (no implicit conversion)<br>Not providing the flag and its argument generates an exception. |
| The command has a flag to specify the path where the output file will be saved. | The `--out-file` flag is available to specify the file where the vote for a governance action will be saved. |
| The command handles errors gracefully and provides helpful error messages when required options are missing or invalid inputs are provided. | If any required input parameter is missing or incorrect, the command raises an error indicating the missing or incorrect parameter. |
| The certificate should be saved on a text envelope format | Given that the certificate is saved, then it is in a text envelope format consisting of a json object with type, description and cbor hex fields, where: <br>{<br> "type": "CertificateConway",<br> "description": "Stake Address Registration Certificate",<br> "cborHex": ""<br>} |
| The resulting certificate conforms with the conway cddl | The resulting certificate conforms with the conway cddl, where <br><br>`reg_cert = (7, stake_credential, coin)` |


## User Story ID: CLI.028
- [ ] Enabler
### Title: Create stake deregistration certificate (HOLDER)
### User Story
 - As an ada holder<br>I want to create a conway cddl-compliant stake deregistration certificate to get my deposit back<br><br>`stake-address`<br>
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| Allows the user to provide credentials in any of the following forms:<br><br>Stake verification key<br>Stake verification key file <br>Stake address<br>Stake script file | The command accepts the following and executes with the expected outcome:<br><br>`--stake-verification-key`(STRING)<br>`--stake-verification-key-file`(FILE)<br>`--stake-address`(ADDRESS)<br>`--stake-script-file` (FILE)<br><br>Using one of these is mandatory |
| Requires the user to provide key deposit (in lovelace) that was paid by the target stake credential when it registered | ADA Holder can pass the key deposit in lovelace using the following flag<br>`--key-reg-deposit-amt` (NATURAL)<br><br> The argument is a decimal, providing any other type of input will result in an exception (no implicit conversion)<br>Not providing the flag and its argument generates an exception. |
| The command has a flag to specify the path where the output file will be saved. | The `--out-file` flag is available to specify the file where the vote for a governance action will be saved. |
| The command handles errors gracefully and provides helpful error messages when required options are missing or invalid inputs are provided. | If any required input parameter is missing or incorrect, the command raises an error indicating the missing or incorrect parameter. |
| The certificate should be saved on a text envelope format | Given that the deregistration certificate is saved, then it is in a text envelope format consisting of a json object with type, description and cbor hex fields, where: <br>{<br> "type": "CertificateConway",<br> "description": "Stake Address Deregistration Certificate",<br> "cborHex": ""<br>} |
| The resulting certificate conforms with the conway cddl | The resulting certificate conforms with the conway cddl, where:<br><br>`unreg_cert = (8, stake_credential, coin)` |


## User Story ID: CLI.029
- [ ] Enabler
### Title: Delegate vote to DRep (HOLDER)
### User Story
 - As an ada holder<br>I want to delegate my votes to a DRep (registered or default)<br>So that my stake is counted when the DRep vote.  <br><br>`stake-address`<br>
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| Allows the user to provide credentials in any of the following forms:<br><br>Stake verification key<br>Stake verification key file <br>Stake address<br>Stake script file | The command accepts the following and executes with the expected outcome:<br><br>`--stake-verification-key`(STRING)<br>`--stake-verification-key-file`(FILE)<br>`--stake-address`(ADDRESS)<br>`--stake-script-file` (FILE)<br><br>Using one of these is mandatory |
| When delegating to a registered DRep, the user can provide the target Drep with: <br><br><br>DRep script hash<br>DRep verification key<br>DRep verification key file <br>DRep key hash (Drep ID) | The command accepts the following and executes with the expected outcome:<br><br>`--drep-script-hash` (HASH) <br>`--drep-verification-key` (STRING) <br>`--drep-verification-key-file` (FILE) <br>`--drep-key-hash` (HASH) <br><br>Using one of these is mandatory |
| When delegating to a default DRep the user can use a flag to select either always-abstain or always-no-confidence, but not both. | The command accepts the following and executes with the expected outcome:<br>`--always-abstain` XOR `--always-no-confidence`<br><br>Using one of these is mandatory |
| The command has a flag to specify the path where the output file will be saved. | The `--out-file` flag is available to specify the file where the vote for a governance action will be saved. |
| The command handles errors gracefully and provides helpful error messages when required options are missing or invalid inputs are provided. | If any required input parameter is missing or incorrect, the command raises an error indicating the missing or incorrect parameter. |
| The certificate should be saved on a text envelope format | Given that the deregistration certificate is saved, then it is in a text envelope format consisting of a json object with type, description and cbor hex fields, where: <br>{<br> "type": "CertificateConway",<br> "description": "Vote Delegation Certificate",<br> "cborHex": ""<br>} |
| The resulting certificate conforms with the conway cddl | The resulting certificate conforms with the conway cddl, where <br><br>`vote_deleg_cert = (9, stake_credential, drep)` |


## User Story ID: CLI.030
- [ ] Enabler
### Title: Delegate stake to SPO and votes to DRep with a single certificate (HOLDER)
### User Story
 - As an ada holder<br>I want to delegate my stake to a stake pool AND my votes to a DRep (registered or default) with a single certificate.<br><br>`stake-address`<br>
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| Allows the user to provide credentials in any of the following forms:<br><br>Stake verification key<br>Stake verification key file <br>Stake address<br>Stake script file | The command accepts the following and execute with the expected outcome:<br>`--stake-verification-key` (STRING) or <br>`--stake-verification-key-file` (FILE) or<br>`--stake-script-file` (FILE) or<br>` --stake-address` (ADDRESS)<br><br>At least one of them is mandatory |
| The user can provide the target stake pool with: <br><br><br>Stake pool cold verification key<br>Stake pool cold verification key file <br>Stake pool ID | The command accepts the following and execute with the expected outcome:<br>`--stake-pool-verification-key` (STRING) or<br>`--cold-verification-key-file` (FILE) or<br>`--stake-pool-id` (STAKE_POOL_ID)<br><br>At least one of them is mandatory |
| Allows the user to provide the target DRep credential with <br><br>DRep script hash<br>DRep verification key<br>DRep verification key file <br>DRep key hash (Drep ID) | The command accepts the following and executes with the expected outcome:<br> `--drep-script-hash` (HASH) or<br>`--drep-verification-key` (STRING) or<br>`--drep-verification-key-file` (FILE) or<br>`--drep-key-hash` (HASH)<br><br>At least one of them is mandatory |
| When delegating to a default DRep the user can use a flag to select either always-abstain or always-no-confidence, but not both. | The command accepts the following and executes with the expected outcome:<br>`--always-abstain` XOR `--always-no-confidence`<br><br>Using one of these is mandatory |
| The command has a flag to specify the path where the output file will be saved. | The `--out-file` flag is available to specify the file where the vote for a governance action will be saved. |
| The command handles errors gracefully and provides helpful error messages when required options are missing or invalid inputs are provided. | If any required input parameter is missing or incorrect, the command raises an error indicating the missing or incorrect parameter. |
| The certificate should be saved on a text envelope format | The certificate should be saved on a text envelope format: <br>`{`<br> `"type": "CertificateConway",`<br> `"description": "Stake and Vote Delegation Certificate",`<br> `"cborHex": ""`<br>`}` |
| The resulting certificate conforms with the conway cddl | The resulting certificate conforms with the conway cddl, where <br><br>`stake_vote_deleg_cert = (10, stake_credential, pool_keyhash, drep)` |

## User Story ID:  CLI.031
- [ ] Enabler
### Title: Query governance state (ANY)
### User Story
- As any persona<br>I want to query the nodes for the current Governance state<br>so that I can inform my decisions.
### Functional requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| The new command is implemented as `cardano-cli conway query gov-state` | Running `cardano-cli conway query gov-state` dumps the entire governance state. |
| The command requires the user to specify the network id (mainnet or testnet magic) | The flags –mainnet –-testnet-magic are used to specify the network id. |
| The command has the flag –out-file to specify the file where the output  will be saved.  | The optional `--out-file` flag is available to specify the file where the governance state dump will be saved. |
| The output is a JSON showing, at least,  the following information:<br>Proposals<br>EnactState<br>DrepPulsingState | The output is in a json format so that it can be further processed programmatically. |
| The command handles errors gracefully and provides helpful error messages when required options are missing or invalid inputs are provided. | If any required input parameter is missing or incorrect, the command raises an error indicating the missing or incorrect parameter.<br> The command requires a connection to the node, an exception is raised if there is non. |

## User Story ID:  CLI.032
- [ ] Enabler
### Title: Query committee state (CCM)
### User Story
- As a CC member<br>I want to query the committee state<br>so that I can find my expiration term,<br> and whether my hot key authorization certificate has been recorded on chain correctly.
### Functional requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| The command is implemented as `cardano-cli conway query committee-state` | Running `cardano-cli conway query committee-state` returns the map of committee member key hashes and the current state. |
| Requires the user to provide the network id  | The flags –mainnet –-testnet-magic are used to specify the network id.|
| Supports a query for an specific CC credential <br> CC cold verification key<br>CC cold verification key file<br>CC cold verification key hash<br>CC hot verification key<br>CC hot verification key file<br>CC hot verification key hash | The command allows querying the committee state with either cold or hot credentials of a target committee member, so that running `cardano-cli conway query committee-state` with any of the flags:<br>`--cold-verification-key STRING`<br>`--cold-verification-key-file FILE`<br>`--cold-verification-key-hash STRING`<br>`--hot-key STRING`<br>`--hot-key-file FILE`<br>`--hot-key-hash STRING`<br>returns the state of the target committee member.<br>The command allows zero to many credentials.|
| When no CC key is specified, the command outputs information for all committee members | Running `cardano-cli conway query committee-state` without any credential flags returns the state of all committee members |
| The command allows filtering by active, expired and unrecognized members (registered hot keys to an unknown cc cold key)  | The command supports the flags `--active`, `--expired` and `--unrecognized` to filter committee members by their current status |
| The output is a JSON showing, the following information:<br>Cold key hash<br> Hot credential status (Authorized/NotAuthorized)<br> When Authorized, shows the hot key hash<br>Status (Active, Expired, Unrecognized)<br>Expiration epoch<br>Current epoch<br>Quorum | The output is in a json format so that it can be further processed programmatically.<br>`{"committee": {"keyHash-": {"expiration":, "hotCredsAuthStatus": {"tag": ""},"nextEpochChange": "","status": ""}}, "epoch":,"quorum": }`
| The command has a flag to specify the path where the output file will be saved. | The `--out-file` flag is available to specify the file where the committee state dump will be saved. |
| The command handles errors gracefully and provides helpful error messages when required options are missing or invalid inputs are provided. | If any required input parameter is missing or incorrect, the command raises an error indicating the missing or incorrect parameter. |

## User Story ID:  CLI.033
- [ ] Enabler
### Title: Query DRep state (HOLDER)
### User Story
 - As an ada holder<br>I want to query the DRep state <br>So that I can find detailed information about registered Dreps   <br>
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| The command is implemented as cardano-cli conway query drep-state | Running `cardano-cli conway query drep-state` returns the map of drep key hashes and the current state.  |
| Requires the user to provide the network id | The flags –mainnet –-testnet-magic are used to specify the network id. |
| Supports a query for an specific DRep credential<br><br>DRep verification key<br>DRep verification key file <br>DRep verification key hash (DRep ID) | Running `cardano-cli conway query drep-stake-distribution` <br>With any of the flags: <br><br>--drep-verification-key STRING<br>--drep-verification-key-file FILE<br>--drep-key-hash HASH<br> <br>Returns the stake delegated to that Drep. <br><br><br>The commands allows zero to many credentials |
| If no Drep credential is specified it returns all DReps | When no drep credential is supplied, the command returns the state of all DReps. |
| The command has a flag to specify the path where the output file will be saved. | The `--out-file` flag is available to specify the file where the vote for a governance action will be saved. |
| The output is a JSON showing, the following information:<br><br><br>Drep Key hash<br>Anchor (Drep metadata)<br>Deposit<br>Expiry (from Drep activity) | The output is in a json format so that it can be further processed programmatically.<br><br> {  "keyHash": ""  },<br> {  "anchor": {  "dataHash": "",  "url": ""  },<br> "deposit":,<br> "expiry": <br> } |
| The command handles errors gracefully and provides helpful error messages when required options are missing or invalid inputs are provided. | If any required input parameter is missing or incorrect, the command raises an error indicating the missing or incorrect parameter.<br><br>The command requires a connection to the node, an exception is raised if there is non. |

## User Story ID: CLI.034
- [ ] Enabler
### Title: Query Drep stake distribution (HOLDER)
### User Story
 - As an ada holder and DRep<br>I want to query the DRep stake distribution<br>So that I can find the weight (of the votes) of each DRep<br>
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| The command is implemented as cardano-cli conway query drep-stake-distribution | Running `cardano-cli conway query drep-stake-distribution` returns the map of drep key hashes and the current voting stake delegated to each, including default dreps. |
| Requires the user to provide the network id | The flags –mainnet –-testnet-magic are used to specify the network id. |
| Supports a query for an specific DRep credential<br><br>DRep verification key<br>DRep verification key file <br>DRep verification key hash (DRep ID) | Running `cardano-cli conway query drep-stake-distribution` <br>With any of the flags: <br><br>--drep-verification-key STRING<br>--drep-verification-key-file FILE<br>--drep-key-hash HASH<br> <br>Returns the stake delegated to that Drep. <br><br><br>The commands allows zero to many credentials |
| The command has the flag –out-file to specify the file where the output will be saved. | The `--out-file` flag is available to specify the file where the stake distribution output will be saved. |
| The output is a JSON showing, the following information:<br><br><br>Drep Key hash<br>Stake delegated to this DRep | The output is in a json format so that it can be further processed programmatically. |
| The command handles errors gracefully and provides helpful error messages when required options are missing or invalid inputs are provided. | If any required input parameter is missing or incorrect, the command raises an error indicating the missing or incorrect parameter.<br><br>The command requires a connection to the node, an exception is raised if there is non. |

## User Story ID: CLI.035
- [ ] Enabler
### Title: Expand query stake-address-info to show deposits and vote delegation (HOLDER)
### User Story
 - As an ada holder,<br>I want to query my stake address information so that I can learn to which pool and drep Im delegating to and the value in lovelace of my deposits for delegating and for submitting governance actions.
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| Expand the command query stake-address-info to return the drep id of the DRep that the stake credential is delegated to and the value of the existing deposits. | The command returns:<br><br>Stake-address<br>Rewards account balance<br>Stake pool it is delegated to (stakeDelegation), null if it isn’t<br>Drep it is delegated to (voteDelegation), null if it isn’t<br>Stake key deposit<br>Cumulative governance action deposits |

## User Story ID:  CLI.036
- [ ] Enabler
### Title: (WIP) Scripts as DRep (HOLDER)
### User Story
As an ada holder I want to register a native or a plutus script as a DRep.
### Functional requirements
|Requirements|Acceptance Criteria|
|:----|:----|
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |


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
