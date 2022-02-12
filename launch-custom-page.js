function customPageFullPage() {
// Inline Page
var pageInput = {
    pageType: "custom",
    name: "<logical name of the custom page>",
  //next 2 params pass the record id in qs
    entityName: "<logical name of the table>",
    recordId: "<record id>",
};
var navigationOptions = {
  //1=full page, 2 = dialog,
    target: 1
};
Xrm.Navigation.navigateTo(pageInput, navigationOptions)
    .then(
        function () {
            // Called when page opens
        }
    ).catch(
        function (error) {
            // Handle error
        }
    );
}

function customPageCenteredDialog() {
 // Centered Dialog
var pageInput = {
    pageType: "custom",
    name: "<logical custom page name>",
};
var navigationOptions = {
    //1=full page, 2 = dialog,
    target: 2, 
    //postion 1=centered, 2=side
    position: 1,
    width: {value: 50, unit:"%"},
    title: "<dialog title>"
};
Xrm.Navigation.navigateTo(pageInput, navigationOptions)
    .then(
        function () {
            // Called when the dialog closes
        }
    ).catch(
        function (error) {
            // Handle error
        }
    ); 
}

function customPageSideDialog() {
 // Side Dialog
var pageInput = {
    pageType: "custom",
    name: "<logical page name>",
};
var navigationOptions = {
    target: 2, 
    position: 2,
    width: {value: 500, unit: "px"},
    title: "<dialog title>"
};
Xrm.Navigation.navigateTo(pageInput, navigationOptions)
    .then(
        function () {
            // Called when the dialog closes
        }
    ).catch(
        function (error) {
            // Handle error
        }
    ); 
}
