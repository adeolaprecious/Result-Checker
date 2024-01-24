function myGrade() {
    var scoreOfStudent = Number(score.value)

    if (scoreOfStudent==""){
        result.value = "INVALID"
    }
    else if(scoreOfStudent>=0 && scoreOfStudent<30) {
        result.value = "F9 - Fail🥴"
        result.style.color = "red"
    }
    else if(scoreOfStudent>=30 && scoreOfStudent<40){
        result.value = "E8 - Pass😔"
        result.style.color = "crimson"
    }
    else if(scoreOfStudent>=40 && scoreOfStudent<45){
        result.value = "D7 - Average😬"
        result.style.color = "orange"
    }
    else if(scoreOfStudent>=45 && scoreOfStudent<50){
        result.value = "C6 - Credit🤔"
        result.style.color = "purple"
    }
    else if(scoreOfStudent>=50 && scoreOfStudent<55){
        result.value = "C5 - Credit🤔"
        result.style.color = "purple"
    }
    else if(scoreOfStudent>=55 && scoreOfStudent<60){
        result.value = "C4 - Credit🙂"
        result.style.color = "purple"
    }
    else if(scoreOfStudent>=60 && scoreOfStudent<65){
        result.value = "B3 - Good🙂"
        result.style.color = "aqua"
    }
    else if(scoreOfStudent>=65 && scoreOfStudent<75){
        result.value ="B2 - Very Good😀"
        result.style.color = "green"
    }
    else if(scoreOfStudent>=75 && scoreOfStudent<=100){
        result.value = "A1 - Excellent👍"
        result.style.color = "blue"
    }
    else{
        result.value = "INVALID"
        result.style.color = "black"
    }
    document.getElementById('score').value = ''
}
