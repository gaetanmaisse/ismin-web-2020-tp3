Part of Web Development - ISMIN 2020

Course followed by students of Mines St Etienne, ISMIN - M2 Computer Science.

[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![TypeScript](https://badges.frapsoft.com/typescript/love/typescript.png?v=101)](https://github.com/ellerbrock/typescript-badges/)
[![Mines St Etienne](./logo.png)](https://www.mines-stetienne.fr/)

# TP3: NestJS - MongoDB

NestJS documentation section about MongoDB integration: https://docs.nestjs.com/techniques/mongodb

## 📝 Goal

The goal of this TP is replace the In-memory Map or Array used to store Books in previous TPs by a Mongo database. 
This will provide a persistant storage to the API and so data will not be lost between restarts.

To do so, you will split the work in 2 steps:
 - Make all functions of `BookService` asynchronous
 - Use mongoose to store Book into a MongoDB instead of an In-memory object 

### Step 1: 🏎 Asynchronous BookService

Copy the `BookService` of the previous TP and make all the functions asynchronous, it means they should return:
  - `Promise<Book>` instead of `Book`
  - `Promise<Book[]>` instead of `Book[]`
  - `Promise<void>` instead of `void` 
  
The tests of the previous TP should still be passing as the goal of this step is to refactor the internal code of our API.     
 
### Step 2: 🍃 MongoDB storage

Start by adding mongoose related dependencies to the project.

Then, create a `BookDocument` class extending `Document` and a `BookSchema` that will be used to work with MongoDB.

Init MongooseModule and register your `BookSchema` in the `BookModule` => Ask for the MongoDB connection URI as it will not be shared publicly.  

Finally, update your asynchronous `BookSchema` to use mongoose Model in order to make MongoDB queries to store/retrieve books.

## 🚀 Getting Started

Open a terminal, go to the directory of this TP and run the following commands:

```sh
# This will install all needed dependencies
npm install

# This will run the tests once
npm run test

OR

# This will run the tests everytime a change is made in the source code
npm run test:watch

# This will build the source and put the transpiled code in `/dist` directory
npm run build

# This will start the API 
npm run start:dev
```

That's it! You can code!

## 🛰 Extra:

- Implement the functions using mongoose model to:
  - handle search a book based on a part of the title/the author, reminder the HTTP request looks like this:
    - Method: POST
    - Route: /books/search
    - Body:
       ```javascript
       {
         "term": "A_TITLE"
       }
       ```
  
  - to handle pagination on route GET /books and POST /books/search
  
-  Implement a route to get the top 5 authors (in number of written books):
    - Method: GET
    - Route: /authors/top-5
    - Returns:
        ```javascript
        [{
          "author": "Voltaire",
          "numberOfBooks": 35,
          "topOrder": 1
        },
         {
           "author": "J. R. R. Tolkien",
           "numberOfBooks": 23,
           "topOrder": 2
         }, ...]
        ```

