
const createDefaultAvatar = (user) =>{
    const colors = ["#71dadf", "#8c7ac8", "#119b89", "#fdcc17", "#e49737"];
    const colorId = Math.floor(Math.random()*(5 - 0) + 0);
    const firstChar = user.fullname[0].toUpperCase();
    const currentColor = colors[colorId];
    return {currentColor, firstChar}
}
