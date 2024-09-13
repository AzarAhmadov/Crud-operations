import { API, BASE_URL } from "./api.js";
import { showDeleteModal } from "./helper.js";
import dom from "./selectors.js";
import renderProduct from "./ui.js";

const getMenu = async () => {
  try {
    const res = await fetch(`${BASE_URL}/${API.menu}`);
    if (!res.ok) {
      throw new Error(`Error ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

window.getDelete = (id) => {
  showDeleteModal("show");

  const allowDelete = (e) => {
    const obj = e.target.closest("[data-allow]");
    const data_allow = obj?.dataset.allow;

    if (data_allow) {
      if (data_allow === "yes") {
        deleteMenuById(id);
      }
      showDeleteModal("hide");
      dom.modal_control.remove.addEventListener("click", allowDelete);
    }
  };

  dom.modal_control.addEventListener("click", allowDelete);
};

const deleteMenuById = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${API.delete.replace(":id", id)}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error(`Error ${res.status} ${res.statusText}`);
    }

    const menu = await getMenu();
    renderProduct(menu);
  } catch (err) {
    console.log(err);
  }
};

export { getMenu };
