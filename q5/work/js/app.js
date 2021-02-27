$(function(){
//.dropdwn liにマウスが乗ったとき
  $(".dropdwn li").hover(function(){
/*マウスが乗っている.dropdwn liの子要素の.dropdwn_menuがスライドダウンで現れ
離れるとスライドアップで隠れる。.stopでホバーした回数だけ動作しないようにしている*/
    $(this).children(".dropdwn_menu").stop().slideToggle()
  });
});