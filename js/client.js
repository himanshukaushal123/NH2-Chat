const socket = io("http://localhost:8000");

const form = document.getElementById("send-container");
const messageInput = document.getElementById("messageInp");
const messageContainer = document.querySelector(".container");

//jese hi koi user join karega ek event ko emit karunga
const fname = prompt("Enter your name to join");

socket.emit("new-user-joined",fname);
