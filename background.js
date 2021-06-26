// $(document).ready(function() {
    let color = '#3aa757';
console.log("12332");

// let bulkActionsButton = $(".LoadableTreeControlPanel .Button_size_small");
// let bulkActionsMenu = $(".tippy-content");
// $(".AppLayout").style.background = "#FFF";
chrome.runtime.onInstalled.addListener(() => {
    console.log("1232");

    $(".AppLayout").style.background = "#FFF";
    console.log("1232");
    $(".tippy-content").waitUntilExists(function (a) {
        return console.log("123");
        // alert("OEEEE");
    });
//     chrome.storage.sync.set({ color });
//     console.log('Default background color set to %cgreen', `color: ${color}`);
});
// });