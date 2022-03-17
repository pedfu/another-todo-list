exports.getDate = function() {
  const today = new Date();
  const day = "";
  const dayString = today.toLocaleDateString('en-us', {  weekday: 'long', day:'numeric', month:'long' });

  return dayString;
}

exports.getDay = function() {
  const today = new Date();
  const day = "";
  const dayString = today.toLocaleDateString('en-us', {  weekday: 'long'});

  return dayString;
}
