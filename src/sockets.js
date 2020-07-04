
var line=[];

module.exports=  io =>{
    io.on('connection',socket=>{
        console.log("new user connected")

        for(let i in line){
            socket.emit('pain', {line:line[i]})
        }

        socket.on('pain',data =>{
            line.push(data.line)
            io.emit('pain',data);
        });
    });
}