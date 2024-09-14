import { showError } from "./helper.js";
import dom from "./selectors.js";
import { getMenu } from "./service.js";
import renderProduct from "./ui.js";
import formValidation from "./validation.js";

window.addEventListener("DOMContentLoaded", async () => {
  const menu = await getMenu();

  if (menu && menu.length > 0) {
    renderProduct(menu);
    showError("", "hidden");
  } else {
    showError("No menu items available", "flex");
  }

  dom.add_menu_form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let allValid = true;
    const formData = {};

    for (let input of e.target.elements) {
      if (input.tagName !== "BUTTON") {
        const isValid = formValidation(input);
        if (!isValid) {
          allValid = false;
        } else {
          formData[input.name] = input.value;
        }
      }
    }

    if (allValid) {
      if (formData.id) {
        await window.updateMenu(formData);
      } else {
        await window.addMenu(formData);
      }
      dom.add_menu_form.reset();
      window.location.reload()
    }
  });

});
