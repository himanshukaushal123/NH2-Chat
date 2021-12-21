//Node server which will handle socket.io connection

//mere ko socket io chahiye aur usko 8000 port pe run kr lenge
const io = require("socket.io")(8000)

//to store user
const users = {};

//jese hi connection aye is soket me ek arrow function run krdo
//io.on kai sare instance ko listen karega jese main connect kiya then tum connect kiye and so on
io.on("connection", (socket) => {
  socket.on("new-user-joined", (name) => {
      console.log("New user "+ name);
    users[socket.id] = name;
    socket.broadcast.emit("user-joined",name);
    //new user ayega and wo append ho jyega(13) and 
    //baki sbse ko pta chl jyega ye naya user aa gya(14)
  })

  //kisi ne msg beja h usko sabko recive karwado
  socket.on('send',message=>{
      socket.broadcast.emit("receive",{message:message,name:user[socket.id]})
  })
});
