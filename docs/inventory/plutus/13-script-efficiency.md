---
sidebar_label: Script Efficiency user stories
title: Script Efficiency user stories
sidebar_position: 13
slug: /script-efficiency
--- 


| User Story Id | Title | User Story | Acceptance Criteria | 
| ------------- | ----- | ---------- | ------------------- | 
| **EFF-001** | Shorter PlutusV3 Script with `plcVersion110` | As a Dapp developer,<br>I want to ensure that my smart contract written in PlutusV3 and compiled using `plcVersion110` generates a shorter script than my smart contract written in PlutusV2 and compiled using `plcVersion100` | **Given that** I am a Dapp developer<br>**When** I write a smart contract in PlutusV3 and compile it using `plcVersion110`<br>**Then** the resulting script should be shorter than the equivalent PlutusV2 smart contract compiled using `plcVersion100`. | 