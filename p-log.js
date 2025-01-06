function calcul() {
    // Récupération des éléments HTML
    let binaire_1 = document.getElementById("binaire_1");
    let binaire_2 = document.getElementById("binaire_2");
    let porte = document.getElementById("porte");
    let resultat;

    // Vérification de la porte logique choisie
    if (porte.value == 'ET') {
        resultat = calculET(binaire_1.value, binaire_2.value);
    } else if (porte.value == 'OU') {
        resultat = calculOU(binaire_1.value, binaire_2.value);
    } else if (porte.value == 'NAND') {
        resultat = calculNAND(binaire_1.value, binaire_2.value);
    } else if (porte.value == 'NOR') {
        resultat = calculNOR(binaire_1.value, binaire_2.value);
    } else if (porte.value == 'XOR') {
        resultat = calculXOR(binaire_1.value, binaire_2.value);
    } else {
        resultat = "Porte logique non prise en charge.";
    }

    // Affichage du résultat
    document.getElementById("resultat").innerHTML = resultat;
}

function calculET(val1, val2) {
    val1 = parseInt(val1, 10);
    val2 = parseInt(val2, 10);

    if ((val1 === 0 || val1 === 1) && (val2 === 0 || val2 === 1)) {
        return val1 & val2; // Opération logique AND
    } else {
        return "Entrées non valides (doivent être 0 ou 1)";
    }
}

function calculOU(val1, val2) {
    val1 = parseInt(val1, 10);
    val2 = parseInt(val2, 10);

    if ((val1 === 0 || val1 === 1) && (val2 === 0 || val2 === 1)) {
        return val1 | val2; // Opération logique OR
    } else {
        return "Entrées non valides (doivent être 0 ou 1)";
    }
}

function calculNAND(val1, val2) {
    val1 = parseInt(val1, 10);
    val2 = parseInt(val2, 10);

    if ((val1 === 0 || val1 === 1) && (val2 === 0 || val2 === 1)) {
        return !(val1 & val2) ? 1 : 0; // Opération logique NAND
    } else {
        return "Entrées non valides (doivent être 0 ou 1)";
    }
}

function calculNOR(val1, val2) {
    val1 = parseInt(val1, 10);
    val2 = parseInt(val2, 10);

    if ((val1 === 0 || val1 === 1) && (val2 === 0 || val2 === 1)) {
        return !(val1 | val2) ? 1 : 0; // Opération logique NOR
    } else {
        return "Entrées non valides (doivent être 0 ou 1)";
    }
}

function calculXOR(val1, val2) {
    val1 = parseInt(val1, 10);
    val2 = parseInt(val2, 10);

    if ((val1 === 0 || val1 === 1) && (val2 === 0 || val2 === 1)) {
        return val1 ^ val2; // Opération logique XOR
    } else {
        return "Entrées non valides (doivent être 0 ou 1)";
    }
}


