function execBookmarklet() {
  var title = window.prompt('Register to dotimpact', document.title);
  if (!title) return;
  var lines;
  if( window.location.href.match(/(youtube.com|vimeo.com)/)) {
    lines = ['', '[~ ' + window.location.href + ']', document.title];
  } else{
    lines = ['', document.title + '[~ ' + window.location.href + ']'];
  }
  var quote = window.getSelection().toString();
  if (quote.trim()) lines = lines.concat(quote.split(/\n/g).map(function (line) {
    return ' > ' + line;
  }));
  var d = new Date();
  lines.push('#' + d.getFullYear() + '-' + (('0' + (d.getMonth() + 1)).slice(-2)) + '-' + (('0' + d.getDate()).slice(-2)));
  var body = encodeURIComponent(lines.join('\n'));
  window.open('https://scrapbox.io/dotimpact/' + encodeURIComponent(title.trim()) + '?body=' + body);
}
