---
sidebar_label: Governance Guardrails
title: Governance Guardrails
sidebar_position: 6
slug: /governance-guardrails
---

### Governance guardrails default constitution link:
According to commit: db119872c0dfc8537a39d38cea8ef0b20c59ecb5

https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json

## <a id="GR.001"></a>User Story ID: GR.001
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent an unconstitutional `txFeePerByte` value
### User Story
 - As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent an unconstitutional value for `txFeePerByte`
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| `txFeePerByte` must not be lower than `30 (0.00030 ada)` | Given governance guardrails script is enacted, when the `txFeePerByte` protocol parameter is updated having a value lower than `30 (0.00030 ada)`,  the proposal should not be submitted successfully
| `txFeePerByte` must not be negative | Given that the governance guardrails script is enacted, when the txFeePerByte protocol parameter is updated with a negative value, the proposal should not be successfully submitted.

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L2


## <a id="GR.002"></a>User Story ID: GR.002
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `txFeeFixed` value
### User Story
 - As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent  an unconstitutional value for `txFeeFixed`
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| `txFeeFixed` must not be lower than `100,000 (0.1 ada)` ada) | Given the governance guardrails script is enacted, when the `txFeeFixed` protocol parameter is updated to have a value lower than `100,000 (0.1 ada)`, the proposal should not be submitted successfully.
| `txFeeFixed` must not exceed `10,000,000 (10 ada)` | Given the governance guardrails script is enacted, when the `txFeeFixed` protocol parameter is updated to have a value more than `10,000,000 (10 ada)`, the proposal should not be submitted successfully
| `txFeeFixed` must not be negative | Given the governance guardrails script is enacted, when the `txFeeFixed` protocol parameter is updated having a negative value, the proposal should not be submitted successfully

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L21

## <a id="GR.003"></a>User Story ID: GR.003
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional`monetaryExpansion` value
### User Story
 - As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent an unconstitutional value for `monetaryExpansion`.
### Functional Requirements
| Requirements | Acceptance Criteria |
|:----|:----|
| `monetaryExpansion` must not exceed `5/1000 (0.005)` | Given the governance guardrails script is enacted, when the `monetaryExpansion` protocol parameter is updated to a value exceeding `5/1000 (0.005)`, the proposal should not be submitted successfully. |
| `monetaryExpansion` must not be lower than `1/1000 (0.001)` | Given the governance guardrails script is enacted, when the `monetaryExpansion` protocol parameter is updated to a value lower than `1/1000 (0.001)`, the proposal should not be submitted successfully. |
| `monetaryExpansion` must not be negative | Given the governance guardrails script is enacted, when the `monetaryExpansion` protocol parameter is updated to a negative value, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L39

## <a id="GR.004"></a>User Story ID: GR.004
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `treasuryCut` value
### User Story
 - As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent an unconstitutional value for `treasuryCut`.
### Functional Requirements
| Requirements | Acceptance Criteria |
|:----|:----|
| `treasuryCut` must not be lower than `0.1 (10%)` | Given the governance guardrails script is enacted, when the `treasuryCut` protocol parameter is updated to a value lower than `0.1 (10%)`, the proposal should not be submitted successfully. |
| `treasuryCut` must not exceed `0.3 (30%)` | Given the governance guardrails script is enacted, when the `treasuryCut` protocol parameter is updated to a value exceeding `0.3 (30%)`, the proposal should not be submitted successfully. |
| `treasuryCut` must not be negative | Given the governance guardrails script is enacted, when the `treasuryCut` protocol parameter is updated to a negative value, the proposal should not be submitted successfully. |
| `treasuryCut` must not exceed `1.0 (100%)` | Given the governance guardrails script is enacted, when the `treasuryCut` protocol parameter is updated to a value exceeding `1.0 (100%)`, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L58

## <a id="GR.005"></a>User Story ID: GR.005
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `minPoolCost` value
### User Story
 - As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent an unconstitutional value for `minPoolCost`.
### Functional Requirements
| Requirements | Acceptance Criteria |
|:----|:----|
| `minPoolCost` must not be negative | Given the governance guardrails script is enacted, when the `minPoolCost` protocol parameter is updated to a negative value, the proposal should not be submitted successfully. |
| `minPoolCost` must not exceed `500,000,000 (500 ADA)` | Given the governance guardrails script is enacted, when the `minPoolCost` protocol parameter is updated to a value exceeding `500,000,000 (500 ADA)`, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L81


## <a id="GR.006"></a>User Story ID: GR.006
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `utxoCostPerByte` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing an unconstitutional value for `utxoCostPerByte`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| `utxoCostPerByte` must not be lower than `3,000 (0.003 ada)` | Given governance guardrails script is enacted, when `utxoCostPerByte` protocol parameter is updated to a value lower than `3,000 (0.003 ada)`, the proposal should not be submitted successfully. |
| `utxoCostPerByte` must not exceed `6,500 (0.0065 ada)` | Given governance guardrails script is enacted, when `utxoCostPerByte` protocol parameter is updated to a value more than `6,500 (0.0065 ada)`, the proposal should not be submitted successfully. |
| `utxoCostPerByte` must not be zero | Given the governance guardrails script is enacted, when the `utxoCostPerByte` protocol parameter is updated to a value of zero, the proposal should not be submitted successfully. |
| `utxoCostPerByte` must not be negative | Given the governance guardrails script is enacted, when the `utxoCostPerByte` protocol parameter is updated to a negative value, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L95


## <a id="GR.007a"></a>User Story ID: GR.007a
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `executionUnitPrices[priceMemory]` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing an unconstitutional value for `executionUnitPrices[priceMemory]`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| `executionUnitPrices[priceMemory]` must not exceed `2,000 / 10,000` | Given governance guardrails script is enacted, when `executionUnitPrices[priceMemory]` protocol parameter is updated to a value exceeding `2,000 / 10,000`, the proposal should not be submitted successfully. |
| `executionUnitPrices[priceMemory]` must not be lower than `400 / 10,000` | Given governance guardrails script is enacted, when `executionUnitPrices[priceMemory]` protocol parameter is updated to a value lower than `400 / 10,000`, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L121


## <a id="GR.007b"></a>User Story ID: GR.007b
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `executionUnitPrices[priceSteps]` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing an unconstitutional value for `executionUnitPrices[priceSteps]`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| `executionUnitPrices[priceSteps]` must not exceed `2,000 / 10,000,000` | Given governance guardrails script is enacted, when `executionUnitPrices[priceSteps]` protocol parameter is updated to a value exceeding `2,000 / 10,000,000`, the proposal should not be submitted successfully. |
| `executionUnitPrices[priceSteps]` must not be lower than `500 / 10,000,000` | Given governance guardrails script is enacted, when `executionUnitPrices[priceSteps]` protocol parameter is updated to a value lower than `500 / 10,000,000`, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L136

## <a id="GR.008"></a>User Story ID: GR.008
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `maxBlockBodySize` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing an unconstitutional value for `maxBlockBodySize`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| `maxBlockBodySize` must not exceed `122,880 Bytes (120 KB)` | Given governance guardrails script is enacted, when `maxBlockBodySize` protocol parameter is updated to a value exceeding `122,880 Bytes (120 KB)`, the proposal should not be submitted successfully. |
| `maxBlockBodySize` must not be lower than `24,576 Bytes (24 KB)` | Given governance guardrails script is enacted, when `maxBlockBodySize` protocol parameter is updated to a value lower than `24,576 Bytes (24 KB)`, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L151


## <a id="GR.009a"></a>User Story ID: GR.009a
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional  `maxTxExecutionUnits[memory]` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing an unconstitutional value for `maxTxExecutionUnits[memory]`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| `maxTxExecutionUnits[memory]` must not exceed `40,000,000 units` | Given governance guardrails script is enacted, when `maxTxExecutionUnits[memory]` protocol parameter is updated to a value exceeding `40,000,000 units`, the proposal should not be submitted successfully. |
| `maxTxExecutionUnits[memory]` must not be negative | Given governance guardrails script is enacted, when `maxTxExecutionUnits[memory]` protocol parameter is updated to a negative value, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L166

## <a id="GR.009b"></a>User Story ID: GR.009b
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional  `maxTxExecutionUnits[steps]` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing an unconstitutional value for `maxTxExecutionUnits[steps]`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| `maxTxExecutionUnits[steps]` must not exceed `15,000,000,000 (15Bn) units` | Given governance guardrails script is enacted, when `maxTxExecutionUnits[steps]` protocol parameter is updated to a value exceeding `15,000,000,000 (15Bn) units`, the proposal should not be submitted successfully. |
| `maxTxExecutionUnits[steps]` must not be negative | Given governance guardrails script is enacted, when `maxTxExecutionUnits[steps]` protocol parameter is updated to a negative value, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L182


## <a id="GR.010a"></a>User Story ID: GR.010a
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional  `maxBlockExecutionUnits[memory]` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing an unconstitutional value for `maxBlockExecutionUnits[memory]`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| `maxBlockExecutionUnits[memory]` must not exceed `120,000,000 units` | Given governance guardrails script is enacted, when `maxBlockExecutionUnits[memory]` protocol parameter is updated to a value exceeding `120,000,000 units`, the proposal should not be submitted successfully. |
| `maxBlockExecutionUnits[memory]` must not be negative | Given governance guardrails script is enacted, when `maxBlockExecutionUnits[memory]` protocol parameter is updated to a negative value, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L198


## <a id="GR.010b"></a>User Story ID: GR.010b
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `maxBlockExecutionUnits[steps]` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing an unconstitutional value for `maxBlockExecutionUnits[steps]`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| `maxBlockExecutionUnits[steps]` must not exceed `40,000,000,000 (40Bn) units` | Given governance guardrails script is enacted, when `maxBlockExecutionUnits[steps]` protocol parameter is updated to a value exceeding `40,000,000,000 (40Bn) units`, the proposal should not be submitted successfully. |
| `maxBlockExecutionUnits[steps]` must not be negative | Given governance guardrails script is enacted, when `maxBlockExecutionUnits[steps]` protocol parameter is updated to a negative value, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L213


## <a id="GR.011"></a>User Story ID: GR.011
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `maxValueSize` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing an unconstitutional value for `maxValueSize`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| `maxValueSize` must not exceed `12,288 Bytes (12 KB)` | Given governance guardrails script is enacted, when `maxValueSize` protocol parameter is updated to a value exceeding `12,288 Bytes (12 KB)`, the proposal should not be submitted successfully. |
| `maxValueSize` must not be negative | Given governance guardrails script is enacted, when `maxValueSize` protocol parameter is updated to a negative value, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L228


## <a id="GR.012"></a>User Story ID: GR.012
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `collateralPercentage` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing an unconstitutional value for `collateralPercentage`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| `collateralPercentage` must not be lower than `100` | Given governance guardrails script is enacted, when `collateralPercentage` protocol parameter is updated to a value lower than `100`, the proposal should not be submitted successfully. |
| `collateralPercentage` must not exceed `200` | Given governance guardrails script is enacted, when `collateralPercentage` protocol parameter is updated to a value exceeding `200`, the proposal should not be submitted successfully. |
| `collateralPercentage` must not be zero | Given governance guardrails script is enacted, when `collateralPercentage` protocol parameter is updated to a value of zero, the proposal should not be submitted successfully. |
| `collateralPercentage` must not be negative | Given governance guardrails script is enacted, when `collateralPercentage` protocol parameter is updated to a negative value, the proposal should not be submitted successfully. |


### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L244


## <a id="GR.013"></a>User Story ID: GR.013
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `maxCollateralInputs` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing an unconstitutional value for `maxCollateralInputs`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| `maxCollateralInputs` must not be lower than `1` | Given governance guardrails script is enacted, when `maxCollateralInputs` protocol parameter is updated to a value lower than `1`, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L268


## <a id="GR.014a"></a>User Story ID: GR.014a
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `poolVotingThresholds[motionNoConfidence]` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing unconstitutional value for `poolVotingThresholds[motionNoConfidence]`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| All pool voting Thresholds must be in the range `50%-100%` | Given governance guardrails script is enacted, when `poolVotingThresholds[*]` protocol parameters are updated to values outside the range `50%-100%`, the proposal should not be submitted successfully. |
| Pool voting No confidence action thresholds must be in the range `51%-75%` | Given governance guardrails script is enacted, when `poolVotingThresholds[motionNoConfidence]` protocol parameter is updated to a value outside the range `51%-75%`, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L279


## <a id="GR.014b"></a>User Story ID: GR.014b
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `poolVotingThresholds[committeeNormal]` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing unconstitutional value for `poolVotingThresholds[committeeNormal]`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| All pool voting thresholds must be in the range `50%-100%` | Given governance guardrails script is enacted, when `poolVotingThresholds[*]` protocol parameters are updated to values outside the range `50%-100%`, the proposal should not be submitted successfully. |
| Update Constitutional committee action thresholds must be in the range `51%-90%` | Given governance guardrails script is enacted, when `poolVotingThresholds[committeeNormal]` protocol parameter is updated to a value outside the range `51%-90%`, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L302

## <a id="GR.014c"></a>User Story ID: GR.014c
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `poolVotingThresholds[committeeNoConfidence]` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing unconstitutional values for `poolVotingThresholds[committeeNoConfidence]`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| All pool voting thresholds must be in the range `50%-100%` | Given governance guardrails script is enacted, when `poolVotingThresholds[*]` protocol parameters are updated to values outside the range `50%-100%`, the proposal should not be submitted successfully. |
| Pool voting committee No confidence action thresholds must be in the range `51%-90%` | Given governance guardrails script is enacted, when `poolVotingThresholds[committeeNoConfidence]` protocol parameter is updated to a value outside the range `51%-90%`, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L325

## <a id="GR.014d"></a>User Story ID: GR.014d
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `poolVotingThresholds[hardForkInitiation]` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing unconstitutional values for `poolVotingThresholds[hardForkInitiation]`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| All pool voting thresholds must be in the range `50%-100%` | Given governance guardrails script is enacted, when `poolVotingThresholds[*]` protocol parameters are updated to values outside the range `50%-100%`, the proposal should not be submitted successfully. |
| Pool voting hard fork action thresholds must be in the range `51%-80%` | Given governance guardrails script is enacted, when `poolVotingThresholds[hardForkInitiation]` protocol parameter is updated to a value outside the range `51%-80%`, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L348


## <a id="GR.014e"></a>User Story ID: GR.014e
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `poolVotingThresholds[ppSecurityGroup]` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing unconstitutional values for `poolVotingThresholds[ppSecurityGroup]`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| All pool voting thresholds must be in the range `50%-100%` | Given governance guardrails script is enacted, when `poolVotingThresholds[*]` protocol parameters are updated to values outside the range `50%-100%`, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L371


## <a id="GR.015a"></a>User Story ID: GR.015a
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `dRepVotingThresholds[motionNoConfidence]` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing unconstitutional values for `dRepVotingThresholds[motionNoConfidence]`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| All DRep voting thresholds must be in the range `50%-100%` | Given governance guardrails script is enacted, when `dRepVotingThresholds[*]` protocol parameters are updated to values outside the range `50%-100%`, the proposal should not be submitted successfully. |
| DRep voting No confidence action thresholds must be in the range `51%-75%` | Given governance guardrails script is enacted, when `dRepVotingThresholds[motionNoConfidence]` protocol parameter is updated to a value outside the range `51%-75%`, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L386

## <a id="GR.015b"></a>User Story ID: GR.015b
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `dRepVotingThresholds[committeeNormal]` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing unconstitutional values for `dRepVotingThresholds[committeeNormal]`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| All DRep voting thresholds must be in the range `50%-100%` | Given governance guardrails script is enacted, when `dRepVotingThresholds[*]` protocol parameters are updated to values outside the range `50%-100%`, the proposal should not be submitted successfully. |
| DRep voting committee normal action thresholds must be in the range `51%-90%` | Given governance guardrails script is enacted, when `dRepVotingThresholds[committeeNormal]` protocol parameter is updated to a value outside the range `51%-90%`, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L409


## <a id="GR.015c"></a>User Story ID: GR.015c
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `dRepVotingThresholds[committeeNoConfidence]` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing unconstitutional values for `dRepVotingThresholds[committeeNoConfidence]`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| All DRep voting thresholds must be in the range `50%-100%` | Given governance guardrails script is enacted, when `dRepVotingThresholds[*]` protocol parameters are updated to values outside the range `50%-100%`, the proposal should not be submitted successfully. |
| DRep voting committee No confidence action thresholds must be in the range `51%-90%` | Given governance guardrails script is enacted, when `dRepVotingThresholds[committeeNoConfidence]` protocol parameter is updated to a value outside the range `51%-90%`, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L432


## <a id="GR.015d"></a>User Story ID: GR.015d
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional`dRepVotingThresholds[updateToConstitution]` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing unconstitutional values for `dRepVotingThresholds[updateToConstitution]`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| All DRep voting thresholds must be in the range `50%-100%` | Given governance guardrails script is enacted, when `dRepVotingThresholds[*]` protocol parameters are updated to values outside the range `50%-100%`, the proposal should not be submitted successfully. |
| DRep voting thresholds for updating to a new Constitution or guardrails script must be in the range `65%-90%` | Given governance guardrails script is enacted, when `dRepVotingThresholds[updateToConstitution]` protocol parameter is updated to a value outside the range `65%-90%`, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L455


## <a id="GR.015e"></a>User Story ID: GR.015e
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `dRepVotingThresholds[hardForkInitiation]` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing unconstitutional values for `dRepVotingThresholds[hardForkInitiation]`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| All DRep voting thresholds must be in the range `50%-100%` | Given governance guardrails script is enacted, when `dRepVotingThresholds[*]` protocol parameters are updated to values outside the range `50%-100%`, the proposal should not be submitted successfully. |
| DRep voting hard fork action thresholds must be in the range `51%-80%` | Given governance guardrails script is enacted, when `dRepVotingThresholds[hardForkInitiation]` protocol parameter is updated to a value outside the range `51%-80%`, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L478

## <a id="GR.015f"></a>User Story ID: GR.015f
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `dRepVotingThresholds[ppNetworkGroup]` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing unconstitutional values for `dRepVotingThresholds[ppNetworkGroup]`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| All DRep voting thresholds must be in the range `50%-100%` | Given governance guardrails script is enacted, when `dRepVotingThresholds[*]` protocol parameters are updated to values outside the range `50%-100%`, the proposal should not be submitted successfully. |
| DRep voting thresholds for economic, network, and technical parameters must be in the range `51%-75%` | Given governance guardrails script is enacted, when `dRepVotingThresholds[ppNetworkGroup]` protocol parameter is updated to a value outside the range `51%-75%`, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L501


## <a id="GR.015g"></a>User Story ID: GR.015g
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `dRepVotingThresholds[ppEconomicGroup]` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing unconstitutional values for `dRepVotingThresholds[ppEconomicGroup]`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| All DRep voting thresholds must be in the range `50%-100%` | Given governance guardrails script is enacted, when `dRepVotingThresholds[*]` protocol parameters are updated to values outside the range `50%-100%`, the proposal should not be submitted successfully. |
| DRep voting thresholds for economic, network, and technical parameters must be in the range `51%-75%` | Given governance guardrails script is enacted, when `dRepVotingThresholds[ppEconomicGroup]` protocol parameter is updated to a value outside the range `51%-75%`, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L524


## <a id="GR.015h"></a>User Story ID: GR.015h
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `dRepVotingThresholds[ppTechnicalGroup]` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing unconstitutional values for `dRepVotingThresholds[ppTechnicalGroup]`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| All DRep voting thresholds must be in the range `50%-100%` | Given governance guardrails script is enacted, when `dRepVotingThresholds[*]` protocol parameters are updated to values outside the range `50%-100%`, the proposal should not be submitted successfully. |
| DRep voting thresholds for economic, network, and technical parameters must be in the range `51%-75%` | Given governance guardrails script is enacted, when `dRepVotingThresholds[ppTechnicalGroup]` protocol parameter is updated to a value outside the range `51%-75%`, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L547


## <a id="GR.015i"></a>User Story ID: GR.015i
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `dRepVotingThresholds[ppGovGroup]` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing unconstitutional values for `dRepVotingThresholds[ppGovGroup]`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| All dRep voting thresholds must be in the range `50%-100%` | Given governance guardrails script is enacted, when `dRepVotingThresholds[*]` protocol parameters are updated to values outside the range `50%-100%`, the proposal should not be submitted successfully. |
| dRep voting thresholds for governance parameters must be in the range `75%-90%` | Given governance guardrails script is enacted, when `dRepVotingThresholds[ppGovGroup]` protocol parameter is updated to a value outside the range `75%-90%`, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L570


## <a id="GR.015j"></a>User Story ID: GR.015j
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `dRepVotingThresholds[treasuryWithdrawal]` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing unconstitutional values for `dRepVotingThresholds[treasuryWithdrawal]`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| All dRep voting thresholds including `dRepVotingThresholds[treasuryWithdrawal]` must be in the range `50%-100%` | Given governance guardrails script is enacted, when `dRepVotingThresholds[treasuryWithdrawal,*]` protocol parameters are updated to values outside the range `50%-100%`, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L593

## <a id="GR.016"></a>User Story ID: GR.016
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `committeeMinSize` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing unconstitutional values for `committeeMinSize`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| `committeeMinSize` must not be negative | Given governance guardrails script is enacted, when `committeeMinSize` protocol parameter is updated to a negative value, the proposal should not be submitted successfully. |
| `committeeMinSize` must not be lower than `3` | Given governance guardrails script is enacted, when `committeeMinSize` protocol parameter is updated to a value lower than `3`, the proposal should not be submitted successfully. |
| `committeeMinSize` must not exceed `10` | Given governance guardrails script is enacted, when `committeeMinSize` protocol parameter is updated to a value exceeding `10`, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L608


## <a id="GR.017"></a>User Story ID: GR.017
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `committeeMaxTermLimit` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing unconstitutional values for `committeeMaxTermLimit`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| `committeeMaxTermLimit` must not be zero | Given governance guardrails script is enacted, when `committeeMaxTermLimit` protocol parameter is updated to zero, the proposal should not be submitted successfully. |
| `committeeMaxTermLimit` must not be negative | Given governance guardrails script is enacted, when `committeeMaxTermLimit` protocol parameter is updated to a negative value, the proposal should not be submitted successfully. |
| `committeeMaxTermLimit` must not be lower than 18 epochs (approximately 3 months) | Given governance guardrails script is enacted, when `committeeMaxTermLimit` protocol parameter is updated to a value lower than `18 epochs`, the proposal should not be submitted successfully. |
| `committeeMaxTermLimit` must not exceed 293 epochs (approximately 4 years) | Given governance guardrails script is enacted, when `committeeMaxTermLimit` protocol parameter is updated to a value exceeding `293 epochs`, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L627


## <a id="GR.018"></a>User Story ID: GR.018
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `govActionLifetime` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing unconstitutional values for `govActionLifetime`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| `govActionLifetime` must not be lower than `1 epoch` (approximately 5 days) | Given governance guardrails script is enacted, when `govActionLifetime` protocol parameter is updated to a value lower than `1 epoch`, the proposal should not be submitted successfully. |
| `govActionLifetime` must not exceed `15 epochs` (approximately 75 days) | Given governance guardrails script is enacted, when `govActionLifetime` protocol parameter is updated to a value exceeding `15 epochs`, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L650


## <a id="GR.019"></a>User Story ID: GR.019
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `maxTxSize` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing unconstitutional values for `maxTxSize`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| `maxTxSize` must not exceed `32,768 Bytes (32KB)` | Given governance guardrails script is enacted, when `maxTxSize` protocol parameter is updated to a value exceeding `32,768 Bytes`, the proposal should not be submitted successfully. |
| `maxTxSize` must not be negative | Given governance guardrails script is enacted, when `maxTxSize` protocol parameter is updated to a negative value, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L665


## <a id="GR.020"></a>User Story ID: GR.020
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `govDeposit` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing unconstitutional values for `govDeposit`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| `govDeposit` must not be negative | Given governance guardrails script is enacted, when `govDeposit` protocol parameter is updated to a negative value, the proposal should not be submitted successfully. |
| `govDeposit` must not be lower than `1,000,000 (1 ada)` | Given governance guardrails script is enacted, when `govDeposit` protocol parameter is updated to a value lower than 1,000,000 (1 ada), the proposal should not be submitted successfully. |
| `govDeposit` must not exceed `10,000,000,000,000 (10 million ada)` | Given governance guardrails script is enacted, when `govDeposit` protocol parameter is updated to a value exceeding 10,000,000,000,000 (10 million ada), the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L680


## <a id="GR.021"></a>User Story ID: GR.021
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `dRepDeposit` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing unconstitutional values for `dRepDeposit`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| `dRepDeposit` must not be negative | Given governance guardrails script is enacted, when `dRepDeposit` protocol parameter is updated to a negative value, the proposal should not be submitted successfully. |
| `dRepDeposit` must not be lower than `1,000,000 (1 ada)` | Given governance guardrails script is enacted, when `dRepDeposit` protocol parameter is updated to a value lower than `1,000,000 (1 ada)`, the proposal should not be submitted successfully. |
| `dRepDeposit` must not exceed 100,000,000,000 (100,000 ada) | Given governance guardrails script is enacted, when `dRepDeposit` protocol parameter is updated to a value exceeding `100,000,000,000 (100,000 ada)`, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L699


## <a id="GR.022"></a>User Story ID: GR.022
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `dRepActivity` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing unconstitutional values for `dRepActivity`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| `dRepActivity` must not be lower than `13 epochs` (2 months) | Given governance guardrails script is enacted, when `dRepActivity` protocol parameter is updated to a value lower than `13 epochs`, the proposal should not be submitted successfully. |
| `dRepActivity` must not exceed `37 epochs` (6 months) | Given governance guardrails script is enacted, when `dRepActivity` protocol parameter is updated to a value exceeding `37 epochs`, the proposal should not be submitted successfully. |
| `dRepActivity` must not be negative | Given governance guardrails script is enacted, when `dRepActivity` protocol parameter is updated to a negative value, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L718


## <a id="GR.023"></a>User Story ID: GR.023
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `minFeeRefScriptCoinsPerByte` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing unconstitutional values for `minFeeRefScriptCoinsPerByte`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| `minFeeRefScriptCoinsPerByte` must not exceed `1,000 (0.001 ada)` | Given governance guardrails script is enacted, when `minFeeRefScriptCoinsPerByte` protocol parameter is updated to a value exceeding `1,000 (0.001 ada)`, the proposal should not be submitted successfully. |
| `minFeeRefScriptCoinsPerByte` must not be negative | Given governance guardrails script is enacted, when `minFeeRefScriptCoinsPerByte` protocol parameter is updated to a negative value, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L737


## <a id="GR.024"></a>User Story ID: GR.024
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `maxBlockHeaderSize` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing unconstitutional values for `maxBlockHeaderSize`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| `maxBlockHeaderSize` must not exceed 5,000 Bytes | Given governance guardrails script is enacted, when `maxBlockHeaderSize` protocol parameter is updated to a value exceeding 5,000 Bytes, the proposal should not be submitted successfully. |
| `maxBlockHeaderSize` must not be negative | Given governance guardrails script is enacted, when `maxBlockHeaderSize` protocol parameter is updated to a negative value, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L752


## <a id="GR.025"></a>User Story ID: GR.025
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `stakeAddressDeposit` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing unconstitutional values for `stakeAddressDeposit`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| `stakeAddressDeposit` must not be lower than `1,000,000 (1 ada)` | Given governance guardrails script is enacted, when `stakeAddressDeposit` protocol parameter is updated to a value lower than `1,000,000 (1 ada)`, the proposal should not be submitted successfully. |
| `stakeAddressDeposit` must not exceed `5,000,000 (5 ada)` | Given governance guardrails script is enacted, when `stakeAddressDeposit` protocol parameter is updated to a value exceeding `5,000,000 (5 ada)`, the proposal should not be submitted successfully. |
| `stakeAddressDeposit` must not be negative | Given governance guardrails script is enacted, when `stakeAddressDeposit` protocol parameter is updated to a negative value, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#767


## <a id="GR.026"></a>User Story ID: GR.026
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `stakePoolDeposit` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing unconstitutional values for `stakePoolDeposit`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| `stakePoolDeposit` must not be lower than `250,000,000 (250 ada)` | Given governance guardrails script is enacted, when `stakePoolDeposit` protocol parameter is updated to a value lower than `250,000,000 (250 ada)`, the proposal should not be submitted successfully. |
| `stakePoolDeposit` must not exceed `500,000,000 (500 ada)` | Given governance guardrails script is enacted, when `stakePoolDeposit` protocol parameter is updated to a value exceeding `500,000,000 (500 ada)`, the proposal should not be submitted successfully. |
| `stakePoolDeposit` must not be negative | Given governance guardrails script is enacted, when `stakePoolDeposit` protocol parameter is updated to a negative value, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L786

## <a id="GR.027"></a>User Story ID: GR.027
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `poolRetireMaxEpoch` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing unconstitutional values for `poolRetireMaxEpoch`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| `poolRetireMaxEpoch` must not be negative | Given governance guardrails script is enacted, when `poolRetireMaxEpoch` protocol parameter is updated to a negative value, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L805


## <a id="GR.028"></a>User Story ID: GR.028
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `stakePoolTargetNum` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing unconstitutional values for `stakePoolTargetNum`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| `stakePoolTargetNum` must not be lower than `250` | Given governance guardrails script is enacted, when `stakePoolTargetNum` protocol parameter is updated to a value lower than `250`, the proposal should not be submitted successfully. |
| `stakePoolTargetNum` must not exceed `2,000` | Given governance guardrails script is enacted, when `stakePoolTargetNum` protocol parameter is updated to a value exceeding `2,000`, the proposal should not be submitted successfully. |
| `stakePoolTargetNum` must not be negative | Given governance guardrails script is enacted, when `stakePoolTargetNum` protocol parameter is updated to a negative value, the proposal should not be submitted successfully. |
| `stakePoolTargetNum` must not be zero | Given governance guardrails script is enacted, when `stakePoolTargetNum` protocol parameter is updated to zero, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L816


## <a id="GR.029"></a>User Story ID: GR.029
- [ ] Enabler
### Title: When proposing protocol parameters update, the governance guardrail should prevent  unconstitutional `poolPledgeInfluence` value
### User Story
- As an ADA holder, when submitting an update protocol parameters proposal, the governance guardrail should prevent allowing unconstitutional values for `poolPledgeInfluence`.

### Functional Requirements
| Requirements | Acceptance Criteria |
|--------------|---------------------|
| `poolPledgeInfluence` must not be lower than `0.1` | Given governance guardrails script is enacted, when `poolPledgeInfluence` protocol parameter is updated to a value lower than `0.1`, the proposal should not be submitted successfully. |
| `poolPledgeInfluence` must not exceed `1.0` | Given governance guardrails script is enacted, when `poolPledgeInfluence` protocol parameter is updated to a value exceeding `1.0`, the proposal should not be submitted successfully. |
| `poolPledgeInfluence` must not be negative | Given governance guardrails script is enacted, when `poolPledgeInfluence` protocol parameter is updated to a negative value, the proposal should not be submitted successfully. |

### Link: https://github.com/IntersectMBO/plutus/blob/db119872c0dfc8537a39d38cea8ef0b20c59ecb5/cardano-constitution/data/defaultConstitution.json#L839
