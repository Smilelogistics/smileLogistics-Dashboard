document.addEventListener('DOMContentLoaded', function() {
    // Load head content
    // fetch('../../partials/mainhead.html')
    //   .then(response => response.text())
    //   .then(html => {
    //     document.head.innerHTML += html;
    //   })
    //   .catch(error => {
    //     console.error('Error loading head partial:', error);
    //   });
    
    // Load footer content
    // fetch('/partials/footer.html')
    //   .then(response => response.text())
    //   .then(html => {
    //     document.getElementById('footer-container').innerHTML = html;
    //   })
    //   .catch(error => {
    //     console.error('Error loading footer partial:', error);
    //   });

    // Prevent non-numeric input
document.querySelectorAll(".numberOnly").forEach(function (input) {
  input.addEventListener("input", function () {
      this.value = this.value.replace(/\D/g, "");
  });
});

//chosen js
$(document).ready(function() {
$(".chosen-select").chosen({
  no_results_text: "No result found!",
  width: "100%"
});
});

// $(document).ready(function() {
//   $("#chosen-selekt").chosen({
//     no_results_text: "No currency found!",
//     width: "100%"
//   });
// });


function handleShipmentType() {
 alert("Shipment type changed!");
}
  });