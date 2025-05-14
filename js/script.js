

// 20250116
// ログを表示させる。
// カラーピッカーの変数名の表示をさせる
// .valueをつけると、そのカラーコードで表示される
// console.log(document.querySelector('#colorPicker').value);

// オブジェクトの選択
// テキストを選択
// 値を代入
// document.querySelector('#colorText').textContent = 'カラーコード：' + document.querySelector('#colorPicker').value;

// document.querySelector('#colorText').textContent = `カラーコード：${document.querySelector('#colorPicker').value}`;



// ~~~~~~~~~~~~~~`~~~~~~~~~~~
// 動きをもった定数を宣言する
// const 関数名 = () => {
// どうする、実行する関数
// }
// ~~~~~~~~~~~~~~~~~~~~~~~~~
// 関数を宣言する
// function 関数名 () {
// どうする、実行する関数
// }
// ~~~~~~~~~~~~~~~~~~~~~~~~~

// *function colorBg() {
// *text.textContent = `カラーコード：${color.value}`;
// *}


// const colorBg = () => {
// text.textContent = `カラーコード：${color.value}`;
// }

// 何が.addEventListener(どうなったら,どうする);
// color.addEventListener('input',動作関数)

// color.addEventListener('input', colorBg);

// ★上記をcolorBg宣言なしで記述する場合、無形関数でアロー関数
// *color.addEventListener('input', () => {
// *text.textContent = `カラーコード：${color.value}`;
// *});

// !関数の宣言
// const message = (name) => {
// console.log(`${name}こんにちは`);
// }
// !関数の実行
// message('ori');


// !関数の宣言
// function message(para1, para2) {
// alert(`${para1}${para2}、こんにちは`)
// };
// !関数の実行
// message('おり', '様');


// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// 関数の戻り値、なし、ありの場合の記述方法の違い
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

// １．戻り値無しの作成例
// const message = (name2, weather) => {
// console.log(`${name2}さん、こんにちは、今日は${weather}です`);
// }
// 戻り値無しの呼び出し例
// message('わたし', 'いい天気');
// --------------------------------------------

// ２．戻り値有りの作成例
// const message2 = (name2, weather) => {
// return `${name2}さん、こんにちは、今日は${weather}です`;
// }
// 戻り値有りの呼び出し例
// 「どうやって返すか」で書かないと動かない
// alert(message2('あなた', 'くもり'));
// --------------------------------------------
// let msgText = message2('しらないひと', 'あめ');
// console.log(msgText);
// alert(msgText);
// --------------------------------------------


// ========================================================
// Pタグ、「カラーコードを検索」
const text = document.querySelector('#colorText');
// カラーピッカー発動
const color = document.querySelector('#colorPicker');
// !宣言遠いと動かなかった。コメントが悪さしてそう
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// カラーピッカーで背景色を変える

// カラーピッカーを操作した時の一連の動作
const colorBg = () => {
    // 選択した色を背景色に設定
    document.body.style.backgroundColor = color.value;

    // カラーコードの表示
    if (color.value === '#ffffff') {
        // 色が白のとき
        text.textContent = `カラーコード：${color.value}(white色です)`;
    } else if (color.value === '#cccccc') {
        // 条件２　色がアレのとき
        // else ifはたくさんかける
        //カラーピッカー、大文字小文字区別される。大文字だとTRUEにならなかた。
        text.textContent = `カラーコード：${color.value}(グレーです)`;
    } else {
        // 最後の条件で、「else」で書く
        // 白以外のとき
        text.textContent = `カラーコード：${color.value}(その他の色です)`;
    }


};

color.addEventListener('input', colorBg);

