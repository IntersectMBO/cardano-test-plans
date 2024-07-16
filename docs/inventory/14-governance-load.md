---
sidebar_label: Governance Action Load User Stories
title: Governance Action Load User Stories
sidebar_position: 14
slug: /governance-load
--- 

| Scenario Id    | Title                     | Scenario Description                                                                                                                                                             | Acceptance Criteria                                | 
|----------------|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| **GOV-LOAD-001** | Majority Vote on Proposal | <ul><li>Create 3 proposals (*proposal1*, *proposal2*, *proposal3*) for each governance action</li> <li>100 DReps, 90 CC Members, and 3 SPOs vote on the proposals with *proposal1* receiving enough **YES** votes based on the voting threshold</li> <li>*proposal2* and *proposal3* are voted with insufficient **YES** votes</li></ul> | The proposal with enough votes (i.e., *proposal1*) is enacted |
| **GOV-LOAD-002** | Equal Votes on Proposals  | <ul><li>Create 3 proposals (*proposal1*, *proposal2*, *proposal3*) for each governance action</li> <li>100 DReps, 90 CC Members, and 3 SPOs vote on the proposals with *proposal1* and *proposal2* receiving exactly the same amount of **YES** votes exceeding the voting threshold</li> <li>*proposal3* is voted with insufficient **YES** votes</li></ul>| Among *proposal1* and *proposal2*, the proposal submitted to the chain first is enacted |
| **GOV-LOAD-003** | Insufficient Votes on Proposals | <ul><li>Create 3 proposals (*proposal1*, *proposal2*, *proposal3*) for each governance action</li> <li>100 DReps, 90 CC Members, and 3 SPOs submit insufficient amount of **YES** votes on all the proposals </ul> | None of the proposals are enacted |
