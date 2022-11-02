function kvizoteka(){
    var total = 6;
    var score = 0;

    //uzmi korisnikov input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;
    var q6 = document.forms["quizForm"]["q6"].value;
    
    //validacija
    for(i = 1; i<=total; i++){
        if(eval('q'+ i) == ''){
            alert("Izostavio/la si pitanje " + i);
             return false;
        }
    }

    //postavi tocan odg
    var answers = ["b","a","d","a","b","c"];

    //provjeri odg
    for(i = 1; i<=total; i++){
        if(eval('q'+ i)  == answers[i - 1]){
            score++;
        }
    }

    //pokazi rezultat
    var results = document.getElementById('results');
    results.innerHTML = '<h3>Postigao si '+ score + ' od '+ total + '</h3>';
    alert('Imas ' + score + ' od ' + total);

    return false;
}