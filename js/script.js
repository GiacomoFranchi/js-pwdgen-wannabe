//INPUT USER
const nome = prompt ("Ciao, qual'è il tuo nome?");
    console.log (nome, typeof nome);

const cognome = prompt ("Qual'è il tuo cognome?");
    console.log(cognome, typeof cognome );

const colore_pref = prompt ("Qual'è il tuo colore preferito?");
    console.log(colore_pref, typeof colore_pref);

// LOGICA PROGRAMMA
const password = nome + cognome + colore_pref + "21";
    console.log(password, typeof password);
const messaggio = `Dato che il tuo Nome è:  ${nome},  il tuo Cognome è: ${cognome} 
 e il tuo colore preferito è: ${colore_pref}  allora la password poco sicura che ti serve è:`;

//OUTPUT
document.getElementById("messaggio").innerHTML = messaggio ;
document.getElementById("password").innerHTML = password ;