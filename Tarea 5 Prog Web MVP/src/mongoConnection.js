const mongoose = require('mongoose')

module.exports = function mongoConnection() {

     const connectionStringOffline = 'mongodb://localhost:27017/ChatAppDatabase'
     const connectionStringOnline = 'mongodb+srv://admin02:admin02@cluster0.jdjbj.mongodb.net/ChatApp?retryWrites=true&w=majority'
     try {
          mongoose.connect(connectionStringOffline, {
               useUnifiedTopology: true,
               useNewUrlParser: true
          })
          console.log('Se ha conectado correctamente')
     } catch (error) {
          console.log('Ha ocurrido un error conectando a la base de datos')
     }
}












