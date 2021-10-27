
![image](https://user-images.githubusercontent.com/92478365/138358383-120b04b1-77ce-4380-9a05-3bf2c15bf4eb.png)
<!-- ABOUT THE PROJECT -->
## TODOIST API
<!-- ABOUT THE PROJECT -->
## About The Project
Todoist is the simple yet powerful to-do list app that will help organize life and work.

Todoist developer site : https://developer.todoist.com/rest/v1/#overview



### Built With
Frameworks and libraries used:
* NPM
* Postman
* Newman
	
	
<!-- GETTING STARTED -->
## Getting Started
	
### Prerequisites
- [x] An IDE installed  (Recommended: Visual studio code)
- [x] NPM installed
	
### Installation
- Clone the repository : https://github.com/Alexahls/TodoistAPI
- Install Newman using the terminal
	 ```
	npm install newman
	```
- Create a todoist account and get the token:
  1. After you create your account -> go to your profile icon at top right
  2. Click on settings
  3. Go to Integrations, scroll down, API token section is displayed

- Add your token to the Environment variables: 
  1. Open the Environment file
  2. Search for "key": "token"
  3. In "value" value,  paste your token and save the file.


	   
Description:  
- BackEnd:
	* Collection : Here you can  find the collection file where the api requests are saved. 
	* Environment : The file where all the data used by the request is saved.

Requests structure:  
- Todoist:
	- Project
	  - Valid test
	  - Negative test
	- Task
	  - Valid test
	  - Negative test 



<!-- EXECUTING SCRIPTS  -->
## Execute scripts
Copy & paste the following code into the terminal
- Run all the suite:
	```
	npm run todoistTest
	```
