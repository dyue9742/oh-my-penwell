const C = 24 * 60 * 60 * 1000;

export function setCookie(name: string, value: string) {
  const date = new Date();
  date.setTime(date.getTime() + 7 * C);

  document.cookie =
    name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
}

export function getCookie(name: string) {
  const value = "; " + document.cookie;
  const parts = value.split(";" + name + "=");

  if (parts.length == 2) {
    return parts.pop()?.split(";").shift();
  }
}

export function delCookie(name: string) {
  const date = new Date();
  date.setTime(date.getTime() + -1 * C);

  document.cookie = name + "=; expires=" + date.toUTCString() + "; path=/";
}
