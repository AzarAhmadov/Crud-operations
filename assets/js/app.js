import { showAddModal, showError } from "./helper.js";
import dom from "./selectors.js";
import { getMenu } from "./service.js";
import renderProduct from "./ui.js";

window.addEventListener("DOMContentLoaded", async () => {
  const menu = await getMenu();

  if (menu && menu.length > 0) {
    renderProduct(menu);
  } else {
    showError("No menu items available", "block");
  }
});
