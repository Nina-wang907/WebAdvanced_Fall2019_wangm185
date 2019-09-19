let questions=[
    {
        prompt:"When is Mid-Autumn festival every year?",
        
    },

    {
        prompt:"When is Mid-Autumn festival this year?",
       
    },  

    {
        prompt:"Who relative to the mid-autumn mythical?",
  
    },
   
    {
        prompt:"What tradition food Chinese eat to celebrate the festival?",

    },

    {
        prompt:"What people do for the festival?",

    },


];

let score = 0;

document.addEventListener(function(loadQuestions){
}

function loadQuestions(){
    let prompts = document.getElementById("p");

    for(let i=0;i<questions.length;i++){
        let correctAnswer = document.getElementById("p")(questions[i].prompt);
        if(response == questions[i].correctAnswer){
            score++;
            alert("Correct!");
        } else {
            alert("Wrong!");
        }
    }

    alert("You got"+score+"/"+questions.length);

}
