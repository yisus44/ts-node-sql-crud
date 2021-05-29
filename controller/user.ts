const { Request, Response } = require("express");
const Usuario = require("../models/user");
async function getUsers(req: Request, res: Response) {
  const users = await Usuario.findAll();
  res.json({
    users
    msg: "getUsers",
  });
}

async function getUser(req: Request, res: Response) {
  const { id } = req.params;
  const user = await Usuario.findByPk(id)
  if(usuario){
    res.json({user});   
  }else{
    res.status(404);
  }
 ;
}

async function postUser(req: Request, res: Response) {
  const { body } = req.body;
  try{
    const existingUser= await Usuario.findOne({
      where:{
        email:body.email
      }
    })

    if(existingUser){
      return res.status(400).json(msg:"ya existe un usuario con ese email")
    }
    const usuario =await new Usuario(body)
    await usuario.save();
    res.json({usuario});
  }catch(err){
    res.status(500).json({
      msg:"hable con el admi"
    })
  }
  
}

async function putUser(req: Requet, res: Response) {
  const { id } = req.params;
  const { body } = req;
  try{
    const user= await Usuario.findByPk(id)

    if(!user){
      return res.status(400).json(msg:"usuario inexistente")
    }
   
    await user.update(body);
    res.json({msg:"usuario actualizado"});
  }catch(err){
    res.status(500).json({
      msg:"hable con el admi"
    })
  }
}

async function deleteUser(req: Requet, res: Response) {
  const { id } = req.params;
  try{
    const user= await Usuario.findByPk(id)

    if(!user){
      return res.status(400).json(msg:"usuario inexistente")
    }
   
    await user.destroy()
    res.json({msg:"user deleted"})
    
  }catch(err){
    res.status(500).json({
      msg:"hable con el admi"
    })
  }


  res.json({id});
}

module.exports = {
  getUsers,
  getUser,
  postUser,
  putUser,
  deleteUser,
};
