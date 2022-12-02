/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comppg/fioricicd/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
