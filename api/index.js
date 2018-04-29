const express = require("express")
const swaggerJSDoc = require("swagger-jsdoc")
const swaggerUI = require("swagger-ui-express")
const readYAML = require("read-yaml")
const proxy = require("express-http-proxy")
const helmet = require("helmet")

require("express-async-errors")

const listRouter = require("./list")
const { HTTPError } = require("./util")

const PORT = 80

const swaggerSpec = swaggerJSDoc({
  swaggerDefinition: readYAML.sync("./open-api.yml"),
  apis: ["./list.js"]
})

express()
  .use(helmet({ dnsPrefetchControl: false }))
  .use(express.json())

  .get("/", (request, response) => response.redirect("./docs/"))
  .use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec))
  .get("/docs.json", (request, response) =>
    response.status(200).send(swaggerSpec)
  )

  .use("/list", listRouter)

  .all("*", () => {
    throw new HTTPError(404, "Not found")
  })

  .use((error, request, response, next) => {
    if (error instanceof HTTPError) {
      response.status(error.status).send({ message: error.message })
    } else {
      console.error(error)
      response.status(500).send({ message: "Server error" })
    }
  })

  .listen(PORT, () => {
    console.log("API serving.")
  })
