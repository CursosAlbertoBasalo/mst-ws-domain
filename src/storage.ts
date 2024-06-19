// With LocalStorage

export function saveMessage(type: string, payload: any) {
  localStorage.setItem("lab-message" + type, JSON.stringify(payload));
}

export function loadMessage(type: string) {
  const message = localStorage.getItem("lab-message" + type);
  if (message) {
    return JSON.parse(message);
  }
  return null;
}
