/*global QUnit*/

sap.ui.define([
	"exerciseone/controller/View_exercise_one.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View_exercise_one Controller");

	QUnit.test("I should test the View_exercise_one controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
