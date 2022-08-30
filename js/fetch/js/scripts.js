const url = 'https://api.github.com/users/lucianorp'
const userImage = document.getElementById("userImage")
const userName = document.getElementById("userName")
const userBio = document.getElementById("userBio")

fetch(url)
.then(result => result.json()) //converte os dados para json
//.then(data => console.log(data.name)) // exibir todos os dados
.then(data =>{
		userImage.src = data.avatar_url
    userName.innerHTML = data.name
    userBio.innerHTML = data.bio
})
.catch(error => console.error(error)) //deu erro