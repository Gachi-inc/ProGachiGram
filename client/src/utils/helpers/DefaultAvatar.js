
const createDefaultAvatar = (user) =>{
    //const colors = ["#71dadf", "#8c7ac8", "#119b89", "#fdcc17", "#e49737"];
    const firstChar = user.fullname[0].toUpperCase();
    firstChar
    //const currentColor = colors[colorId];
    const currentColor = "#71dadf";
    return {currentColor, firstChar}
}
