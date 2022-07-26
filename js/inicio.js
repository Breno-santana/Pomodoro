//--Variáveis--//
let exitNum = 0;
let saidaTrabalho = document.querySelector('div.work-exit').innerHTML = exitNum;
let pausaTrabalho = document.querySelector('div.pause-exit').innerHTML = exitNum;
let sectionTrabalho = document.querySelector('div.sections-exit').innerHTML = exitNum;

//--Funcões dos botões (up/down) para saida.js--//

// Saída trabalho
function btnIncremento(){
    if(exitNum <= 24){
        exitNum = exitNum + 1;
        document.querySelector('div.work-exit').innerHTML = exitNum;
    };
};

function btnDecremento(){
    if(exitNum >= 1){
        exitNum = exitNum -1;
        document.querySelector('div.work-exit').innerHTML = exitNum; 
    };
};

// Saída pausa
function btnIncremento2(){
    if(exitNum <= 29){
        exitNum = exitNum + 1;
        document.querySelector('div.pause-exit').innerHTML = exitNum;
    };
};

function btnDecremento2(){
    if(exitNum >= 1){
        exitNum = exitNum - 1;
        document.querySelector('div.pause-exit').innerHTML = exitNum;
    };
};

//Saída sessões
function btnIncremento3(){
    if(exitNum <= 9){
        exitNum = exitNum + 1;
        document.querySelector('div.sections-exit').innerHTML = exitNum;
    }
}

function btnDecremento3(){
    if(exitNum >= 1){
        exitNum = exitNum - 1;
        document.querySelector('div.sections-exit').innerHTML = exitNum;
    }
}
//Funcções do botão (continuar)

