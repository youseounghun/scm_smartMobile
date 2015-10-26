var app = {

	initialize : function() {
		this.bindEvents();
	},
	
	bindEvents : function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	
	onDeviceReady : function() {
		var buttonOpen = document.getElementById('buttonOpen');
		//var buttonClaim = document.getElementById('buttonClaim');
		//var buttonDeviceEnabledTrue = document.getElementById('buttonDeviceEnabledTrue');
		//var buttonCheckHealth = document.getElementById('buttonCheckHealth');
		var buttonPrintNormal = document.getElementById('buttonPrintNormal');
		//var buttonPrintBitmap = document.getElementById('buttonPrintBitmap');
		var buttonPrintBarCode = document.getElementById('buttonPrintBarCode');
		var buttonDeviceEnabledFalse = document.getElementById('buttonDeviceEnabledFalse');
		var buttonRelease = document.getElementById('buttonRelease');
		var buttonClose = document.getElementById('buttonClose');

		buttonOpen.addEventListener('click', function() {
			app.open();
		});
		/*
		buttonClaim.addEventListener('click', function() {
			app.claim();
		});
		buttonDeviceEnabledTrue.addEventListener('click', function() {
			app.setDeviceEnabledTrue();
		});
		buttonCheckHealth.addEventListener('click', function() {
			app.checkHealth();
		});
		*/
		buttonPrintNormal.addEventListener('click', function() {
			app.printNormal();
		});
		/*
		buttonPrintBitmap.addEventListener('click', function() {
			app.printBitmap();
		});
		*/
		/*
		buttonPrintBarCode.addEventListener('click', function() {
			app.printBarCode();
		});
		*/
		/*
		buttonDeviceEnabledFalse.addEventListener('click', function() {
			app.setDeviceEnabledFalse();
		});
		buttonRelease.addEventListener('click', function() {
			app.release();
		});
		*/
		buttonClose.addEventListener('click', function() {
			app.setDeviceEnabledFalse();
		});
	},
	open : function() {
		bxl_service.open(function() {
			alert("open success --> claim");
			app.claim();
		}, function(error) {
			alert("open: " + error);
		}, "SPP-R200II");
	},
	claim : function() {
		bxl_service.claim(function() {
			alert("claim success --> setDeviceEnableTrue");
			app.setDeviceEnabledTrue();
		}, function(error) {
			alert("claim: " + error);
		}, 0);
	},
	setDeviceEnabledTrue : function() {
		bxl_service.setDeviceEnabled(function() {
			alert("setDeviceEnabled success");
		}, function(error) {
			alert("setDeviceEnabled: " + error);
		}, true);
	},
	checkHealth : function() {
		bxl_service.checkHealth(function() {
			alert("checkHealth success");
		}, function(error) {
			alert("checkHealth: " + error);
		}, 2);
	},
	printBarCode : function() {
		bxl_service.printBarCode(function() {
			alert("printBarCode success");
		}, function(error) {
			alert("printBarCode: " + error);
		}, 2, "http://www.drimhitech.com", 204, 3, 3, -1, -11);
	},
	printBitmap : function() {
		bxl_service.printBitmap(function() {
			alert("printBitmap success");
		}, function(error) {
			alert("printBitmap: " + error);
		}, 2, "", -11, -2);
	},
	printNormal : function() {
		bxl_service.printNormal(function() {
			alert("printNormal success");
		}, function(error) {
			alert("printNormal: " + error);
		}, 2, "http://www.drimhitech.com\n\n\n\n\n");
	},
	setDeviceEnabledFalse : function() {
		bxl_service.setDeviceEnabled(function() {
			alert("setDeviceEnabled success --> release");
			app.release();
		}, function(error) {
			alert("disable: " + error);
		}, false);
	},
	release : function() {
		bxl_service.release(function() {
			alert("release success --> close");
			app.close();
		}, function(error) {
			alert("release: " + error);
		});
	},
	close : function() {
		bxl_service.close(function() {
			alert("close success");
		}, function(error) {
			alert("close: " + error);
		});
	}
};
