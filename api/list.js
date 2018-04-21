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
   *        '400':
   *          description: Unsuccessful search
   *          content:
   *            application/json:
   *              schema:
   *                $ref: '#/components/schemas/Error'
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
