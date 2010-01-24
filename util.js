function log(msg) {
  var con = $('#console');
  console.log(msg);
  con.html(con.html() + "<br />" + msg);
  return true;
}