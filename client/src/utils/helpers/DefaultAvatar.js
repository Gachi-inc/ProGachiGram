
const createDefaultAvatar = (user) =>{
    const colors = ["#71dadf", "#8c7ac8", "#119b89", "#fdcc17", "#e49737"];
    // const colorId = Math.floor(Math.random()*(5 - 0) + 0);
    // let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // let arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'э', 'ю', 'я'];
    // let arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const firstChar = user.fullname[0].toUpperCase();
    firstChar
    //const currentColor = colors[colorId];
    const currentColor = "#71dadf";
    return {currentColor, firstChar}
}


// const stringToColor = (user) =>  {
    
//     var color = '#';
//     const firstChar = user.fullname[0].toUpperCase();

//     if(!user) {
//         return color + '71dadf';
//     }

//     strLength = user.fullname.length;

//     for (i = 0; i < strLength; i++) {
//         hash = str.charCodeAt(i) + ((hash << 5) - hash);
//     }

//     for (i = 0; i < 3; i++) {
//         value = (hash >> (i * 8)) & 0xFF;
//         color += ('00' + value.toString(16)).substr(-2);
//     }

//     return color,firstChar ;
// };