---
sidebar_label: Partner Chains user stories
title: Partner Chains user stories
sidebar_position: 6
slug: /partner-chains
---

## User Story ID: CH.SID1
- [ ] Enabler
### Title: Use BLS primitives to record settlements on Cardano
### User Story
 - As a Partner Chain, I wish to use BLS primitives to record settlement operations on Cardano
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| Details Pending | Details Pending |


### Link:


## User Story ID: CH.SID2
- [ ] Enabler
### Title: Use BLS for Partner chain tokenomics
### User Story
 - As a Partner chain I want ti use BLS for tokenomics, in particular to support multi-sig certificates about Sidechain activity that can be verified by Plutus contracts
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| Details Pending | Details Pending |


### Link:


## User Story ID: CH.SID3
- [ ] Enabler
### Title: Partner chain SPO paid in Cardano Native Tokens
### User Story
 - As a Cardano SPO producing Partner chain blocks I would like to be paid directly on my Cardano wallet with Cardano Native Tokens 
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| Whenever a block is produced on Midnight, Cardano SPOs can choose where they’ll receive the payout, and in which token type | Cardano SPOs have a portal/app where they can find and choose in which chain/wallet to get paid.<br/>This portal might be bundled with the Midnight registration form. |
|  | Cardano SPOs have a portal/app where they can define in which token they get paid, from a list of available tokens |


### Link:
https://www.youtube.com/watch?v=tBxk79svC78

## User Story ID: CH.SID4
- [ ] Enabler
### Title: Users clear KYC/AML functions without storing credientals
### User Story
 - As a Cardano DApp developer I would like my users to clear KYC/AML functions without having to store their credentials
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| The Plutus smart contract needs to be able to access Midnight proofs about a particular user to confirm identity and other KYC information | A Plutus contract running on Cardano is able to verify a proof from a specific Midnight address in the context of that Plutus contract function. The corresponding Midnight address is recorded on the Plutus contract, the proof resides on Midnight. |


### Link:
https://www.youtube.com/watch?v=tBxk79svC78
