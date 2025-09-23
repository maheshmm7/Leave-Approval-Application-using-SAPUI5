sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/m/MessageToast"
], function (Controller, History, MessageToast) {
    "use strict";

    return Controller.extend("com.leaveapproval.controller.Detail", {

        onInit: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("Detail").attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function (oEvent) {
            var sIndex = oEvent.getParameter("arguments").requestId;
            this.getView().bindElement({
                path: "/LeaveRequests/" + sIndex,
                model: "leaveModel"
            });
        },

        onApprove: function () {
            this._updateStatus("Approved");
            MessageToast.show("Leave request approved successfully!");
        },

        onReject: function () {
            this._updateStatus("Rejected");
            MessageToast.show("Leave request rejected.");
        },

        _updateStatus: function (sStatus) {
            var oCtx = this.getView().getBindingContext("leaveModel");
            oCtx.getModel().setProperty(oCtx.getPath() + "/Status", sStatus);

            // Delay to allow MessageToast to show
            var that = this;
            setTimeout(function () {
                that.onNavBack();
            }, 500);
        },

        onNavBack: function () {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();
            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                this.getOwnerComponent().getRouter().navTo("LeaveRequests", {}, true);
            }
        },

        formatStatus: function (sStatus) {
            switch (sStatus) {
                case "Approved": return "Success";
                case "Rejected": return "Error";
                case "Pending": return "Warning";
                default: return "None";
            }
        }
    });
});
