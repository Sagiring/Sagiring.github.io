// // 代码块语言识别
// $(function () {
//   var $highlight_lang = $('<div class="code_lang" title="代码语言"></div>');

//   $('pre').before($highlight_lang);
//   $('pre').each(function () {
//     try{
//     var code_language = $(this)[0]['innerHTML'].split('"')[1].slice(5);
//     }catch(e){
//       var code_language = 'error'
//     }

//     if (!code_language || code_language == 'plaintext') {
//       return true;
//     };
//     var lang_name = code_language.replace("line-numbers", "").trim().replace("language-", "").trim();

//     // 首字母大写
//     lang_name = lang_name.slice(0, 1).toUpperCase() + lang_name.slice(1);

//     $(this).siblings(".code_lang").text(lang_name);
//   });
// });
