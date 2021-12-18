const links = [
    'https://about.facebook.com/meta',
    'https://about.instagram.com/',
    'https://about.instagram.com/blog/',
    'https://www.instagram.com/about/jobs/',
    'https://help.instagram.com/',
    'https://developers.facebook.com/docs/instagram',
    'https://www.instagram.com/legal/privacy/',
    'https://www.instagram.com/legal/terms/',
    'https://www.instagram.com/directory/profiles/',
    'https://www.instagram.com/directory/hashtags/',
    'https://www.instagram.com/explore/locations/',
    'https://www.instagram.com/web/lite/',
    'https://www.instagram.com/topics/beauty/',
    'https://www.instagram.com/topics/dance-and-performance/',
    'https://www.instagram.com/topics/fitness/',
    'https://www.instagram.com/topics/food-and-drink/',
    'https://www.instagram.com/topics/home-and-garden/',
    'https://www.instagram.com/topics/music/',
    'https://www.instagram.com/topics/visual-arts/'
]
const namesPtBr = ['Meta',
    'Sobre',
    'Blog',
    'Carreiras',
    'Ajuda',
    'API',
    'Privacidade',
    'Termos',
    'Principais contas',
    'Hashtags',
    'Localizações',
    'Instagram Lite',
    'Beleza',
    'Dança',
    'Fitness',
    'Comida e bebida',
    'Casa e Jardim',
    'Música',
    'Artes visuais'
]

function app(name) {
    const a = document.querySelector('a.name')
    a.innerText += ` ${name}`
    const span = document.querySelector('span.name')
    span.innerText += ` ${name}?`
}

app('pholukz')
footer()
function footer() {
    let ul = document.createElement('ul')
    gerarLi(ul)
    document.querySelector('footer').appendChild(ul)
}
function gerarLi(ul) {
    let li
    for(let i = 0; i < links.length; ++i) {
        li = document.createElement('li')
        gerarA(li, i)
        ul.appendChild(li)
    }
}
function gerarA(li,indice) {
    const a = document.createElement('a')
    a.innerText = namesPtBr[indice]
    a.href = links[indice]
    if(indice < 12){
       a.target='_blank' 
    }
    li.appendChild(a)
}


