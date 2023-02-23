// COMMAND IF EDITING IN BROWSER
//$('body').hide();
//$('html').hide();


window.addEventListener('message', function(event) {
    if (event.data.type == "OPEN_ARCADE") {
        $('html').show();
        $('body').show();
    } 
})


window.addEventListener('load', (event) => {
    document.getElementById('arcade-main-panel').innerHTML = '<!-- NABAR -->    <center><p id="avaible-fights-text">Dostępne Walki</p>    <button id="button-create-team" onclick="cleanInfoForCreating()">Stwórz nową walkę</button><!-- NABAR -->    <div class="party-box-info-box-helper">    <div class="party-box-informations">        <p id="tryb-text">Tryb:</p>        <p id="tryb-text-var">2v2</p>        <p id="gun-text">Broń:</p>        <p id="gun-text-var">Muszkiet</p>        <p id="round-text">Ilość Rund:</p>        <p id="round-text-var">3 rundy</p>        <p id="stawka-text">Stawka:</p>        <p id="stawka-text-var">$100</p>        <div class="team-color-dot-informations-blue"></div>        <p id="name-surname-info-box">Gv5v</p>        <button id="button-join-team">Dołącz</button></div><div class="party-box-informations">    <p id="tryb-text">Tryb:</p>    <p id="tryb-text-var">3v3</p>    <p id="gun-text">Broń:</p>    <p id="gun-text-var">Atomizer</p>    <p id="round-text">Ilość Rund:</p>    <p id="round-text-var">3 rundy</p>    <p id="stawka-text">Stawka:</p>    <p id="stawka-text-var">$100</p>    <div class="team-color-dot-informations-blue"></div>    <p id="name-surname-info-box">Gv5v</p>    <div class="team-color-dot-informations-pink"></div>    <p id="name-surname-info-box">Gv5v</p>    <button id="button-join-team">Dołącz</button></div></div> <!-- party-box-info-box-helper -->    </center>            '
});


let  mode = "1v1"
let stawka = "$100"
let gun = "Muszkiet"
let rundy = "1 runda"




//Hard Code

function musketgunboxchooseclicked() {
    gun = "Muszkiet"
    $('.musket-gun-box-choose').css('background-color', '#e505cf');
    $('.railgun-gun-box-choose').css('background-color', 'transparent');
    $('.hellbringer-gun-box-choose').css('background-color', 'transparent');
    $('.atomizer-gun-box-choose').css('background-color', 'transparent');
    $('.rewolwer-gun-box-choose').css('background-color', 'transparent');
}



function railgunboxchooseclicked() {
    gun = "Railgun"
    $('.railgun-gun-box-choose').css('background-color', '#e505cf');
    $('.musket-gun-box-choose').css('background-color', 'transparent');
    $('.hellbringer-gun-box-choose').css('background-color', 'transparent');
    $('.atomizer-gun-box-choose').css('background-color', 'transparent');
    $('.rewolwer-gun-box-choose').css('background-color', 'transparent');
}





function rewolwergunboxchooseclicked()  {
    gun = "Rewolwer"
    $('.railgun-gun-box-choose').css('background-color', 'transparent');
    $('.musket-gun-box-choose').css('background-color', 'transparent');
    $('.hellbringer-gun-box-choose').css('background-color', 'transparent');
    $('.atomizer-gun-box-choose').css('background-color', 'transparent');
    $('.rewolwer-gun-box-choose').css('background-color', '#e505cf');
}




function hellbringergunboxchooseclicked()  {
    gun = "Hellbringer"
    $('.railgun-gun-box-choose').css('background-color', 'transparent');
    $('.musket-gun-box-choose').css('background-color', 'transparent');
    $('.hellbringer-gun-box-choose').css('background-color', '#e505cf');
    $('.atomizer-gun-box-choose').css('background-color', 'transparent');
    $('.rewolwer-gun-box-choose').css('background-color', 'transparent');
}






function atomizergunboxchooseclicked() {
    gun = "Atomizer"
    $('.railgun-gun-box-choose').css('background-color', 'transparent');
    $('.musket-gun-box-choose').css('background-color', 'transparent');
    $('.hellbringer-gun-box-choose').css('background-color', 'transparent');
    $('.atomizer-gun-box-choose').css('background-color', '#e505cf');
    $('.rewolwer-gun-box-choose').css('background-color', 'transparent');
}






function versus1v1infoboxclick() {
    mode = "1v1"
    $('.versus1v1-info-box').css('background-color', '#e505cf');
    $('.versus2v2-info-box').css('background-color', 'transparent');
    $('.versus3v3-info-box').css('background-color', 'transparent');
    $('.versus6v6-info-box').css('background-color', 'transparent');
}



function versus2v2infoboxclick() {
    mode = "2v2"
    $('.versus1v1-info-box').css('background-color', 'transparent');
    $('.versus2v2-info-box').css('background-color', '#e505cf');
    $('.versus3v3-info-box').css('background-color', 'transparent');
    $('.versus6v6-info-box').css('background-color', 'transparent');
}


function versus3v3infoboxclick() {
    mode = "3v3"
    $('.versus1v1-info-box').css('background-color', 'transparent');
    $('.versus2v2-info-box').css('background-color', 'transparent');
    $('.versus3v3-info-box').css('background-color', '#e505cf');
    $('.versus6v6-info-box').css('background-color', 'transparent');
}


function versus6v6infoboxclick() {
    mode = "6v6"
    $('.versus1v1-info-box').css('background-color', 'transparent');
    $('.versus2v2-info-box').css('background-color', 'transparent');
    $('.versus3v3-info-box').css('background-color', 'transparent');
    $('.versus6v6-info-box').css('background-color', '#e505cf');
}



function runda100boxclicked() {
    rundy = "1 runda"
    $('.runda-1000-box').css('background-color', '#e505cf');
    $('.runda-2000-box').css('background-color', 'transparent');
    $('.runda-5000-box').css('background-color', 'transparent');
}

function runda200boxclicked() {
    rundy = "3 rundy"
    $('.runda-1000-box').css('background-color', 'transparent');
    $('.runda-2000-box').css('background-color', '#e505cf');
    $('.runda-5000-box').css('background-color', 'transparent');
}


function runda500boxclicked() {
    rundy = "5 rund"
    $('.runda-1000-box').css('background-color', 'transparent');
    $('.runda-2000-box').css('background-color', 'transparent');
    $('.runda-5000-box').css('background-color', '#e505cf');
}



function stawka100boxclicked() {
    stawka = "$100"
    $('.stawka-100-box').css('background-color', '#e505cf');
    $('.stawka-250-box').css('background-color', 'transparent');
    $('.stawka-500-box').css('background-color', 'transparent');
    $('.stawka-1000-box').css('background-color', 'transparent');
    $('.stawka-2000-box').css('background-color', 'transparent');
    $('.stawka-5000-box').css('background-color', 'transparent');
}



function stawka250boxclicked() {
    stawka = "$250"
    $('.stawka-100-box').css('background-color', 'transparent');
    $('.stawka-250-box').css('background-color', '#e505cf');
    $('.stawka-500-box').css('background-color', 'transparent');
    $('.stawka-1000-box').css('background-color', 'transparent');
    $('.stawka-2000-box').css('background-color', 'transparent');
    $('.stawka-5000-box').css('background-color', 'transparent');
}



function stawka500boxclicked() {
    stawka = "$500"
    $('.stawka-100-box').css('background-color', 'transparent');
    $('.stawka-250-box').css('background-color', 'transparent');
    $('.stawka-500-box').css('background-color', '#e505cf');
    $('.stawka-1000-box').css('background-color', 'transparent');
    $('.stawka-2000-box').css('background-color', 'transparent');
    $('.stawka-5000-box').css('background-color', 'transparent');
}



function stawka1000boxclicked() {
    stawka = "$1000"
    $('.stawka-100-box').css('background-color', 'transparent');
    $('.stawka-250-box').css('background-color', 'transparent');
    $('.stawka-500-box').css('background-color', 'transparent');
    $('.stawka-1000-box').css('background-color', '#e505cf');
    $('.stawka-2000-box').css('background-color', 'transparent');
    $('.stawka-5000-box').css('background-color', 'transparent');
}




function stawka2000boxclicked() {
    stawka = "$2000"
    $('.stawka-100-box').css('background-color', 'transparent');
    $('.stawka-250-box').css('background-color', 'transparent');
    $('.stawka-500-box').css('background-color', 'transparent');
    $('.stawka-1000-box').css('background-color', 'transparent');
    $('.stawka-2000-box').css('background-color', '#e505cf');
    $('.stawka-5000-box').css('background-color', 'transparent');
}




function stawka5000boxclicked() {
    stawka = "$5000"
    $('.stawka-100-box').css('background-color', 'transparent');
    $('.stawka-250-box').css('background-color', 'transparent');
    $('.stawka-500-box').css('background-color', 'transparent');
    $('.stawka-1000-box').css('background-color', 'transparent');
    $('.stawka-2000-box').css('background-color', 'transparent');
    $('.stawka-5000-box').css('background-color', '#e505cf');
}






function startfightthinkingaboutitchecking() {
    $('.arcade-versus-all-info-choose').fadeOut('slow');
    setTimeout(() => {  
        document.getElementById('arcade-main-panel').innerHTML = ''
}, 1000)

}















//CLEAN CODE




function cleanInfoForCreating() {
    $('.party-box-info-box-helper').fadeOut('slow');
    $('#avaible-fights-text').fadeOut('slow');
    $('#button-create-team').fadeOut('slow');
    setTimeout(() => {  
        document.getElementById('arcade-main-panel').innerHTML = '        <div id="arcade-versus-all-info-choose" class="arcade-versus-all-info-choose">    <p id="tryb-walki-text-creating">Tryb Walki</p>    <div class="versus1v1-info-box" onclick="versus1v1infoboxclick()">        <i class="fa-thin fa-person" id="vs1person1"></i>        <i class="fa-thin fa-person" id="vs1person2"></i>        <p id="name-of-type-fight-text">1v1</p>    </div>    <div class="versus2v2-info-box" onclick="versus2v2infoboxclick()">        <i class="fa-thin fa-person" id="vs2person1"></i>        <i class="fa-thin fa-person" id="vs2person2"></i>        <i class="fa-thin fa-person" id="vs2person1"></i>        <i class="fa-thin fa-person" id="vs2person2"></i>        <p id="name-of-type-fight-text">2v2</p>    </div>    <div class="versus3v3-info-box" onclick="versus3v3infoboxclick()">        <i class="fa-thin fa-person" id="vs2person1"></i>        <i class="fa-thin fa-person" id="vs2person2"></i>        <i class="fa-thin fa-person" id="vs2person1"></i>        <i class="fa-thin fa-person" id="vs2person2"></i>        <p id="name-of-type-fight-text">3v3</p>    </div>    <div class="versus6v6-info-box" onclick="versus6v6infoboxclick()">        <i class="fa-thin fa-person" id="vs2person1"></i>        <i class="fa-thin fa-person" id="vs2person2"></i>        <i class="fa-thin fa-person" id="vs2person1"></i>        <i class="fa-thin fa-person" id="vs2person2"></i>        <p id="name-of-type-fight-text">6v6</p>    </div>        <p id="choose-staweczka-text">Wybierz stawkę</p>    <div class="stawka-100-box" onclick="stawka100boxclicked()">     <center>  <p id="name-of-stawka-stawka">$100</p></center>    </div>    <div class="stawka-250-box" onclick="stawka250boxclicked()">        <center>     <p id="name-of-stawka-stawka">$250</p></center>    </div>    <div class="stawka-500-box" onclick="stawka500boxclicked()">        <center>     <p id="name-of-stawka-stawka">$500</p></center>    </div>    <div class="stawka-1000-box" onclick="stawka1000boxclicked()" >        <center>     <p id="name-of-stawka-stawka">$1000</p></center>    </div>    <div class="stawka-2000-box" onclick="stawka2000boxclicked()">        <center>     <p id="name-of-stawka-stawka">$2000</p></center>    </div>    <div class="stawka-5000-box" onclick="stawka5000boxclicked()">        <center>    <p id="name-of-stawka-stawka">$5000</p></center>     </div>    <p id="choose-gun-text">Wybierz broń</p><div class="musket-gun-box-choose" onclick="musketgunboxchooseclicked()">    <center>    <p id="name-of-guns-guns">Muszkiet</p></center> </div><div class="railgun-gun-box-choose" onclick="railgunboxchooseclicked()">    <center>    <p id="name-of-guns-guns">Railgun</p></center> </div><div class="rewolwer-gun-box-choose" onclick="rewolwergunboxchooseclicked()">    <center>    <p id="name-of-guns-guns">Rewolwer</p></center> </div><div class="hellbringer-gun-box-choose" onclick="hellbringergunboxchooseclicked()">    <center>    <p id="name-of-guns-guns">Hellbringer</p></center> </div><div class="atomizer-gun-box-choose" onclick="atomizergunboxchooseclicked()">    <center>    <p id="name-of-guns-guns">Atomizer</p></center> </div><p id="ilosc-rundek-text">Ilość rund</p><div class="runda-1000-box" onclick="runda100boxclicked()">    <center>     <p id="name-of-stawka-stawka">1 runda</p></center></div><div class="runda-2000-box" onclick="runda200boxclicked()">    <center>     <p id="name-of-stawka-stawka">3 rundy</p></center></div><div class="runda-5000-box" onclick="runda500boxclicked()">    <center>    <p id="name-of-stawka-stawka">5 rund</p></center> </div><button id="start-fight-really-button" onclick="startfightthinkingaboutitchecking()" >Rozpocznij Walkę</button></div>'
}, 1000)

}


