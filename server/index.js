const app = require("./app")
const keys = require("./config/keys")
const PORT = process.env.PORT || keys.PORT


app.listen(PORT,()=>
    console.log(`Сервер начал работу на порту ${PORT}`)
)