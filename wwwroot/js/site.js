$(document).ready(function () {
    const ratePerHour = 20;  // Set hourly rate

    $("#calculate-btn").click(function () {
        // Get the number of hours from input
        const hours = $("#hours").val();

        // Validate input
        if (hours <= 0 || isNaN(hours) || hours === "") {
            $("#error-message").text("Please enter a positive number of hours.");
            $("#total-fee").val("");  // Clear any previous output
        } else {
            $("#error-message").text("");  // Clear error message
            const totalFee = hours * ratePerHour;  // Calculate total fee
            $("#total-fee").val("$" + totalFee.toFixed(2));  // Show total fee
        }
    });
});