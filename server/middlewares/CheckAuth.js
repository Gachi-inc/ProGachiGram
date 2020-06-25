//Нужно сдекодить токен сначала
//Потом 
//
var verifyJWToken = require('../utils/verifyJWToken');
module.exports = (req, res, next) => {
    console.log(req.path);
    if (
        req.path === "/api/user/signin" ||
        req.path === "/api/user/signup" ||
        req.path === "/api/user/verify" ||
        req.path === "/signin" ||
        req.path === "/signup" ||
        req.path === "/news"
      ) {
        return next();
    }
console.log("ddd");
const token = "token" in req.headers ? (req.headers.token) : null;
if(token){
    console.log(token);
    verifyJWToken(token).then((user)=>{             //Декодируем вытянутый из хэдера токен и обрабатываем
        req.user = user.data._doc;                  //Возвращаем информацию
    next();
}).catch(()=>{
    res.status(403).json({
        message:"Получен не действительный аутентификационный токен."
    })
});
}}