"use strict";

/**
 * Imports (local).
 */

var done = require("./done");
var knex = require("./knex");

/**
 * Exports.
 */

module.exports = knexMysqlExpress;

/**
 * Set a MySQL flavored Knex connection that can be accessed via Koa or Express middleware.
 *
 * @return {Function}
 * Koa middleware.
 */

function knexMysqlExpress(options) {
  return function knexMysqlExpress(req, res, next) {
    req.knex = knex(options);
    res.once("finish", done.bind(this, req.knex));
    next();
  };
}
