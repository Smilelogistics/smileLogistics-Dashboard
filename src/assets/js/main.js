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



    // Function to extract form values without a loop
    function extractFormValues() {
      const form = document.getElementById("newloadForm");
  
      // Extract single fields by their IDs
      const shipment_type = form.querySelector("#shipment_type")?.value || null;
      const shipper_name = form.querySelector("#shipper_name")?.value || null;
      const shipper_address = form.querySelector("#shipper_address")?.value || null;
      const shipper_reference_number = form.querySelector("#shipper_reference_number")?.value || null;
      const carrier_name = form.querySelector("#carrier_name")?.value || null;
      const carrier_reference_number = form.querySelector("#carrier_reference_number")?.value || null;
      const bill_of_ladening_number = form.querySelector("#bill_of_ladening_number")?.value || null;
      const consignee = form.querySelector("#consignee")?.value || null;
      const consignee_phone = form.querySelector("#consignee_phone")?.value || null;
      const consignee_email = form.querySelector("#consignee_email")?.value || null;
      const first_notify_party_name = form.querySelector("#first_notify_party_name")?.value || null;
      const first_notify_party_phone = form.querySelector("#first_notify_party_phone")?.value || null;
      const first_notify_party_email = form.querySelector("#first_notify_party_email")?.value || null;
      const second_notify_party_phone = form.querySelector("#second_notify_party_phone")?.value || null;
      const second_notify_party_email = form.querySelector("#second_notify_party_email")?.value || null;
      const pre_carrier = form.querySelector("#pre_carrier")?.value || null;
      const vessel_aircraft_name = form.querySelector("#vessel_aircraft_name")?.value || null;
      const voyage_number = form.querySelector("#voyage_number")?.value || null;
      const port_of_discharge = form.querySelector("#port_of_discharge")?.value || null;
      const place_of_delivery = form.querySelector("#place_of_delivery")?.value || null;
      const final_destination = form.querySelector("#final_destination")?.value || null;
      const port_of_landing = form.querySelector("#port_of_landing")?.value || null;
      const ocean_note = form.querySelector("#ocean_note")?.value || null;
      const itn = form.querySelector("#itn")?.value || null;
      const kind_and_no_of_packages = form.querySelector("#kind_and_no_of_packages")?.value || null;
      const decsription_of_goods = form.querySelector("#decsription_of_goods")?.value || null;
      const ocean_net_weight = form.querySelector("#ocean_net_weight")?.value || null;
      const ocean_gross_weight = form.querySelector("#ocean_gross_weight")?.value || null;
      const ocean_total = form.querySelector("#ocean_total")?.value || null;
      const ocean_consignment_total = form.querySelector("#ocean_consignment_total")?.value || null;
      const ocean_container_number = form.querySelector("#ocean_container_number")?.value || null;
      const ocean_seal_number = form.querySelector("#ocean_seal_number")?.value || null;
      const equipment_size = form.querySelector("#equipment_size")?.value || null;
      const ocean_total_containers_in_words = form.querySelector("#ocean_total_containers_in_words")?.value || null;
      const no_original_bill_of_landing = form.querySelector("#no_original_bill_of_landing")?.value || null;
      const original_bill_of_landing_payable_at = form.querySelector("#original_bill_of_landing_payable_at")?.value || null;
      const ocean_freight_charges = form.querySelector("#ocean_freight_charges")?.value || null;
      const shipped_on_board_date = form.querySelector("#shipped_on_board_date")?.value || null;
      const place_of_issue = form.querySelector("#place_of_issue")?.value || null;
      const signatory_company = form.querySelector("#signatory_company")?.value || null;
      const authorized_signatory = form.querySelector("#authorized_signatory")?.value || null;
      const ocean_signature = form.querySelector("#ocean_signature")?.value || null;
      const office = form.querySelector("#office")?.value || null;
      const load_type = form.querySelector("#load_type")?.value || null;
      const load_type_note = form.querySelector("#load_type_note")?.value || null;
      const load_type_note_r = form.querySelector("#load_type_note_r")?.value || null;
      const isBroker = form.querySelector("#isBroker")?.value || null;
      const reference_number = form.querySelector("#reference_number")?.value || null;
      const booking_number = form.querySelector("#booking_number")?.value || null;
      const bill_of_laden_number = form.querySelector("#bill_of_laden_number")?.value || null;
      const po_number = form.querySelector("#po_number")?.value || null;
      const load_weight = form.querySelector("#load_weight")?.value || null;
      const commodity = form.querySelector("#commodity")?.value || null;
      const pieces = form.querySelector("#pieces")?.value || null;
      const pick_up_number = form.querySelector("#pick_up_number")?.value || null;
      const over_weight = form.querySelector("#over_weight")?.value || null;
      const tags = form.querySelector("#tags")?.value || null;
      const genset_number = form.querySelector("#genset_number")?.value || null;
      const reefer_temp = form.querySelector("#reefer_temp")?.value || null;
      const seal_number = form.querySelector("#seal_number")?.value || null;
      const pick_up = form.querySelector("#pick_up")?.value || null;
      const look_up = form.querySelector("#look_up")?.value || null;
      const zip = form.querySelector("#zip")?.value || null;
      const appt_date = form.querySelector("#appt_date")?.value || null;
      const from = form.querySelector("#from")?.value || null;
      const to = form.querySelector("#to")?.value || null;
      const no_latter_than_date = form.querySelector("#no_latter_than_date")?.value || null;
      const no_latter_than_time = form.querySelector("#no_latter_than_time")?.value || null;
      const drop_at = form.querySelector("#drop_at")?.value || null;
      const drop_at_look_up = form.querySelector("#drop_at_look_up")?.value || null;
      const drop_at_zip = form.querySelector("#drop_at_zip")?.value || null;
      const drop_at_appt_date = form.querySelector("#drop_at_appt_date")?.value || null;
      const drop_at_from = form.querySelector("#drop_at_from")?.value || null;
      const drop_at_to = form.querySelector("#drop_at_to")?.value || null;
      const drop_at_no_latter_than_date = form.querySelector("#drop_at_no_latter_than_date")?.value || null;
      const drop_at_no_latter_than_time = form.querySelector("#drop_at_no_latter_than_time")?.value || null;
      const broker_name = form.querySelector("#broker_name")?.value || null;
      const broker_email = form.querySelector("#broker_email")?.value || null;
      const broker_number = form.querySelector("#broker_number")?.value || null;
      const batch_number = form.querySelector("#batch_number")?.value || null;
      const batch_req = form.querySelector("#batch_req")?.value || null;
      const sales_rep = form.querySelector("#sales_rep")?.value || null;
      const edi_number = form.querySelector("#edi_number")?.value || null;
      const note = form.querySelector("#note")?.value || null;
      const charge_type = form.querySelector("#charge_type")?.value || null;
      const comment = form.querySelector("#comment")?.value || null;
      const units = form.querySelector("#units")?.value || null;
      const rate = form.querySelector("#rate")?.value || null;
      const amount = form.querySelector("#amount")?.value || null;
      const discount = form.querySelector("#discount")?.value || null;
      const internal_notes = form.querySelector("#internal_notes")?.value || null;
      const total = form.querySelector("#total")?.value || null;
      const total_discount = form.querySelector("#total_discount")?.value || null;
      const net_total = form.querySelector("#net_total")?.value || null;
      const delivery_type = form.querySelector("#delivery_type")?.value || null;
      const driver_id = form.querySelector("#driver_id")?.value || null;
      const carrier_id = form.querySelector("#carrier_id")?.value || null;
      const bike_id = form.querySelector("#bike_id")?.value || null;
      const file_path = form.querySelector("#file_path")?.value || null;
      const expense_type = form.querySelector("#expense_type")?.value || null;
      const expense_unit = form.querySelector("#expense_unit")?.value || null;
      const expense_rate = form.querySelector("#expense_rate")?.value || null;
      const expense_amount = form.querySelector("#expense_amount")?.value || null;
      const credit_reimbursement_amount = form.querySelector("#credit_reimbursement_amount")?.value || null;
      const vendor_invoice_number = form.querySelector("#vendor_invoice_number")?.value || null;
      const payment_reference_note = form.querySelector("#payment_reference_note")?.value || null;
      const disputed_note = form.querySelector("#disputed_note")?.value || null;
      const expense_disputed = form.querySelector("#expense_disputed")?.value || null;
      const paid = form.querySelector("#paid")?.value || null;
  
      // Extract array fields by their names
      const goods_name = Array.from(form.querySelectorAll("input[name='goods_name[]']")).map(input => input.value);
      const ocean_vin = Array.from(form.querySelectorAll("input[name='ocean_vin[]']")).map(input => input.value);
      const ocean_weight = Array.from(form.querySelectorAll("input[name='ocean_weight[]']")).map(input => input.value);
      const bill_to = Array.from(form.querySelectorAll("input[name='bill_to[]']")).map(input => input.value);
      const quick_note = Array.from(form.querySelectorAll("input[name='quick_note[]']")).map(input => input.value);
      const container = Array.from(form.querySelectorAll("input[name='container[]']")).map(input => input.value);
      const container_size = Array.from(form.querySelectorAll("select[name='container_size[]']")).map(select => select.value);
      const container_type = Array.from(form.querySelectorAll("select[name='container_type[]']")).map(select => select.value);
      const chasis = Array.from(form.querySelectorAll("input[name='chasis[]']")).map(input => input.value);
      const isLoaded = Array.from(form.querySelectorAll("textarea[name='isLoaded[]']")).map(textarea => textarea.value);
      const chasis_size = Array.from(form.querySelectorAll("select[name='chasis_size[]']")).map(select => select.value);
      const chasis_type = Array.from(form.querySelectorAll("select[name='chasis_type[]']")).map(select => select.value);
      const chasis_vendor = Array.from(form.querySelectorAll("input[name='chasis_vendor[]']")).map(input => input.value);
      const pick_up_location_name = Array.from(form.querySelectorAll("input[name='pick_up_location_name[]']")).map(input => input.value);
      const pick_up_address = Array.from(form.querySelectorAll("input[name='pick_up_address[]']")).map(input => input.value);
      const pick_up_city = Array.from(form.querySelectorAll("input[name='pick_up_city[]']")).map(input => input.value);
  
      // Log all extracted values to the console (for debugging)
      console.log("Single fields:", {
          shipment_type,
          shipper_name,
          shipper_address,
          shipper_reference_number,
          carrier_name,
          carrier_reference_number,
          bill_of_ladening_number,
          consignee,
          consignee_phone,
          consignee_email,
          first_notify_party_name,
          first_notify_party_phone,
          first_notify_party_email,
          second_notify_party_phone,
          second_notify_party_email,
          pre_carrier,
          vessel_aircraft_name,
          voyage_number,
          port_of_discharge,
          place_of_delivery,
          final_destination,
          port_of_landing,
          ocean_note,
          itn,
          kind_and_no_of_packages,
          decsription_of_goods,
          ocean_net_weight,
          ocean_gross_weight,
          ocean_total,
          ocean_consignment_total,
          ocean_container_number,
          ocean_seal_number,
          equipment_size,
          ocean_total_containers_in_words,
          no_original_bill_of_landing,
          original_bill_of_landing_payable_at,
          ocean_freight_charges,
          shipped_on_board_date,
          place_of_issue,
          signatory_company,
          authorized_signatory,
          ocean_signature,
          office,
          load_type,
          load_type_note,
          load_type_note_r,
          isBroker,
          reference_number,
          booking_number,
          bill_of_laden_number,
          po_number,
          load_weight,
          commodity,
          pieces,
          pick_up_number,
          over_weight,
          tags,
          genset_number,
          reefer_temp,
          seal_number,
          pick_up,
          look_up,
          zip,
          appt_date,
          from,
          to,
          no_latter_than_date,
          no_latter_than_time,
          drop_at,
          drop_at_look_up,
          drop_at_zip,
          drop_at_appt_date,
          drop_at_from,
          drop_at_to,
          drop_at_no_latter_than_date,
          drop_at_no_latter_than_time,
          broker_name,
          broker_email,
          broker_number,
          batch_number,
          batch_req,
          sales_rep,
          edi_number,
          note,
          charge_type,
          comment,
          units,
          rate,
          amount,
          discount,
          internal_notes,
          total,
          total_discount,
          net_total,
          delivery_type,
          driver_id,
          carrier_id,
          bike_id,
          file_path,
          expense_type,
          expense_unit,
          expense_rate,
          expense_amount,
          credit_reimbursement_amount,
          vendor_invoice_number,
          payment_reference_note,
          disputed_note,
          expense_disputed,
          paid
      });
  
      console.log("Array fields:", {
          goods_name,
          ocean_vin,
          ocean_weight,
          bill_to,
          quick_note,
          container,
          container_size,
          container_type,
          chasis,
          isLoaded,
          chasis_size,
          chasis_type,
          chasis_vendor,
          pick_up_location_name,
          pick_up_address,
          pick_up_city
      });
  }
                      
                //  extractFormValues();
  


    

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
