Create a simple Node.js API with an endpoint and write unit tests for it using the Jest and Supertest libraries.

1. Set Up the Project
First, initialize a new Node.js project:


mkdir nodejs-api-unit-test-example
cd nodejs-api-unit-test-example
npm init -y

2. Install Dependencies
Install the required dependencies:

npm install express
npm install --save-dev jest supertest

3. Create the Application Code
Create a file named app.js for the Express application:

// app.js
```
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
    res.status(200).json({ message: 'Hello, World!' });
});

app.post('/api/data', (req, res) => {
    const { data } = req.body;
    if (data) {
        res.status(201).json({ received: data });
    } else {
        res.status(400).json({ error: 'No data provided' });
    }
});

module.exports = app;
Create a file named server.js to start the server:
```

// server.js
```
const app = require('./app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
```

4. Write Unit Tests
Create a folder named __tests__ and a test file named app.test.js:
```
mkdir __tests__

Inside __tests__, create app.test.js:
```

// __tests__/app.test.js
```
const request = require('supertest');
const app = require('../app');

describe('API Endpoints', () => {
    it('should return a hello message', async () => {
        const res = await request(app).get('/api');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Hello, World!');
    });

    it('should create new data', async () => {
        const res = await request(app)
            .post('/api/data')
            .send({ data: 'testdata' });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('received', 'testdata');
    });

    it('should return 400 if no data is provided', async () => {
        const res = await request(app)
            .post('/api/data')
            .send({});
        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('error', 'No data provided');
    });
});
```

5. Update package.json
Update the scripts section in package.json to include a test script:
```
{
  "name": "nodejs-api-unit-test-example",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "jest": "^27.0.0",
    "supertest": "^6.1.3"
  }
}
```
6. Run the Tests
Run the tests using the following command:
```
npm test
You should see an output like this:

> nodejs-api-unit-test-example@1.0.0 test
```
