const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email_adress');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm_password');
const form = document.querySelector('#signup');

const clear_form = document.querySelector('#clearForm');

const isEmpty = value => value === '' ? false : true;
const isInRange = (longueur, min, max) => longueur < min || longueur > max ? false : true;

const checkUsername = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const username = usernameEl.value.trim();

    if (!isEmpty(username)) {
        showError(usernameEl, 'Username cannot be blank.');
    } else if (!isInRange(username.length, min, max)) {
        showError(usernameEl, 'Username must be between 3 and 25 characters.');
    } else {
        showSuccess(usernameEl);
        valid = true;
    }
    return valid;
};


const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isEmpty(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;


    const password = passwordEl.value.trim();

    if (!isEmpty(password)) {
        showError(passwordEl, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character,1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
    // check confirm password
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (!isEmpty(confirmPassword)) {
        showError(confirmPasswordEl, 'Please enter the password again');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'The password does not match');
    } else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }

    return valid;
};

const isEmailValid = (email) => {
    const re = /^([\.a-zA-Z0-9])+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const showError = (input, message) => {
    // get the form-outline element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


if(form){
    form.addEventListener('submit', function (e) {
        // prevent the form from submitting
        e.preventDefault();
    
        // validate fields
        let isUsernameValid = checkUsername(),
            isEmailValid = checkEmail(),
            isPasswordValid = checkPassword(),
            isConfirmPasswordValid = checkConfirmPassword();
    
        let isFormValid = isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid;
    
        // submit to the server if the form is valid
        if (isFormValid) {
            window.location = 'index.html';
        }
    });
}


let courses_list = [
    {
        title : '20 Projets en JavaScript',
        image : './assets/images/courses/js.jpeg',
        tag : ["js"],
        link : 'https://www.udemy.com/course/20-projets-en-javascript/',
        price : 84
    },{
        title : 'JavaScript : la formation ULTIME',
        image : './assets/images/courses/js2.jpeg',
        tag : ["js"],
        link : 'https://www.udemy.com/course/javascript-la-formation-ultime/',
        price : 15
    },{
        title : 'Algorithmique JavaScript avancé : créer 3 jeux web avec IA',
        image : './assets/images/courses/js3.jpeg',
        tag : ["js"],
        link : 'https://www.udemy.com/course/7-h2prog-en-javascript-natif-pour-faire-3-jeux-et-leur-ia/',
        price : 25
    },{
        title : 'Formation Complète Développeur Web',
        image : './assets/images/courses/html.jpeg',
        tag : ["css", "html", "web"],
        link : 'https://www.udemy.com/course/formation-developpeur-web/',
        price : 9.99
    },{
        title : 'HTML en partant de zéro',
        image : './assets/images/courses/html2.jpeg',
        tag : ["html"],
        link : 'https://www.udemy.com/course/html-le-cours-complet/',
        price : 15
    },{
        title : 'HTML5 Canvas Ultimate Guide',
        image : './assets/images/courses/html3.jpeg',
        tag : ["html"],
        link : 'https://www.udemy.com/course/html5-canvas-ultimate-guide/',
        price : 30
    },{
        title : 'CSS3 Animations, Transforms and Transitions Ultimate Guide',
        image : './assets/images/courses/css.jpeg',
        tag : ["css"],
        link : 'https://www.udemy.com/course/css3-animations-transforms-and-transitions-ultimate-guide/',
        price : 10
    },{
        title : 'Advanced CSS and Sass: Flexbox, Grid, Animations and More!',
        image : './assets/images/courses/css2.jpeg',
        tag : ["css"],
        link : 'https://www.udemy.com/course/advanced-css-and-sass/',
        price : 17.95
    },{
        title : 'Creative Advanced CSS Animations - Create 100 Projects!',
        image : './assets/images/courses/css3.jpeg',
        tag : ["css"],
        link : 'https://www.udemy.com/course/css-animation-transitions-and-transforms-creativity-course/',
        price : 10
    }
    ,{
        title : 'Formation complète développeur Front-End',
        image : './assets/images/courses/web.jpeg',
        tag : ["html", "css", "js"],
        link : 'https://www.udemy.com/course/formation-complete-developpeur-front-end/',
        price : 19
    },{
        title : 'Formation Complète Développeur Web',
        image : './assets/images/courses/web2.jpeg',
        tag : ["html", "css", "js", "web"],
        link : 'https://www.udemy.com/course/formation-complete-developpeur-web/',
        price : 9.99
    },{
        title : 'The Complete 2023 Web Development Bootcamp',
        image : './assets/images/courses/web3.jpeg',
        tag : ["html", "css", "js", "web"],
        link : 'https://www.udemy.com/course/the-complete-web-development-bootcamp/',
        price : 15
    },
];

const featured_courses_list =  (arr, start, chunkSize) => {
    const res = [];
    const featured = arr.slice(start, start + chunkSize);
    res.push(featured);
    return res;
}

window.addEventListener("DOMContentLoaded", (event) => {
    if(document.querySelectorAll('.featured-courses').length){
        let start_index = 0;
        setInterval(() => {
            if(start_index>=courses_list.length)
                start_index = 0;
            let portion = featured_courses_list(courses_list, start_index, 3);
            AddCoursesItems('.featured-courses', portion);
            start_index = start_index+3;
        }, 3000);
    }
    if(document.querySelectorAll('.list-courses').length){
        AddCoursesItems('.list-courses', courses_list);
    }

});

function AddCoursesItems(wrapper, items){
    let courses = items.map(function (item, index) {
        if(Array.isArray(item)){
            return item.map(function (course, index2){
                return `<article class="col-md-4 course-item">
                    <a href="${course.link}" target="_blank">
                        <img src=${course.image} alt=${course.title} class="img-fluid course-image rounded" />
                    </a>
                    <p class="course-title fw-light text-black">
                        <a href="${course.link}" target="_blank">${course.title}</a>
                    </p>
                    <span class='course-price fw-semibold text-warning'>$${course.price}</span>
                </article>`;
            }).join("");
        }else{
            return `<article class="col-md-4 course-item">
                    <a href="${item.link}" target="_blank">
                        <img src=${item.image} alt=${item.title} class="img-fluid course-image rounded" />
                    </a>
                    <p class="course-title fw-light text-black">
                        <a href="${item.link}" target="_blank">${item.title}</a>
                    </p>
                    <span class='course-price fw-semibold text-warning'>$${item.price}</span>
                </article>`;
        }
    }).join("");
    document.querySelector(wrapper).innerHTML = courses;
};

const search_filter = document.querySelector('#search_term');
search_filter.addEventListener("keyup", (event) => {
    let search_terms = search_filter.value.toLowerCase().trim();
    const courses_items = document.querySelectorAll('.course-item');
    if(search_terms !== ''){
        console.log(search_terms);
        courses_items.forEach((item) => {
            if(item.textContent.toLowerCase().includes(search_terms)){
                item.classList.remove('d-none');
            }else{
                item.classList.add('d-none');
            }
        });
    }else{
        courses_items.forEach((item) => {
            item.classList.remove('d-none');
        });
    }
});

const filter_selector = document.querySelectorAll('.category-filter');
filter_selector.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        let filter = e.target.dataset.filter;
        document.querySelector('.list-courses').innerHTML = '';
        if(filter === 'all'){
            AddCoursesItems('.list-courses', courses_list);
        }else{
            let portion = searchByTag(courses_list, filter);
            AddCoursesItems('.list-courses', portion);
        }
    });
});

function searchByTag(tableau, filtre){
    let resultset = [];
    tableau.forEach( (item) => {
        if(item.tag.includes(filtre)){
            resultset.push(item);
        }
    });
    return resultset;
}