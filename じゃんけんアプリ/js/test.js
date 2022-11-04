    $('#firstbutton').mouseover(function() {
      document.getElementById('musicmake').currentTime = 0; //連続クリックに対応
      document.getElementById('musicmake').play(); //クリックしたら音を再生
    });
              
              
              
              
              var sum1 = 0;
              let count = 3;
              // var lifeup = new Audio("music/ひらめく2.mp3"); 
              // var lifedown = new Audio("music/ガラスが割れる2.mp3");
              
              function R_Click(p_janken_r) 
            { 
              let janken = ['グー','チョキ','パー',];//"janken"のリストを作成します。
              let janken_r = Math.floor( Math.random() * 3);//Math.random() で乱数を作ります
              let life_r = Math.floor( Math.random()*10 );        

              let p_janken = ['グー','チョキ','パー'];//"プレイヤーのjanken"のリストを作成します。
                  //勝ち負けの判定
                  if (janken_r === p_janken_r) {
                      Result_end = "あいこ";
                      sum1=0;
                      if (life_r <= 2){
                          count += 1
                          setTimeout(function () {
                              $("#container").append('<div class="heart-1 "id="heart-1">');
                              document.getElementById('musickachi').currentTime = 0; //連続クリックに対応
                              document.getElementById('musickachi').play(); //クリックしたら音を再生
                            }, 300);
                      }
                      else {}
                  } else if(p_janken_r === 0 && janken_r === 1) {
                      Result_end = "勝ち";
                      sum1++;
                      if (life_r <= 2){
                        count += 1
                        setTimeout(function () {
                          $("#container").append('<div class="heart-1 "id="heart-1">');
                          document.getElementById('musickachi').currentTime = 0; 
                          document.getElementById('musickachi').play(); 
                        }, 300);
                      }
                      
                  }else if(p_janken_r === 1 && janken_r === 2) {
                      Result_end = "勝ち";
                      sum1++;
                      if (life_r <= 2){
                        count += 1
                        setTimeout(function () {
                          $("#container").append('<div class="heart-1 "id="heart-1">');
                          document.getElementById('musickachi').currentTime = 0; 
                          document.getElementById('musickachi').play(); 
                        }, 300);
                      }
                      else {}
                  }else if(p_janken_r === 2 && janken_r === 0) {
                      Result_end = "勝ち";
                      sum1++;
                      if (life_r <= 2){
                        count += 1
                        setTimeout(function () {
                          $("#container").append('<div class="heart-1 "id="heart-1">');
                          document.getElementById('musickachi').currentTime = 0; 
                          document.getElementById('musickachi').play(); 
                        }, 300);
                      }
                      else {}
                  }else {
                      Result_end = "負け";
                      count -= 1
                      sum1=0;
                      setTimeout(function () {
                        $("#heart-1").remove();
                        document.getElementById('musicmake').currentTime = 0; 
                        document.getElementById('musicmake').play(); 
                      }, 300);//この場合0.3秒後
                  }

                  if (count===1){
                    setTimeout(function(){
                     $("#heart-1").css('animation','flash 1s linear infinite');
                     $("#heart-1").css("flash");
                    },400);
                  }else{
                    $("#heart-1").stop(false, true);
                  }
                  

                  if (sum1===3){

                  };

                  console.log(count);
                  // console.log(sum1);
                

              let view =""; 
              if (janken_r === p_janken_r) {
                    view='<img src ="img/aiko.jpg">'; 
                  }else if(p_janken_r === 0 && janken_r === 1) {
                    view='<img src ="img/kachi (1).jpg">';
                  }else if(p_janken_r === 1 && janken_r === 2) {
                    view='<img src ="img/kachi (1).jpg">';
                  }else if(p_janken_r === 2 && janken_r === 0) {
                    view='<img src ="img/kachi (1).jpg">';
                  }else {
                    view='<img src ="img/make.jpg">';
                  }


                    //結果を表示するためのプログラムです
                    // document.getElementById("Rejan1").innerHTML = p_janken[p_janken_r] +"を選択しました。ジャンケンの結果は・・・？";
                  document.getElementById("Rejan2").innerHTML =  Result_end;

                  document.getElementById("echo").innerHTML =view
              
              
      
              
                  // if (p_janken_r===2 && janken_r===1) {
                  //   $("#heart-3").remove();
                  // } else if(p_janken_r === 0 && janken_r === 2) {
                  //   $("#parent").remove();
                  // }else if(p_janken_r === 1 && janken_r === 0) {
                  //   $("#parent").remove();
                  // }


                }


              


                    