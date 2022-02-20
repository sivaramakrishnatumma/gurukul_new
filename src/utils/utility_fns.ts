import axios from "axios";

export function getDefaultValue(item: any) {
  if (item.defaultValue != null) {
    return item.defaultValue;
  }
  switch (item.type) {
    case "number":
      return "";
    case "checkbox":
      return false;
    default:
      return "";
  }
}

export const kebabize = (str: string) => {
  return str
    .split("")
    .map((letter, idx) => {
      return letter.toUpperCase() === letter
        ? `${idx !== 0 ? "-" : ""}${letter.toLowerCase()}`
        : letter;
    })
    .join("");
};

export const titlize = (str: string) => {
  const result = str.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
};

export function handleCatch(error: any) {
  if (axios.isCancel(error)) {
    console.error(error);
  } else {
    throw error;
  }
}

export function handleValidationError(response: any) {
  const { status, data } = response;
  if (status === 400) {
    if (data.isValidationError) {
      return data.errors.validationError;
    } else {
      return data.errors.message;
    }
  }
}
