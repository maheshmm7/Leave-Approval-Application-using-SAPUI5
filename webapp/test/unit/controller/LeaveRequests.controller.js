/*global QUnit*/

sap.ui.define([
	"com/leaveapproval/controller/LeaveRequests.controller"
], function (Controller) {
	"use strict";

	QUnit.module("LeaveRequests Controller");

	QUnit.test("I should test the LeaveRequests controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
