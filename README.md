# DB API

> Backend web-scraping engine and API for db app. Built with
> [Docker](https://docker.com/), [Node.js](https://nodejs.org/), and
> [MongoDB](https://mongodb.com/).

## Workflow Dependencies

You will need these setup on your machine to manage your workflow.

* [yarn](https://yarnpkg.com/) (`brew install yarn`) or
  [npm](https://www.npmjs.com/) (`brew install npm`)
  * Note, the commands below will use `yarn`, but you can substitute in `npm`.
* [Docker](https://docs.docker.com/install/)

## Workflow

### Install Library Dependencies

To install the dependencies and do initial setup: `yarn install`. You
should only need to do this when you first clone or package.json is changed.

### Development Environment

Run `docker-compose up` to start a development server. The api should be
available at <http://localhost:2000>.

When testing with the docs page, be sure to select the localhost server from
the dropdown.

### Production Environment

First, create a production configuration or copy the example file with
`cp docker-compose.prod.yml{.example,}`.

Run `docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build`
to start a production server. Alternatively, run `./restart.sh` to run
production in the background. Either way, the production api will be
available on the port you specify.

### Deploying

When deploying on a server, ssh in, `git pull`, then run `./restart.sh` to
rebuild and restart the docker services.
