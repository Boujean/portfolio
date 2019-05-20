function flip_court() {
    $('#card_court').toggleClass('flipped');
};

function flip_qui() {
    $('#card_qui').toggleClass('flipped');
    setTimeout(3000);
};

function flip_Exp() {
    $('#card_Exp').toggleClass('flipped');
};

function flip_contact() {
    $('#card_contact').toggleClass('flipped');
};

function fade_apropos(){
    $('#front_qui').toggleClass('faded');
    $('#back_qui').toggleClass('faded')
}

function fade_exp(){
    $('#front_exp').toggleClass('faded');
    $('#back_exp').toggleClass('faded')
}

function fade_contact(){
    $('#front_contact').toggleClass('faded');
    $('#back_contact').toggleClass('faded')
}
