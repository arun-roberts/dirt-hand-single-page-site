const welcomeButton = document.getElementById('welcome')
const whoButton = document.getElementById('who')
const whatButton = document.getElementById('what')
const whenButton = document.getElementById('when')
const readButton = document.getElementById('read')
const listenButton = document.getElementById('listen')
const watchButton = document.getElementById('watch')

const welcomeDisplay = document.querySelector('.welcome')
const whoDisplay = document.querySelector('.who')
const chooseDisplay = document.querySelector('.choose')
const chooseText = document.getElementsByClassName('choose-menu__button')
const whatDisplay = document.querySelector('.what')
const readDisplay = document.querySelector('.what-read')
const listenDisplay = document.querySelector('.what-listen')
const watchDisplay = document.querySelector('.what-watch')
const whenDisplay = document.querySelector('.when')
const moveMenu = true
const players = [
  {
    class: "what-listen__bandcamp", 
    src: "https://bandcamp.com/EmbeddedPlayer/album=2569292405/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/transparent=true/", 
    href: "https://dirthand.bandcamp.com/album/live-in-castlemaine", 
    text: "Live in Castlemaine by Dirt Hand"
  },
  {
    class: "what-listen__bandcamp", 
    src: "https://bandcamp.com/EmbeddedPlayer/album=654295986/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/transparent=true/", 
    href: "https://dirthand.bandcamp.com/album/the-thorn-variations", 
    text: "The Thorn Variations by Dirt Hand"
  },
  {
    class: "what-listen__bandcamp", 
    src: "https://bandcamp.com/EmbeddedPlayer/album=704923827/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/transparent=true/", 
    href: "https://dirthand.bandcamp.com/album/the-dirt-hand-ep", 
    text: "The Dirt Hand EP by Dirt Hand"
  },
]
const movies = [
  {
    class: "what-watch__youtube", 
    width: "800",
    height: "450",
    src: "https://www.youtube.com/embed/47nseb2d0C0", 
    frameborder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen",
  }
]
const showPage = page => {
  page.style.opacity = 1
  page.style.zIndex = 0
  page.style.display = "flex"
}
const hidePage = page => {
  page.style.opacity = 0
  page.style.zIndex = -1
  page.style.display = "none"
}
welcomeButton.addEventListener("click", () => {
  hidePage(welcomeDisplay)
  document.querySelector('.nav').style.display = "flex"
})

whoButton.addEventListener("click", () => {
  hidePage(chooseDisplay)
  hidePage(whenDisplay)
  hidePage(whatDisplay)
  showPage(whoDisplay)
})
whatButton.addEventListener("click", () => {
  hidePage(whoDisplay)
  hidePage(whenDisplay)
  showPage(whatDisplay)
  chooseDisplay.style.display = "flex"
  chooseDisplay.style.opacity = 1
  chooseDisplay.style.zIndex = 1
})
whenButton.addEventListener("click", () => {
  hidePage(whoDisplay)
  hidePage(chooseDisplay)
  showPage(whenDisplay)
  hidePage(whatDisplay)
})
readButton.addEventListener("click", () => {
  hidePage(chooseDisplay)
  hidePage(listenDisplay)
  hidePage(watchDisplay)
  showPage(readDisplay)
  whatDisplay.style.display = "flex"
  readDisplay.style.display = "flex"
})
listenButton.addEventListener("click", () => {
  hidePage(chooseDisplay)
  hidePage(readDisplay)
  hidePage(watchDisplay)
  showPage(listenDisplay)
})
watchButton.addEventListener("click", () => {
  hidePage(chooseDisplay)
  hidePage(readDisplay)
  hidePage(listenDisplay)
  showPage(watchDisplay)
})

players.forEach(e => {
  let iFrame = document.createElement("IFRAME")
  let aTag = document.createElement("A")
  iFrame.classList = e.class
  iFrame.src = e.src
  aTag.href = e.href
  aTag.innerText = e.text
  iFrame.appendChild(aTag)
  listenDisplay.appendChild(iFrame)
})
movies.forEach(e => {
  let iFrame = document.createElement("IFRAME")
  iFrame.classList = e.class
  iFrame.width = e.width
  iFrame.height = e.height
  iFrame.src = e.src
  iFrame.frameborder = e.frameborder
  iFrame.allow = e.allow
  watchDisplay.appendChild(iFrame)
})

