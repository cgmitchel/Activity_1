sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("exerciseone.controller.View_exercise_one", {

        onInit: function () {
            // initialization logic if needed
        },

        onSavePress: function () {
            MessageToast.show("Form data saved successfully!");
        },

        onClearPress: function () {
            this.byId("nameField").setValue("");
            this.byId("streetField").setValue("");
            this.byId("zipField").setValue("");
            this.byId("countrySelect").setSelectedKey("");
            MessageToast.show("All fields cleared!");
        }

    });
});