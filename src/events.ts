// With Window API

declare global {
  interface Window {
    user: string;
  }
}

export function dispatchEvent(type: string, payload: any) {
  const event = new CustomEvent(type, { detail: payload });
  window.dispatchEvent(event);
}

export function addEventListener(type: string, listener: EventListenerOrEventListenerObject) {
  window.addEventListener(type, listener);
}

export function setUser(user: string) {
  window.user = user;
}

export function getUser() {
  return window.user;
}
