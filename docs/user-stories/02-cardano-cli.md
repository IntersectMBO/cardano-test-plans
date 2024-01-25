---
sidebar_label: Cardano-cli user stories
title: Cardano-cli user stories
sidebar_position: 2
slug: /cli
---

## Personas
|ID|NAME|
|----|:----|
|HOLDER | ADA Holder |
|DRep | DRep | 
|CCM | Constitutional Community Member |
|SPO | Stake Pool Operator |

----

Latest test report: https://github.com/IntersectMBO/cardano-node-tests/issues/2157

## User stories

| User Story Id | Title | User Story | Acceptance Criteria | 
|---------------|-------|------------|----------------------------------------------|
| CLI.001 | Obtain constitution hash for verification (HOLDER) | As an Ada holder, I want to obtain the hash of the off-chain text of a Constitution so that I can compare it against the hash registered on-chain to verify its authenticity. | [Github - CLI.001](https://github.com/input-output-hk/cardano-cli/blob/d115ab87a623bf9a0f974723825026fb366dc7a3/CONWAY_USER_STORIES.md#user-story-id--cli001) |
| CLI.002 | Generate hash of the off-chain constitution (HOLDER) | As an Ada holder, I want to generate the hash of the off-chain text for a proposed Constitution so that the hash can be utilized in a governance action. | [Github - CLI.002](https://github.com/input-output-hk/cardano-cli/blob/d115ab87a623bf9a0f974723825026fb366dc7a3/CONWAY_USER_STORIES.md#user-story-id--cli002) |
| CLI.003 | Generate Committee member cold key pair (CCM) | As a potential Constitutional Committee member, I want to generate a COLD key pair so that I can be proposed for the Committee in a Governance action. | [Github - CLI.003](https://github.com/input-output-hk/cardano-cli/blob/d115ab87a623bf9a0f974723825026fb366dc7a3/CONWAY_USER_STORIES.md#user-story-id--cli003)|
| CLI.004 | Generate committee member hot key pair (CCM) | As a potential Constitutional Committee member, I want to generate HOT key pair so that I can authorize the Hot key to sign votes on behalf of the Cold key. | [Github - CLI.004](https://github.com/input-output-hk/cardano-cli/blob/d115ab87a623bf9a0f974723825026fb366dc7a3/CONWAY_USER_STORIES.md#user-story-id--cli004) |
| CLI.005 | Authorization certificate (CCM) | As a committee member, I want to issue an authorization certificate from my cold key to a hot key so that I can sign my votes using the hot key and keep the cold key in cold storage and can authorize a new hot key in case the original one is compromised. | [Github - CLI.005](https://github.com/input-output-hk/cardano-cli/blob/d115ab87a623bf9a0f974723825026fb366dc7a3/CONWAY_USER_STORIES.md#user-story-id--cli005) |
| CLI.006 | Generate committee member key hash (CCM) | As a potential constitutional committee member, I want to generate the key hashes for my cold and hot keys so that they can be used by third parties to propose me as a new committee member and for identification purposes once I've been elected as committee member. | [Github - CLI.006](https://github.com/input-output-hk/cardano-cli/blob/d115ab87a623bf9a0f974723825026fb366dc7a3/CONWAY_USER_STORIES.md#user-story-id--cli006)|
| CLI.007 | Committee member resignation certificate (CCM) | As a constitutional committee member, I want to be able to generate a resignation certificate so that I can submit it to the chain on a transaction to signal to the Ada holders that I’m resigning from my duties as cc member. | |
| CLI.008 | Generate DRep keys (HOLDER) | As an Ada holder, I want to generate Ed25519 keys so that I can register as a DRep. | |
| CLI.009 | Generate DRep ID (DRep) | As a DRep, I want to generate a DRep Id so that Ada holder can use it to delegate their votes to me and my voting record can be tracked. | |
| CLI.010 | DRep Registration Certificate Generation (DRep) | As a DRep, I want to generate a DRep registration certificate so that I can submit it on a transaction and the Ada holders can delegate their votes to me. | |
| CLI.011 | DRep Retirement Certificate Generation (DRep) | As a DRep, I want to generate a DRep retirement (unregistration) certificate so that I can submit it on a transaction and can get my DRep deposit back. | |
| CLI.012 | DRep Metadata Hash Generation (DRep) | As a DRep, I want to generate the hash of my DRep metadata so that I can supply it when registering as DRep. | |
| CLI.013 | Create Update Constitution Governance Action (HOLDER) | As an Ada holder, I want to create a governance action that updates the constitution so that it can be submitted to the chain and be voted by the governance bodies. | |
| CLI.014 | Create Update Constitutional Committee Governance Action (HOLDER) | As an Ada holder, I want to create a governance action that updates the constitutional committee so that it can be submitted to the chain and be voted by the governance bodies. | |
| CLI.015 | Create Treasury Withdrawal Governance Action (HOLDER) | As an Ada holder, I want to create a governance action to withdraw funds from the treasury so that it can be submitted to the chain and be voted by the governance bodies. | |
| CLI.016 | Create info governance action (HOLDER) | As an Ada holder, I want to create an info governance action so that it can be submitted to the chain and be voted by the governance bodies. | |
| CLI.017 | Create update protocol parameters governance action (HOLDER) | As an Ada holder, I want to create a governance action to update protocol parameters so that it can be submitted to the chain and be voted by the governance bodies. | |
| CLI.018 | Create no-confidence governance action (HOLDER) | As an Ada holder, I want to create a no-confidence governance action so that it can be submitted to the chain and be voted by the governance bodies. | |
| CLI.019 | Create Hard-fork initiation governance action (HOLDER) | As an Ada holder, I want to create a governance action to initiate a hardfork so that it can be submitted to the chain and be voted by the governance bodies. | |
| CLI.020 | View governance action file (HOLDER) | As an Ada holder, I want to inspect the contents of a governance action file so that I can verify it is correct before submitting it in a transaction. | |
| CLI.021 | Create a governance action vote (DRep/SPO/CCM) | As a DRep, SPO or CC member, I want to create a vote for a governance action so that I can include it in a transaction and submit it to the chain. | |
| CLI.022 | View vote file (DRep/SPO/CCM) | As a DRep, SPO or CC member, I want to inspect the contents of a vote file so that I can verify it is correct before submitting it in a transaction. | |
| CLI.023 | Build a transaction to submit proposal (HOLDER) | As an Ada holder, I want to build a transaction that includes a proposal (containing a governance action) so that I can later sign and submit to the chain. | |
| CLI.024 | Build transaction for to submit votes (DRep, SPO, CCM) | As a DRep, SPO or CC member, I want to build a transaction that includes my vote on a particular governance action so that I can later sign and submit to the chain. | |
| CLI.025 | Build RAW transaction for proposal vote (HOLDER) | As an Ada holder, I want to build a transaction that includes a proposal (containing a governance action) so that I can later sign and submit to the chain. | |
| CLI.026 | Build RAW transaction for proposal vote (DRep/SPO/CCM) | As a DRep, SPO or CC member, I want to build a transaction that includes my vote on a particular governance action so that I can later sign and submit to the chain. | |
| CLI.027 | Create stake registration certificate (HOLDER) | As an Ada holder, I want to create a Conway cddl-compliant stake registration certificate stake-address. | |
| CLI.028 | Create stake deregistration certificate (HOLDER) | As an Ada holder, I want to create a Conway cddl-compliant stake deregistration certificate to get my deposit back stake-address. | |
| CLI.029 | Delegate vote to DRep (HOLDER) | As an Ada holder, I want to delegate my votes to a DRep (registered or default) so that my stake is counted when the DRep votes. Stake-address. | |
| CLI.030 | Delegate stake to SPO and votes to DRep with a single certificate (HOLDER) | As an Ada holder, I want to delegate my stake to a stake pool AND my votes to a DRep (registered or default) with a single certificate. Stake-address. | |
| CLI.031 | Query governance state (ANY) | As any persona, I want to query the nodes for the current Governance state so that I can inform my decisions. | |
| CLI.032 | Query committee state (CCM) | As a CC member, I want to query the committee state so that I can find my expiration term and whether my hot key authorization certificate has been recorded on chain. | |
| CLI.033 | Query DRep state (HOLDER) | As an Ada holder, I want to query the DRep state so that I can find detailed information about registered DReps. | |
| CLI.034 | Query DRep stake distribution (HOLDER) | As an Ada holder and DRep, I want to query the DRep stake distribution so that I can find the weight (of the votes) of each DRep. | |
| CLI.035 | Expand query stake-address-info to show deposits and vote delegation (HOLDER) | As an Ada holder, I want to query my stake address information so that I can learn to which pool and DRep I'm delegating to and the value in lovelace of my deposits for delegating and for submitting governance actions. | |
| CLI.036 | Query constitution | As any persona I want to query the on-chain constitution so that I can know the url where it is stored and the document hash so that I can verify authenticity. | 
| CLI.037 | Register script based DReps | | 
| CLI.038 | Unregister script based DReps | |
| CLI.039 | Script based DRep voting | | 
| CLI.040 | Script based CC GA. --add --remove | | 


