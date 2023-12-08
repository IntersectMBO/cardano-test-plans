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
| Requirements  | Acceptance Criteria  |
|:----|:----|
|Requirement text| AC with <ul><li>bullet</li><li>points</li></ul>|
### Link:

# CARDANO-CLI

## User Story ID:  CLI.001
- [ ] Enabler
### Title: Obtain constitution hash for verification
### User Story
- As an Ada holder,<br>
I want to obtain the hash of the off-chain text of a Constitution, <br>
So that I can compare it against the hash registered on-chain to verify its authenticity.

### Functional requirements
| Requirements  | Acceptance Criteria  |
|:----|:----|
|When I provide the off-chain text of the Constitution, the cardano-cli calculatea and returns the corresponding blake2b-256 hash of the document.|Given that a holder provides the off-chain text of the constitution then cardano-cli returns the corresponding blake2b-256 hash. Provided that it is the same document, the resulting hash match the one registered on-chain.|

## User Story ID:  CLI.002
- [ ] Enabler
### Title: Generate hash of the off-chain constitution
### User Story
- As an Ada holder,<br>
I want to generate the hash of the off-chain text for a proposed Constitution<br>
So that the hash can be utilized in a governance action.

### Functional requirements
| Requirements  | Acceptance Criteria  |
|:----|:----|
|When I provide the off-chain text of the Constitution, the cardano-cli calculates and returns the corresponding blake2b-256 hash of the document.|Given that a holder provides the off-chain text of the constitution then cardano-cli returns the corresponding blake2b-256 hash.|


## User Story ID:  CLI.003
- [ ] Enabler
### Title: Generate Committee member cold key pair
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
| The generated key pair must be stored in the specified files:<ul><li>the verification key is saved in the file specified by `--cold-verification-key-file`</li><li>the signing key saved in the file specified by `--cold-signing-key-file`</li></ul>|Both flags are mandatory and each produces the corresponding verification or signing key file.|
||Given that the user specifies a valid path and file name, then the keys are saved on that file and location.|
|The generated keys adhere to text envelope format used for other artifacts, and contains the fields Type, Description and cborHex.|Given that the cli has created the verification and signing keys, then these conform to the text envelope format used  consisting of a json object with `type`, `description` and `cborHex` fields.|
|The signing key text envelope contains the correct type and description <ul><li>Type: "ConstitutionalCommitteeColdSigningKey_ed25519"</li><li>Description: "Constitutional Committee Cold Signing Key"</li></ul>|Given that the signing key is saved on a text envelope format, the type and description fields are: <ul><li>Type: "ConstitutionalCommitteeColdSigningKey_ed25519"</li><li>Description: "Constitutional Committee Cold Signing Key"</li></ul>|
|The verification key text envelope has: <ul><li>Type: "CConstitutionalCommitteeColdVerificationKey_ed25519"<br>Description: "Constitutional Committee Cold Verification Key"</li></ul>|Given the user has *not* inputted either `--cold-verification-key-file` OR `--cold-signing-key-file`, then the command fails and returns an error to the users informing them to fill those parameters in. The error message should prompt the user to consult the command usage (--help)|
|Failing to provide a file name for any of `--cold-verification-key-file` `--cold-signing-key-file` returns an appropriate error message.|Given the user has inputted *wrong* `--cold-verification-key-file` OR `--cold-signing-key-file`, then the command fails and returns an error to the users informing them that the supplied files do not match the expected type.|


### Link:

## User Story ID:  CLI.004
- [ ] Enabler
### Title: Generate committee member hot key pair
### User Story
- As Constitutional Committee member,<br>
I want to generate HOT key pair,<br>
So that I can authorize the Hot key to sign votes on behalf of the Cold key.

### Functional requirements
- The feature implementation includes a new command `cardano-cli conway governance committee key-gen-hot`
- Running `cardano-cli conway governance committee key-gen-hot —-help` displays command usage page.
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
- Running `cardano-cli conway governance committee key-gen-hot` displays command usage.
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
### Title: Authorization certificate
### User Story
- As a committee member,<br>
I want to issue an authorization certificate from my cold key to a hot key,<br>
so that I can sign votes using the hot key and keep the cold key in cold storage.

### Functional requirements
- The feature implementation should include a new command `cardano-cli conway governance committee create-hot-key-authorization-certificate`
- Includes the necessary flags to obtain cold and hot credentials.
- Running the command with the appropriate flags should generate a hot key authorization certificate and be saved in the specified output file.
- The hot key authorization certificate follows the text envelope format of other existing certificates, including the type, description, and CBOR hex fields
- The certificate must comply with the cddl: `auth_committee_hot_cert = (14, committee_cold_credential, committee_hot_credential)`
- The command handles potential errors, such as missing or invalid flags, and provide appropriate error messages indicating the missing or required parameters.
- Documentation should be provided, including a corresponding CLI usage, describing the feature, its purpose, and how to use it, along with the expected types of inputs and outputs.

### Acceptance Criteria
- Running `cardano-cli conway governance committee create-hot-key-authorization-certificate` with accepted input parameters generates a hot key authorization certificate. If a parameter or the command format is incorrect an error is raised
- The command allows passing credentials as follows
    - Cold verification key <- string
    - Cold verification key file <- file
    - Cold verification key hash <- string
    - Hot verification key <- string
    - Hot verification key file <- file
    - Hot verification key hash <- string
- Given that the user specifies a valid path and file name, then the command produces a Cold to Hot authorization certificate on the right location and name.
- Given that the authorization certificate is saved, then it is in a text envelope format consisting of a json object with type, description and cbor hex fields.

    ```json
    {
        "type": "CertificateConway",
        "description": "Constitutional Committee Hot Key Authorization Certificate",
        "cborHex": ""
    }
    ```
- Failing to provide the right input results in a clear error message that helps the user to identify the problem
- Generates a authorization certificate compliant with the conway cddl.   `auth_committee_hot_cert = (14, committee_cold_credential, committee_hot_credential)`
- The command handles potential errors, such as missing or invalid flags, and provide appropriate error messages indicating the missing or required parameters.
- Running `cardano-cli conway governance committee create-hot-key-authorization-certificate —-help` displays command usage

## User Story ID:  CLI.006
- [ ] Enabler
### Title: Generate committee member key hash
### User Story
- As a potential constitutional committee member,<br>
I want to generate the key hashes for my cold verification key,<br>
so that it can be used by third parties to propose me as a new committee member;<br>
and for identification purposes once Ive been elected as committee member.
### Functional requirements
- The implementation includes the new command `cardano-cli conway governance committee key-hash`
- Generates the blake2b 256 hash of the verification key.
- Allows passing credentials as follows:
    - Cold verification key <- string
    - Cold verification key file <- file
- Gives the option to save the key hash to a file, default is printing to stdout
- Handles potential errors, such as missing flags or invalid input, and provides appropriate error messages or exceptions to guide the user.
- Documentation should be provided, including a corresponding CLI usage, describing the feature, its purpose, and how to use it, along with the expected types of inputs and outputs.

### Acceptance Criteria
- Running `cardano-cli conway governance committee key-hash` with accepted input parameters generates blake2b 256 hash of the verification key. If a parameter or the command format is incorrect an error is raised
- Passing the cold-verification-key or cold-verification-key-file is mandatory,
- Given that the user specifies the –out-file parameter and a valid path and file name, then the key hash is saved on that file and location.
- Given that the user has *not* specified the `–out-file`, then the key hash must be returned in clear text through stdout (cmd output).
- Given that the user has executed the correct command but has either filled incorrectly any of the parameters, missed any mandatory flag and/or parameter  then an exception should be raised and an error message should be returned with clear indication as to how to fix the issue. When not feasible, the user should be directed to the usage page of the command (cardano-cli conway governance committee key-hash --help).
- Running  `cardano-cli conway governance committee key-hash --help` display the command usage page.

## User Story ID:  CLI.007
- [ ] Enabler
### Title: Committee member resignation certificate
### User Story
- As a constitutional committee member,<br>
I want to be able to generate a resignation certificate,<br>
so that i can submit it to the chain on a transaction to signal to the ada holders that I’m resigning from my duties.

### Functional requirements
- The command should be implemented in the cardano-cli as `cardano-cli conway governance committee create-cold-resignation-certificate`
- Allows passing credentials as follows:
    - Cold verification key <- string
    - Cold verification key file <- file
    - Cold verification key hash <- string
- Allows an optional anchor (url/hash) to express motives for resignation. The CLI does not need to check for the validity of the URL, the contents, or that the documents and declared hash match.
- Includes a mandatory flag for saving the certificate to a file.
- The resignation certificate follows the text envelope format of other existing certificates, including the type, description, and CBOR hex fields
- The certificate type must be "ConwayResignCommitteeColdKey".
- The certificate description must be "Constitutional Committee Cold Key Resignation Certificate".
- Generates a resignation certificate compliant with the conway cddl: `resign_committee_cold_cert = (15, committee_cold_credential, anchor / null)`
- The command handles potential errors, such as missing or invalid flags or keys, and provide appropriate error messages indicating the missing or required parameters.
- Documentation should be provided, including a corresponding CLI usage, describing the feature, its purpose, and how to use it, along with the expected types of inputs and outputs.

### Acceptance Criteria
- Running `cardano-cli governance committee create-cold-resignation-certificate` with accepted input parameters generates a cold resignation certificate.
- Allows passing credentials as follows
    - `--cold-verification-key`
    - `--cold-verification-key-file`
    - `--cold-verification-key-hash`

    If any of the inputs has the wrong format the cli raises an error message indicating the missing or incorrect parameter.
- Allows for an optional anchor comprised of a URL containing a document where the resigning CC member expresses the motivations and the hash of the document.
    - `--resignation-metadata-url`
    - `--resignation-metadata-hash`
- Given that a valid path and file name are specified, then the certificate is saved on the specified location.
- Given that the resignation certificate is saved, then it is in a text envelope format consisting of a json object with type, description and cbor hex fields.

    ```json
    {
    "type": "CertificateConway",
    "description": "Constitutional Committee Cold Key Resignation Certificate",
    "cborHex": ""
    }
    ````
- The cborHex field conforms to the conway cddl: `resign_committee_cold_cert = (15, committee_cold_credential, anchor / null)`
- Handles potential errors, such as missing or invalid flags or keys, and provide appropriate error messages indicating the missing or required parameters.
- Documentation should be provided, including a corresponding CLI usage, describing the feature, its purpose, and how to use it, along with the expected types of inputs and outputs.

## User Story ID:  CLI.008
- [ ] Enabler
### Title: Generate Drep keys
### User Story
- As an ada holder,<br>
I want to generate Ed25519 keys,<br>
so that I can register as a DRep.

### Functional requirements
- The command is implemented as `cardano-cli conway governance drep key-gen`
- Supports the `--verification-key-file` option to specify the file where the verification key will be saved.
- Supports the `--signing-key-file` option to specify the file where the signing key will be saved
- The generated keys must adhere to text envelope format used for other artifacts and contains the fields Type, Description and cborHex.
- The signing key text envelope contains the correct type, description, and cborHex values.
    - Type: "DRepVerificationKey_ed25519"
    - Description: "Delegate Representative Verification Key"
- The verification key text envelope has:
    - Type:  "DRepSigningKey_ed25519"
    - Description: "Delegate Representative Signing Key"

### Acceptance Criteria
- Running cardano-cli conway governance drep key-gen with accepted input parameters generates an Ed25519 key pair
- The flag --verification-key-file is mandatory, failing to provide it raises an error.
- The flag --signing-key-file is mandatory, failing to provide it raises an error.
- When valid paths and file names are specified, the  corresponding verification and signing key files are saved on the respective locations.
- Given that the verification and signing key files are saved, then they are in a text envelope format consisting of a json object with type, description and cbor hex fields, where:

    ```json
    {
     "type": "DRepVerificationKey_ed25519",
     "description": "Delegate Representative Verification Key",
     "cborHex": ""
    }
    ```
    ```json
    {
     "type": "DRepSigningKey_ed25519",
     "description": "Delegate Representative VSigning Key",
     "cborHex": ""
     }
    ```
## User Story ID:  CLI.009
- [ ] Enabler
### Title: Generate Drep ID
### User Story
- As a DRep,<br>
I want to generate a Drep Id,<br>
so that my voting record can be tracked,<br>
and ada holders can use the DrepId to delegate their votes to me.

### Functional requirements
- The command is implemented as `cardano-cli conway governance drep id` and generates the blake2b-224 hash digest of the serialised DRep credential (verification key).
- The command accepts supplying the verification key with either:
    - `--drep-verification-key`
    - `–-drep-verification-key-file options`
- Supports the --out-file FILE flag (optional) to allow users to save the generated DRep ID to a file. Default is printing to stdout.
- Provides an option to specify the output format. Accepted output formats are "hex" and "bech32". "bech32" is the default format.
- Handles errors gracefully and provides helpful error messages when required options are missing or invalid inputs are provided.
- The feature is well-documented, providing clear usage instructions for the cardano-cli conway governance drep id command.

### Acceptance Criteria
- Running  `cardano-cli conway governance drep id` with accepted input parameters generates a DRep ID: the blake2b-224 hash digest of the verification key.
- Using one of the flags is mandatory, the flags are mutually exclusive:
    - `--drep-verification-key <- string`
    - `-–drep-verification-key-file  <- file`
- Given that a valid path and file name are supplied, then, using the –out-file flag saves the drep id to a file on the specified location. If the specified path does not exist or is inaccessible the cli returns an error message.
- If the –out-flag is not used the Drep ID is printed on stdout
- Given that the optional --output-format flag is used, and  “bech32” is given as an argument, then the DRep Id is printed in bech32 format with the “drep” prefix.
- Given that the optional --output-format flag is used, and the hex is given as an argument, then the DRep Id is printed in hex format.
- If the --output-format STRING option is not specified, the DRep ID should be displayed in "bech32" format by default.
- Running `cardano-cli conway governance drep id` --help displays the command usage page.
- If any required input parameter is missing or incorrect, the command should raise an error indicating the missing or incorrect parameter.

## User Story ID:  CLI.010
- [ ] Enabler
### Title: DRep Registration Certificate Generation
### User Story
As a DRep,<br>
I want to generate a DRep registration certificate,<br>
so that I can submit it in a transaction and be eligible for receiving delegation.

### Functional requirements
- The command is implemented as `cardano-cli conway governance drep registration-certificate`.
- Requires the user to provide the DRep key deposit amount.
- The command allows the user to provide the DRep credential in the following ways:
  - DRep verification key
  - DRep verification key file
  - DRep ID
- The command allows adding an optional anchor (url/hash) to submit any DRep metadata.
- When both `--drep-metadata-url` and `--drep-metadata-hash` are provided, the resulting certificate should include the URL and hash in the anchor position; otherwise, the field is null.
- The `--out-file FILE` option is mandatory and used to specify the file where the generated DRep registration certificate will be saved.
- Generates a registration certificate compliant with the Conway CDDL.
- The certificate should be in a text envelope format, containing a json object with the fields type, description and cborHex.
- The feature implementation should be well-documented, providing clear usage instructions for the `cardano-cli conway governance drep registration-certificate` command.
- Handles errors gracefully and provide helpful error messages when required options are missing or invalid inputs are provided.

### Acceptance Criteria
- Running `cardano-cli conway governance drep registration-certificate` with accepted input parameters generates a DRep registration certificate.
- The flag `--key-reg-deposit-amt` is mandatory and takes the deposit amount in lovelace as an argument.
- The command presents the options to pass the DRep credential:
  - `--drep-verification-key STRING`
  - `--drep-verification-key-file FILE`
  - `--drep-id STRING`
- Using one of these is mandatory but mutually exclusive.
- Failing to provide the right input results in a clear error message that helps the user identify the problem.
- If the user wants to include an anchor with the DRep's metadata, then the command requires both the URL and the hash to be provided. Only URL or only hash is not allowed.
  - `--drep-metadata-url TEXT`
  - `--drep-metadata-hash HASH`
- Failing to provide the right input results in a clear error message that helps the user identify the problem.
- The anchor is included in the certificate on the last position: `reg_drep_cert = (16, drep_credential, coin, anchor / null)`.
- The flag `--out-file` is mandatory and takes the file path and name as an argument.
- Failure to provide the flag and its argument generates an exception.
- Given that the certificate is saved, it should be in a text envelope format consisting of a JSON object with type, description, and CBOR hex fields, where:
  ```json
  {
      "type": "CertificateConway",
      "description": "DRep Registration Certificate",
      "cborHex": "00000000"
  }
- Typing `cardano-cli conway governance drep registration-certificate --help` displays the command usage page.
- If any required input parameter is missing or incorrect, the command should raise an error indicating the missing or incorrect parameter.

## User Story ID:  CLI.011
- [ ] Enabler
### Title: DRep Retirement Certificate Generation
### User Story
As a DRep,<br>
I want to generate a DRep retirement (unregistration) certificate,<br>
so that I can submit it in a transaction stop acting as a governance actor,<br>
and retrieve my DRep deposit.

### Functional requirements
- The command is impremented as `cardano-cli conway governance drep retirement-certificate`.
- Allows supplying the DRep credentials in the following ways:
    - DRep verification key
    - DRep verification key file
    - Drep Id
- Typing `cardano-cli conway governance drep retirement-certificate` with accepted input parameters will generate a DRep retirement certificate.
- The command has the mandatory flag `--deposit-amt` to require the user to provide the DRep deposited amount that is to be returned.
  - Must match the deposit originally paid when registering as DRep but is only checked when submitting the transaction.
- The `--out-file FILE` option should be mandatory and used to specify the file where the generated DRep retirement certificate will be saved.
- The certificate should be in a text envelope format similar to stake pools deregistration certificates.
- The output certificate complies with the Conway CDDL: `unreg_drep_cert = (17, drep_credential, coin)`.
- The feature implementation should be well-documented, providing clear usage instructions.
- The command handles errors gracefully and provides helpful error messages when required options are missing or invalid inputs are provided.

### Acceptance Criteria
- Running `cardano-cli conway governance drep retirement-certificate` with accepted input parameters generatea a DRep retirement certificate.
- The command accepts any the flags:
    - `--drep-verification-key STRING`
    - `--drep-verification-key-file FILE`
    - `--drep-id STRING`
    Supplying the credential is mandatory, so is using any of these flags.
- The flag `--deposit-amt` is mandatory and takes the deposit amount in lovelace as an argument.
- Not providing the flag and its argument generates an exception.
- The flag `--out-file` is mandatory and takes the file path and name as an argument.
- Failure to provide the flag and its argument generates an exception.
- Given that the certificate is saved, it should be in a text envelope format consisting of a JSON object with type, description, and CBOR hex fields, where:
   ```json
   {
       "type": "CertificateConway",
       "description": "DRep Retirement Certificate",
       "cborHex": "00000000"
   }
- The cborHex field conforms to the conway cddl: `unreg_drep_cert = (17, drep_credential, coin)`.
- Running `cardano-cli conway governance drep retirement-certificate --help` displays the command usage page.
- If any required input parameter is missing or incorrect, the command raise an error indicating the missing or incorrect parameter.

## User Story ID:  CLI.012
- [ ] Enabler
### Title: DRep Metadata Hash Generation
### User Story
As a DRep,<br>
I want to generate the hash of my DRep metadata, <br>
so that I can supply it when registering as a DRep.

### Functional requirements
- The command is implemented as `cardano-cli conway governance drep metadata-hash`.
- Calculates the blake2b 256 hash of the file supplied by the user.
- Requires the `--drep-metadata-file FILE` option to specify the file containing the DRep metadata.
- Supports the `--out-file FILE` option (optional) to enable users to save the calculated metadata hash to the specified file. If the flag is not used, the hash is printed to stdout.
- The command handles errors gracefully and provides helpful error messages when required options are missing or invalid inputs are provided.

### Acceptance Criteria
- Running `cardano-cli conway governance drep metadata-hash` successfully generates the blake2b 256 hash of the specified DRep metadata file.
- The command requires the user to provide the DRep metadata file using the `--drep-metadata-file FILE` option.
- The command allows users to use the optional `--out-file FILE` option to save the calculated metadata hash to the specified file. If not used, the hash is printed to stdout.
- Running `cardano-cli conway governance drep metadata-hash --help` displays the command usage page.
- If any required input parameter is missing or incorrect, the command raises an error indicating the missing or incorrect parameter.

## User Story ID:  CLI.013
- [ ] Enabler
### Title: Create Update Constitution Governance Action
### User Story
As an ADA holder,<br>
I want to create a governance action that updates the constitution,<br>
so that it can be submitted to the chain and be voted on by the governance bodies.

### Functional requirements
- The command is implemented as `cardano-cli conway governance action create-constitution`.
- Requires the user to specify the target network for which the governance action is created.
- Requires the user to provide the deposit amount for submitting governance actions via the flag `--governance-action-deposit`.
- Requires the user to provide the stake credential that will receive the deposit return when the action is enacted/expired. It accepts:
- Allows the user to provide the transaction ID and index of the previously enacted action of this type. These flags are optional, but if one is used, the other one must be used too, to support the very first action of this type on the system that does not require information about previously enacted actions. The flags are:
  - `--prev-governance-action-tx-id`
  - `--prev-governance-action-index`
- Asks the user to provide a mandatory anchor (URL/hash) of the proposal, a document where the proposer exposes the reasoning behind the proposed change.
- Requires the user to provide an anchor (URL/
- The command has a flag to specify the path where the output file will be saved.
- The generated governance action complies with the Conway CDDL, where:
    - proposal_procedure = [ deposit : coin, reward_account, gov_action, anchor ]
    -  new_constitution = (5, gov_action_id / null, constitution)
    -  constitution = [ anchor, scripthash / null ]

### Acceptance Criteria
- Running `cardano-cli conway governance action create-constitution` successfully creates a governance action for updating the constitution.
- The command requires the user to specify the target network using either `--mainnet` or `--testnet-magic NATURAL`.
- The command prompts the user to provide the deposit amount for submitting governance actions via the flag `--governance-action-deposit`.
    - The deposit amount must match the original deposit when registering the governance action but is only checked when submitting the transaction.
- The user provides the deposit return stake credential using one of the following options:
    - `--deposit-return-stake-verification-key STRING`
    - `--deposit-return-stake-verification-key-file FILE` to specify the file containing the deposit return stake verification key.
    - `--deposit-return-stake-key-hash HASH` to directly specify the deposit return stake key hash as a string.
- The optional flags `--prev-governance-action-tx-id` and `--prev-governance-action-index`are available to support the very first action of this type on the system, which does not require information about previously enacted actions.
- The user provides an anchor (URL/hash) of the proposal document the following options:
    - `--anchor-url`
    - `--anchor-data-hash`
- The user provides an anchor (URL/hash) of the new constitution the following options:
    - `--constitution-url`
    - `--constitution-hash`
- The `--out-file` flag is available to specify the file where the generated governance action (proposal) will be saved.
- The generated governance action complies with the Conway CDDL:
    - proposal_procedure = [ deposit : coin, reward_account, gov_action, anchor ]
    - new_constitution = (5, gov_action_id / null, constitution)
    - constitution = [ anchor, scripthash / null ]

## User Story ID:  CLI.014
- [ ] Enabler
### Title: Create Update Constitutional Committee Governance Action
### User Story
As an ADA holder,<br>
I want to create a governance action that updates the constitutional committee,<br>
so that it can be submitted to the chain and be voted on by the governance bodies.

### Functional requirements
- The command is implemented as `cardano-cli conway governance action create-constitutional-committee`.
- Requires the user to specify the target network for which the governance action is created.
- Requires the user to provide the deposit amount for submitting governance actions via the flag `--governance-action-deposit`.
- Requires the user to provide the stake credential that will receive the deposit return when the action is enacted/expired. It accepts:
- Allows the user to provide the transaction ID and index of the previously enacted action of this type. These flags are optional, but if one is used, the other one must be used too, to support the very first action of this type on the system that does not require information about previously enacted actions. The flags are:
    - `--prev-governance-action-tx-id`
    - `--prev-governance-action-index`
- Asks the user to provide a mandatory anchor (URL/hash) of the proposal, a document where the proposer exposes the reasoning behind the proposed change.
- The command offers the option to remove many constitutional committee members, it accepts:
    - Cold verification key <- string
    - Cold verification key file <- file
    - Cold verification key hash <- string
- The command offers the option to add many constitutional committee members, it accepts
    - Cold verification key <- string
    - Cold verification key file <- file
    - Cold verification key hash <- string
    - When adding a new member, the command requires the user to also provide a term in epochs for each new member
- The command allows proposing a new quorum threshold:
    - When adding members
    - When removing members
    - As a standalone action (no adds or removals)
- The `--out-file` flag is available to specify the file where the generated governance action (proposal) will be saved.
- The generated governance action complies with the Conway CDDL:
    - proposal_procedure = [ deposit : coin, reward_account, gov_action, anchor ]
    - update_committee = (4, gov_action_id / null, set<committee_cold_credential>, { committee_cold_credential => epoch }, unit_interval)

### Acceptance Criteria
- Running `cardano-cli conway governance action create-constitutional-committee` successfully creates a governance action for updating the constitutional committee.
- The command requires the user to specify the target network using either `--mainnet` or `--testnet-magic NATURAL`.
- The command prompts the user to provide the deposit amount for submitting governance actions via the flag `--governance-action-deposit`.
- The user provides the deposit return stake credential using one of the following options:
    - `--deposit-return-stake-verification-key STRING`
    - `--deposit-return-stake-verification-key-file FILE` to specify the file containing the deposit return stake verification key.
    - `--deposit-return-stake-key-hash HASH` to directly specify the deposit return stake key hash as a string.
- The user provides an anchor (URL/hash) of the proposal document using the following flags:
    - `--anchor-url`
    - `--anchor-data-hash`
- The command offers the option to remove many constitutional committee members, it accepts any of:
    - `--remove-cc-cold-verification-key-hash`
    - `--remove-cc-cold-verification-key`
    - `--remove-cc-cold-verification-key-file`
- The command offers the option to add many constitutional committee members, it acceptw any of:
    - `--add-cc-cold-verification-key`
    - `--add-cc-cold-verification-key-file`
    - `--add-cc-cold-verification-key-hash`
- When adding a new member, the command requires the user to also provide a term for each new member using the flag `--epoch`.
- The command allows proposing a new quorum threshold:
    - When adding members
    - When removing members
    - As a standalone action (no adds or removals)
- The `--out-file` flag is available to specify the file where the generated governance action (proposal) will be saved.
- The generated governance action complies with the Conway CDDL:
    - proposal_procedure = [ deposit : coin, reward_account, gov_action, anchor ]
    - update_committee = (4, gov_action_id / null, set<committee_cold_credential>, { committee_cold_credential => epoch }, unit_interval)
- Running `cardano-cli conway governance action create-constitutional-committee --help` displays the command usage page.
- If any required input parameter is missing or incorrect, the command raise an error indicating the missing or incorrect parameter.

## User Story ID:  CLI.015
- [ ] Enabler
### Title: Create Treasury Withdrawal Governance Action
### User Story
As an ADA holder,<br>
I want to create a governance action to withdraw funds from the treasury,<br>
so that it can be submitted to the chain and be voted on by the governance bodies.

### Functional requirements
- The command is implemented as `cardano-cli conway governance action create-treasury-withdrawal`.
- Requires the user to specify the target network for which the governance action is created using either `--mainnet` or `--testnet-magic NATURAL`.
- Requires the user to provide the deposit amount for submitting governance actions via the flag `--governance-action-deposit`.
- Requires the user to provide the stake credential that will receive the deposit return when the action is enacted/expired.
- Requires the user to provide an anchor (URL/hash)
- Requires the user to provide the stake credential that will receive the funds if the governance action is ratified.
- Requires the user to provide the amount in lovelace that will be transferred from the treasury to the stake credential if the action is ratified.
- The command has the `--out-file` flag available to specify the file where the generated governance action (proposal) will be saved.
- The generated governance action complies with the Conway CDDL:
    - proposal_procedure = [ deposit : coin, reward_account, gov_action, anchor ]
    - treasury_withdrawals_action = (2, { reward_account => coin })

## Acceptance Criteria
- Running `cardano-cli conway governance action create-treasury-withdrawal` successfully creates a governance action for withdrawing funds from the treasury.
- The command requires the user to specify the target network using either `--mainnet` or `--testnet-magic NATURAL`.
- The command prompts the user to provide the deposit amount for submitting governance actions via the flag `--governance-action-deposit`.
- The user provides the deposit return stake credential using one of the following options:
    - `--deposit-return-stake-verification-key STRING`
    - `--deposit-return-stake-verification-key-file FILE`
    - `--deposit-return-stake-key-hash HASH`
    Using one of these is mandatory
- The user provides an anchor (URL/hash) of the proposal document using the following flags:
    - `--anchor-url`
    - `--anchor-data-hash`
- The user provides the stake credential that will receive the funds if the governance action is ratified using one of the following options:
    - `--funds-receiving-stake-verification-key-file FILE`
    - `--funds-receiving-stake-verification-key STRING`
    - `--funds-receiving-stake-key-hash HASH`
     Using one of these is mandatory
- The user can use the flag `--transfer`to specify the amount in lovelace that will be transferred from the treasury to the stake credential if the action is ratifieduse the flag
- The command has the `--out-file` flag available to specify the file where the generated governance action (proposal) will be saved.
- The generated governance action complies with the Conway CDDL:
    - proposal_procedure = [ deposit : coin, reward_account, gov_action, anchor ]
    - treasury_withdrawals_action = (2, { reward_account => coin })
- Running `cardano-cli conway governance action create-treasury-withdrawal --help` displays the command usage page.
- If any required input parameter is missing or incorrect, the command raise an error indicating the missing or incorrect parameter.



## User Story ID:  CLI.0n
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
### Functional requirements (n.m) with Associated Criteria (AC n.m.o)
- FR1.1.1
- AC1.1.1.1 - this is the 1st AC for FR1.1
- FR1.1.2
- AC1.1.2.1 - this is the 1st AC for FR1.1
- AC1.1.2.1 - this is the 1st AC for FR1.1
- FR1.1.3
- AC1.1.3.1 - this is the 1st AC for FR1.1
- AC1.1.3.1 - this is the 1st AC for FR1.1
