// BroadcastChannel API

const channel = new BroadcastChannel("Lab Channel");

export function postMessage(type: string, payload: any) {
  channel.postMessage({ type, payload });
}

export function onMessageByType(type: string, listener: (payload: any) => any) {
  channel.onmessage = (event) => {
    if (event.data.type === type) {
      listener(event.data.payload);
    }
  };
}
