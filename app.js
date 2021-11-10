const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const swaggerJsDoc = require("swagger-jsdoc");
const SwaggerUi = require("swagger-ui-express");

const app = express();

var Pass = encodeURIComponent(process.env.DB_PASSWORD)
const Port = process.env.PORT;

var connection_string = `mongodb://${process.env.DB_USER}:${Pass}@${process.env.DB_SERVER}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

mongoose.connect(connection_string, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
      console.log("Database connected")
})
.catch((err) => {
      console.log(`Error connecting Database: ${err}`)
})

app.use(cors());
app.use(express.json());

const options = {
    definition: {
          openapi: "3.0.0",
          info: {
                title: "NameProject",
                version: "1.0.0",
                description: "A documntation for prototype"
          },
          servers: [
                {
                      url: `http://localhost:${Port}/`,
                },
          ],
    },
    apis: ["./docs/*.js"],
};

//Making Swagger Call
const swaggerDocs = swaggerJsDoc(options)
console.log(`swaggerDocs is running on http://localhost:${PORT}/api-docs`)
app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(swaggerDocs));

app.listen(Port , () => {
    console.log(`App is running on port ${Port}`);
});