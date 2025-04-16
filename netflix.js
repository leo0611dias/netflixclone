const validCredentials = {
    username: 'admin',
    password: 'admin123',
    specialCodes: ['LIX', 'ALLOFUS', 'AREDLAE', 'JUNGLE CRUISE']
};
const movieData = {
    'duna': {
        title: 'Duna: Parte dois',
        description: 'Paul Atreides se une a Chani e aos Fremen enquanto busca vingança contra os conspiradores que destruíram sua família. Enfrentando uma escolha entre o amor de sua vida e o destino do universo, ele deve evitar um futuro terrível que só ele pode prever.',
        year: '2024',
        duration: '2h 46min',
        genre: 'Ficção Científica, Aventura',
        rating: '8.9/10',
        videoId: 'U2Qp5pL3ovA',
        sceneDescription: '"O medo é o assassino da mente" - Treinamento com Gurney Halleck'
    },
    'jungle-cruise': {
        title: 'Jungle Cruise',
        description: 'Baseado no famoso passeio de Disneyland, o filme segue um capitão de barco e uma cientista em uma aventura pela selva em busca de uma árvore com poderes de cura lendários.',
        year: '2021',
        duration: '2h 7min',
        genre: 'Aventura, Fantasia',
        rating: '6.6/10',
        videoId: 'f_HvoipFcA8',
        sceneDescription: 'Corrida pelas corredeiras'
    },
    'batman': {
        title: 'The Batman',
        description: 'Quando um assassino visa a elite de Gotham com uma série de maquinações sádicas, um rastro de pistas crípticas leva Batman a uma investigação no submundo.',
        year: '2022',
        duration: '2h 56min',
        genre: 'Ação, Crime',
        rating: '7.9/10',
        videoId: 'mqqft2x_Aa4',
        sceneDescription: 'Perseguição de carro com o Pinguim'
    },
    'stranger-things': {
        title: 'Stranger Things',
        description: 'Um grupo de crianças se envolve em uma série de eventos sobrenaturais na pacata cidade de Hawkins.',
        year: '2016',
        duration: '4 temporadas',
        genre: 'Drama, Fantasia',
        rating: '8.7/10',
        videoId: 'yQEondeGvKo',
        sceneDescription: 'Eleven fecha o portal para o Mundo Invertido'
    },
    'breaking-bad': {
        title: 'Breaking Bad',
        description: 'O professor de química Walter White descobre que tem câncer terminal. Para garantir o futuro da família, ele começa a produzir e vender metanfetamina.',
        year: '2008',
        duration: '5 temporadas',
        genre: 'Drama, Crime',
        rating: '9.5/10',
        videoId: 'Xa8QhZPE5mU',
        sceneDescription: '"I am the one who knocks!" - Walter White'
    },
    'witcher': {
        title: 'The Witcher',
        description: 'O solitário caçador de monstros Geralt de Rívia luta para encontrar seu lugar num mundo onde as pessoas muitas vezes são mais perversas que as criaturas selvagens.',
        year: '2019',
        duration: '3 temporadas',
        genre: 'Fantasia, Ação',
        rating: '8.2/10',
        videoId: 'ndl1W4ltcmg',
        sceneDescription: 'Geralt luta contra os bandidos na taverna'
    },
    'hotd': {
        title: 'House of the Dragon',
        description: 'A história da Casa Targaryen, 200 anos antes dos eventos de Game of Thrones, quando o reinado de Targaryen estava no auge.',
        year: '2022',
        duration: '1 temporada',
        genre: 'Fantasia, Drama',
        rating: '8.5/10',
        videoId: 'DotnJ7tTA34',
        sceneDescription: 'Batalha entre dragões sobre Harrenhal'
    }
};
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if ((username === validCredentials.username && password === validCredentials.password) ||
        validCredentials.specialCodes.includes(password)) {
        document.getElementById('loginContainer').style.display = 'none';
       
        if (password === 'JUNGLE CRUISE') {
            document.getElementById('profilesContainer').style.display = 'none';
            document.getElementById('netflixContainer').style.display = 'block';
        } else {
            document.getElementById('profilesContainer').style.display = 'block';
        }
    } else {
        alert('Credenciais inválidas.');
    }
});
document.getElementById('showSignup').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'flex';
});

document.getElementById('showLogin').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'flex';
});
document.querySelectorAll('.profile').forEach(profile => {
    profile.addEventListener('click', function() {
        document.getElementById('profilesContainer').style.display = 'none';
        document.getElementById('netflixContainer').style.display = 'block';
    });
});
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
document.querySelectorAll('.slider-container').forEach(container => {
    let isDown = false;
    let startX, scrollLeft;
    container.addEventListener('mousedown', e => {
        isDown = true;
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        container.style.cursor = 'grabbing';
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.style.cursor = 'grab';
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
        container.style.cursor = 'grab';
    });

    container.addEventListener('mousemove', e => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    });
    container.addEventListener('touchstart', e => {
        isDown = true;
        startX = e.touches[0].pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('touchend', () => {
        isDown = false;
    });

    container.addEventListener('touchmove', e => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    });
});
const modal = document.getElementById('movieModal');
const modalVideo = document.getElementById('modalVideo');
const modalInfo = document.getElementById('modalInfo');
const closeModal = document.querySelector('.close-modal');
function openModal(movieId) {
    const movie = movieData[movieId];
   
    if (!movie) {
        console.error('Filme não encontrado:', movieId);
        return;
    }
  modalInfo.innerHTML = `
        <h3>${movie.title}</h3>
        <p><strong>Cena:</strong> ${movie.sceneDescription || movie.description}</p>
        <div class="modal-meta">
            <span>${movie.year}</span>
            <span>${movie.duration}</span>
            <span>${movie.genre}</span>
            <span><i class="fas fa-star"></i> ${movie.rating}</span>
        </div>
    `;
    modalVideo.innerHTML = `
        <div style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:#000;">
            <div style="text-align:center;">
                <i class="fas fa-play-circle" style="font-size:50px;color:#e50914;margin-bottom:20px;"></i>
                <p>Reproduzindo cena de ${movie.title}</p>
                <p style="font-size:12px;color:#777;">(Simulação - em produção real seria incorporado o vídeo)</p>
            </div>
        </div>
    `;
   
    modal.style.display = 'flex';
}
document.querySelectorAll('[data-movie]').forEach(item => {
    item.addEventListener('click', function() {
        const movieId = this.getAttribute('data-movie');
        openModal(movieId);
    });
});
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('show');
});
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('show');
    });
});
function validatePersonalData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    passwordError.style.display = 'none';
    confirmPasswordError.style.display = 'none';
    
    let isValid = true;
    
    if (!name) {
        alert('Por favor, insira seu nome completo.');
        isValid = false;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
        alert('Por favor, insira um email válido.');
        isValid = false;
    }
    
    if (password.length < 6) {
        passwordError.style.display = 'block';
        isValid = false;
    }
    
    if (password !== confirmPassword) {
        confirmPasswordError.style.display = 'block';
        isValid = false;
    }
    
    return isValid;
}
function validatePlanSelection() {
    const selectedPlan = document.querySelector('.plan-option.selected');
    if (!selectedPlan) {
        alert('Por favor, selecione um plano.');
        return false;
    }
    return true;
}
function validateCreditCard() {
    const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
    const cardName = document.getElementById('cardName').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    
    if (!/^\d{16}$/.test(cardNumber)) {
        alert('Por favor, insira um número de cartão válido (16 dígitos).');
        return false;
    }
    
    if (!cardName) {
        alert('Por favor, insira o nome como aparece no cartão.');
        return false;
    }
    
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
        alert('Por favor, insira uma data de validade no formato MM/AA.');
        return false;
    }
    
    if (!/^\d{3,4}$/.test(cvv)) {
        alert('Por favor, insira um CVV válido (3 ou 4 dígitos).');
        return false;
    }
    
    if (!document.getElementById('agreeTerms').checked) {
        alert('Você concorda com os Termos de Uso e Política de Privacidade?');
        return false;
    }
    
    return true;
}
document.querySelectorAll('.next-step').forEach(button => {
    button.addEventListener('click', function() {
        const currentStep = document.querySelector('.form-step.active');
        const currentStepNumber = parseInt(currentStep.dataset.step);
        const nextStepNumber = currentStepNumber + 1;
        if (currentStepNumber === 1 && !validatePersonalData()) {
            return; 
        }
        if (currentStepNumber === 2 && !validatePlanSelection()) {
            return;
        }
    document.querySelectorAll('.step').forEach(step => {
            step.classList.remove('active');
            if (parseInt(step.dataset.step) <= nextStepNumber) {
                step.classList.add('active');
            }
        });
        currentStep.classList.remove('active');
        document.querySelector(`.form-step[data-step="${nextStepNumber}"]`).class.classList.add('active');
        updateNavigationButtons(nextStepNumber);
    });
});

document.querySelectorAll('.prev-step').forEach(button => {
    button.addEventListener('click', function() {
        const currentStep = document.querySelector('.form-step.active');
        const currentStepNumber = parseInt(currentStep.dataset.step);
        const prevStepNumber = currentStepNumber - 1;
        document.querySelectorAll('.step').forEach(step => {
            step.classList.remove('active');
            if (parseInt(step.dataset.step) <= prevStepNumber) {
                step.classList.add('active');
            }
        });
        currentStep.classList.remove('active');
        document.querySelector(`.form-step[data-step="${prevStepNumber}"]`).classList.add('active');
        updateNavigationButtons(prevStepNumber);
    });
});

function updateNavigationButtons(stepNumber) {
    const prevButtons = document.querySelectorAll('.prev-step');
    const nextButtons = document.querySelectorAll('.next-step');
    
    if (stepNumber === 1) {
        prevButtons.forEach(btn => btn.disabled = true);
        nextButtons.forEach(btn => {
            btn.textContent = 'Próximo';
            btn.classList.remove('submit-btn');
        });
    } else if (stepNumber === 2) {
        prevButtons.forEach(btn => btn.disabled = false);
        nextButtons.forEach(btn => {
            btn.textContent = 'Próximo';
            btn.classList.remove('submit-btn');
        });
    } else if (stepNumber === 3) {
        prevButtons.forEach(btn => btn.disabled = false);
        nextButtons.forEach(btn => {
            btn.textContent = 'Finalizar Cadastro';
            btn.classList.add('submit-btn');
        });
    }
}
document.querySelectorAll('.plan-option').forEach(option => {
    option.addEventListener('click', function() {
        document.querySelectorAll('.plan-option').forEach(opt => opt.classList.remove('selected'));
        this.classList.add('selected');
    });
});
document.querySelectorAll('.payment-method').forEach(method => {
    method.addEventListener('click', function() {
        document.querySelectorAll('.payment-method').forEach(mtd => mtd.classList.remove('selected'));
        this.classList.add('selected');
    });
});
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!validateCreditCard()) return;
    alert('Cadastro realizado com sucesso! Vamos Redireciona-lo para a página de login...');
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'flex';
});
document.getElementById('cardNumber').addEventListener('input', function(e) {
    let value = this.value.replace(/\s/g, '');
    if (value.length > 16) value = value.substr(0, 16);
    let formatted = '';
    for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) formatted += ' ';
        formatted += value[i];
    }
    this.value = formatted;
});

document.getElementById('expiryDate').addEventListener('input', function(e) {
    let value = this.value.replace(/\D/g, '');
    if (value.length > 4) value = value.substr(0, 4);
    if (value.length > 2) {
        value = value.substr(0, 2) + '/' + value.substr(2);
    }
    this.value = value;
});

document.getElementById('cvv').addEventListener('input', function(e) {
    this.value = this.value.replace(/\D/g, '').substr(0, 4);
});
document.getElementById('signupPassword').addEventListener('input', function() {
    const password = this.value;
    const passwordError = document.getElementById('passwordError');
    
    if (password.length < 6 && password.length > 0) {
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
    }
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    
    if (password !== confirmPassword && confirmPassword.length > 0) {
        confirmPasswordError.style.display = 'block';
    } else {
        confirmPasswordError.style.display = 'none';
    }
});

document.getElementById('confirmPassword').addEventListener('input', function() {
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = this.value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    
    if (password !== confirmPassword && confirmPassword.length > 0) {
        confirmPasswordError.style.display = 'block';
    } else {
        confirmPasswordError.style.display = 'none';
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });
    }
});
