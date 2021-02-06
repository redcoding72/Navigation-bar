const btnCog = document.querySelector('.cog')
const mainContent = document.querySelector('.main_content')
const sidebar = document.querySelector('.sidebar')

btnCog.addEventListener('click', () => {
  btnCog.classList.toggle('cogleft')
  mainContent.classList.toggle('marginLeft')
  sidebar.classList.toggle('sidebarleft')
})
