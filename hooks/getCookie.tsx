import Cookies from "js-cookie";
// говорящие названия
// знаю что это не хуки, а просто функции, но ладно уже
const GetCookie = (cookieName) => { 
    const data = Cookies.get(cookieName)
    return data ? JSON.parse(Cookies.get(cookieName)) : []
}
export default GetCookie;
