    var answers = [];
    function recordAnswers(qno, ans, nqno){
      answers[qno] = ans;
      if(nqno > 0){
        jQuery('.question .row').removeClass("active");
        jQuery('.q' + nqno).addClass("active");
      }
      else{
             q1 = answers[1];
             q2 = answers[2];
             q3 = answers[3];
             q4 = answers[4];
             q5 = answers[5];
             q6 = answers[6];
             q7 = answers[7];
             q8 = answers[8];
             q9 = answers[9];
             q10 = answers[10];

               if((q1, q2, q4, q8, q9, q6 == 1) && (q3, q5, q7, q10 == 1 || 2))
               {
                jQuery('.question .row').removeClass("active");
                jQuery('.row.result1').addClass("active");
              }
              
              else if((q1, q2, q4 == 1) && (q3, q6, q5, q7, q8, q9, q10 == 1 || 2)){
                   jQuery('.question .row').removeClass("active");

                jQuery('.row.result2').addClass("active");
              }
              else
              {
                jQuery('.question .row').removeClass("active");
                jQuery('.row.result3').addClass("active");
              }

  }

}
