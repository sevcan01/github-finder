import Github from './github.js';
import UI from './ui.js';

//Class örenegi olusturma

const github = new Github();
const ui = new UI()



//HTML den gelenler

const searchInput = document.getElementById("search-input")
const searchBtn = document.getElementById("search")
const themeBtn = document.getElementById("theme-btn")
const body = document.querySelector('body')



//Olay izleyicileri


searchBtn.addEventListener('click', getInput)
searchInput.addEventListener('keypress', (e) => {
    if (e.code === 'Enter') {
        getInput();
    }
})

themeBtn.addEventListener('click', changeTheme)




//Fonksiyonlar


function getInput() {


    if (searchInput.value !== '') {
        github.getUser(searchInput.value).then((data) => {

            if (data.profile.message === 'Not Found') {

                ui.showAlert('Kullanici Bulunamadi.', 'alert-danger')
            } else {

                ui.showAlert('Kullanici basariyla bulundu', 'alert-success')
                ui.showProfile(data.profile)

                ui.showRepos(data.repos)



            }


        })

        return;

    }

    ui.showAlert('Form alani bos olamaz!', 'alert-warning')



}

function changeTheme() {
    body.classList.toggle('bg-dark')
    body.classList.toggle('text-bg-dark')

    if (body.classList.contains('bg-dark')) {
        themeBtn.innerText = 'Acik Mod'

    } else {
        themeBtn.innerText = 'Koyu Mod'
    }
}