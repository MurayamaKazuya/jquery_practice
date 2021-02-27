$(function () {
  //q1を読み込み時に色を緑にする
  $("#q1").css("color","#008000");
  //q2をクリックした時に
  $("#q2").on("click",function(){
  //背景を#f8aca6色に変更する
    $(this).css("background","#f8aca6");
  });
  //q3をクリックした時に
  $("#q3").on("click",function(){
  //3秒かけてフェードアウトさせる
    $(this).fadeOut(3000)
  });
  //q4をクリックした時に
  $("#q4").on("click",function(){
  //largeのクラス属性を追加する
    $(this).addClass("large")
  });
  //q5をクリックした時に
  $("#q5").on("click",function(){
  //beforeでDOMの前、prependでDOMの中の前にDOMを挿入
    $(this).before("DOMの前").prepend("DOMの中の前")
  //appendでDOMの中の後ろ、afterでDOMの後にDOMを挿入
    .append("DOMの中の後").after("DOMの後")
  });
  //q6をクリックした時に
　$("#q6").on("click",function(){
  //マージンを上に100px,左に100pxとる
    $(this).animate({
      "margin-top":"100px","margin-left":"100px"
    },2000)
  });
　//q7をクリックした時に
　$("#q7").on("click",function(){
  //コンソールにidのノードをコンソールに表示
    console.log(this)
  });
　//q8のイベントで
　$("#q8").on({
  //マウスが要素に乗ったときに
    "mouseenter":function(){
  //largeのclassを追加する
      $(this).addClass("large")
    },
  //マウスが要素から外れた時
    "mouseleave":function(){
  //largeのクラスを削除する
      $(this).addClass("large")
    }
  });
　//q9のliをクリックした時に
  $("#q9 li").on("click",function(){
  //q9のliのインデックス番号をnumに代入して
    const num = $(this).index()
  //numをアラート表示する
    alert(num)
  });
  //q10のliをクリックした時に
　$("#q10 li").on("click",function(){
  //q10 liのインデックス番号をnumに代入して
  const num = $(this).index();
  //q10 liのインデックス番号と同じ順番のq11にlarge-textのクラスを追加する。
  $("#q11 li").eq(num).addClass("large-text");
　})
});
