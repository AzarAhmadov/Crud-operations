import { showError } from "./helper.js";
import dom from "./selectors.js";
import { getMenu } from "./service.js";
import renderProduct from "./ui.js";
import formValidation from "./validation.js";

window.addEventListener("DOMContentLoaded", async () => {
  const menu = await getMenu();

  if (menu && menu.length > 0) {
    renderProduct(menu);
  } else {
    showError("No menu items available", "flex");
  }

  dom.add_menu_form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let allValid = true
    const formData = {};

    for (let input of e.target.elements) {
      if (input.tagName !== "BUTTON") {
        const isValid = formValidation(input)
        if (!isValid) {
          allValid = false
        } else {
          formData[input.name] = input.value
        }
      }
    }

    if (allValid) {
      await window.addMenu(formData)
    }
  });
});
