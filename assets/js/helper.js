import dom from "./selectors.js";

const showError = (text = "No menu items available", status = "none") => {
  dom.error.style.display = status;
  dom.error.textContent = text;
};

const showDeleteModal = (status) => {
  if (status === "show") {
    dom.delete_modal.classList.add("show");
    document.body.classList.add("overflow");
  } else {
    dom.delete_modal.classList.remove("show");
    document.body.classList.remove("overflow");
  }
};

const showAddModal = (status) => {
  if (status === "show") {
    dom.add_modal.classList.add("show");
    document.body.classList.add("overflow");
  } else {
    dom.add_modal.classList.remove("show");
    document.body.classList.remove("overflow");
  }
};

window.closeModal = () => {
  showAddModal("");
};

window.AddModal = () => {
  showAddModal("show");
};

export { showError, showDeleteModal, showAddModal };
