"use strict";

/**
 * Imports.
 */

var boolean = require('boolean');
var extend = require("params").extend;
var knex = require("knex");

/**
 * Exports.
 */

module.exports = create;

/**
 * Create and return a knex connection.
 * @param {Object} options
 * @api public
 */

function create(options) {
  return knex(extend({
    client: "pg",
    debug: debug(),
    connection: connection(),
    pool: pool()
  }, options));
}

/**
 * Return connection configuration.
 */

function connection() {
  return {
    ssl: JSON.parse(JSON.stringify(process.env.DATABASE_SSL || "")),
    host: process.env.DATABASE_HOST || "localhost",
    user: process.env.DATABASE_USER || "",
    charset: process.env.DATABASE_CHARSET || "utf8",
    password: process.env.DATABASE_PASS || "",
    database: process.env.DATABASE_NAME || ""
  };
}

/**
 * Return debug configuration.
 */

function debug() {
  return boolean(process.env.DATABASE_DEBUG);
}

/**
 * Return connection pooling configuration.
 */

function pool() {
  return {
    min: process.env.DATABASE_POOL_MIN || 0,
    max: process.env.DATABASE_POOL_MAX || 1
  };
}
