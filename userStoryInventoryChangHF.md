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

# User Story (Voltaire, API, CIP-1694, Community et al)

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

# CARDANO-CLI

## User Story ID:  CLI.001
- [ ] Enabler
### Title: Obtain constitution hash for verification
### User Story
- As an Ada holder,
I want to obtain the hash of the off-chain text of a Constitution
So that I can compare it against the hash registered on-chain to verify its authenticity.

### Functional requirements
- When I provide the off-chain text of the Constitution, the cardano-cli calculatea and returns the corresponding blake2b-256 hash of the document.
### Acceptance Criteria
- Given that a holder provides the off-chain text of the constitution then cardano-cli returns the corresponding blake2b-256 hash. Provided that it is the same document, the resulting hash match the one registered on-chain.

## User Story ID:  CLI.002
- [ ] Enabler
### Title: Generate hash of the off-chain constitution
### User Story
- As an Ada holder,
I want to generate the hash of the off-chain text for a proposed Constitution
So that the hash can be utilized in a governance action.

### Functional requirements

- When I provide the off-chain text of the Constitution, the cardano-cli calculates and returns the corresponding blake2b-256 hash of the document.

### Acceptance Criteria
- Given that a holder provides the off-chain text of the constitution then cardano-cli returns the corresponding blake2b-256 hash.

## User Story ID:  CLI.003
- [ ] Enabler
### Title: Generate Committee member cold key pair
### User Story
- As a potential Constitutional Committee member, I want to generate COLD key pair So that I can be proposed for the Committee in a Governance action

### Functional requirements

- The feature implementation includes a new command: `cardano-cli conway governance committee key-gen-cold`
- Includes a corresponding CLI usage  describing the feature, how to use it and the types of the inputs and outputs.
- The command must accept two flags to be consistent with similar commands:

    - `--cold-verification-key-file`
    - `--cold-signing-key-file`
- The generated key pair must be stored in the specified files:

    - the verification key is saved in the file specified by `--cold-verification-key-file`
    - the signing key saved in the file specified by `--cold-signing-key-file`

- The generated keys adhere to text envelope format used for other artifacts, and contains the fields Type, Description and cborHex.
- The signing key text envelope contains the correct type and description

    - Type: "ConstitutionalCommitteeColdSigningKey_ed25519"
    - Description: "Constitutional Committee Cold Signing Key"
- The verification key text envelope has:

    - Type: "CConstitutionalCommitteeColdVerificationKey_ed25519"
    - Description: "Constitutional Committee Cold Verification Key"
- Failing to provide a file name for any of `--cold-verification-key-file` `--cold-signing-key-file` returns an appropriate error message.
### Acceptance Criteria

- Typing `cardano-cli conway governance committee key-gen-cold` with accepted input parameters generates a COLD key pair. If a parameter or the command format is incorrect an error is raised
- Typing `cardano-cli conway governance committee key-gen-cold —-help` displays command usage page.
- Both flags are mandatory and each produces the corresponding verification or signing key file.
- Given that the user specifies a valid path and file name, then the keys are saved on that file and location.
- Given that the cli has created the verification and signing keys, then these conform to the text envelope format used  consisting of a json object with `type`, `description` and `cborHex` fields.
Given that the signing key is saved on a text envelope format, the type and description fields are:
    - Type: "ConstitutionalCommitteeColdSigningKey_ed25519"
    - Description: "Constitutional Committee Cold Signing Key"
- Given that the verification key is saved on a text envelope format, the type and description fields are:
    - Type: "CConstitutionalCommitteeColdVerificationKey_ed25519"
    - Description: "Constitutional Committee Cold Verification Key"
- Given the user has *not* inputted either `--cold-verification-key-file` OR
`--cold-signing-key-file`, then the command fails and returns an error to the users informing them to fill those parameters in. The error message should prompt the user to consult the command usage (--help)
- - Given the user has inputted *wrong* `--cold-verification-key-file` OR
`--cold-signing-key-file`, then the command fails and returns an error to the users informing them that the supplied files do not match the expected type.

### Link:

## User Story ID:  CLI.004
- [ ] Enabler
### Title: Generate committee member hot key pair
### User Story
- As Constitutional Committee member,
I want to generate HOT key pair
So that I can authorize the Hot key to sign votes on behalf of the Cold key.

### Functional requirements
- The feature implementation includes a new command `cardano-cli conway governance committee key-gen-hot`
- Typing `cardano-cli conway governance committee key-gen-hot —-help` displays command usage page.
- The command must accept two flags
    - `--verification-key-file`
    - `--signing-key-file`
- The generated key pair must be saved in the specified files:
    - The verification key saved in the file specified by `--verification-key-file`
    - The signing key saved in the file specified by  `--signing-key-file`
- The generated keys must adhere to text envelope format used for other artifacts and contains the fields Type, Description and cborHex.
- The signing key text envelope contains the correct type, description, and cborHex values.
    - Type: "ConstitutionalCommitteeColdSigningKey_ed25519"
    - Description: "Constitutional Committee Cold Signing Key"
- The verification key text envelope has:
    - Type:  "CConstitutionalCommitteeColdVerificationKey_ed25519"
    - Description: "Constitutional Committee Cold Verification Key"
- Failing to provide a file name for any of the flags `--verification-key-file` `--signing-key-file` returns an appropriate error message.

### Acceptance Criteria
- Running `cardano-cli conway governance committee key-gen-hot` command with all the required and correct parameters then the command is executed successfully and a HOT key pair is generated.  If an argument or the command format is incorrect an error is raised.
- Typing `cardano-cli conway governance committee key-gen-hot` displays command usage.
- Both `--verification-key-file` and `--signing-key-file` are mandatory and each produces the corresponding verification or signing key file.
- Given that the user specifies a valid path and file name, then the keys are saved on that file and location.
- Given that the cli has created the verification and signing keys, then these conform to the text envelope format consisting of a json object with `type`, `description` and `cborHex` fields.
- Given that the signing key is saved on a text envelope format, the type and description fields are:
    - Type: "ConstitutionalCommitteeColdSigningKey_ed25519"
    - Description: "Constitutional Committee Cold Signing Key"
- Given that the verification key is saved on a text envelope format, the type and description fields are:
    - Type: "CConstitutionalCommitteeColdVerificationKey_ed25519"
    - Description: "Constitutional Committee Cold Verification Key"
- Given the user has not inputted either `--verification-key-file` OR `--signing-key-file`, then the command fails and returns an error.

## User Story ID:  CLI.005
- [ ] Enabler
### Title:
### User Story
### Functional requirements
### Acceptance Criteria

## User Story ID:  CLI.006
- [ ] Enabler
### Title:
### User Story
### Functional requirements
### Acceptance Criteria

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
### Functional requirements
- FR1
- FR2
- FR3
### Acceptance Criteria
- AC1
- AC2
- AC3