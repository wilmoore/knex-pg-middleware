"use strict";

/*!
 * imports.
 */

var koa = require("koa");
var request = require("hippie");

/*!
 * imports (local).
 */

var middleware = require("..");

/*!
 * tests.
 */

describe("koa", function(){
  it("context augmented with knex", function(done){
    var app = koa();
    app.use(middleware());

    app.use(function *() {
      this.status = ("knex" in this) ? 204 : 404;
    });

    request(app)
    .get("/")
    .expectStatus(204)
    .end(done);
  });

});
