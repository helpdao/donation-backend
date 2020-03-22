# donation-backend

#### Back-end repository of the [donations portal](https://github.com/helpdao/donation-portal). 

## How it's structured?

- [routes](./routes) Dir to store the express' router modules of the app.
- [controllers](./controllers) Dir to store the controllers of the app,
- [models](./models) Dir to store the Mongoose models of the app.
- [middlewares](./middlewares) Dir to store some middle-wares scripts.

## Database Models:

### Squad:

###### The model is not defined yet, I've make an approach:

```JSON
{
	name:{type:String, unique:true, required:[true, 'Squad Name required']},
	verified:{type:Boolean, required:false, default:false},
	signUpDate: { type: Date, default: Date.now() }
}
```





## Endpoints:

### Squad:

All the Squad's routes starts with these URL: ```localhost:3000/squad ```

- #### Create new Squad

  - Method: POST

  - Endpoint: ```/new```

  - Body: 

    ```{name:SquadName}```

  - Response:

    ```JSON
        {
            "verified": false,
            "signUpDate": "2020-03-22T21:54:33.740Z",
            "_id": "5e77dedb7d032151fbfb3eb9",
            "name": "SquadTest",
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
            "__v": 0
        }
    ```

- #### Find Squad by any field

  - Method: POST

  - Endpoint: ```/find```

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
        {
            "verified": false,
            "signUpDate": "2020-03-22T21:54:33.740Z",
            "_id": "5e77dedb7d032151fbfb3eb9",
            "name": "SquadTest",
            "__v": 0
        }
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
                "__v": 0
            },
            {
                "verified": true,
                "signUpDate": "2020-03-22T21:54:33.740Z",
                "_id": "5e77dedb7d032151fbfb3eb9",
                "name": "SquadTest2",
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
                "__v": 0
            }
        ]
    }
    ```

- #### 

## How to contribute?

Lets make an standard for the scripts' naming, every file should follow the next schema:

```filename.dirname.extension```

Where ***dirname*** is the directory where is contained the file.

***If the file is included in the main directory this is the schema:***

```filename.extension```



**Also lets avoid to use names that begins with uppercase.**

- Fork the repo and switch to a new branch using `git checkout -b [branch_name]`
- Code your stuff.
- Commit and push to your own forked repo using `git add [files]`, `git commit -m [your message]` and `git push origin [branch_name]`
- Make a pull request from your forked repo.

#### Thanks for your contribution.

