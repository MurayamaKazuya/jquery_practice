$(function(){
//.nav liをクリックした時に
  $(".nav li").on("click",function(){
//xにnav liのインデックス番号を代入して
    const x = $(".nav li").index(this);
//.description li にis-hiddenのクラスを追加する
    $(".description li").addClass("is-hidden");
//.description li の取得したインデックス番号からis-hiddenのクラスを削除する
    $(".description li").eq(x).removeClass("is-hidden");
  });
});