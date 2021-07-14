# **Create a Person in Banner Using EEDM APIs** #

```mermaid
graph TD
    Aid1([START]) -->B(A. persons QAPI call)
    B --> Cid1[/B. Person Found/Not/]
    Cid1 --> |person found| D(C. PUT request to persons)
    Cid1 --> |person not found| E(F. POST request to persons)
    E --> H(G.Person record created in Banner)
    D --> F(D. Person record updated in Banner)
    F --> Gid1[/E. Additional updates needed/]
    H --> Gid1
    Gid1 -.-> |YES| D
    Gid1 --> |NO| Jid1([END])
    %% Class Definitions
    %% =================
    class Aid1,Jid1 cssClass;
    classDef cssClass fill:#8E1BFF,stroke:#333,stroke-width:2px, font-size:15px;
    class Cid1,Gid1 cssClass2;
    classDef cssClass2 fill:#A1E6DA,stroke:#333,stroke-width:2px, font-size:15px;
    class Cid1,Gid1 cssClass3;
    classDef cssClass2 fill:#A1E6DA,stroke:#333,stroke-width:2px, font-size:15px;
```

The Ethos enabled EEDM APIs can be used to create and/or update a person record in the Banner General system.  The person record created through the persons API is accessible to other systems just as if that person record had been created by an administrator using the Banner user interface.

The process documented is dependent upon Ethos Integration tenant has been configured for the environment.  Please see XXXXXX for assistance with the tenant configuration.


## **Process:  Create a Person in Banner** ##

### Step A:  persons QAPI call ###
Banner processes and users create person records for many reasons and the person record is retained indefinitely. It is possible the person record needed already exists in Banner.  To reduce the possibility of creating multiple records for the same person, a QAPI request should always be submitted as the first step when creating a person record.
	
	[insert examples of SDK code snippets]
	

### Step B:  Person Found/Not Found###
The QAPI will execute user-defined matching rules in Banner and return any person records that match the submitted criteria.  These records can then be reviewed to determine if an existing record should be updated or a new person record created.

### Step C:  PUT request to persons ###
To update an existing person record, a PUT request to the persons API is used.  Only required properties and any optional properties being updated by the request should be included.  There is no need to include optional properties that are not being updated unless they are part of an array being submitted.

	[insert examples of SDK code snippets]

### Step D:  Person record update in Banner ###
The persons PUT request will return the full persons data model schema not just the properties included in the update request.

### Step E:  Additional updates needed ###
If after review of the response additional person record updates are required simply repeat Step C.

### Step F:  Post request to persons ###
Use a POST request to the persons API to create a new person record in Banner.  Only required properties are needed to create the person record but for efficiency you may want to include as much optional information as is known.  The record can be updated with additional information at a later time as needed.

	[insert SDK code snippets]
	
### Step G:  Person record created in Banner ###
A successful person POST request will return a new guid for the person in addition to the other successfully created detailed information. 


##Tips for Success  ##


- Updates to an array are treated as a complete replacement of the array data.  Be sure to include full information for the array properties.  Failure to include data within an array update is treated as inactivation or delete of the existing information. 
- Use GET requests to related APIs to obtain the guids and definitions of properties in the persons model schema.
- The persons API includes default logic to populate some properties even if they are not submitted in the POST request. 
- Not all properties in the schema are allowed to be updated through the persons API.
- The institution may choose to mask some sensitive data within the persons API response even though the data was successfully updated by the POST request.  The header "x-content restricted/partial" denotes when restrictions prevent the API user from receiving the full schema response.
- Subscribe to change notifications for persons to keep your data in sync with Banner.