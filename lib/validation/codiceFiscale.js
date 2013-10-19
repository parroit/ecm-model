module.exports = [function (cf) {
    //console.log(cf);

    var validi, i, s, set1, set2, setpari, setdisp;
    if (!cf)  return false;

    cf = cf.toUpperCase();
    if (cf.length != 16)
        return false;/*"La lunghezza del codice fiscale non �\n"
            + "corretta: il codice fiscale dovrebbe essere lungo\n"
            + "esattamente 16 caratteri.\n";*/
    validi = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (i = 0; i < 16; i++) {
        if (validi.indexOf(cf.charAt(i)) == -1)
            return false; /*"Il codice fiscale contiene un carattere non valido `" +
                cf.charAt(i) +
                "'.\nI caratteri validi sono le lettere e le cifre.\n";*/
    }
    set1 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    set2 = "ABCDEFGHIJABCDEFGHIJKLMNOPQRSTUVWXYZ";
    setpari = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    setdisp = "BAKPLCQDREVOSFTGUHMINJWZYX";
    s = 0;
    for (i = 1; i <= 13; i += 2)
        s += setpari.indexOf(set2.charAt(set1.indexOf(cf.charAt(i))));
    for (i = 0; i <= 14; i += 2)
        s += setdisp.indexOf(set2.charAt(set1.indexOf(cf.charAt(i))));
    if (s % 26 != cf.charCodeAt(15) - 'A'.charCodeAt(0))
        return false; /*"Il codice fiscale non � corretto:\n" +
            "il codice di controllo non corrisponde.\n";*/
    return true;
},"cf_uncorrect"];
