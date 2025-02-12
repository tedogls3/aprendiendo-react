import { EVENTS } from "./consts";

export const navigate = (href) => {
  window.history.pushState({}, "", href);

  const navEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navEvent);
};
