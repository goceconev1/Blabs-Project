// 'use strict'


// let projects = document.getElementsByClassName('card-projects')
// let projectsId = document.getElementById('card-p')

// // console.log(projects)
// // console.log(projectsId)

// // projectsId.addEventListener('click', function () {
// //     console.log('Da')
// // })

// for (let i = 0; i < projects.length; i++) {
//     let element = projects[i];
//     console.log(element, i)


// }


let navIcon = document.getElementById('nav-icon')
let logo = document.getElementById('logo1')
let dropdownMenu = document.getElementById('navbarSupportedContent')

console.log(logo, "this is the img")
console.log(navIcon, "this is the navIcon")




navIcon.addEventListener('click', function () {


    document.body.style.backgroundColor = 'rgb(58, 57, 57)'
    document.body.innerHTML =
        ` <div class="first-container">
        <div class="container-fluid first-container-outher" style="background-color: rgb(58, 57, 57);">
            <nav class="navbar navbar-expand-lg navbar-dark nav-container" style="background-color: rgb(58, 57, 57);">
                <a class="navbar-brand" href="#" id="logo"><img class="logo" src="Logo.png" alt=""> </a>
                <button class="navbar-toggler " type="button" data-toggle="collapse"  style="border: hidden;"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="" id="nav-icon"> X</span>
                </button>

                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="my-navbar">

                        <li class="nav-item">
                            <a class="nav-link navbar-link" style="color: white;" href="#">Академија за маркетинг</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navbar-link" style="color: white;" href="#">Академија за програмиранје</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navbar-link" style="color: white;" href="#">Академија за data science</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navbar-link" style="color: white;" href="#">Академија за Маркетинг </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link hire-student " href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-expanded="false">
                                Вработи наш студент
                            </a>

                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    </div>`



})

// This below is finished

let marketingId = document.getElementById('marketingId')
let programingId = document.getElementById('programingId')
let designId = document.getElementById('designId')

let projectsContainer = document.getElementById('projects-container')

marketingId.addEventListener('click', function () {
    projectsContainer.innerHTML = `
    <div class="container fourth-container">
    <h1 class="projects">Проекти</h1>
    <div class="card-deck  row-cols-lg-3 ">
        <div class="card card-shadow card-projects card-animate">
            <img src="pictures/marketing1.png" class="card-img-top img-radius" alt="...">
            <div class="card-body">
                <p class="yellow-tittle media-text">Академија за маркетинг</p>
                <h4 class="media-text">Име на проектот стои овде во две линии</h4>
                <p class="card-text media-text">Краток опис во кој студентите ќе можат да се опишат за што се
                    работи во
                    проектот.</p>
                <p class="card-text media-text"><small class="text-muted"><b>Април-Октомври 2019</b></small></p>
                <button class="card-button button-hover media-text">Дознај повеќе</button>
            </div>
        </div>
        <div class="card card-shadow card-projects card-animate">
            <img src="pictures/marketing2.png" class="card-img-top img-radius" alt="...">
            <div class="card-body">
                <p class="yellow-tittle media-text">Академија за маркетинг</p>
                <h4 class="media-text">Име на проектот стои овде во две линии</h4>
                <p class="card-text media-text">Краток опис во кој студентите ќе можат да се опишат за што се
                    работи во
                    проектот.</p>
                <p class="card-text media-text"><small class="text-muted"><b>Април-Октомври 2019</b></small></p>
                <button class="card-button button-hover media-text">Дознај повеќе</button>
            </div>
        </div>
        <div class="card card-shadow card-projects card-animate">
            <img src="pictures/marketing3.png" class="card-img-top img-radius" alt="...">
            <div class="card-body">
                <p class="yellow-tittle media-text">Академија за маркетинг</p>
                <h4 class="media-text">Име на проектот стои овде во две линии</h4>
                <p class="card-text media-text">Краток опис во кој студентите ќе можат да се опишат за што се
                    работи во
                    проектот.</p>
                <p class="card-text media-text"><small class="text-muted "><b>Април-Октомври 2019</b></small>
                </p>
                <button class="card-button button-hover media-text">Дознај повеќе</button>
            </div>
        </div>
    </div>
</div>

<!-- </div> -->

<!-- <div class="container-fluid fourth"> -->
<div class="container fift-container">
    <div class="card-deck">
        <div class="card card-shadow card-projects card-animate">
            <img src="pictures/marketing1.png" class="card-img-top img-radius" alt="...">
            <div class="card-body">
                <p class="yellow-tittle media-text">Академија за маркетинг</p>
                <h4 class="media-text">Име на проектот стои овде во две линии</h4>
                <p class="card-text media-text">Краток опис во кој студентите ќе можат да се опишат за што се
                    работи во
                    проектот.</p>
                <p class="card-text media-text"><small class="text-muted"><b>Април-Октомври 2019</b></small></p>
                <button class="card-button button-hover media-text">Дознај повеќе</button>
            </div>
        </div>
        <div class="card card-shadow card-projects card-animate">
            <img src="pictures/marketing2.png" class="card-img-top img-radius" alt="...">
            <div class="card-body">
                <p class="yellow-tittle media-text">Академија за маркетинг</p>
                <h4 class="media-text">Име на проектот стои овде во две линии</h4>
                <p class="card-text media-text">Краток опис во кој студентите ќе можат да се опишат за што се
                    работи во
                    проектот.</p>
                <p class="card-text media-text"><small class="text-muted"><b>Април-Октомври 2019</b></small></p>
                <button class="card-button button-hover media-text">Дознај повеќе</button>
            </div>
        </div>
        <div class="card card-shadow card-projects card-animate" id="card-p">
            <img src="pictures/marketing3.png" class="card-img-top img-radius" alt="...">
            <div class="card-body">
                <p class="yellow-tittle media-text">Академија за маркетинг</p>
                <h4 class="media-text">Име на проектот стои овде во две линии</h4>
                <p class="card-text media-text">Краток опис во кој студентите ќе можат да се опишат за што се
                    работи во
                    проектот.</p>
                <p class="card-text media-text"><small class="text-muted"><b>Април-Октомври 2019</b></small></p>
                <button class="card-button button-hover media-text">Дознај повеќе</button>
            </div>
        </div>

    </div>
</div>`
})

programingId.addEventListener('click', function () {
    projectsContainer.innerHTML = `
    <div class="container fift-container">
    <h1 class="projects">Проекти</h1>
    <div class="card-deck">
        <div class="card card-shadow card-projects card-animate">
            <img src="pictures/programing1.png" class="card-img-top img-radius" alt="...">
            <div class="card-body">
                <p class="yellow-tittle-programing media-text">Академија за програмиранје</p>
                <h4 class="media-text">Име на проектот стои овде во две линии</h4>
                <p class="card-text media-text">Краток опис во кој студентите ќе можат да се опишат за што се
                    работи во
                    проектот.</p>
                <p class="card-text media-text"><small class="text-muted"><b>Април-Октомври 2019</b></small></p>
                <button class="card-button button-hover media-text">Дознај повеќе</button>
            </div>
        </div>
        <div class="card card-shadow card-projects card-animate">
            <img src="pictures/programing2.png" class="card-img-top img-radius" alt="...">
            <div class="card-body">
                <p class="yellow-tittle-programing media-text">Академија за програмиранје</p>
                <h4 class="media-text">Име на проектот стои овде во две линии</h4>
                <p class="card-text media-text">Краток опис во кој студентите ќе можат да се опишат за што се
                    работи во
                    проектот.</p>
                <p class="card-text media-text"><small class="text-muted"><b>Април-Октомври 2019</b></small></p>
                <button class="card-button button-hover media-text">Дознај повеќе</button>
            </div>
        </div>
        <div class="card card-shadow card-projects card-animate" id="card-p">
            <img src="pictures/programing3.png" class="card-img-top img-radius" alt="...">
            <div class="card-body">
                <p class="yellow-tittle-programing media-text">Академија за програмиранје</p>
                <h4 class="media-text">Име на проектот стои овде во две линии</h4>
                <p class="card-text media-text">Краток опис во кој студентите ќе можат да се опишат за што се
                    работи во
                    проектот.</p>
                <p class="card-text media-text"><small class="text-muted"><b>Април-Октомври 2019</b></small></p>
                <button class="card-button button-hover media-text">Дознај повеќе</button>
            </div>
        </div>

    </div>
</div>

<!-- </div> -->

<!-- <div class="container-fluid fourth"> -->
<div class="container fift-container">
    <div class="card-deck">
        <div class="card card-shadow card-projects card-animate">
            <img src="pictures/programing3.png" class="card-img-top img-radius" alt="...">
            <div class="card-body">
                <p class="yellow-tittle-programing media-text">Академија за програмиранје</p>
                <h4 class="media-text">Име на проектот стои овде во две линии</h4>
                <p class="card-text media-text">Краток опис во кој студентите ќе можат да се опишат за што се
                    работи во
                    проектот.</p>
                <p class="card-text media-text"><small class="text-muted"><b>Април-Октомври 2019</b></small></p>
                <button class="card-button button-hover media-text">Дознај повеќе</button>
            </div>
        </div>
        <div class="card card-shadow card-projects card-animate">
            <img src="pictures/programing2.png" class="card-img-top img-radius" alt="...">
            <div class="card-body">
                <p class="yellow-tittle-programing media-text">Академија за програмиранје</p>
                <h4 class="media-text">Име на проектот стои овде во две линии</h4>
                <p class="card-text media-text">Краток опис во кој студентите ќе можат да се опишат за што се
                    работи во
                    проектот.</p>
                <p class="card-text media-text"><small class="text-muted"><b>Април-Октомври 2019</b></small></p>
                <button class="card-button button-hover media-text">Дознај повеќе</button>
            </div>
        </div>
        <div class="card card-shadow card-projects card-animate" id="card-p">
            <img src="pictures/programing1.png" class="card-img-top img-radius" alt="...">
            <div class="card-body">
                <p class="yellow-tittle-programing media-text">Академија за програмиранје</p>
                <h4 class="media-text">Име на проектот стои овде во две линии</h4>
                <p class="card-text media-text">Краток опис во кој студентите ќе можат да се опишат за што се
                    работи во
                    проектот.</p>
                <p class="card-text media-text"><small class="text-muted"><b>Април-Октомври 2019</b></small></p>
                <button class="card-button button-hover media-text">Дознај повеќе</button>
            </div>
        </div>

    </div>
</div>`
})

designId.addEventListener('click', function () {
    projectsContainer.innerHTML = `
    <div class="container fift-container">
    <h1 class="projects">Проекти</h1>
    <div class="card-deck ">
        <div class="card card-shadow card-projects card-animate">
            <img src="pictures/design1.png" class="card-img-top img-radius" alt="...">
            <div class="card-body">
                <p class="yellow-tittle-design media-text">Академија за дизајн</p>
                <h4 class="media-text">Име на проектот стои овде во две линии</h4>
                <p class="card-text media-text">Краток опис во кој студентите ќе можат да се опишат за што се
                    работи во
                    проектот.</p>
                <p class="card-text media-text"><small class="text-muted"><b>Април-Октомври 2019</b></small></p>
                <button class="card-button button-hover media-text">Дознај повеќе</button>
            </div>
        </div>
        <div class="card card-shadow card-projects card-animate">
            <img src="pictures/design2.png" class="card-img-top img-radius" alt="...">
            <div class="card-body">
                <p class="yellow-tittle-design media-text">Академија за дизајн</p>
                <h4 class="media-text">Име на проектот стои овде во две линии</h4>
                <p class="card-text media-text">Краток опис во кој студентите ќе можат да се опишат за што се
                    работи во
                    проектот.</p>
                <p class="card-text media-text"><small class="text-muted"><b>Април-Октомври 2019</b></small></p>
                <button class="card-button button-hover media-text">Дознај повеќе</button>
            </div>
        </div>
        <div class="card card-shadow card-projects card-animate" id="card-p">
            <img src="pictures/design3.png" class="card-img-top img-radius" alt="...">
            <div class="card-body">
                <p class="yellow-tittle-design media-text">Академија за дизајн</p>
                <h4 class="media-text">Име на проектот стои овде во две линии</h4>
                <p class="card-text media-text">Краток опис во кој студентите ќе можат да се опишат за што се
                    работи во
                    проектот.</p>
                <p class="card-text media-text"><small class="text-muted"><b>Април-Октомври 2019</b></small></p>
                <button class="card-button button-hover media-text">Дознај повеќе</button>
            </div>
        </div>

    </div>
</div>

<!-- </div> -->

<!-- <div class="container-fluid fourth"> -->
<div class="container fift-container">
    <div class="card-deck">
        <div class="card card-shadow card-projects card-animate">
            <img src="pictures/design3.png" class="card-img-top img-radius" alt="...">
            <div class="card-body">
                <p class="yellow-tittle-design media-text">Академија за дизајн</p>
                <h4 class="media-text">Име на проектот стои овде во две линии</h4>
                <p class="card-text media-text">Краток опис во кој студентите ќе можат да се опишат за што се
                    работи во
                    проектот.</p>
                <p class="card-text media-text"><small class="text-muted"><b>Април-Октомври 2019</b></small></p>
                <button class="card-button button-hover media-text">Дознај повеќе</button>
            </div>
        </div>
        <div class="card card-shadow card-projects card-animate">
            <img src="pictures/design2.png" class="card-img-top img-radius" alt="...">
            <div class="card-body">
                <p class="yellow-tittle-design media-text">Академија за дизајн</p>
                <h4 class="media-text">Име на проектот стои овде во две линии</h4>
                <p class="card-text media-text">Краток опис во кој студентите ќе можат да се опишат за што се
                    работи во
                    проектот.</p>
                <p class="card-text media-text"><small class="text-muted"><b>Април-Октомври 2019</b></small></p>
                <button class="card-button button-hover media-text">Дознај повеќе</button>
            </div>
        </div>
        <div class="card card-shadow card-projects card-animate" id="card-p">
            <img src="pictures/design1.png" class="card-img-top img-radius" alt="...">
            <div class="card-body">
                <p class="yellow-tittle-design media-text">Академија за дизајн</p>
                <h4 class="media-text">Име на проектот стои овде во две линии</h4>
                <p class="card-text media-text">Краток опис во кој студентите ќе можат да се опишат за што се
                    работи во
                    проектот.</p>
                <p class="card-text media-text"><small class="text-muted"><b>Април-Октомври 2019</b></small></p>
                <button class="card-button button-hover media-text">Дознај повеќе</button>
            </div>
        </div>

    </div>
</div>`
})