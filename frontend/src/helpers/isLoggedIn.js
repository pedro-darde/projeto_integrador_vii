export default function isLoggedIn() {
  const token = localStorage.token;
  return !!token;
}
