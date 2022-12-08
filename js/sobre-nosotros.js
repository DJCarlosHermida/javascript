// AYAX & FETCH

let posts = []

const listContainer = document.querySelector('#posts')

const renderizarPosts = () => {
    posts.forEach((post) => {
        const newList = document.createElement('h6')
        newList.textContent = post.title
        listContainer.append(newList)
    })
}

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
        posts = data;
        renderizarPosts()
    }) 
