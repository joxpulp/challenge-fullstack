# Challenge Fullstack

E-commerce Backend Doc

Backend: https://apipassredux.herokuapp.com

## Local Setup:

Install dependencies

```bash
  npm install
```

Start the in dev mode with nodemoon

```bash
  npm run dev
```

Transpile ts files to /dist folder

```bash
  tsc
```

Start the server with transpiled files in /dist folder

```bash
  npm run start
```
## Endpoints:

## Auth:

| Method |                         Route                         |                                                Description |
| ------ | :---------------------------------------------------: | ---------------------------------------------------------: |
| POST   |   https://apipassredux.herokuapp.com/api/auth/login   |                                 Login by passing JSON body |
| GET    |  https://apipassredux.herokuapp.com/api/auth/logout/  |                                 Logout the current session |
| POST   |  https://apipassredux.herokuapp.com/api/auth/signup   | Signup by passing JSON body (default `AVATAR` image is created) |
| GET    | https://apipassredux.herokuapp.com/api/auth/islogged/ |             Check if the user is logged, returns a boolean |

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

User's form-data body template:

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

Product's form-data body (`POST` and `PUT`) template:

| Field Type | Field Name  |                        Description |
| ---------- | :---------: | ---------------------------------: |
| Text       |    name     |            Product's name (string) |
| Text       | description |     Product's description (string) |
| Text       |  category   |        Product's category (string) |
| Text       |    price    |           Product's price (number) |
| File       |  thumbnail  | Product's image (png, jpeg or jpg) |

## Cart:

Protected Routes: `USER` needs to be logged to access this routes

| Method |                         Route                         |                                                                                                    Description |
| ------ | :---------------------------------------------------: | -------------------------------------------------------------------------------------------------------------: |
| GET    |   https://apipassredux.herokuapp.com/api/cart/list    |                                                                                           List the user's cart |
| GET    |  https://apipassredux.herokuapp.com/api/cart/list/id  |                List a product inside the user's cart by id, if a product doesn't exist return an error message |
| POST   |  https://apipassredux.herokuapp.com/api/cart/add/id   | Add a product to the user's cart by the product id, if the same product is added the quantity field increments |
| DELETE | https://apipassredux.herokuapp.com/api/cart/delete/id |                                Delete a product from the user's cart by the product id, no matter the quantity |

## Orders:

Protected Routes: `USER` needs to be logged to access this routes

| Method |                           Route                            |                                                                          Description |
| ------ | :--------------------------------------------------------: | -----------------------------------------------------------------------------------: |
| GET    | https://apipassredux.herokuapp.com/api/orders/getpurchases |                                                                List user's purchases |
| POST   |   https://apipassredux.herokuapp.com/api/orders/purchase   | Simulates a purchase, the user's cart is deleted and the products moved to purchases |