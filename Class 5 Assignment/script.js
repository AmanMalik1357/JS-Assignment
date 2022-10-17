var number = Math.floor(Math.random() * 10) + 1;
var score = 20;

function resetdata() {
    document.querySelector(".redhigh").style.display = "none";
        document.querySelector(".green").style.display = "none";
        document.querySelector(".redlow").style.display = "none";
        score = 20;
        document.getElementById("score").innerHTML = score;
        document.getElementById("number").disabled = false;
        document.getElementById("number").value = "";
        document.querySelector(".btn").disabled = false;
  }

function checknumber() {
    var x = document.getElementById("number").value;

    if(score<=0){
        resetdata();
        return 0;
    }
    score = score - 1;
    if(x<number){
        document.querySelector(".redhigh").style.display = "none";
        document.querySelector(".green").style.display = "none";
        document.querySelector(".redlow").style.display = "block";
        document.getElementById("score").innerHTML = score;
    }else if(x>number){
        document.querySelector(".green").style.display = "none";
        document.querySelector(".redlow").style.display = "none";
        document.querySelector(".redhigh").style.display = "block";
        document.getElementById("score").innerHTML = score;

    }else if(x==number){
        document.querySelector(".redhigh").style.display = "none";
        document.querySelector(".redlow").style.display = "none";
        document.querySelector(".green").style.display = "block";
        document.getElementById("number").disabled = true;
        document.querySelector(".btn").disabled = true;
    }
}

