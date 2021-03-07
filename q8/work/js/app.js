$(function(){
  //pageCountに1を格納
  let pageCount = 1;
  //inputWordを空にする
  let inputWord = "";

//search-btnクラスを持つ要素をクリックした時
  $(".search-btn").on("click",function(){
//searchWordに入力フォームの内容を格納
    const searchWord = $("#search-input").val();
/*searchWordがinputWordと一致するならpageCountに+1し、一致しなければ
listsクラスをもつ要素の中身を空にしてinputWordにsearchWordの値を代入する*/
    searchWord == inputWord ? pageCount++ : ($(".lists").empty(),inputWord = searchWord,pageCount = 1);
//settingsに設定情報などを格納
    const settings = {
      "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
      "method": "GET",
    };
//ajaxを実行し、通信に成功した時の処理、引数がresponseとなっていて通信した結果を受け取っている
    $.ajax(settings).done(function (response) {
//resultにresponse['@graph']を格納
      const result = response['@graph'];
//関数displayResultに実引数resultを渡し実行
      displayResult(result);
//通信に失敗した時の処理
    }).fail(function (err) {
//関数名displayErrorに実引数errを渡し実行
      displayError(err)
    });
  });

//関数名displayResultに仮引数ciNiiを渡し
  function displayResult(ciNii) {
//messageクラスを持つ要素を削除する
    $(".message").remove();
//ciNii[0]['items']がundefinedでなければ
    ciNii[0].items !== undefined ?
//ajaxから取得したアイテムの数だけループさせる
    $.each(ciNii[0].items,function(i){
//listsクラスの子要素の先頭にタイトル、作者、出版社、と書籍情報をクリックすると詳細に飛べるリンクの要素を追加
      $(".lists").prepend('<li class="lists-item"><div class="list-inner"><p>タイトル：' + ciNii[0].items[i].title + '</p><p>作者：' + ciNii[0].items[i]['dc:creator'] + '</p><p>出版社：' + ciNii[0].items[i]['dc:publisher'] + '</p><a href = "' + ciNii[0].items[i]['@id'] + '"target="_blank">書籍情報</a></div></li>')
    }):
//undifinedならばlistsクラスを持つ要素の前にテキストを追加する。
    $(".lists").before('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索してください。</div>');
  };

//関数名displayErrorに仮引数jpXHRを渡し
  function displayError(jpXHR){
//jpXHR.statusが404ならlistsクラスを持つ要素の前にテキストを使いする。404でなく500なら別のテキストを追加する。さらに404でも500でもなければ原因不明のエラーテキストを追加する。
    jpXHR.status === 404 ? $(".lists").before('<div class="message">ページが存在しません。</div>') : jpXHR.status == 500 ? $(".lists").before('<div class="message">通信先のページで内部エラーが発生しています。</div>') : $(".lists").before('<div class="message">通信エラーが発生しています。</div>');
//listsクラスを持つ要素の中を空にする
    $(".lists").empty();
//messageクラスを持つ要素を削除する
    $(".message").remove();
//listsクラスを持つ要素の前にdiv要素を追加してエラーメッセージを表示
    $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続を確認してください。</div>');
  };

//.reset-btnをクリックした時
  $(".reset-btn").on("click", function() {
//ページカウントを1にする
    pageCount = 1;
//inputWordを空にする
    inputWord = "";
//listsクラスを持つ要素の中を空にする
    $(".lists").empty();
//messageクラスを持つ要素を削除する
    $(".message").remove();
//入力フォームを空にする
    $("#search-input").val("");
  });

});