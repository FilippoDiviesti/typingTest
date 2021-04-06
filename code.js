window.onload=function (){

let time = 59;
const frasi = new Array(50);
let wordTyped = null;
let arrayFrase = null;
let numWord = 0
let arraySpan = [0];
let digitedWords = 0;
let isDarkMode = false;

const start = document.getElementById("start");
const timer = document.getElementById("timer");

const text = document.getElementById("testo");
const inputText = document.getElementById("input");

const retry = document.getElementById("retry");

const result = document.getElementById("result");

const switchBtn = document.getElementById("DARKMODE");



Start();
Reset();
generaArrayFarsi();
typingTest();
changeMode();



inputText.classList.add("unclickableInput");
inputText.disabled = false;




function Start(){
  start.addEventListener('click', function() {

    //start del countdown
    chooseFrase();
    setInterval(UpdateTimer, 1000);
    alert("PRESS ENTER TO START");
    setCursoronInput();

    inputText.classList.remove("unclickableInput");
    start.classList.add("unclickableStart");
  })
}


function changeMode(){
  switchBtn.addEventListener('click', function(){
    isDarkMode = !isDarkMode;
    if(isDarkMode ==  false){
        document.querySelector("body").classList.remove("darkModeOn");
    }
    else{
        document.querySelector("body").classList.add("darkModeOn");
    }
  })
}


function UpdateTimer(){
  const min = Math.floor(time/60);
  let sec = time%60;
  sec = sec < 10 ? '0' + sec : sec;
  timer.innerHTML = min + ":" + sec;
  if(time == 0){
    inputText.classList.add("unclickableInput");
    inputText.disabled = true;
    result.innerHTML = "RESULT : " + digitedWords + "wpm";
  }
  if(time>0){
    time--;
  }
}

function setCursoronInput(){
  inputText.focus;
  inputText.setActive;
  inputText.select();
}


function Reset(){
  retry.addEventListener('click', function(){
    window.location.reload();
  })
}



function chooseFrase(){
  let rnum = Math.floor(Math.random()*frasi.length);
  arrayFrase = frasi[rnum].split(' ');
  text.innerHTML = null;

  for(i=0;i<arrayFrase.length;i++){
    const span = document.createElement('span');
    span.innerText = arrayFrase[i] + " ";
    text.appendChild(span);
  }
  arraySpan = text.querySelectorAll("span");
}



function typingTest(){

  inputText.addEventListener('input', function(){
    inputText.onkeypress = function(e) {
      if(e.keyCode == 32){

        wordTyped = inputText.value.trim();

        if(wordTyped == null){

          arraySpan[numWord].classList.remove("wordCorrect");
          arraySpan[numWord].classList.remove("wordIncorrect");

        }
        else if(wordTyped == arrayFrase[numWord]){

          arraySpan[numWord].classList.add("wordCorrect");
          arraySpan[numWord].classList.remove("wordIncorrect");

          numWord++;
          inputText.value = "";
          digitedWords++;

          if(numWord == arrayFrase.length){
            numWord = 0;
            arraySpan.length = 0;
            chooseFrase();
          }

        }
        else{
          arraySpan[numWord].classList.remove("wordCorrect");
          arraySpan[numWord].classList.add("wordIncorrect");
        }
      }

    }
  })

}






function generaArrayFarsi(){
  frasi[0] = "L'orso correva nella valle inseguito dal cacciatore che desiderava la sua pelliccia.";
  frasi[1] = "Le continue innovazioni tecnologiche portano ad una crescita e ad una continua evoluzione.";
  frasi[2] = "La dattilografia viene sempre più utilizzata nelle disabilità visive come metodologia riabilitativa.";
  frasi[3] = "Quando le gambe gli si sono sgranchite Pinocchio comincia a camminare.";
  frasi[4] = "Geppetto una volta tornato a casa comincia subito a fabbricarsi il burattino e gli diede il nome di Pinocchio.";
  frasi[5] = "Gli esseri umani tendono a vedere gli alti esseri viventi come inferiori o come degli oggetti.";
  frasi[6] = "Le cose migliori e belle del mondo non possono essere viste e nemmeno toccate bensì bisogna sentirle con il cuore.";
  frasi[7] = "Vivi come se dovessi morire domani e impara come se dovessi vivere per sempre.";
  frasi[8] = "Il successo è la abilità di passare da un fallimento ad un altro senza perdere entusiasmo.";
  frasi[9] = "Non giudicare ogni giorno dal raccolto che hai ottenuto, ma dai semi che hai piantato.";
  frasi[10] = "Se la vita è solo un passaggio, in questo passaggio seminiamo almeno dei fiori.";
  frasi[11] = "La vita è troppo breve e il tempo è troppo prezioso per sprecarlo.";
  frasi[12] = "Se vuoi qualcosa che non hai mai avuto, devi fare qualcosa che non hai mai fatto.";
  frasi[13] = "Fa più rumore un albero che cade di una foresta che cresce.";
  frasi[14] = "Si vive solo due volte. Una volta quando si nasce e una volta quando si guarda la morte in faccia.";
  frasi[15] = "Non è solo per quello che facciamo che siamo ritenuti responsabili, ma anche per quello che non facciamo.";
  frasi[16] = "Ci sono persone che parlano con gli animali. In pochi però li ascoltano. Questo è il problema.";
  frasi[17] = "Fino a quando non avrai amato un animale, una parte della tua anima rimarrà sempre senza luce.";
  frasi[18] = "Gli animali sono amici così simpatici: non fanno domande e non riportano pettegolezzi.";
  frasi[19] = "Due cose mi hanno sempre sorpreso ovvero la vera intelligenza degli animali e la bestialità degli uomini.";
  frasi[20] = "La vera ricchezza non sta nel possedere oggetti pregiati, ma nella salute.";
  frasi[21] = "Il piacere più grande nella vita è fare ciò che le persone dicono che non puoi fare.";
  frasi[22] = "Fai attenzione quando leggi libri di medicina. Potresti morire di un errore di stampa.";
  frasi[23] = "La salute è come il denaro, non abbiamo mai una vera idea del suo valore fino a quando non la perdiamo.";
  frasi[24] = "Ho smesso di fumare. Posso una settimana di più e in quella settimana solo pioggia.";
  frasi[25] = "Mangiare bene fa parte della cultura di un popolo ed è uno degli argomenti che unisce i popoli.";
  frasi[26] = "La scoperta di un piatto nuovo è più preziosa per il genere umano che la scoperta di una nuova stella.";
  frasi[27] = "Non si può pensare bene, amare bene, dormire bene, se non si ha mangiato bene.";
  frasi[28] = "Le stelle sono uno degli spettacoli più belli e ricchi di mistero della natura.";
  frasi[29] = "Un cielo pieno di stelle è anche una visione romantica che ci toglie il fiato, e che sogniamo in una notte d’estate.";
  frasi[30] = "Mi domando se le stelle sono illuminate perché ognuno possa un giorno trovare la sua.";
  frasi[31] = "Non piangere quando tramonta il sole, le lacrime ti impedirebbero di vedere le stelle.";
  frasi[32] = "Allungando la mano per raggiungere le stelle, troppo spesso dimentichiamo i fiori sotto i nostri piedi.";
  frasi[33] = "Sii felice della vita in quanto ti dà la possibilità di amare, lavorare, giocare e guardare le stelle.";
  frasi[34] = "Quando si guardano troppo a lungo, anche le stelle finiscono col diventare insignificanti.";
  frasi[35] = "A volte, di notte, dormivo con gli occhi aperti sotto un cielo gocciolante di stelle.";
  frasi[36] = "Se tu vuoi bene ad un fiore che sta in una stella, è dolce, la notte, guardare il cielo.";
  frasi[37] = "La Natura ci regala da sempre degli spettacoli più belli ed emozionanti di quanto avremo mai potuto immaginare.";
  frasi[38] = "In pratica la Natura è tutto quello che circonda, ma anche tutto quello di noi.";
  frasi[39] = "Alcune persone camminano sotto la pioggia, altre ci si bagnano solo.";
  frasi[40] = "La bellezza è solo una trappola creata dalla natura per la ragione.";
  frasi[41] = "La natura dipinge per noi, giorno dopo giorno, immagini di infinita bellezza.";
  frasi[42] = "La ricchezza che raggiungo viene dalla natura, la fonte della mia ispirazione.";
  frasi[43] = "Il paradiso è sotto i nostri piedi così come sopra le nostre teste.";
  frasi[44] = "Preferisco un tappeto pieno di aghi di pino o di erba spugnosa al più lussuoso dei tappeti persiani.";
  frasi[45] = "Il sole non splende per pochi alberi e fiori, ma per tutta la felicità del mondo.";
  frasi[46] = "Per tutta la vita, gli spettacoli della natura mi hanno fatto gioire come un bambina.";
  frasi[47] = "L’autunno racconta alla terra le foglie che ha prestato in estate.";
  frasi[48] = "La gente non si accorge se è estate o inverno quando è felice.";
  frasi[49] = "Non si può essere infelici quando si ha questo: odore del mare, sabbia sotto le dita, aria, il vento.";

}

}
