function zipStrings(strA, strB) {
  // Strings splitten
  //strA = 1234
  const strAArr = strA.split("");
  //strB = abc
  const strBArr = strB.split("");
  //Variable für Ergebnis
  // Soll "1a2b3c4" ergeben
  let zippedStr = "";
  // variable zur Bestimmung des längeren Strings
  let longestStr;
  // if Abfrage zur Bestimmung des längeren Strings
  if (strAArr.length > strBArr.length) {
    longestStr = strAArr.length;
  } else {
    longestStr = strBArr.length;
  }
  //Zip-Logik
  for (let i = 0; i < longestStr; i++) {
    if (strAArr[i] === undefined) {
      zippedStr += strBArr[i];
    } else if (strBArr[i] === undefined) {
      zippedStr += strAArr[i];
    } else {
      zippedStr = strAArr[i] + strBArr[i];
    }
  }
  return zippedStr;
}
