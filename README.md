# donation-backend

#### Back-end repository of the [donations portal](https://github.com/helpdao/donation-portal). 

## How to run it?

`git clone https://helpDAO/donation-backend.git`

`cd donation-backend`

`npm start`

**Make sure that mongodb is running**

#### Using Docker

`git clone https://helpDAO/donation-backend.git`

`cd donation-backend`

`docker-compose up -d ` 

## How it's structured?

- [routes](./routes) Dir to store the express' router modules of the app.
- [controllers](./controllers) Dir to store the controllers of the app,
- [models](./models) Dir to store the Mongoose models of the app.
- [middlewares](./middlewares) Dir to store some middle-wares scripts.

# Relevant Information:

## Ports:

### Localhost:

- #### API Listen Port: 3001

- #### DB Listen Port: 27017

### Docker:

- #### API Listen Port: 3001

- #### DB Listen Port: 27018

---



## Database Models:

### Squad:

```JS
{
	name:{type:String, unique:true, required:true},
	verified:{type:Boolean, required:false, default:false},
	signUpDate: { type: Date, default: Date.now() }
	description:{type:String, unique:false, maxlength:10000, required:true},
	inviteLink:{type:String, unique:false, required:true},
	daoAddress:{type:String,unique:false, required:true},
	donationAddress:{type:String,unique:false, required:true},

}
```





## Endpoints:

### Squad:

**If you want to try the requests in postman you can use this [collection](https://www.getpostman.com/collections/df6e3300e1a1d5d05a80)**
###### Just click the import button (Top-Left corner), paste the link in the "Import from link" section and click import.

All the Squad's routes starts with these URL: ```localhost:3001/squad ```

- #### Create new Squad

  - Method: POST

  - Endpoint: ```/new```

  - Header: ```{Content-Type: application/json}```

  - Body: 

    ```JSON
    {
    	"name":"SquadTest",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "inviteLink":"t.me/squadTest",
        "daoAddress":"0x0472ec0185ebb8202f3d4ddb0226998889663cf2 "
    }
    ```

    

  - Response:

    ```JSON
        {
            "verified": false,
            "signUpDate": "2020-03-22T21:54:33.740Z",
            "_id": "5e77dedb7d032151fbfb3eb9",
            "name": "SquadTest",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        	"inviteLink":"t.me/squadTest",
        	"daoAddress":"0x0472ec0185ebb8202f3d4ddb0226998889663cf2 ",
            "__v": 0
        }
    ```

- #### Find Squad by ID

  - Method: GET

  - Endpoint: ```/:squadId```

  - Example: ```/5e77dedb7d032151fbfb3eb9```

  - Response:

    ```JSON
        {
            "verified": false,
            "signUpDate": "2020-03-22T21:54:33.740Z",
            "_id": "5e77dedb7d032151fbfb3eb9",
            "name": "SquadTest",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        	"inviteLink":"t.me/squadTest",
        	"daoAddress":"0x0472ec0185ebb8202f3d4ddb0226998889663cf2 ",        
            "__v": 0
        }
    ```

- #### Find Squad by any field

  - Method: POST

  - Endpoint: ```/find```

  - Header: ```{Content-Type: application/json}```

  - Body:

    ```JSON
    {
        "squadField":"fieldValue"
    }
    ```

  - Example:

    ```JSON
    {
        "name":"SquadTest"
    }
    ```

  - Response:

    ```JSON
        "squads": [ {
            "verified": false,
            "signUpDate": "2020-03-22T21:54:33.740Z",
            "_id": "5e77dedb7d032151fbfb3eb9",
            "name": "SquadTest",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        	"inviteLink":"t.me/squadTest",
        	"daoAddress":"0x0472ec0185ebb8202f3d4ddb0226998889663cf2 ",        
          "__v": 0
        }
	]
    ```
    
    

- #### Get all the Squads

  - Method: GET

  - Endpoint: ```/all```

  - Response:

    ```JSON
    {
        "squads": [
            {
                "verified": false,
                "signUpDate": "2020-03-22T21:54:33.740Z",
                "_id": "5e77de9d7d032151fbfb3eb8",
                "name": "SquadTest",
            	"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        		"inviteLink":"t.me/squadTest",
        		"daoAddress":"0x0472ec0185ebb8202f3d4ddb0226998889663cf2 ",            
                "__v": 0
            },
            {
                "verified": true,
                "signUpDate": "2020-03-22T21:54:33.740Z",
                "_id": "5e77dedb7d032151fbfb3eb9",
                "name": "SquadTest2",
            	"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        		"inviteLink":"t.me/squadTest2",
        		"daoAddress":"0x4e709797a971e49018402446f753d467275f75ad ",            
                "__v": 0
            }
        ]
    }
    ```

- #### Get all the unverified Squads

  - Method: GET

  - Endpoint: ```/all/unverified```

  - Response:

    ```JSON
    {
        "squads": [
            {
                "verified": false,
                "signUpDate": "2020-03-22T21:54:33.740Z",
                "_id": "5e77de9d7d032151fbfb3eb8",
                "name": "SquadTest",
            	"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        		"inviteLink":"t.me/squadTest",
        		"daoAddress":"0x0472ec0185ebb8202f3d4ddb0226998889663cf2 ",             
                "__v": 0
            }
        ]
    }
    ```

- #### Get all the verified Squads

  - Method: GET

  - Endpoint: ```/all/verified```

  - Response:

    ```JSON
    {
        "squads": [
            {
                "verified": true,
                "signUpDate": "2020-03-22T21:54:33.740Z",
                "_id": "5e77dedb7d032151fbfb3eb9",
                "name": "SquadTest2",
            	"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        		"inviteLink":"t.me/squadTest2",
        		"daoAddress":"0x4e709797a971e49018402446f753d467275f75ad ",             
                "__v": 0
            }
        ]
    }
    ```


## How to contribute?

Lets make an standard for the scripts' naming, every file should follow the next pattern:

```filename.dirname.extension```

Where ***dirname*** is the directory where is contained the file.

***If the file is included in the main directory this is the schema:***

```filename.extension```

**Also lets avoid to use names that begins with uppercase.**

#### Steps:

- Fork the repo and switch to a new branch using `git checkout -b [branch_name]`
- Code your stuff.
- Commit and push to your own forked repo using `git add [files]`, `git commit -m [your message]` and `git push origin [branch_name]`
- Make a pull request from your forked repo.

#### Thanks for your contribution.

---

