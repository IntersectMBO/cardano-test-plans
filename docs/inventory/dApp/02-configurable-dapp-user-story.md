---
sidebar_label: Multi Script DApp stories
title: Configurable Marketplace DApp User Stories
sidebar_position: 1
slug: /dapp/multi
---

## Personas
| ID    | NAME  | DESCRIPTION |
|-------|-------|-------------|
| Operator | Operator |             |
| Seller| Seller|             |
| Buyer | Buyer |             |

## User Story ID: DApp.01
- [ ] Test PV2
- [ ] Test PV3

### Title: Create reference script UTxO
### User Story

- As an operator, I want to create a reference script UTxO to simplify transactions involving the market.
### Functional Requirements
| Requirements                         | Acceptance Criteria                                                                                                 |
|--------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| Create a reference script UTXO | Transaction to pay to the script address with a UTXO containing reference-script should succeed and be accepted to the chain |

---

## User Story ID: DApp.02
- [ ] Test PV2
- [ ] Test PV3

### Title: Create configuration reference datum
### User Story

- As an operator, I want to setup marketplace contract.
### Functional Requirements
| Requirements                         | Acceptance Criteria                                                                                                 |
|--------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| Setup Config Contract with parameters | Transaction to pay to the script address with a UTXO containing configuration datum should succeed and be accepted to the chain |

---

## User Story ID: DApp.03
- [ ] Test PV2
- [ ] Test PV3
### Title: Place multiple tokens on sale
### User Story
- As a seller, I want to place tokens on sale to offer them to potential buyers.
### Functional Requirements
| Requirements                | Acceptance Criteria                                                                                                 |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------|
| Run a test to place tokens on sale | Transaction to lock  lock the tokens to the contract address should succeed and be accepted to the chain |

---

## User Story ID: DApp.04
- [ ] Test PV2
- [ ] Test PV3
### Title: Withdraw token from sale
### User Story
- As a seller, I want to withdraw token from sale.
### Functional Requirements
| Requirements                  | Acceptance Criteria                                                                                                 |
|-------------------------------|---------------------------------------------------------------------------------------------------------------------|
| Can Withdraw with datum in reference and  script included in transaction |  Transaction to redeem a token from sale with Withdraw redeemer should  succeed and be accepted to the chain when reference datum is set and  script is included in transaction.|
| Can withdraw with reference script  and reference datum |  Transaction to redeem a token from sale with Withdraw redeemer should  succeed and be accepted to the chain, when reference datum is set the UTXO containing script is included in reference inputs.|
---


## User Story ID: DApp.05
- [ ] Test PV2
- [ ] Test PV3
### Title: Buy token from sale
### User Story
- As a buyer, I want to buy a token of my choice from sale.
### Functional Requirements
| Requirements           | Acceptance Criteria                                                                                                 |
|------------------------|---------------------------------------------------------------------------------------------------------------------|
| Can Buy with datum in reference and script included in transaction  | Transaction to redeem a token using the Buy redeemer  should  succeed and be accepted to the chain, when script is included in transaction|
| Can Buy with reference datum and  reference script | Transaction to redeem a token using the Buy redeemer should  succeed and be accepted to the chain, when the UTXO containing script is included in reference inputs.|
---