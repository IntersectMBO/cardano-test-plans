---
sidebar_label: SmartContracts user stories
title: Smart Contract user stories
sidebar_position: 4
slug: /smart-contracts
---

## Personas
|ID|NAME|DESCRIPTION|
|----|:----|:----|
|HOLDER | ADA Holder | |
|DRep | DRep | |

----

## User Story ID: CIP-85
- [ ] Enabler
### Title: Sums-of-products in Plutus v3
### User Story
 - As a DApp developer I want to use sums-of-products instead of Scott-encoding in my Plutus scripts to get better performance
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| Sums-of-products is available to use in Plutus V3 scripts and is the default way of encoding data types in Plutus Tx.<br/>The following new term constructors are added to the Plutus Core language:1<br/><br/><br/>`t ::=`<br/>`  ...`<br/>`  -- Packs the fields into a constructor value tagged with i`<br/>`  l (constr i t...)`<br/>`  -- Inspects the tag on t and passes its fields to the corresponding case branch`<br/>`  l (case t t...)` | Plutus: specification updated |
|  | Plutus: Implemented in production |
|  | Plutus: New operations are costed |
|  | Cardano-ledger: implementation of new ledger language including SOPs |
|  | Benchmarking: no regressions on existing scripts |
|  | Benchmarking: verify additional real-world examples |
|  | New Plutus language version supported in a release node version |
|  | New ledger language supported in a release node version |


### Link:
https://github.com/cardano-foundation/CIPs/tree/12c5cc59816b2fcc9daf9a77318a3ae018263367/CIP-0085

## User Story ID: CIP-101
- [ ] Enabler
### Title: Keccak256 in Plutus v3
### User Story
 - As a DApp developer I want to use the Keccak hashing function to validate ECDSA signatures formatted via the EVM standard<br/>
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| The Keccak-256 primitive in CIP-87 must be available to use in Plutus V3 scripts as follows:<br/>`keccak_256 :: ByteString -> ByteString`<br/><br/>Input is a `ByteString` of any size<br/>Output is 32 bytes `ByteString` | The primitive should be implemented in Plutus V3  |
|  | The Haskell implementations of the keccak builtin will be used to implement a new built-in function in Plutus Core. This should include a comprehensive set of local tests checking that the new builtin behave as expected. (including conformance and property-based testing).<br/>We should add a comprehensive set of conformance tests for the new builtin, and all of the tests should pass. |
|  | There should be e2e tests |
|  | We should provide budgeting benchmarks for the keccak256 builtin, run them, check that the results are sensible, then use them to create new entries in the cost model. |
|  | A precise description of the semantics of the new function should be added to the Plutus Core specification. |
|  | The new builtin should be added to the Agda development in plutus-metatheory and all of the conformance tests should pass. |
|  | Add the initial keccak256 builtin to PlutusTx. |


### Link:
https://github.com/cardano-foundation/CIPs/tree/master/CIP-0101

## User Story ID: PLT.001
- [ ] Enabler
### Title: Blake2b-224 in Plutus v3
### User Story
 - As a DApp developer I want to use the Blake2b-224 hashing function to compute PubKeyHash onchain
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| The Blake2b-224 primitive is available to use in Plutus V3 after the HF | The primitive should be implemented in Plutus V3  |
|  | The Haskell implementations of the blake2b-224 builtin will be used to implement a new built-in function in Plutus Core. This should include a comprehensive set of local tests checking that the new builtin behave as expected. (including conformance and property-based testing).<br/>We should add a comprehensive set of conformance tests for the new builtin, and all of the tests should pass. |
|  | There should be e2e tests |
|  | We should provide budgeting benchmarks for the blake2b-224 builtin, run them, check that the results are sensible, then use them to create new entries in the cost model. |
|  | A precise description of the semantics of the new function should be added to the Plutus Core specification. |
|  | The new builtin should be added to the Agda development in plutus-metatheory and all of the conformance tests should pass. |
|  | Add the initial blake2b-224 builtin to PlutusTx. |


### Link:


## User Story ID: CIP-87
- [ ] Enabler
### Title: Use bitwise operations in Plutus V3
### User Story
 - As a DApp developer I want to use bitwise operations So that I can work with data bytestrings in a more granular and optimized way and perform operations at the bit level
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| The following operations MUST be available to use in Plutus V3 after the HF:<br/>`integerToByteString` <br/>`byteStringToInteger` <br/><br/>The following operations WILL be available in future versions<br/>`andByteString` <br/>`iorByteString` <br/>`xorByteString` <br/>`complementByteString`<br/>`shiftByteString` <br/>`rotateByteString` <br/>`popCountByteString` <br/>`testBitByteString` <br/>`writeBitByteString` <br/>`findFirstSetByteString` | The primitives should be implemented in Plutus V3 for the initial set of bitwise builtins |
|  | The Haskell implementations of the initial set of bitwise builtins will be used to implement new built-in functions in Plutus Core. This should include a comprehensive set of local tests checking that the new builtins behave as expected. (including conformance and property-based testing).<br/>We should add a comprehensive set of conformance tests for the new builtins, and all of the tests should pass. |
|  | There should be e2e tests for each primitive |
|  | We should provide budgeting benchmarks for the initial set of bitwise builtins, run them, check that the results are sensible, then use them to create new entries in the cost model. |
|  | A precise description of the semantics of the new functions should be added to the Plutus Core specification. |
|  | The new builtins should be added to the Agda development in plutus-metatheory and all of the conformance tests should pass. |
|  | Add the initial bitwise builtins to PlutusTx. |
| The new primitives must execute in a reasonable time and should provide a clear advantage over alternatives implemented using existing Plutus Core features. |  |


### Link:
https://github.com/cardano-foundation/CIPs/blob/12c5cc59816b2fcc9daf9a77318a3ae018263367/CIP-XXXX/README.md

## User Story ID: CIP-XXXX
- [ ] Enabler
### Title: Math function to compute modular exponentiation
### User Story
 - As a dApp developer I want to use built-in modular exponentiation so that I have a more efficient and reliable mean to perform operations for multiplicative inversion
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|
| The built-in function is expressed as follows:<br/>`modularExponentiation :: Integer -> Integer -> Integer -> Integer` | Fails if the modulus is not an Integer& |
|  | Fails if the inverse of the base does not exist for a negative exponent |
|  | Low level implementation uses integerPowMod from the GHC-bignum C package |
|  | Reduces transactions costs |
|  | Uphold integrity of existing  cryptographic interfaces |
|  | Enhance cryptographic capabilities of Plutus platform |


### Link:
https://github.com/cardano-foundation/CIPs/pull/641

## User Story ID: CIP-XXXX
- [ ] Enabler
### Title: Built-in types, arrays and maps in Plutus Core
### User Story
 - As a dApp developer I want to be able to use built-in types and function arrays and map in Plutus scripts
### Functional Requirements
|Requirements|Acceptance Criteria|
|:----|:----|


### Link:



