# Codecademy Portfolio Project - E-Commerce App (Client)

## Description:

This project was complete as part of the Codecademy Full-Stack Engineer course. Specifically the project covers the _E-Commerce App (Client)_ portfolio project. This is the client that accompanies the server application _E-Commerce App (REST API)_. (This is also a repository on the GitHub site).

The purpose of this project is to provide a client application that exercises the REST API in the partnering project described above. The application provides:

> - The ability to register users for local logins.
> - The ability to logon and logoff using these local accounts.
> - Logon capability using logon via Google.
> - The access to all features (other than registration) should require the customer to be logged in.
> - The ability to view products via. a list, and to add these to a shopping cart.
> - For long product lists, the ability to reduce the list via. a search dialogue.
> - A mechanism is provided to remove products from orders (by reducing the quantity to zero).
> - Purchase carts can be turned into orders by selecting a place order option.
> - Before orders can be confirmed, they are checked against a pre-pay limit. If there are sufficient funds the order can be confirmed or cancelled. If there is not sufficient funds, the order cannot be confirmed.
> - Since this is a portfolio application, the pre-pay balance can be reset to £3000 by logging off and on with a local account.
> - Confirmed orders are stored in PostGres database in the accompanying REST server.
> - Order that are confirmed are stored against the email of the logged in account.
> - Customers can view a history of their orders.

### Some implementation details

The application uses the following technologies:

> Nodejs
> React
> Redux tool-kit
> Passport
> Local passport
> Google passport
> Bcrypt
> NPM CORS

## How to use

This is the client that accompanies the server application _E-Commerce App (REST API)_. (This is also a repository on the GitHub sit). This application will be unresponsive without an instance of this REST API server. Details of how to configure this application to work with an instance of the API server are given below.

#### Building the application

To begin, this application must be cloned locally from the GitHub. In the project directory the following commands should then be run to build a development version of the application -

> npm install
> npm run start

A production build can be produced by running

> npm run build

### Running with a corresponding REST API server

To configure the application to run with a REST API server, complete the following steps:

In the root of the project, create a .env file with the following entries -

> URL_BASE={required root URL}
> REQ_PORT={required port}
>
> CURRENCY=(required currency symbol - probably "£")

In the file src/api/index.js add the following lines -

> export const API_ENDPOINT = {required root URL};
>
> export const CURRENCY = (required currency symbol - probably "£");

Examples:

.env

> URL_BASE="http://localhost"
> REQ_PORT=4000
>
> CURRENCY="£"

index.js

> export const API_ENDPOINT = "http://localhost:4000";
>
> export const CURRENCY = "£";

### Collaborators

None.

## License

The code in this project can be freely copied and distributed provided the copies bear an appropriate acknowledgement.
