
//servidor
const express = require('express')
const server = express()

const {pageLanding,pageGiveClasses,pageStudy,saveClasses}= require('./pages')

//configurar o nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express:server,
    noCache:true,
})
server
//receber os dados do req.body
.use(express.urlencoded({extended:true}))
.use(express.static("public"))//static arquivos de front
// rotas da aplicação
.get("/",pageLanding)
.get("/study",pageStudy)
.get("/give-classes",pageGiveClasses)
.post("/save-classes",saveClasses)
.listen(5000)//criando um servidor com porta 5000