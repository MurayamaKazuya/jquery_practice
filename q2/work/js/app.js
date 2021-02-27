$(function () {
//.modal_open_buttonをクリックした時に
  $(".modal_open_button").on("click",function () {
//.modal_winをフェードインさせる
    $(".modal_win").fadeIn()
  });
//.modal_close_buttonをクリックした時に
  $(".modal_close_button").on("click",function(){
//.modal_winをフェードアウトさせる
    $(".modal_win").fadeOut()
  });
});