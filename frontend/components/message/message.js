import { setCallback } from "client/chat";
import "components/message/message";
import "./message.css";

function scrollToBottom(element) {
  // eslint-disable-next-line
  element.scrollTop = element.scrollHeight;
}

const messages = document.querySelector(".js-messages");

if (messages) {
  const content = messages.querySelector(".js-messages--content");

  scrollToBottom(content);

  setCallback(message => {
    content.insertAdjacentHTML("beforeend", message);

    scrollToBottom(content);
  });
}
