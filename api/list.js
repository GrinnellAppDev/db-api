const { Router } = require("express")
const querystring = require("querystring")
const tableToJson = require("tabletojson")

const { validateRequest, HTTPError } = require("./util")

module.exports = Router()
  /**
   * @swagger
   *  /list:
   *    get:
   *      summary: Gets a list of people.
   *      description: >
   *        Gets a list of people as search result.
   *      operationId: getSearchResult
   *      parameters:
   *        $ref: "#/components/parameters"
   *      responses:
   *        '200':
   *          description: Successful search
   *          content:
   *            application/json:
   *              schema:
   *                type: array
   *                items:
   *                  $ref: "#/components/schemas/Person"
   *        "400":
   *          description: The query format was invalid.
   *          content:
   *            application/json:
   *              schema:
   *                type: object
   *                properties:
   *                  message:
   *                    type: string
   *        "422":
   *          description: The search made to the directory server failed.
   *          content:
   *            application/json:
   *              schema:
   *                type: object
   *                properties:
   *                  code:
   *                    description: >
   *                      If the code is "TooManyResults", the client should be
   *                      instructed to narrow their search.
   *                    type: string
   *                    enum:
   *                      - TooManyResults
   *                  message:
   *                    type: string
   */
  .get("/", (request, response) => {
    const LastName = "Gupta"
    const LNameSearch = ""
    const FirstName = ""
    const FNameSearch = ""
    const Email = ""
    const CampusPhoneNumber = ""
    const CampusAddress = ""
    const HomeAddress = ""
    const Department = ""
    const Major = ""
    const Concentration = ""
    const SGA = ""
    const Hiatus = ""
    const GradYear = "2020"

    const url =
      "https://itwebapps.grinnell.edu/classic/asp/campusdirectory/GCdefault.asp?transmit=true&blackboardref=true&" +
      "LastName=" +
      LastName +
      "&LNameSearch=" +
      LNameSearch +
      "&FirstName=" +
      FirstName +
      "&FNameSearch=" +
      FNameSearch +
      "&email=" +
      Email +
      "&campusphonenumber=" +
      CampusPhoneNumber +
      "&campusquery=" +
      CampusAddress +
      "&Homequery=" +
      HomeAddress +
      "&Department=" +
      Department +
      "&Major=" +
      Major +
      "&conc=" +
      Concentration +
      "&SGA=" +
      SGA +
      "&Hiatus=" +
      Hiatus +
      "&Gyear=" +
      GradYear +
      "&submit_search=Search"

    tableToJson.convertUrl(
      url,
      { useFirstRowForHeadings: true, stripHtmlFromCells: false },
      function(tablesAsJson) {
        console.log(tablesAsJson[2])
      }
    )

    response.status(200).send([])
  })
