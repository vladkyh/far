import Cookies from "js-cookie";

const RemoveCookie = (cookieName, usril) => {
    Cookies.remove(cookieName, usril)
  
}
export default RemoveCookie;
