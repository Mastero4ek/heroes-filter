function searchObj(arr, obj) {
    return arr.filter(item => Object.keys(obj).every(key => item[key] === obj[key]));
}

function capitalize(str) {
    if (!str) return

    return str.replace(/(^|\s)\S/g, function (a) {
        return a.toUpperCase();
    });
}

export { searchObj, capitalize }