const app = "I don't do much.";
const token = "TOKEN_HERE"  

function getRepos() {
  fetch("https://api.github.com/user/repos", {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => console.log(json));
}
