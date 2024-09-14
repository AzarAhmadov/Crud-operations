import { API, BASE_URL } from "./api.js";
import { fillForm, showDeleteModal } from "./helper.js";
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

window.addMenu = async (data) => {
  try {

    data.id = Math.floor(10000 + Math.random() * 90000);

    const res = await fetch(`${BASE_URL}/${API.post}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error(`Error ${res.status} ${res.statusText}`);
    }

    const updatedMenu = await getMenu();
    renderProduct(updatedMenu.reverse());
  } catch (err) {
    console.log(err);
  }
};

window.getDelete = (id) => {
  showDeleteModal("show");

  window.allowDelete = (e) => {
    const obj = e.target.closest("[data-allow]");
    const data_allow = obj?.dataset.allow;

    if (data_allow) {
      if (data_allow === "yes") {
        deleteMenuById(id);
      }
      showDeleteModal("hide");
    }
  };
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

window.updateMenu = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/${API.menu}/${data.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error(`Error ${res.status} ${res.statusText}`);
    }

    const updatedMenu = await getMenu();
    renderProduct(updatedMenu.reverse());
  } catch (err) {
    console.log(err);
  }
};

window.getMenuById = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${API.menuById.replace(':id', id)}`);
    if (!res.ok) {
      throw new Error(`Error ${res.status} ${res.statusText}`);
    }

    OpenModal('Update menu', "Update")
    const data = await res.json();
    fillForm(data)

  } catch (err) {
    console.error(err);
  }
};


export { getMenu };
