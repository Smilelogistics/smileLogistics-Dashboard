var url = "";

$(document).ready(function () {
    url = $(location).attr("href");
    $("#shipment_type").change(function () {
        url = $(location).attr("href");
        var shipmentType = $(this).val();
        if (shipmentType === "air") {
            window.location.href = url + "/air";
        } else if (shipmentType === "ocean") {
            window.location.href = url + "/ocean";
        } else if (shipmentType === "land") {
            window.location.href = url + "/land";
        }
    });
});