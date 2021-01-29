const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get('id')

const $userInfoContainer = document.querySelector(".user-info-container")
fetch("http://localhost:3000/users/16")
    .then(response => response.json())
    .then(user => {
        console.log(user)
        showInfo(user)
    })

function showInfo(user) {
    const $userInfo = document.createElement("div")
    $userInfo.innerHTML = `
    <h1> Hi there, human</h1>
    `
    $userInfoContainer.append($userInfo)
}