## Cigna Cypress Demo Framework
An automation testing framework for web application using Cypress


### Project structure
```
.
├── cypress
│   ├── fixtures
│   │   ├── login.json
│   │   └── ...
│   ├── integration
│   │   ├── homepageTest.spec.js
│   │   ├── loginTest.spec.js
│   │   └── ...
│   ├── page-objects
│   │   ├── locators──────── ...
│   │   ├── pages─────────── ...
│   │   
│   │   
│   ├── plugins
│   │   ├── index.js
│   │   └── ...
│   └── support
│   │   ├── utils
│   │   │   ├── Utils.js
│   │   │   └── ...
│   │   ├── commands.js
│   │   ├── index.js
│   │   └── ...
│   │
│   │
│   │
│   └──── reports── output.html
│       
│
├── package.json
│── cypress.json



```

### Prerequisites
- NodeJS

### Installation
1. Clone the repo
```
git clone https://github.com/manuchehri1/CignaDemoFramework.git
```
2. Install NPM packages
```
$ npm install
```
### Running the tests from Terminal
```
$ npm test

### After runnign successufuly 

GET the mochawesome report from

cypress/reports/output.html



NOTE: It can be improved and can be much more dynamic, just takes time !!!