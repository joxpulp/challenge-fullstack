# Challenge Fullstack

E-commerce Fullstack App

Frontend and Backend: https://apipassredux.herokuapp.com

## Local Setup:

| Script      | Description                              |
| ----------- | ---------------------------------------- |
| npm install | Install dependencies                     |
| npm run dev | Execute ts files with nodemoon           |
| tsc         | Transpile ts files to /dist folder       |
| npm start   | Execute transpiled files in /dist folder |

## Endpoints:

## Auth:

| Method |                         Route                         |                                    Description |
| ------ | :---------------------------------------------------: | ---------------------------------------------: |
| POST   |   https://apipassredux.herokuapp.com/api/auth/login   |                     Login by passing JSON body |
| GET    |  https://apipassredux.herokuapp.com/api/auth/logout/  |                     Logout the current session |
| POST   |  https://apipassredux.herokuapp.com/api/auth/signup   |                    Signup by passing JSON body |
| GET    | https://apipassredux.herokuapp.com/api/auth/islogged/ | Check if the user is logged, returns a boolean |

Login JSON body template:

```Typescript
{
    "email": "string",
    "password": "string"
}
```

Signup JSON body template:

```Typescript
{
    "email": "string",
    "password": "string"
    "name": "string",
    "lastname": "string",
    "age": number,
    "cardId": "string",
    "address": "string"
}
```

Protected Route: `USER` needs to be logged to access this route

| Method |                        Route                         |                                                                                                                             Description |
| ------ | :--------------------------------------------------: | --------------------------------------------------------------------------------------------------------------------------------------: |
| PUT    | https://apipassredux.herokuapp.com/api/auth/edituser | Update user fields by passing a form-data body (optional fields - if you want to update user's name just pass the name field and so on) |

Product's form-data body template:

| Field Type | Field Name |                     Description |
| ---------- | :--------: | ------------------------------: |
| Text       |    name    |           User's name, (string) |
| Text       |  lastname  |        User's lastname (string) |
| Text       |    age     |             User's age (number) |
| Text       |   cardId   |          User's cardId (string) |
| Text       |  address   |         User's address (string) |
| Text       |  password  |        User's password (string) |
| File       |   avatar   | User's image (png, jpeg or jpg) |

## Products:

Public Routes:

| Method |                          Route                          |                                                              Description |
| ------ | :-----------------------------------------------------: | -----------------------------------------------------------------------: |
| GET    |  https://apipassredux.herokuapp.com/api/products/list/  |                                                        List all products |
| GET    | https://apipassredux.herokuapp.com/api/products/list/id | List a product by id, if a product doesn't exist return an error message |

Protected Routes: `USER` needs to be logged with `ADMIN` role to access this routes

| Method |                           Route                           |                                                                                  Description |
| ------ | :-------------------------------------------------------: | -------------------------------------------------------------------------------------------: |
| POST   |   https://apipassredux.herokuapp.com/api/products/add/    |                                                    Add a product by passing a form-data body |
| PUT    | https://apipassredux.herokuapp.com/api/products/update/id | Updates a product by passing the product's id and a form-data body with the fields to update |
| DELETE | https://apipassredux.herokuapp.com/api/products/delete/id |                           Delete a product from the product list by passing the product's id |

Product's form-data body template:

| Field Type | Field Name  |                        Description |
| ---------- | :---------: | ---------------------------------: |
| Text       |    name     |            Product's name (string) |
| Text       | description |     Product's description (string) |
| Text       |  category   |        Product's category (string) |
| Text       |    price    |           Product's price (number) |
| File       |  thumbnail  | Product's image (png, jpeg or jpg) |

##
