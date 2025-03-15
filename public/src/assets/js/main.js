document.addEventListener('DOMContentLoaded', function () {
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
  $(document).ready(function () {
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

  // blow Up modal
  const openModalButton = document.getElementById("openModal");
  const closeModalButton = document.getElementById("closeModal");
  const modal = document.getElementById("modal");

  // Open Modal
  openModalButton.addEventListener("click", () => {
    modal.style.display = "flex"; // Show the modal
    const modalContent = modal.querySelector(".modal-content");
    modalContent.style.animation = "blowUp 0.3s ease-out forwards"; // Blow up animation
  });

  // Close Modal
  closeModalButton.addEventListener("click", () => {
    const modalContent = modal.querySelector(".modal-content");
    modalContent.style.animation = "goBack 0.3s ease-out forwards"; // Go back animation

    // Hide the modal after the animation completes
    setTimeout(() => {
      modal.style.display = "none";
    }, 300); // Match the duration of the animation
  });
  const canvas = document.getElementById("signature_pad");
  const clearButton = document.getElementById("clear");
  const saveButton = document.getElementById("save");

  // Initialize Signature Pad
  const signaturePad = new SignaturePad(canvas);

  // Clear the canvas
  clearButton.addEventListener("click", () => {
    signaturePad.clear();
  });

  // Save the signature as an image
  saveButton.addEventListener("click", () => {
    if (signaturePad.isEmpty()) {
      alert("Please provide a signature first.");
    } else {
      const dataURL = signaturePad.toDataURL(); // Get signature as a data URL
      console.log(dataURL); // Log the data URL to the console
      alert("Signature saved! Check the console for the data URL.");

      // Optionally, download the image
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "signature.png";
      link.click();
    }
  });
});

// document.addEventListener('DOMContentLoaded', function() {
//   alert("DOM fully loaded and parsed!");
// });