import dom from "./selectors.js";

const renderProduct = (data) => {
  let html = "";

  for (let item of data) {
    html += `
    <tr class="bg-white border-b">
        <td class="pl-6 py-4">
          <img
            class="size-[3rem] md:size-[5rem] rounded-md object-cover"
            src="${item.image}"
            alt="${item.name}"
          />
        </td>
        <td class="px-6 py-4 font-medium text-gray-900">${item.name}</td>
        <td class="px-6 py-4">${item.category}</td>
        <td class="px-6 py-4">${item.price}</td>
        <td class="px-6 py-4 space-x-2 text-center">
          <button class="bg-green-500 text-sm hover:bg-green-700 text-white py-2 px-5 rounded-md">
            Edit
          </button>
          <button 
          onClick='getDelete(${item.id})'
          class="bg-red-500 text-sm hover:bg-red-700 text-white py-2 px-5 rounded-md">
            Delete
          </button>
        </td>
    </tr>`;
  }

  dom.table_body.innerHTML = html;
};

export default renderProduct