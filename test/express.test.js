"use strict";

/*!
 * imports.
 */

var express = require("express");
var request = require("hippie");

/*!
 * imports (local).
 */

var middleware = require("../lib/express");

/*!
 * tests.
 */

describe("express", function(){
  it("context augmented with knex", function(done){
    var app = express();
    app.use(middleware());

    app.all("*", function (req, res) {
      var status = ("knex" in req) ? 204 : 404;
      res.status(status).end();
    });

    request(app)
    .get("/")
    .expectStatus(204)
    .end(done);
  });

});
