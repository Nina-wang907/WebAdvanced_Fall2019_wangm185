var questions=[
    {
        prompt:"When is Mid-Autumn festival every year?\n(a):Lunar August 15th\n(b):Lunar May 5th\n(c):Lunar September 9th",
        answer:"a"
    },

    {
        prompt:"When is Mid-Autumn festival this year?\n(a):August 15th\n(b):October 4th\n(c):September 13rd",
        answer:"c"
    },  

    {
        prompt:"Who relative to the mid-autumn mythical?\n(a):Qu Yuan\n(b):Chang'e\n(c):Cowherd and the Weaving Girl",
        answer:"b"
    },
   
    {
        prompt:"What tradition food Chinese eat to celebrate the festival?\n(a):Zongzi\n(b):Moon Cakes\n(c):Dumplings",
        answer:"b"
    },

    {
        prompt:"What people do for the festival?\n(c):Ancestor worship\n(b):Set off firecracker\n(c):Admire the full moon",
        answer:"c"
    },
];

var score = 0;

for(var i=0;i<questions.length;i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
        score++;
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
}

alert("You got"+score+"/"+questions.length);

