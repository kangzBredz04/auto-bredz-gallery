export async function api(endpoint, method = "GET", body) {
  const response = await fetch(`http://localhost:3000${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    credentials: "include", // browser akan mengirimkan cookie dan otentikasi jika ada ke server, bahkan ketika permintaan dilakukan ke domain yang berbeda.
  });
  const data = await (method === "GET" ? response.json() : response.text());
  return data;
}
