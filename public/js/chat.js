const socket = io();
const $messages = document.querySelector("#messages");
const messageTemplate = document.querySelector("#message-template").innerHTML;
const $messageForm = document.querySelector("#form-chat");
const $messageButton = document.querySelector("#form-chat button");
const linkTemplate = document.querySelector("#link-template").innerHTML;
const form = document.querySelector("#form");
const sideBarTemplate = document.querySelector("#sidebar-template").innerHTML;

// Options

const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

const autoScroll = () => {
  // New message element
  const $newMessage = $messages.lastElementChild;

  // Height of new message
  const newMessageStyles = getComputedStyle($newMessage);
  const newMessageMargin = parseInt(newMessageStyles.marginBottom);
  const newMessageHeight = $newMessage.offsetHeight + newMessageMargin;

  // Visible height
  const visibleHeight = $messages.offsetHeight;

  // Height od messages
  const contetHeight = $messages.scrollHeight;

  // How far how I scilled
  const scrollOffset = $messages.scrollTop + visibleHeight;

  if (contetHeight - newMessageHeight <= scrollOffset) {
    $messages.scrollTop = $messages.scrollHeight;
  }
};

socket.on("message", (message, callback) => {
  const html = Mustache.render(messageTemplate, {
    username: message.username,
    message: message.text,
    createdAt: moment(message.createdAt).format("h:mm a"),
  });
  $messages.insertAdjacentHTML("beforeend", html);
  autoScroll();
});

socket.on("LocationMessage", (url) => {
  const html = Mustache.render(linkTemplate, {
    username: url.username,
    url: url.url,
    createdAt: moment(url.createdAt).format("h:mm a"),
  });
  $messages.insertAdjacentHTML("beforeend", html);
  autoScroll();
});

$messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = document.querySelector("input").value;
  socket.emit("sendMessage", message, (message) => {
    document.querySelector("input").value = message;
  });
});

socket.on("roomData", ({ users, room }) => {
  const html = Mustache.render(sideBarTemplate, {
    room,
    users,
  });

  document.querySelector("#sidebar").innerHTML = html;
});

document.querySelector("#send-location").addEventListener("click", () => {
  if (!navigator.geolocation) return alert("Geolocation is not supported");

  document.querySelector("#send-location").setAttribute("disabled", "disabled");
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude, position.coords.longitude);
    socket.emit(
      "sendLocation",
      {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      },
      (message) => {
        document.querySelector("#send-location").removeAttribute("disabled");
        console.log("The location was", message);
      }
    );
  });
});

socket.emit("join", { username, room }, (error) => {
  if (error) {
    alert(error);
    location.href = "/";
  }
});
