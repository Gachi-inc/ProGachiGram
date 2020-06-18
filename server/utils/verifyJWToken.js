var jwt = require("jsonwebtoken");
//Возвращает информацию о действительности ключа. Если все круто, вернет расшифрованный ключ.
//этот файл вызывается, сюда передается токен, а возвращает файл уже реузльтат/ошибку

module.exports = token =>
    new Promise((resolve, reject)=>{
        jwt.verify(token, process.env.JWT_SECRET, (arr, decodedToken) =>{
            if(err || !decodedToken){
                return reject(err)
            }
            console.log("Декодированные данные", decodedToken);
            resolve(decodedToken)
        })
    });