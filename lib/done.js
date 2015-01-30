"use strict";

/**
 * Imports.
 */

var debug = require("debug")("knex-mysql-middleware");

/**
 * Exports.
 */

module.exports = done;

/**
 * Destroy database connection(s).
 *
 * @param {Object} knex
 * Knex database connection object.
 */

function done(knex) {
  knex && knex.destroy && knex.destroy(log);
}

/**
 * Debug logging.
 */

function log() {
  debug("DB connection destroyed.");
}
