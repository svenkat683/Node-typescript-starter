# Node-typescript-Mongodb-starter

This is a starter template for nodeJS + Typescript + Mongodb application.
Additionally it has AWS lambda setup.

## Run below commands in terminal one by one to start the app.

  1. mkdir `<yourProjectName>` && cd `<yourProjectName>`
  2. ```git clone --depth 1 https://github.com/TheSubbu/Node-typescript-starter.git .```
  3. Run ```npm install``` to install all the dependencies.
  4. Run ```npm start``` to start the server.

## Deploy to AWS Lambda

### Prerequisites

  Here we using claudiajs to setup the lamdba function
  * Install and configure claudiajs. [Reference](https://claudiajs.com/tutorials/installing.html)

### Steps to create the Lambda Function

  1. Build the project by running `npm run build-ts`.
  2. Rename the **name** in package.json to give a name to your lambda function.
  3. Run `npm run prepateToDeployLambda` to prepare the project to deploy to lambda.
  4. Run `npm run create-lambda-func` to create the lambda function.
  5. Run `npm run update-lambda` atleast once after creating lambda function.(Basically it will update the lambda function).

  That's it. Your first serverless function is up now.

  And to update the lambda function repeat the **step 5**.

> Note: Use lambda.env.json file for production environment variables


Easy right :blush:. Happy Coding :computer:
