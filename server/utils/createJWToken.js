var jwt = require("jsonwebtoken");
const {reduce} = require("lodash");

function createJWToken(user) {
  const token = jwt.sign(
    { 
      data: reduce(                   //Кароче функция бегает по user, смотрит на все параметры(key) объекта
        user,                         //Далее в 11 строке идет проверка ключа, который мы смотрим в объекте, если key не password, мы добавляем
        (result, value, key) => {     //Мы добавляем значение этого key-параметра и так пока не пройдем по всему объекту и не добавим всю информацию
          if (key !== "password") {
            result[key] = value;      //Кароче data будет тем же объектом, только без поля password.
          }
          return result;
        },
        {}
      ),
    },
    process.env.JWT_SECRET || "",
    {
      expiresIn: process.env.JWT_MAX_AGE,
      algorithm: "HS256",
    }
  );
  return token;
}


module.exports = {
  createJWToken
}