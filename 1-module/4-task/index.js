function checkSpam(str) {
  let validStr = str.toLowerCase();
  let a = '1xBet'.toLowerCase();
  let b = 'XXX'.toLowerCase();

  return validStr.includes(a) || validStr.includes(b);
}

checkSpam('1XbeT now') === true
checkSpam('free xxxxx') === true
checkSpam('innocent rabbit') === false
