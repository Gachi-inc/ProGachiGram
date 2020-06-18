//Нужно сдекодить токен сначала
//Потом 
//
var verifyJWToken = require('../utils/verifyJWToken');
module.exports = (req, res, next) => {
    if (
        req.path === "/api/user/signin" ||
        req.path === "/api/user/signup" ||
        req.path === "/api/user/verify"
      ) {
          console.log("Выходим нахер потому что один из 3 путей.")
        return next();
    }
const token = "token" in req.headers ? (req.headers.token) : null;
if(token){
verifyJWToken(token).then((user)=>{             //Декодируем вытянутый из хэдера токен и обрабатываем
    req.user = user;                            //Возвращаем информацию
    next();
}).catch((err)=>{
    res.status(403).json({
        message:"Получен не действительный аутентификационный токен."
    })
});
}}