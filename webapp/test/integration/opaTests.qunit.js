/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["com/leaveapproval/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
