# knex-pg-middleware

[![Build Status](http://img.shields.io/travis/wilmoore/knex-pg-middleware.svg)](https://travis-ci.org/wilmoore/knex-pg-middleware) [![NPM version](http://img.shields.io/npm/v/knex-pg-middleware.svg)](https://www.npmjs.org/package/knex-pg-middleware) [![NPM downloads](http://img.shields.io/npm/dm/knex-pg-middleware.svg)](https://www.npmjs.org/package/knex-pg-middleware) [![LICENSE](http://img.shields.io/npm/l/knex-pg-middleware.svg)](license)

> Augments Koa or Express with a Knex PostgreSQL connection object.

    $ npm install knex-pg-middleware

## Usage

###### Quick Start (koa or express)

    // koa
    var knex = require('knex-pg-middleware');
    var app = require('koa')();
    app.use(knex());

    app.use(function *() {
      this.status = (yield this.knex('resource').where('id', this.query.id)) ? 204 : 404;
    });

    // express
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

###### Auto-initialize via environment variables (recommended)

> It is recommended that you set the parameters via environment variables and utilize a `.env` file via a library such as [envc], [dotenv], or an equivalent.

    DATABASE_NAME=demo
    DATABASE_USER=scott
    DATABASE_PASS=tiger
    DATABASE_HOST=127.0.0.1
    DATABASE_PORT=3306

    # optional
    DATABASE_SSL=true
    DATABASE_CHARSET=utf8
    DATABASE_DEBUG=true
    DATABASE_POOL_MIN=0
    DATABASE_POOL_MAX=7

###### Configuration via options object

    var config = {
      connection: {
        host     : '127.0.0.1', // default = localhost
        user     : 'scott',
        password : 'tiger',
        database : 'demo'
      },
      debug: true, // default = false
      pool: {
        min: 0, // default = 0
        max: 7  // default = 1
      },
      ssl: 'Amazon RDS' // default = undefined
    }

    app.use(knex(config));

## Alternatives

- [koa-knex-middleware]

## License

  [MIT](license)

[koa-knex-middleware]: https://www.npmjs.org/package/koa-knex
[envc]: https://www.npmjs.org/package/envc
[dotenv]: https://www.npmjs.org/package/dotenv

