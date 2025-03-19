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



    //     $(document).ready(function(){
    //       $("#").on("click", function() {
    //           alert()
    //   createToast("success", "Success: Operation completed successfully.");
    // });


    // let $ = document;

    // const notifications = $.querySelector(".notifications");

    // const toastDetails = {
    //   timer: 5000,
    //   success: {
    //       icon: "fa-circle-check",
    //       defaultText: "Success: Operation completed successfully."
    //   },
    //   error: {
    //       icon: "fa-circle-xmark",
    //       defaultText: "Error: Something went wrong."
    //   },
    //   warning: {
    //       icon: "fa-circle-exclamation",
    //       defaultText: "Warning: Please check your input."
    //   },
    //   info: {
    //       icon: "fa-circle-info",
    //       defaultText: "Info: This is an informational message."
    //   }
    // };

    // const removeToast = (toast) => {
    //   toast.classList.add("hide");
    //   if (toast.timeoutId) clearTimeout(toast.timeoutId); // Clearing the timeout for the toast
    //   setTimeout(() => toast.remove(), 500); // Removing the toast after 500ms
    // };

    // const createToast = (type, message = null) => {
    //   if (!toastDetails[type]) type = "info"; // Default to 'info' if type is invalid

    //   const { icon, defaultText } = toastDetails[type];
    //   const toastMessage = message || defaultText; // Use custom message if provided

    //   const toast = $.createElement("li"); // Creating a new 'li' element for the toast
    //   toast.className = `toast ${type}`; // Setting the class for the toast
    //   toast.innerHTML = `<div class="column">
    //                         <i class="fa-solid ${icon}"></i>
    //                         <span>${toastMessage}</span>
    //                     </div>
    //                     <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
      
    //   notifications.appendChild(toast); // Append the toast to the notification list
    //   toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
    // };
    //   })
    
  });

  // document.addEventListener('DOMContentLoaded', function() {
  //   alert("DOM fully loaded and parsed!");
  // });
