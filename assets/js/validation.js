import { allowOnlyNumbers, removeErrorMsg } from "./helper.js";

const formValidation = (form) => {
    const value = form.value;
    const data_required = form.dataset.required === "true";
    const data_https = form.dataset.https;
    const data_del = form.dataset.tel

    removeErrorMsg(form);
    let isValid = true

    if (!value.trim() && data_required) {
        form.classList.add("!border-red-500");
        form.closest("div").insertAdjacentHTML(
            "beforeend",
            `<p class="error-el mt-2 text-[#F22B2B] text-[13px]">This field is required.</p>`
        );
        isValid = false

    }
    else if (value.trim() && data_https && !value.trim().startsWith(data_https)) {
        form.closest("div").insertAdjacentHTML(
            "beforeend",
            `<p class="error-el mt-2 text-[#F22B2B] text-[13px]">Please enter a valid URL starting with ${data_https}</p>`
        );
        isValid = false

    }

    else if (value.trim() && data_del && !allowOnlyNumbers(value)) {
        form.closest("div").insertAdjacentHTML(
            "beforeend",
            `<p class="error-el mt-2 text-[#F22B2B] text-[13px]">Only the number can be entered</p>`
        );
    }
    else {
        form.classList.remove("!border-red-500");
    }

    return isValid
};

export default formValidation