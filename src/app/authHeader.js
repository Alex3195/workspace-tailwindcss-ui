export default function authHeader() {
  const token = sessionStorage.getItem("token");
  if (token) {
    return {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    };
  } else {
    return {};
  }
}
