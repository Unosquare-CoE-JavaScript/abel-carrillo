/*  The new "Avengers" movie has just been released! There are a 
lot of people at the cinema box office standing in a huge line. 
Each of them has a single 100, 50 or 25 dollars bill. A "Avengers" 
ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket 
to every single person in this line.

Can Vasya sell a ticket to each person and give the change 
if he initially has no money and sells the tickets strictly in 
the order people follow in the line?

Return YES, if Vasya can sell a ticket to each person and give the change. 
Otherwise return NO.*/

function tickets(peopleInLine) {
    const change = {
        "25": 0,
        "50": 0,
        "100": 0,
    };

    for (const i in peopleInLine) {
        if (peopleInLine[i] === 25) {
            change["25"] += 1;
        } else if (peopleInLine[i] === 50) {
            if (change["25"] > 0) {
                change["50"] += 1;
                change["25"] -= 1;
            } else {
                return "NO";
            }
        } else {
            if (change["50"] > 0 && change["25"] > 0) {
                change["50"] -= 1;
                change["25"] -= 1;
                change["100"] += 1;
            } else if (change["25"] >= 3) {
                change["25"] -= 3;
                change["100"] += 1;
            } else {
                return "NO";
            }
        }
    }
    return "YES";
}