import jwt from 'jsonwebtoken'

export const generarJWT = (uid = '')=>{
return new Promise((resolve,reject)=>{

    const payload ={uid};

    jwt.sign(payload,process.env.SECRETORPRIVATEKEY,{
        expiresIn:'4h'
    },(err,token)=>{
        if(err){
            console.log(err)
            reject('no se genero el token')
        }else{
            resolve(token)
        }
    });


})
}