$(document).ready(function () {
    // var audioThing = $("<audio id='whatToPlay' src='assets/images/MGSAlert.mp3'>");
    // $(document).append(audioThing);

    // $("#whatToPlay").play();

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




    $("#member1").on("click", function () {
        userPoints = userPoints + member1Value;
        $("#userPoints").text(userPoints);
        if (userPoints === gameChoice) {
            wins++;
            $("#wins").text(wins);
            // $("#whatToPlay").play();
            memberValues();
            userValue();

        } else if (userPoints > gameChoice) {
            losses++;
            $("#losses").text(losses);
            // $("#whatToPlay").play();
            memberValues();
            userValue();
        }
        console.log(userPoints);


    })
    $("#member2").on("click", function () {
        userPoints = userPoints + member2Value;
        $("#userPoints").text(userPoints);
        if (userPoints === gameChoice) {
            wins++;
            $("#wins").text(wins);
            memberValues();
            userValue();

        } else if (userPoints > gameChoice) {
            losses++;
            $("#losses").text(losses);
            memberValues();
            userValue();
        }


        console.log(userPoints);
    })
    $("#member3").on("click", function () {
        userPoints = userPoints + member3Value;
        $("#userPoints").text(userPoints);
        if (userPoints === gameChoice) {
            wins++;
            $("#wins").text(wins);
            memberValues();
            userValue();

        } else if (userPoints > gameChoice) {
            losses++;
            $("#losses").text(losses);
            memberValues();
            userValue();
        }


        console.log(userPoints);
    })
    $("#member4").on("click", function () {
        userPoints = userPoints + member4Value;
        $("#userPoints").text(userPoints);
        if (userPoints === gameChoice) {
            wins++;
            $("#wins").text(wins);
            memberValues();
            userValue();

        } else if (userPoints > gameChoice) {
            losses++;
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