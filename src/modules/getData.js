function getData(url) {
    return fetch(url).then(response => response.json())
}

export { getData }