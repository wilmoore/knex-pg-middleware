"use strict";

/**
 * Imports (local).
 */

var done = require("./done");
var knex = require("./knex");

/**
 * Exports.
 */

module.exports = knexMysqlKoa;

/**
 * Set a MySQL flavored Knex connection that can be accessed via Koa or Express middleware.
 *
 * @return {Function}
 * Koa middleware.
 */

function knexMysqlKoa(options) {
  return function *knexMysqlKoa(next) {
    this.knex = knex(options);
    this.res.once("finish", done.bind(this, this.knex));
    yield next;
  };
}
