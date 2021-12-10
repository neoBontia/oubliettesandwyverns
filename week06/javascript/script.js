// Setting the copyright year
let date = new Date();
document.getElementById("year").textContent = date.getFullYear();

let aap = 27;
document.getElementById("aap").textContent = aap;

let str = 8;
let strBonus = 0;

let dex = 8;
let dexBonus = 0;

let con = 8;
let conBonus = 0;

let int = 8;
let intBonus = 0;

let wis = 8;
let wisBonus = 0;

let cha = 8;
let chaBonus = 0;

let hp = 0;

let ac = 0;

updateSheet();

let classes = [];

// Working with the API
fetch("https://run.mocky.io/v3/65448545-eaab-43c3-991f-de24167154c3")
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        data = jsonObject;
        classes = data["classes"];

        // Insert class names in the Class drop down list
        for (let i = 0; i < classes.length; i++){
            let option = document.createElement("option");
            option.setAttribute("value", classes[i].name);
            option.innerText = classes[i].name;
            
            document.getElementById("classes").appendChild(option);
        }        
    });

function selectClass() {
    selectedClass = document.getElementById("classes").value;
    resetList(document.getElementById("actions"));
    reverseResetList(document.getElementById("history"));

    if (selectedClass == "") {
        strBonus = 0;
        dexBonus = 0;
        conBonus = 0;
        intBonus = 0;
        wisBonus = 0;
        chaBonus = 0;
    }
    else{
        for (let i = 0; i < classes.length; i++) {
        if (classes[i].name == selectedClass) {
            hp = classes[i].health;
            ac = classes[i].armor;

            abilities = classes[i].abilities;
            
            strBonus = abilities[0].strength;
            dexBonus = abilities[0].dexterity;
            conBonus = abilities[0].constitution;
            intBonus = abilities[0].intelligence;
            wisBonus = abilities[0].wisdom;
            chaBonus = abilities[0].charisma;

            actions = classes[i].actions;
            for (let x = 0; x < actions.length; x++) {
                let option = document.createElement("option");
                option.setAttribute("value", actions[x].name);
                option.innerText = actions[x].name;
                option.classList.add(actions[x].type);

                document.getElementById("actions").appendChild(option);
            }
        }
        }
    }
    
    updateSheet();
}

function calculateAbilityScoreModifier(abilityScore) {
    if (abilityScore >= 30){
        return 10;
    }
    else if (abilityScore > 27){
        return 9;
    }
    else if (abilityScore > 25) {
        return 8;
    }
    else if (abilityScore > 23) {
        return 7;
    }
    else if (abilityScore > 21) {
        return 6;
    }
    else if (abilityScore > 19) {
        return 5;
    }
    else if (abilityScore > 17) {
        return 4;
    }
    else if (abilityScore > 15) {
        return 3;
    }
    else if (abilityScore > 13) {
        return 2;
    }
    else if (abilityScore > 11) {
        return 1;
    }
    else if (abilityScore > 9) {
        return 0;
    }
    else if (abilityScore > 7) {
        return -1;
    }
    else if (abilityScore > 5) {
        return -2;
    }
    else if (abilityScore > 3) {
        return -3;
    }
    else if (abilityScore > 1) {
        return -4;
    }
    else {
        return -5;
    }
}

function addToStr() {
    if (aap > 0 && str < 15) {
        if (str < 13) {
            str++;
            document.getElementById("str-score").textContent = str + strBonus;
            aap--;
            document.getElementById("aap").textContent = aap;
        }
        else {
            str++;
            document.getElementById("str-score").textContent = str + strBonus;
            aap -= 2;
            document.getElementById("aap").textContent = aap;
        }
    }
    updateSheet();
}

function minusToStr() {
    if (str > 8) {
        if (str < 14) {
            str--;
            document.getElementById("str-score").textContent = str + strBonus;
            aap++;
            document.getElementById("aap").textContent = aap;
        }
        else {
            str--;
            document.getElementById("str-score").textContent = str + strBonus;
            aap += 2;
            document.getElementById("aap").textContent = aap;
        }
    }
    updateSheet();
}

function addToDex() {
    if (aap > 0 && dex < 15) {
        if (dex < 13) {
            dex++;
            document.getElementById("dex-score").textContent = dex + dexBonus;
            aap--;
            document.getElementById("aap").textContent = aap;
        }
        else {
            dex++;
            document.getElementById("dex-score").textContent = dex + dexBonus;
            aap -= 2;
            document.getElementById("aap").textContent = aap;
        }
    }
    updateSheet();
}

function minusToDex() {
    if (dex > 8) {
        if (dex < 14) {
            dex--;
            document.getElementById("dex-score").textContent = dex + dexBonus;
            aap++;
            document.getElementById("aap").textContent = aap;
        }
        else {
            dex--;
            document.getElementById("dex-score").textContent = dex + dexBonus;
            aap += 2;
            document.getElementById("aap").textContent = aap;
        }
    }
    updateSheet();
}

function addToCon() {
    if (aap > 0 && con < 15) {
        if (con < 13) {
            con++;
            document.getElementById("con-score").textContent = con + conBonus;
            aap--;
            document.getElementById("aap").textContent = aap;
        }
        else {
            con++;
            document.getElementById("con-score").textContent = con + conBonus;
            aap -= 2;
            document.getElementById("aap").textContent = aap;
        }
    }
    updateSheet();
}

function minusToCon() {
    if (con > 8) {
        if (con < 14) {
            con--;
            document.getElementById("con-score").textContent = con + conBonus;
            aap++;
            document.getElementById("aap").textContent = aap;
        }
        else {
            con--;
            document.getElementById("con-score").textContent = con + conBonus;
            aap += 2;
            document.getElementById("aap").textContent = aap;
        }
    }
    updateSheet();
}

function addToInt() {
    if (aap > 0 && int < 15) {
        if (int < 13) {
            int++;
            document.getElementById("int-score").textContent = int + intBonus;
            aap--;
            document.getElementById("aap").textContent = aap;
        }
        else {
            int++;
            document.getElementById("int-score").textContent = int + intBonus;
            aap -= 2;
            document.getElementById("aap").textContent = aap;
        }
    }
    updateSheet();
}

function minusToInt() {
    if (int > 8) {
        if (int < 14) {
            int--;
            document.getElementById("int-score").textContent = int + intBonus;
            aap++;
            document.getElementById("aap").textContent = aap;
        }
        else {
            int--;
            document.getElementById("int-score").textContent = int + intBonus;
            aap += 2;
            document.getElementById("aap").textContent = aap;
        }
    }
    updateSheet();
}

function addToWis() {
    if (aap > 0 && wis < 15) {
        if (wis < 13) {
            wis++;
            document.getElementById("wis-score").textContent = wis + wisBonus;
            aap--;
            document.getElementById("aap").textContent = aap;
        }
        else {
            wis++;
            document.getElementById("wis-score").textContent = wis + wisBonus;
            aap -= 2;
            document.getElementById("aap").textContent = aap;
        }
    }
    updateSheet();
}

function minusToWis() {
    if (wis > 8) {
        if (wis < 14) {
            wis--;
            document.getElementById("wis-score").textContent = wis + wisBonus;
            aap++;
            document.getElementById("aap").textContent = aap;
        }
        else {
            wis--;
            document.getElementById("wis-score").textContent = wis + wisBonus;
            aap += 2;
            document.getElementById("aap").textContent = aap;
        }
    }
    updateSheet();
}

function addToCha() {
    if (aap > 0 && cha < 15) {
        if (cha < 13) {
            cha++;
            document.getElementById("cha-score").textContent = cha + chaBonus;
            aap--;
            document.getElementById("aap").textContent = aap;
        }
        else {
            cha++;
            document.getElementById("cha-score").textContent = cha + chaBonus;
            aap -= 2;
            document.getElementById("aap").textContent = aap;
        }
    }
    updateSheet();
}

function minusToCha() {
    if (cha > 8) {
        if (cha < 14) {
            cha--;
            document.getElementById("cha-score").textContent = cha + chaBonus;
            aap++;
            document.getElementById("aap").textContent = aap;
        }
        else {
            cha--;
            document.getElementById("cha-score").textContent = cha + chaBonus;
            aap += 2;
            document.getElementById("aap").textContent = aap;
        }
    }
    updateSheet();
}

function updateSheet() {
    document.getElementById("str-score").textContent = str + strBonus;
    document.getElementById("str-mod").textContent = calculateAbilityScoreModifier(str + strBonus);
    document.getElementById("dex-score").textContent = dex + dexBonus;
    document.getElementById("dex-mod").textContent = calculateAbilityScoreModifier(dex + dexBonus);
    document.getElementById("con-score").textContent = con + conBonus;
    document.getElementById("con-mod").textContent = calculateAbilityScoreModifier(con + conBonus);
    document.getElementById("int-score").textContent = int + intBonus;
    document.getElementById("int-mod").textContent = calculateAbilityScoreModifier(int + intBonus);
    document.getElementById("wis-score").textContent = wis + wisBonus;
    document.getElementById("wis-mod").textContent = calculateAbilityScoreModifier(wis + wisBonus);
    document.getElementById("cha-score").textContent = cha + chaBonus;
    document.getElementById("cha-mod").textContent = calculateAbilityScoreModifier(cha + chaBonus);

    if (hp + parseInt(document.getElementById("con-mod").textContent) < 0 || document.getElementById("classes").value == "") {
        document.getElementById("hp").textContent = 0;
        document.getElementById("health").setAttribute("value", document.getElementById("hp").textContent);
    }
    else {
        document.getElementById("hp").textContent = hp + parseInt(document.getElementById("con-mod").textContent);
        document.getElementById("health").setAttribute("value", document.getElementById("hp").textContent);
    }

    if (document.getElementById("classes").value == "Rogue" || document.getElementById("classes").value == "Wizard" || document.getElementById("classes").value == "Cleric" || document.getElementById("classes").value == "Bard" ){
        document.getElementById("ac").textContent = ac + parseInt(document.getElementById("dex-mod").textContent);
    }
    else if (document.getElementById("classes").value == ""){
        document.getElementById("ac").textContent = 0;
    }
    else {
        document.getElementById("ac").textContent = ac;
    }
}

function resetList(parent) {
    while (parent.childElementCount > 1) {
        parent.removeChild(parent.lastChild);
    }
}

function reverseResetList(parent) {
    while (parent.childElementCount > 1) {
        parent.removeChild(parent.firstChild);
    }
}

function rollCheck() {
    let div = document.createElement("div");
    let ability = document.getElementById("check").value;
    let roll = Math.floor(Math.random() * 21) + 1;
    let total = 0;

    if (ability == "strength") {
        total = roll + parseInt(document.getElementById("str-mod").textContent);
    }
    else if (ability == "dexterity") {
        total = roll + parseInt(document.getElementById("dex-mod").textContent);
    }
    else if (ability == "constitution") {
        total = roll + parseInt(document.getElementById("con-mod").textContent);
    }
    else if (ability == "intelligence") {
        total = roll + parseInt(document.getElementById("int-mod").textContent);
    }
    else if (ability == "wisdom") {
        total = roll + parseInt(document.getElementById("wis-mod").textContent);
    }
    else if (ability == "charisma") {
        total = roll + parseInt(document.getElementById("cha-mod").textContent);
    }

    let description = document.createElement("p");
    if (ability == "") {
        description.innerText = "You forgot to choose a check.";
    }
    else {
        description.innerText = "You rolled a " + total + "(" + roll + ")" + " on your " + ability + " check.";
    }
    div.appendChild(description);

    document.getElementById("history").prepend(div);
}

function rollSave() {
    let div = document.createElement("div");
    let ability = document.getElementById("save").value;
    let roll = Math.floor(Math.random() * 21) + 1;
    let total = 0;

    if (ability == "strength") {
        total = roll + parseInt(document.getElementById("str-mod").textContent);
    }
    else if (ability == "dexterity") {
        total = roll + parseInt(document.getElementById("dex-mod").textContent);
    }
    else if (ability == "constitution") {
        total = roll + parseInt(document.getElementById("con-mod").textContent);
    }
    else if (ability == "intelligence") {
        total = roll + parseInt(document.getElementById("int-mod").textContent);
    }
    else if (ability == "wisdom") {
        total = roll + parseInt(document.getElementById("wis-mod").textContent);
    }
    else if (ability == "charisma") {
        total = roll + parseInt(document.getElementById("cha-mod").textContent);
    }

    let description = document.createElement("p");
    if (ability == "") {
        description.innerText = "You forgot to choose a save.";
    }
    else {
        description.innerText = "You rolled a " + total + "(" + roll + ")" + " on your " + ability + " save.";
    }
    div.appendChild(description);

    document.getElementById("history").prepend(div);
}

function rollAbility() {
    selectedClass = document.getElementById("classes").value;

    let div = document.createElement("div");
    let name = document.getElementById("actions").value;
    let atkRoll = Math.floor(Math.random() * 21) + 1;
    let type = "";
    let modifier = "";
    let damage = "";
    let range = "";
    let description = "";
    let bonus = 0;
    let totalAtk = 0;

    for (let i = 0; i < classes.length; i++) {
        if (classes[i].name == selectedClass) {
            actions = classes[i].actions;
            for (let x = 0; x < actions.length; x++) {
                if (name == actions[x].name){
                    type = actions[x].type;
                    modifier = actions[x].modifier;
                    damage = actions[x].damage;
                    range = actions[x].range;
                    description = actions[x].description;
                }
            }
        }
    }

    dmg = damage.split("d");
    let dmgRoll = 0;

    for (i = 0; i < parseInt(dmg[0]); i++){
        dmgRoll = dmgRoll + Math.floor(Math.random() * parseInt(dmg[1])) + 1;
    }

    if (modifier == "strength") {
        bonus = parseInt(document.getElementById("str-mod").textContent);
    }
    else if (modifier == "dexterity") {
        bonus = parseInt(document.getElementById("dex-mod").textContent);
    }
    else if (modifier == "constitution") {
        bonus = parseInt(document.getElementById("con-mod").textContent);
    }
    else if (modifier == "intelligence") {
        bonus = parseInt(document.getElementById("int-mod").textContent);
    }
    else if (modifier == "wisdom") {
        bonus = parseInt(document.getElementById("wis-mod").textContent);
    }
    else if (modifier == "charisma") {
        bonus = parseInt(document.getElementById("cha-mod").textContent);
    }

    dmgRoll = dmgRoll + bonus;
    totalAtk = atkRoll + bonus;

    let h3 = document.createElement("h3");
    h3.innerText = name;
    div.appendChild(h3);

    let h4 = document.createElement("h4");
    h4.innerText = "Range: " + range;
    div.appendChild(h4);

    if (type == "magical" || type == "physical") {
        let h5 = document.createElement("h5");
        h5.innerText = "Attack: " + totalAtk + "(" + atkRoll + ")";
        div.appendChild(h5);
        let h55 = document.createElement("h5"); 
        h55.innerText = "Damage: " + dmgRoll;
        div.appendChild(h55);
    }
    else if (type == "healing") {
        let h5 = document.createElement("h5");
        h5.innerText = "Heal: " + dmgRoll;
        div.appendChild(h5);
    }
    else if (type == "support") {
        let h5 = document.createElement("h5");
        h5.innerText = "Inspire: " + damage;
        div.appendChild(h5);
    }
    else {

    }

    div.classList.add(type);

    let p = document.createElement("p");
    p.innerText = description;
    div.appendChild(p);

    document.getElementById("history").prepend(div);
}