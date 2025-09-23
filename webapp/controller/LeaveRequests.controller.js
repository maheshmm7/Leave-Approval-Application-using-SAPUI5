sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.leaveapproval.controller.LeaveRequests", {
        onInit() {
        },
        onItemPress: function (oEvent) {
            var oItem = oEvent.getSource();
            var oCtx = oItem.getBindingContext("leaveModel");
            var sPath = oCtx.getPath().split("/").pop(); // index
            this.getOwnerComponent().getRouter().navTo("Detail", {
                requestId: sPath
            });
        }
    });
});