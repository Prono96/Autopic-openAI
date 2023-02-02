# Autopic-openAI
An image generator from human language text prompt built with OpenaAI image generator API

# Technologies
NodeJS, express, openai

# HOWTO RUN REPOSITORY
## 1. Make sure you nodeJs installed 
[You can install nodeJS to your Mac or Windows](https://nodejs.org/en/download/)

## 2. Secondly, you have to clone repository, use this command
git clone git@github.com:Prono96/Autopic-openAI.git

## 3. Initialise the nodeJS project to istall all nodejs packages, use this command
git init --yes


# TO TEST APPLICATION
## 1. You have to generate your own API secret key, use this link
[To generate OpenAI secret key](https://platform.openai.com/)

## 2. You can use any testing platform of your choice, preferrably POSTMAN
### Open AI endpoint
POST METHOD: localhost:5000/openai/generateimage
### Sample request, this is in json format
```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```
