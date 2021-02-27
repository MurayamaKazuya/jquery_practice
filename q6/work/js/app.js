$(function () {
//.select-boxの値が変更されたら
  $(".select-box").on("change", function () {
//.select-boxのvalueがallと厳密等価であれば、.food-list liをすべて表示し、falseならfood-list ilの要素を順番に処理する
    $(this).val() === "all" ? $(".food-list li").show() : $.each($(".food-list li"),function(i){
//.select-boxのvalueと.food-list liの現在処理している順番の要素が厳密等価であれば、その順番の.food-list liを表示し、違えば非表示にする。
      $(".select-box").val() === $(".food-list li").eq(i).data("category-type") ? $(".food-list li").eq(i).show() : $(".food-list li").eq(i).hide()
    });
　});
});
