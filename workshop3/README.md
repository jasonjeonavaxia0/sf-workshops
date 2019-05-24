# WORKSHOP 3

In this workshop you will be required to create a Petty Cash Management applicatiom for vending machines.
The application will have 3 important entities: PCM, Vending Machine, and Approval Process. 
Below you will find details about the project requirements. 

# Business Details
So, we have a company called "Comapny X" that would like to use Salesforce to manage 2 operations that involves the management of the vending machines. 
The vending machine all have a unique number (serial number), an Account which has all the details about the owner, and lastly it will have name.
First operation, upon the installation of a vending machine, Company X would like to have an application (PCM application) that allows them to make "installment request" in order to speficy how much money that they would like to put in the vending machine. After creating a request they would like the requester to submit their request for approval - their manager or CFO will be the ones giving their approval. Second operation, Company X wants their staff to be able to place a "float request" for a specific vending machine, this process will only require they approval of their manager.


# Implementation Details 

## PCM Request App
- Need CRUD Pages
- Record Type:
    - Installment Request 
    - Float Request 
- Fields: 
    - Serial Number (make a string type but always insert digit)
    - Vending Machine (Reference)
    - Record Type (2 types)
    - amount 

- Validations:
    - Vending Machine must be requiried 
    - Vending Machine with serial number starting with "xxx" must allow creation of PCM Request
    - Vending Machine with serial number starting with "yyy" must be automatically replaced by a unique vending machine with this serial number "123456" (user Process Builder or Flows)

- Approval Process: 
    - Entry Criteria: 
        * amount cannot be negative 
        * amount cannot be zero 
    - Steps
        * Amount less than　￥100万 requester manager must approve
        * Amount greater than ￥100万 manager and CFO must approve
    - Email 
        * Send on approval request to correct approver 
        * Send approval response to requester  

## Vending Machine 
- Need CRUD Pages
- Serial Number (must be unique)
- Account (Reference)
- Name




