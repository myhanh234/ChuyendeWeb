const BASE_URL = "http://localhost:8080/api/";
const BASE_URLr = "http://localhost:8080/";

export function httpPost_t(url, param) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(param)
    };
    return fetch(BASE_URLr + url, requestOptions)
}
export function httpPost(url, param) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(param)
    };
    return fetch(BASE_URL + url, requestOptions)
}
export function httpGet(url, param) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },

    };
    return fetch(BASE_URLr + url, requestOptions)
}
export function httpPostwithToken(url, param) {
    param['userId'] = localStorage.getItem("user_id");
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify(param)
    };
    return fetch(BASE_URL + url, requestOptions)

}
export function httpDelete(url, param) {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(param)
    };

    return fetch(BASE_URLr + url, requestOptions)
}
