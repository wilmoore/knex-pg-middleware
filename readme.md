# knex-pg-middleware

[![Build Status](http://img.shields.io/travis/wilmoore/knex-pg-middleware.svg)](https://travis-ci.org/wilmoore/knex-pg-middleware) [![NPM version](http://img.shields.io/npm/v/knex-pg-middleware.svg)](https://www.npmjs.org/package/knex-pg-middleware) [![NPM downloads](http://img.shields.io/npm/dm/knex-pg-middleware.svg)](https://www.npmjs.org/package/knex-pg-middleware) [![LICENSE](http://img.shields.io/npm/l/knex-pg-middleware.svg)](license)

> Augments Koa or Express with a Knex PostgreSQL connection object.

    $ npm install knex-pg-middleware

## Usage

##### Quick Start (koa or express)

###### Koa

    var knex = require('knex-pg-middleware');
    var app = require('koa')();
    app.use(knex());

    app.use(function *() {
      this.status = (yield this.knex('resource').where('id', this.query.id)) ? 204 : 404;
    });

###### Express

    var knex = require('knex-pg-middleware/express');
    var app = require('express')();
    app.use(knex());

    app.use(function () {
      this.knex('resource').where('id', req.query.id)
      .then(function(rows) {
        this.status = rows.length ? 204 : 404;
      });
    });

## Options

##### Auto-initialize via environment variables (recommended)

> It is recommended that you set the parameters via environment variables and utilize a `.env` file via a library such as [envc], [dotenv], or an equivalent.

###### Required

    DATABASE_USER="scott"

###### Optional

    # optional (with defaults)
    DATABASE_HOST="localhost"
    DATABASE_PASS=""
    DATABASE_NAME=""
    DATABASE_SSL="" # i.e. "Amazon RDS"
    DATABASE_CHARSET="utf8"
    DATABASE_DEBUG=true
    DATABASE_POOL_MIN=0
    DATABASE_POOL_MAX=1

##### Initialize via options object

###### Required

    var config = {
      connection: {
        user: "scott"
      }
    }

###### Optional

    var config = {
      connection: {
        host     : "localhost",
        password : "",
        database : ""
      },
      debug: false,
      pool: {
        min: 0,
        max: 1
      },
      ssl: "" // i.e. "Amazon RDS"
    }

    app.use(knex(config));

## Alternatives

- [koa-knex-middleware]

## License

  [MIT](license)

[koa-knex-middleware]: https://www.npmjs.org/package/koa-knex
[envc]: https://www.npmjs.org/package/envc
[dotenv]: https://www.npmjs.org/package/dotenv

