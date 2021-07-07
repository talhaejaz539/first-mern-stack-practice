$(function() {
    $("#load").click(sendAjax);
});

function sendAjax() {
    console.log("sending Ajax");
    $.get("students.txt", handleResponse);
    console.log("Request Sent");
}

function handleResponse(response) {
    console.log("Response Received");
    $("#result").empty();
    $("#result").append(response);
}