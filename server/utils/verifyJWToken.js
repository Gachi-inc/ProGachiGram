var jwt = require("jsonwebtoken");
//Возвращает информацию о действительности ключа. Если все круто, вернет расшифрованный ключ.
//этот файл вызывается, сюда передается токен, а возвращает файл уже реузльтат/ошибку

module.exports = token =>
    new Promise((resolve, reject)=>{
        //console.log("process.env.JWT_SECRET: ", process.env.JWT_SECRET);

        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) =>{
            if(err || !decodedToken){
                return reject(err)
            }
            //console.log("Декодированные данные", decodedToken);
            resolve(decodedToken)
        })
    });