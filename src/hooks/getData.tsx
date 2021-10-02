
export async function getArquivos(token_user) {
  let url = `http://localhost:8080/users/${token_user}`;
  try {
      let res = await fetch(url)
      const data =  await res.json();
      return data
  } catch (error) {
      console.log(error);
  }
}

export async function getProjects() {
  let url = `http://localhost:8080/users`;
  try {
    let jwt_token = localStorage.getItem('jwt_token')
    let res = await fetch(url,{ 
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${jwt_token}`,
      }
    })
    const data =  await res.json();
    return data
  } catch (error) {
      console.log(error);
  }
}