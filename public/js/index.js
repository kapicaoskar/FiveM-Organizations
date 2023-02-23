// COMMAND IF EDITING IN BROWSER
//$('body').hide();
//$('html').hide();
$('#car-dealer-heist').hide();

//FrontEnd Side




//UNCOMMENT THIS
window.addEventListener('load', (event) => {
    document.getElementById('lvl-info-text').innerHTML = 'Ekran Główny'
    document.getElementById('main-content').innerHTML = '<div class="home-content"><div class="account-info-box"><p id="account-number-box-info">Konto 64179138</p><p id="account-avaible-money-box-info">Dostępne środki: $0</p></div>  <!-- Account-info-box --><div class="account-info-box-crypto">    <p id="account-wallet-box-info">Wallet 330</p>    <p id="account-crypto-names-csh-box-info">0 CSH</p>    <p id="account-crypto-names-wave-box-info">0 Wave</p>    <p id="account-crypto-names-slt-box-info">0 SLT</p>    </div>  <!-- Account-info-box-Crypto --><center>    <p id="proffesional-level">Poziom perfekcjonizmu</p></center><div class="profession-box-car-dealer"><p id="profession-box-car-dealer-lvl">Lvl 0</p><p id="profession-box-car-dealer-name">Car Dealer Heist</p><p id="profession-box-car-dealer-progress">Postęp:</p><p id="profession-box-car-dealer-progress-int">0/5</p><div class="profession-box-car-dealer-progressbar">    <div class="profession-box-car-dealer-progressbar-fill"    </div> <!-- PROGRESSBAR -->    </div> <!-- PROGRESSBAR-FILL --></div> <!-- proffesion-box-car-dealer --><div class="profession-box-maze-bank">    <p id="profession-box-maze-bank-lvl">Lvl 0</p>    <p id="profession-box-maze-bank-name">Maze Bank Heist</p>    <p id="profession-box-maze-bank-progress">Postęp:</p><p id="profession-box-maze-bank-progress-int">0/5</p><div class="profession-box-maze-bank-progressbar">    <div class="profession-box-maze-bank-progressbar-fill"    </div> <!-- PROGRESSBAR -->    </div> <!-- PROGRESSBAR-FILL --></div> <!-- proffesion-box-maze-bank --></div> <!-- Home-Content -->'
});





function homeChangeColor(){
    $('#houseIcon').css('color', '#11facd')
}

function OldhomeChangeColor() {
    $('#houseIcon').css('color', 'rgba(255, 255, 255, 0.438)')
}


function OldemployeeChangeColor(){
    $('#peopleIcon').css('color', 'rgba(255, 255, 255, 0.438)')
}

function employeeChangeColor(){
    $('#peopleIcon').css('color', '#11facd')
}


function OldstatsChangeColor(){
    $('#statsIcon').css('color', 'rgba(255, 255, 255, 0.438)')
}

function statsChangeColor(){
    $('#statsIcon').css('color', '#11facd')
}

function OldmissionsChangeColor(){
    $('#missionsIcon').css('color', 'rgba(255, 255, 255, 0.438)')
}

function missionsChangeColor(){
    $('#missionsIcon').css('color', '#11facd')
}






function OldupgradesChangeColor(){
    $('#upgradesIcon').css('color', 'rgba(255, 255, 255, 0.438)')
}

function upgradesChangeColor(){
    $('#upgradesIcon').css('color', '#11facd')
}


function OldwalletChangeColor(){
    $('#walletIcon').css('color', 'rgba(255, 255, 255, 0.438)')
}

function walletChangeColor(){
    $('#walletIcon').css('color', '#11facd')
}





//BackEnd Side
window.addEventListener('message', function(event) {
    if (event.data.type == "OPEN_ORGS") {
        $('html').show();
        $('body').show();
    } 
})



function walletClick(){
    $('.main-content').fadeOut('slow');
    setTimeout(() => { 
        document.getElementById('main-content').innerHTML = '<p id="wallet-number-int">Numer portfela: 330</p>        <div class="wallet-button-transfer">        <button id="wallet-transfer-button">Transfer</button>    </div>    <p id="wallet-name-currency">Nazwa waluty</p>    <p id="wallet-symbol">Symbol</p>    <p id="wallet-count">Ilość</p>    <div class="slt-coin">        <p id="crypto-sultanium-wallet">Sultanium</p>        <p id="crypto-sultanium-wallet-symbol">SLT</p>        <p id="crypto-sultanium-wallet-count">0</p>    </div>    <div class="wave-coin">        <p id="crypto-wave-wallet">Wave Coin</p>        <p id="crypto-wave-wallet-symbol">Wave</p>        <p id="crypto-wave-wallet-count">0</p>    </div>    <div class="csh-coin">        <p id="crypto-csh-wallet">Cash Coin</p>        <p id="crypto-csh-wallet-symbol">CSH</p>        <p id="crypto-csh-wallet-count">0</p>    </div>'
    }, 700)

    setTimeout(() => { 
    $('.main-content').fadeIn('slow');; 
    document.getElementById('lvl-info-text').innerHTML = 'Portfel'
    $('#walletButton').css('border-color', '#11facd')
    $('#walletIcon').css('color', '#11facd')
    // REST HOVER DISAPPEAR
    $('#homeButton').css('border-color', 'hsla(0,0%,100%,.1)')
    $('#houseIcon').css('color', 'rgba(255, 255, 255, 0.438)')

    $('#employeeButton').css('border-color', 'hsla(0,0%,100%,.1)')
    $('#peopleIcon').css('color', 'rgba(255, 255, 255, 0.438)')

    $('#upgradesButton').css('border-color', 'hsla(0,0%,100%,.1)')
    $('#upgradesIcon').css('color', 'rgba(255, 255, 255, 0.438)')

    $('#statsButton').css('border-color', 'hsla(0,0%,100%,.1)')
    $('#statsIcon').css('color', 'rgba(255, 255, 255, 0.438)')

    $('#missionsButton').css('border-color', 'hsla(0,0%,100%,.1)')
    $('#missionsIcon').css('color', 'rgba(255, 255, 255, 0.438)')
}, 1000);
}

function homeClick(){
    $('.main-content').fadeOut('slow');
    setTimeout(() => { 
        document.getElementById('main-content').innerHTML = '<div class="home-content"><div class="account-info-box"><p id="account-number-box-info">Konto 64179138</p><p id="account-avaible-money-box-info">Dostępne środki: $0</p></div>  <!-- Account-info-box --><div class="account-info-box-crypto">    <p id="account-wallet-box-info">Wallet 330</p>    <p id="account-crypto-names-csh-box-info">0 CSH</p>    <p id="account-crypto-names-wave-box-info">0 Wave</p>    <p id="account-crypto-names-slt-box-info">0 SLT</p>    </div>  <!-- Account-info-box-Crypto --><center>    <p id="proffesional-level">Poziom perfekcjonizmu</p></center><div class="profession-box-car-dealer"><p id="profession-box-car-dealer-lvl">Lvl 0</p><p id="profession-box-car-dealer-name">Car Dealer Heist</p><p id="profession-box-car-dealer-progress">Postęp:</p><p id="profession-box-car-dealer-progress-int">0/5</p><div class="profession-box-car-dealer-progressbar">    <div class="profession-box-car-dealer-progressbar-fill"    </div> <!-- PROGRESSBAR -->    </div> <!-- PROGRESSBAR-FILL --></div> <!-- proffesion-box-car-dealer --><div class="profession-box-maze-bank">    <p id="profession-box-maze-bank-lvl">Lvl 0</p>    <p id="profession-box-maze-bank-name">Maze Bank Heist</p>    <p id="profession-box-maze-bank-progress">Postęp:</p><p id="profession-box-maze-bank-progress-int">0/5</p><div class="profession-box-maze-bank-progressbar">    <div class="profession-box-maze-bank-progressbar-fill"    </div> <!-- PROGRESSBAR -->    </div> <!-- PROGRESSBAR-FILL --></div> <!-- proffesion-box-maze-bank --></div> <!-- Home-Content -->'
        
    }, 700)

    setTimeout(() => { 
    $('.main-content').fadeIn('slow');; 
    document.getElementById('lvl-info-text').innerHTML = 'Ekran Główny'
    $('#homeButton').css('border-color', '#11facd')
    $('#houseIcon').css('color', '#11facd')
    // REST HOVER DISAPPEAR
    $('#walletButton').css('border-color', 'hsla(0,0%,100%,.1)')
    $('#walletIcon').css('color', 'rgba(255, 255, 255, 0.438)')

    $('#employeeButton').css('border-color', 'hsla(0,0%,100%,.1)')
    $('#peopleIcon').css('color', 'rgba(255, 255, 255, 0.438)')

    $('#upgradesButton').css('border-color', 'hsla(0,0%,100%,.1)')
    $('#upgradesIcon').css('color', 'rgba(255, 255, 255, 0.438)')

    $('#statsButton').css('border-color', 'hsla(0,0%,100%,.1)')
    $('#statsIcon').css('color', 'rgba(255, 255, 255, 0.438)')

    $('#missionsButton').css('border-color', 'hsla(0,0%,100%,.1)')
    $('#missionsIcon').css('color', 'rgba(255, 255, 255, 0.438)')
}, 1000);
}


function employeeClick(){
    $('.main-content').fadeOut('slow');
    setTimeout(() => { 
    document.getElementById('main-content').innerHTML = '<p id="employees-limit-max">Limit: 1/12</p>    <div class="employees-button-class-deploy">    <button id="employees-button-add">Dodaj Członka Grupy</button>    </div>    <p id="employee-name-surname-template">Imię i nazwisko</p>    <p id="employee-grade-template">Ranga</p>    <p id="employee-last-avaible-template">Ostatnio dostępny</p>    <div class="employee-info-box">    <div class="employee-dot">    </div>    <p id="employee-name-surname">Dawid Rakiels</p>    <p id="employee-name-rank">Lider</p>    <p id="employee-name-date">21/08/2022</p>    <div class="employees-management">        <i class="fa-light fa-circle-user" id="manage-employee" ></i></div><div class="manage-icon"><i class="fa-light fa-circle-xmark" id="delete-employee"></i></div></div>'
}, 700)

    setTimeout(() => { 
    $('.main-content').fadeIn('slow');; 
    document.getElementById('lvl-info-text').innerHTML = 'Członkowie'
    $('#employeeButton').css('border-color', '#11facd')
    $('#peopleIcon').css('color', '#11facd')
    // REST HOVER DISAPPEAR
    $('#walletButton').css('border-color', 'hsla(0,0%,100%,.1)')
    $('#walletIcon').css('color', 'rgba(255, 255, 255, 0.438)')

    $('#homeButton').css('border-color', 'hsla(0,0%,100%,.1)')
    $('#houseIcon').css('color', 'rgba(255, 255, 255, 0.438)')

    $('#upgradesButton').css('border-color', 'hsla(0,0%,100%,.1)')
    $('#upgradesIcon').css('color', 'rgba(255, 255, 255, 0.438)')

    $('#statsButton').css('border-color', 'hsla(0,0%,100%,.1)')
    $('#statsIcon').css('color', 'rgba(255, 255, 255, 0.438)')

    $('#missionsButton').css('border-color', 'hsla(0,0%,100%,.1)')
    $('#missionsIcon').css('color', 'rgba(255, 255, 255, 0.438)')
}, 1000);


}

function upgradesClick(){
    $('.main-content').fadeOut('slow');
    setTimeout(() => { 
        document.getElementById('main-content').innerHTML = '<div class="upgrades-content"><div class="upgrades1-box"><p id="upgrades1-box-text">Upgrade liczby członków #1</p><p id="upgrades1-box-description">Możliwość dodania do 8 członków</p><p id="upgrades1-box-price-description">Cena Ulepszenia:</p><p id="upgrades1-box-price-description-count">5.00000 CSH</p><p id="upgrades1-box-price-description-needed">Wymagane ulepszenia do oblokowania:</p><div class="upgrades1-box-needed">    <p id="upgrades1-box-needed-text">Brak..</p></div><button id="upgrades1-button" onclick="startUpgrades()">Odblokuj ulepszenie</button></div><div class="upgrades2-box">    <p id="upgrades2-box-text">Upgrade liczby członków #2</p>    <p id="upgrades2-box-description">Możliwość dodania do 10 członków</p>    <p id="upgrades2-box-price-description">Cena Ulepszenia:</p>    <p id="upgrades2-box-price-description-count">5.00000 CSH</p>    <p id="upgrades2-box-price-description-needed">Wymagane ulepszenia do oblokowania:</p>        <div class="upgrades2-box-needed">        <p id="upgrades2-box-needed-text">Upgrade liczby członków #1</p>    </div></div><div class="upgrades3-box">    <p id="upgrades3-box-text">Upgrade liczby członków #3</p>    <p id="upgrades3-box-description">Możliwość dodania do 12 członków</p>    <p id="upgrades3-box-price-description">Cena Ulepszenia:</p>    <p id="upgrades3-box-price-description-count">5.00000 CSH</p>    <p id="upgrades3-box-price-description-needed">Wymagane ulepszenia do oblokowania:</p>        <div class="upgrades3-box-needed">        <p id="upgrades3-box-needed-text">Upgrade liczby członków #2</p>    </div></div><div class="upgrades4-box">    <p id="upgrades4-box-text">Baza</p>    <p id="upgrades4-box-description">Odblokuj kryjówke dla twojej organizacji</p>    <p id="upgrades4-box-price-description">Cena Ulepszenia:</p>    <p id="upgrades4-box-price-description-count">25.00000 CSH</p>    <p id="upgrades4-box-price-description-needed">Wymagane ulepszenia do oblokowania:</p>        <div class="upgrades4-box-needed">        <p id="upgrades4-box-needed-text">Nieznany upgrade</p>    </div></div><div class="upgrades5-box">    <p id="upgrades5-box-text">Skrytki w bazie</p>    <p id="upgrades5-box-description">Skrytki w twojej kryjówce</p>    <p id="upgrades5-box-price-description">Cena Ulepszenia:</p>    <p id="upgrades5-box-price-description-count">25.00000 CSH</p>    <p id="upgrades5-box-price-description-needed">Wymagane ulepszenia do oblokowania:</p>        <div class="upgrades5-box-needed">        <p id="upgrades5-box-needed-text">Nieznany upgrade</p>    </div></div></div> <!-- Upgrades-Content -->'
    }, 700)

    setTimeout(() => { 
    $('.main-content').fadeIn('slow');; 
    document.getElementById('lvl-info-text').innerHTML = 'Ulepszenia'
    $('#upgradesButton').css('border-color', '#11facd')
    $('#upgradesIcon').css('color', '#11facd')
    // REST HOVER DISAPPEAR
    $('#walletButton').css('border-color', 'hsla(0,0%,100%,.1)')
    $('#walletIcon').css('color', 'rgba(255, 255, 255, 0.438)')

    $('#employeeButton').css('border-color', 'hsla(0,0%,100%,.1)')
    $('#peopleIcon').css('color', 'rgba(255, 255, 255, 0.438)')

    $('#homeButton').css('border-color', 'hsla(0,0%,100%,.1)')
    $('#houseIcon').css('color', 'rgba(255, 255, 255, 0.438)')

    $('#statsButton').css('border-color', 'hsla(0,0%,100%,.1)')
    $('#statsIcon').css('color', 'rgba(255, 255, 255, 0.438)')

    $('#missionsButton').css('border-color', 'hsla(0,0%,100%,.1)')
    $('#missionsIcon').css('color', 'rgba(255, 255, 255, 0.438)')
}, 1000);
}

function statsClick(){
    $('.main-content').fadeOut('slow');
    setTimeout(() => { 
        document.getElementById('main-content').innerHTML = '<div class="stats-content">    <div class="started-missions">    <p id="stared-missions-int">0</p>    <p id="stared-missions-text">Rozpoczętych misji</p>    </div>    <div class="ended-missions">        <p id="ended-missions-int">0</p>        <p id="ended-missions-text">Zakończonych misji</p>    </div>        <div class="stoped-missions">        <p id="stoped-missions-int">0</p>        <p id="stoped-missions-text">Przerwanych misji</p>    </div>    <div class="money-from-missions">        <p id="all-missions-money-text">Ogólny szacowany zarobek na zleceniach</p>        <p id="all-missions-money-int">$0</p>    </div></div>'
    }, 700)

    setTimeout(() => { 
    $('.main-content').fadeIn('slow');; 
    document.getElementById('lvl-info-text').innerHTML = 'Statystyki'
    $('#statsButton').css('border-color', '#11facd')
    $('#statsIcon').css('color', '#11facd')
    // REST HOVER DISAPPEAR
    $('#walletButton').css('border-color', 'hsla(0,0%,100%,.1)')
    $('#walletIcon').css('color', 'rgba(255, 255, 255, 0.438)')

    $('#employeeButton').css('border-color', 'hsla(0,0%,100%,.1)')
    $('#peopleIcon').css('color', 'rgba(255, 255, 255, 0.438)')

    $('#upgradesButton').css('border-color', 'hsla(0,0%,100%,.1)')
    $('#upgradesIcon').css('color', 'rgba(255, 255, 255, 0.438)')

    $('#homeButton').css('border-color', 'hsla(0,0%,100%,.1)')
    $('#houseIcon').css('color', 'rgba(255, 255, 255, 0.438)')

    $('#missionsButton').css('border-color', 'hsla(0,0%,100%,.1)')
    $('#missionsIcon').css('color', 'rgba(255, 255, 255, 0.438)')
}, 1000);
}

function missionsClick(){
    $('.main-content').fadeOut('slow');
    setTimeout(() => { 
        document.getElementById('main-content').innerHTML = '<div class="missions-content" id="missions-content">        <center>        <p id="proffesional-level">Poziom perfekcjonizmu</p>        </center>        <div class="profession-box-car-dealer">        <p id="profession-box-car-dealer-lvl">Lvl 0</p>        <p id="profession-box-car-dealer-name">Car Dealer Heist</p>        <p id="profession-box-car-dealer-progress">Postęp:</p>        <p id="profession-box-car-dealer-progress-int">0/5</p>        <div class="profession-box-car-dealer-progressbar">            <div class="profession-box-car-dealer-progressbar-fill" </div>            <!-- PROGRESSBAR -->            </div>            <!-- PROGRESSBAR-FILL -->        </div>        <!-- proffesion-box-car-dealer -->        <div class="profession-box-maze-bank">            <p id="profession-box-maze-bank-lvl">Lvl 0</p>            <p id="profession-box-maze-bank-name">Maze Bank Heist</p>            <p id="profession-box-maze-bank-progress">Postęp:</p>            <p id="profession-box-maze-bank-progress-int">0/5</p>            <div class="profession-box-maze-bank-progressbar">            <div class="profession-box-maze-bank-progressbar-fill" </div>                <!-- PROGRESSBAR -->            </div>            <!-- PROGRESSBAR-FILL -->            </div>            <!-- proffesion-box-maze-bank -->        </div>            <p id="avaible-missions">Dostępne Misje</p><div class="missions-avabile-list">    <div class="mission-car-dealer-box">    <p id="mission-car-dealer-text-name">Car Dealer Heist</p>    <p id="mission-car-dealer-text-description">Ukradnij pojazd z Premium Deluxe Motorsport i sprzedaj go na nielegalnym rynku</p>    <p id="mission-car-dealer-text-description-contract">Cena rozpoczęcia kontraktu: </p>    <p id="mission-car-dealer-text-description-money">2.5 CSH </p>    <button id="mission-car-dealer-text-description-button" onclick="startCarDealer()">Rozpocznij Misję</button>    </div>    <div class="mission-maze-bank-box">        <p id="mission-maze-bank-text-name">Maze Bank Heist</p>        <p id="mission-maze-bank-text-description">Włam się do sejfu i ukradnij worki z pieniędzmi</p>        <p id="mission-maze-bank-text-description-contract">Cena rozpoczęcia kontraktu: </p>        <p id="mission-maze-bank-text-description-money">5 CSH </p>        <button id="mission-maze-bank-text-description-button" onclick="startMazeBank()">Rozpocznij Misję</button>        </div></div>'
    }, 700)

    setTimeout(() => { 
        $('.main-content').fadeIn('slow');; 
        document.getElementById('lvl-info-text').innerHTML = 'Zadania'
        $('#missionsButton').css('border-color', '#11facd')
        $('#missionsIcon').css('color', '#11facd')
        // REST HOVER DISAPPEAR
        $('#walletButton').css('border-color', 'hsla(0,0%,100%,.1)')
        $('#walletIcon').css('color', 'rgba(255, 255, 255, 0.438)')
    
        $('#employeeButton').css('border-color', 'hsla(0,0%,100%,.1)')
        $('#peopleIcon').css('color', 'rgba(255, 255, 255, 0.438)')
    
        $('#upgradesButton').css('border-color', 'hsla(0,0%,100%,.1)')
        $('#upgradesIcon').css('color', 'rgba(255, 255, 255, 0.438)')
    
        $('#statsButton').css('border-color', 'hsla(0,0%,100%,.1)')
        $('#statsIcon').css('color', 'rgba(255, 255, 255, 0.438)')
    
        $('#homeButton').css('border-color', 'hsla(0,0%,100%,.1)')
        $('#houseIcon').css('color', 'rgba(255, 255, 255, 0.438)')
}, 1000);
}







function startCarDealer() {
    $('#car-dealer-heist-pop-up-box').fadeIn('slow');
    document.getElementById('car-dealer-heist-pop-up-box').innerHTML = '  <div class="car-dealer-heist">                <div class="car-dealer-popup">                    <p id="pop-up-car-dealer-text">Czy jesteś pewien że chcesz rozpocząć misję Car Dealer Heist?</p>                    <button id="pop-up-car-dealer-button">Rozpocznij</button>                     <button id="pop-up-car-dealer-button2" onclick="declineCarDealer()">Anuluj</button>                 </div>            </div>'
}


function startUpgrades() {
    $('#upgrades-pop-up-box').fadeIn('slow');
    document.getElementById('upgrades-pop-up-box').innerHTML = ' <div class="upgrades-popper">                <div class="upgrades-popup">                <p id="pop-up-upgrades-text">Odblokuj Ulepszenie</p>                <p id="pop-up-upgrades-desc">Odblokowywanie: Upgrade liczby członków #1</p>                <button id="pop-up-upgrades-button">Odblokuj</button>                <button id="pop-up-upgrades-button2" onclick="declineUpgrades()">Anuluj</button>                </div>            </div>'
}


function startMazeBank() {
    $('#maze-bank-heist-pop-up-box').fadeIn('slow');
    document.getElementById('maze-bank-heist-pop-up-box').innerHTML = '  <div class="maze-bank-heist">                <div class="maze-bank-popup">                    <p id="pop-up-maze-bank-text">Czy jesteś pewien że chcesz rozpocząć misję Maze Bank Heist?</p>                    <button id="pop-up-maze-bank-button">Rozpocznij</button>                     <button id="pop-up-maze-bank-button2" onclick="declineMazeBank()">Anuluj</button>                 </div>            </div>'
}



function declineCarDealer(){
    $('#car-dealer-heist-pop-up-box').fadeOut('slow');
    setTimeout(() => { document.getElementById('car-dealer-heist-pop-up-box').innerHTML = '' }, 800);
}


function declineUpgrades(){
    $('#upgrades-pop-up-box').fadeOut('slow');
    setTimeout(() => { document.getElementById('upgrades-pop-up-box').innerHTML = '' }, 800);
}


function declineMazeBank(){
    $('#maze-bank-heist-pop-up-box').fadeOut('slow');
    setTimeout(() => { document.getElementById('maze-bank-heist-pop-up-box').innerHTML = '' }, 800);
}