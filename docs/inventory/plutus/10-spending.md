---
sidebar_label: Spending user stories
title: Spending user stories
sidebar_position: 10
slug: /spending
--- 

| User Story Id | Title | User Story | Acceptance Criteria | 
| ------------- | ----- | ---------- | ------------------- | 
| **SPEND-001** | Lock and Redeem Ada in Same Script | As a Dapp developer,<br>I want to lock some Ada in a PlutusV3 script and redeem some Ada from the same script in the same transaction | **Given that** I am a Dapp developer<br>**When** I lock some Ada in a PlutusV3 script and redeem some Ada from the same script in a single transaction<br>**Then** the transaction should be successfully submitted as long as there is no violation in the script logic. | 
| **SPEND-002** | Lock and Redeem Ada in Different Scripts | As a Dapp developer,<br>I want to lock some Ada in a PlutusV3 script and redeem some Ada from a different script in the same transaction | **Given that** I am a Dapp developer<br>**When** I lock some Ada in a PlutusV3 script and redeem some Ada from a different script in a single transaction<br>**Then** the transaction should be successfully submitted as long as there is no violation in the script logic. | 
| **SPEND-003** | Redeem Ada with Multiple Signatures | As a Dapp developer,<br>I want to redeem some Ada from a PlutusV3 script that requires multiple signatures | **Given that** I am a Dapp developer<br>**When** I redeem some Ada from a PlutusV3 script that requires multiple signatures (by using multiple signatures in the transaction’s witness set)<br>**Then** the transaction should be successfully submitted as long as there is no violation in the script logic. | 