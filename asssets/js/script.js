let userNameInput = document.querySelector('.username');
let passwordInput = document.querySelector('.password');
let showPasswordButton = document.querySelector('.password-button');
let face = document.querySelector('.face')

passwordInput.addEventListener('focus', function(event){
    document.querySelectorAll('.hand').forEach(hand => {
        hand.classList.add('hide');
    });
    document.querySelector('.tongue').classList.remove('breath');
});

passwordInput.addEventListener('blur', function(event){
    document.querySelectorAll('.hand').forEach(hand => {
        hand.classList.remove('hide');
        hand.classList.remove('peek');
    });
    document.querySelector('.tongue').classList.add('breath');
});

userNameInput.addEventListener('focus', event => {
    document.querySelectorAll('.hand').forEach(hand => {
        hand.classList.remove('hide'); 
        hand.classList.remove('peek'); 
    })
    let length = userNameInput.value.length;
    let faceDeg =  Math.min(length - 16 , 19);
    face.style.setProperty('--rotate-head',`${-faceDeg}deg`);
});
userNameInput.addEventListener('blur', event => {
    face.style.setProperty('--rotate-head','0deg');
    document.querySelectorAll('.hand').forEach(hand => {
        hand.classList.remove('hang'); 
    })
});
userNameInput.addEventListener('input', event => {
    
    
    let length = userNameInput.value.length;
    let faceDeg =  Math.min(length - 16 , 19);
    if(length>=1 && length <15){
        document.querySelectorAll('.hand--left').forEach(hand => {
            hand.classList.add('hang'); 
        })
        document.querySelectorAll('.hand--right').forEach(hand => {
            hand.classList.remove('hang'); 
        })
    }
    else if(length>=15){
        document.querySelectorAll('.hand--right').forEach(hand => {
            hand.classList.add('hang'); 
        })
    }
    face.style.setProperty('--rotate-head',`${-faceDeg}deg`);
});

showPasswordButton.addEventListener('click', event => {
    if (passwordInput.type==='text'){
        showPasswordButton.innerHTML = 'Show';
        passwordInput.type = 'password';
        document.querySelectorAll('.hand').forEach(hand => {
            hand.classList.add('hide');
            hand.classList.remove('peek');
            hand.classList.remove('hang');
        });
    } else if (passwordInput.type==='password'){
        showPasswordButton.innerHTML = 'Hide';
        passwordInput.type = 'text';
        document.querySelectorAll('.hand').forEach(hand => {
            hand.classList.remove('hide');
            hand.classList.remove('hang');
            hand.classList.add('peek');
            
        });
    }
});