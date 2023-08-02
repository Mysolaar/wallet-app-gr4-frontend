const getCookieToken = () => {
  const cookies = document.cookie;
  const cookie = cookies.split("=");
  const storedToken = cookie[1];

  return storedToken;
};

export default getCookieToken;
