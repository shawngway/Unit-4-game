$(document).ready(function () {
    var audioElement = document.createElement("audio");
      audioElement.setAttribute("id", "music");
      audioElement.setAttribute("src", "assets/images/MGSAlert.mp3");
      document.body.append(audioElement);

      var audioTheme = document.createElement("audio");
      audioTheme.setAttribute("id", "music");
      audioTheme.setAttribute("src", "assets/images/MGSmain.mp3");
      document.body.append(audioTheme);

      var audioRing = document.createElement("audio");
      audioRing.setAttribute("id", "music");
      audioRing.setAttribute("src", "assets/images/metalgearcodec.mp3");
      document.body.append(audioRing);

    var wins = 0;
    var losses = 0;

    var member1Value = 0;
    var member2Value = 0;
    var member3Value = 0;
    var member4Value = 0;
    var userPoints = 0;
    var gameChoice = 0;
    memberValues();
    userValue();

    $("#gameChoice").text(gameChoice);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#userPoints").text(userPoints);
    
    
    // audioElement.currentTime = 0;
    
    
    $("#member1").on("click", function () {
        userPoints = userPoints + member1Value;
        audioTheme.play();
        $("#userPoints").text(userPoints);
        if (userPoints === gameChoice) {
            wins++;
            audioRing.play();
            $("#wins").text(wins);
            memberValues();
            userValue();

        } else if (userPoints > gameChoice) {
            losses++;
            audioElement.play();
            $("#losses").text(losses);
            memberValues();
            userValue();
        }
        console.log(userPoints);


    })
    $("#member2").on("click", function () {
        userPoints = userPoints + member2Value;
        audioTheme.play();

        $("#userPoints").text(userPoints);
        if (userPoints === gameChoice) {
            wins++;
            audioRing.play();
            $("#wins").text(wins);
            memberValues();
            userValue();

        } else if (userPoints > gameChoice) {
            losses++;
            audioElement.play();
            $("#losses").text(losses);
            memberValues();
            userValue();
        }


        console.log(userPoints);
    })
    $("#member3").on("click", function () {
        userPoints = userPoints + member3Value;
        audioTheme.play();

        $("#userPoints").text(userPoints);
        if (userPoints === gameChoice) {
            wins++;
            audioRing.play();
            $("#wins").text(wins);
            memberValues();
            userValue();

        } else if (userPoints > gameChoice) {
            losses++;
            audioElement.play();
            $("#losses").text(losses);
            memberValues();
            userValue();
        }


        console.log(userPoints);
    })
    $("#member4").on("click", function () {
        userPoints = userPoints + member4Value;
        audioTheme.play();

        $("#userPoints").text(userPoints);
        if (userPoints === gameChoice) {
            wins++;
            audioRing.play();
            $("#wins").text(wins);
            memberValues();
            userValue();

        } else if (userPoints > gameChoice) {
            losses++;
            audioElement.play();
            $("#losses").text(losses);
            memberValues();
            userValue();
        }


        console.log(userPoints);
    })

    function memberValues() {
        member1Value = Math.floor(Math.random() * 12) + 1;
        member2Value = Math.floor(Math.random() * 12) + 1;
        member3Value = Math.floor(Math.random() * 12) + 1;
        member4Value = Math.floor(Math.random() * 12) + 1;

    }
    function userValue() {
        gameChoice = Math.floor(Math.random() * 102) + 19;
        $("#gameChoice").text(gameChoice);
        userPoints = 0;
        $("#userPoints").text(userPoints);

    }
    console.log("gameChoice " + gameChoice);
    console.log("userPoints " + userPoints);
    console.log("member1Value " + member1Value);
    console.log("member2Value " + member2Value);
    console.log("member3Value " + member3Value);
    console.log("member4Value " + member4Value);





});