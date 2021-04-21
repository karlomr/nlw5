import express from "express";

const app = express();

/**
 * GET=Buscar
 * POST=CRIAR
 * PUT=ALTERAR
 * DELETE=DELETAR
 * PATCH=ALTERAR INFO ESPEC
 * */
app.get("/", (req, res) => {
    return res.json({ 
        message: "Olá nlw 05"
    });
});

app.post("/", (req, res) => {
    return res.json({ message: "Usuário salvo com sucesso!" });
})



app.listen(3333, () => console.log("Server is runing on port 3333"));