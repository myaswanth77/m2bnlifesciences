const params = new URLSearchParams(location.search);
const succeeded = params.get("status") === "success";
const card = document.querySelector("#quoteResult");
card.dataset.status = succeeded ? "success" : "error";
document.querySelector("#quoteResultIcon").textContent = succeeded ? "✓" : "!";
document.querySelector("#quoteResultLabel").textContent = succeeded
  ? "REQUEST SUBMITTED"
  : "REQUEST NOT COMPLETED";
document.querySelector("#quoteResultTitle").textContent = succeeded
  ? "Thank you"
  : "There was a problem";
document.querySelector("#quoteResultMessage").textContent = succeeded
  ? params.get("message") ||
    "Thank you. Your request has been submitted successfully. Our team will contact you shortly."
  : params.get("message") ||
    "Your request could not be processed. Please try again or email us directly.";
if (succeeded) document.querySelector("#quoteResultRetry").hidden = true;
