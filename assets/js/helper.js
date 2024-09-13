import dom from "./selectors.js";

const showError = (text = "No menu items available", status = "none") => {
  dom.error.style.display = status;
  dom.error.textContent = text;
};

const showDeleteModal = (status) => {
  status = status === "show" ? dom.delete_modal.classList.add("show") : dom.delete_modal.classList.remove("show");
};

export { showError, showDeleteModal };
