const prisma = require("../data/prisma.js");

const listar = async (req, res) => {

    const lista = await prisma.usuario.findMany();

    res.status(200).json(lista);

}

const listar_por_nome = async (req, res) => {
    const { nome } = req.params;
    try {
        const usuario = await prisma.usuario.findFirst({
            where: { Nome_Curso: nome }
        });
        if (!usuario) {
            return res.status(404).json({ 
                erro: "Usuário não encontrado" 
            });
        }
        return res.status(200).json(usuario);
    } catch (erro) {
        console.error("Erro ao buscar usuário:", erro);
        return res.status(500).json({ 
            erro: "Erro ao buscar usuário" 
        });
    }
}

const criar = async (req, res) => {
    const { Nome_Curso, periodo } = req.body;

    try {
        const novo_usuario = await prisma.usuario.create({
            data: {
                Nome_Curso: Nome_Curso,
                periodo: periodo
            }
        });
        return res.status(201).json(novo_usuario);
    } catch (erro) {
        console.error("Erro ao criar usuário:", erro);
        return res.status(500).json({ 
            erro: "Erro ao criar usuário"
        });
    }
}

const deletar = async (req, res) => {
    const { id } = req.params;

    try {
        const excluido = await prisma.usuario.delete({
            where: { id: Number(id) }
        });
        return res.status(200).json(excluido);
    } catch (erro) {
        console.error("Erro ao deletar usuário:", erro);
        return res.status(500).json({
            erro: "Erro ao deletar usuário"
        });
    }
}
module.exports = {
    listar,
    listar_por_nome,
    criar,
    deletar
};