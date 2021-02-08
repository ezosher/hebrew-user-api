**Repo is under construction**

# Hebrew user Api (Mockup Api)

Hebrew user Api is the first **Hebrew** Mockup Api library for Prototyping and Playing around with fake data in a local inviorment all based on Hebrew language format. get a fake `REST API` data with random values. based on [json-server](https://github.com/typicode/json-server) package and endpoints

## Installation

Use the package manager `npm` to install dependedcies.

```bash
 npm install
```

## Usage

```bash
npm run start-server
```
## REST endpoints

```javascript
GET    /users    
GET    /users/1  
POST   /users    
PUT    /users/1  
PATCH  /users/1  
DELETE /users/1
```
More Information about `REST` endpoints and options can be found on [json-server](https://github.com/typicode/json-server) Docs

## User Schema
Cuurent User count in db is `100` more options and data will be added soon 

- Full Name: Male name/ Female name/ Last Name
- Mobile Number
- Land Line Number
- Email
- Full Address
   -City
   -Street
   -Postcode 
- **Job Title: Soon**
- **Coomerce: soon**
- **Birth Date: Soon**

## Response Example 
```json
 {
    "id": 5,
    "name": "ירדנה לוי",
    "mobile": "057-717-0149",
    "land_line": "09-277-2740",
    "email": "11@gmail.com",
    "address": {
      "addressId": 5,
      "city": "כפר מימון",
      "street": "השושן",
      "number": 125,
      "postcode": 3578083
    }
  },

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Roadmap
Expusing Functions to genreate each individual paramater to create your own unique API schema

If you have ideas for releases in the future, it is a good idea to list them in the Feature Request File.