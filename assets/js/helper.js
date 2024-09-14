import dom from "./selectors.js";

const showError = (text = "No menu items available", status = "flex") => {
  let error_paragraph = "";

  error_paragraph = `
   <p class="${status} text-center text-red-500 text-lg font-[500] mt-10">
        ${text}
    </p>
  `;

  dom.error.innerHTML = error_paragraph;
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

const removeErrorMsg = (form) => {
  const errorEl = form.closest("div").querySelector(".error-el");
  if (errorEl) {
    errorEl.remove();
  }
};

window.closeModal = () => {
  showAddModal("");
  resetForm()
};

const resetForm = () => {
  dom.add_menu_form.reset();
}

window.OpenModal = (modalTitle = "Create menu item", btnName = "Create") => {
  dom.modal_btn_name.textContent = btnName
  dom.modal_title.textContent = modalTitle
  showAddModal("show");
};

const allowOnlyNumbers = (str) => {
  return /^[0-9]+$/.test(str);
};

const fillForm = (data) => {
  dom.add_menu_form.img.value = data.img;
  dom.add_menu_form.name.value = data.name;
  dom.add_menu_form.category.value = data.category;
  dom.add_menu_form.price.value = data.price;
  dom.add_menu_form.menu_id.value = data.id;
}

export { showError, showDeleteModal, showAddModal, removeErrorMsg, allowOnlyNumbers, fillForm };