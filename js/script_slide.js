// slide
// setInterval <반복시키는것
$("#slide ul li").hide();
$("#slide ul li:nth-child(1)").show();
setInterval(function(){
$("#slide ul li:nth-child(1)").fadeOut(1000).next().fadeIn(1000).end().appendTo("#slide ul")
// .end메서드는 이전요소를 선택하는 명령입니다
// .appendTo()메서드는 선택된 요소를 .appendTo()소괄호안에 넣습니다
},2000);
