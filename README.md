# ecove
Shopping Catalog using Rainforest API 🛍 <br /><br />
[![Netlify Status](https://api.netlify.com/api/v1/badges/de285322-e16c-4b8c-ac5d-841f047fe746/deploy-status)](https://app.netlify.com/sites/ecove/deploys)

## Installing Dependencies 
Before running, run the command below to install the required dependencies
```shell script
npm install
```

## Environment Variables 
To properly use the application create a .env file and add your [rainforest api](https://rainforestapi.com/) key in the following format: 
```dotenv
REACT_APP_API_KEY="<API_KEY>"
```

## Starting Development Server
To run the site on localhost port 3000, run the command below in your terminal 
```shell script
npm run start
```

## Deploy to Netlify
To deploy the site to netlify, run the command below in your terminal 
```shell script
npm run build
netlify deploy
netlify deploy --prod
```

## Application Diagram
<kbd><img src="images/ecove-diagram.png" height="800px"></kbd>

## Application
<kbd><img src="images/welcome.png"></kbd><br /><br />
<kbd><img src="images/products_list.png"></kbd>

