const usuariosModel = require('../models/usuarios')
const bcrypt = require("bcryptjs");

exports.criarUsuario = (nome, email, senha, confirmar)=>{
    if(!senha===confirmar){
        throw new console.error("senhas diferentes!");
    }
    const hashed = bcrypt.hashSync(senha);
    const usuario = usuariosModel.criarUsuario({nome,email,hashed});
    return usuario;
}
exports.validarUsuario = async ({email,senha})=>{
    const usuarioCadastrado = await usuariosModel.buscarUsuario({email});
    if(!usuarioCadastrado){
        throw new Error("Acesso Negado");
    }
    const comparePassword = bcrypt.compareSync(senha, usuarioCadastrado.hashed);
    if(!comparePassword){
        throw new Error("Acesso Negado");
    }
  
    const ret = usuarioCadastrado.nome;
    return ret;
}