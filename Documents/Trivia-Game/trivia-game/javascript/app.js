
// VARIABLES ////////////////////////////////////////////////////////////


var result;
var totalquestions = 5;

var correctchoices=new Array()
correctchoices[1]='d' //question 1 solution
correctchoices[2]='b' 
correctchoices[3]='a'
correctchoices[4]='c'
correctchoices[5]='d'


function scoreit () {
    var incorrect=null;
    for (q=1; q<=totalquestions;q++) {
        var thequestion=eval("document.coffeequiz.")
    }

}


$(document).ready(function() {

// Keeps the quiz for hidden until user presses the start button
$("#form1").hide();
$("#score").hide();

// Gets rid of start button/ reveals quiz when user clicks 
$('#getStarted').on('click', function() {
    $(this).hide();
    $('#form1').show();
});



//$("#questions input").on('change', function () {
// country_value = $('input[name="country"]:checked', '#questions').val();
// city_value = $('input[name="city"]:checked', '#questions').val();
 //type_value = $('input[name="type"]:checked', '#questions').val();
 //original_value = $('input[name="original"]:checked', '#questions').val();
 //cntbeans = $('input[name="city"]:checked', '#questions').val();

 //result = country_value + city_value + type_value + original_value + cntbeans;
//});
$("#submitQuiz").on('click', function() {
    country_value = parseInt($('#country').val(), 10);
    //city_value = parseInt(city, 10);
    //type_value = parseInt(type, 10);
    //original_value = parseInt(original, 10);
    //cntbeans_value = parseInt(cntbeans, 10);
    //result = country_value + city_value + type_value + original_value + cntbeans;
    console.log(country_value);
    $("#form1").hide(); 
});

//function setQuestion() {
  //  $('.quizContainer, #btn-container, .submitBtn').fadeIn('slow');
//    $('.getStarted').hide();
//    var correctAnswer = quiz[i].correctAnswer; 
//    var txt = "<h3>" + quiz[i].question + "</h3><br/>";
//    $(quiz[i].choices).each(function (idx, valuE) {
//        txt += "<input type='radio' name='choice' value=' " + valuE + " ' />"
//        + valuE;
//    });
//    $(".quiz").html(txt);
//    }

//function checkAns() {
//    if ($("input[name=choice]:checked").val() == correctAnswer) {
//      correctAnswers++;
//    };
//  };


});