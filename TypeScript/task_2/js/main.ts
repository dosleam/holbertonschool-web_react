// Définition du type littéral de chaîne Subjects
type Subjects = "Math" | "History";

// Fonction teachClass qui retourne une chaîne en fonction de todayClass
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
  return ""; // Cas de secours, mais ce ne devrait pas arriver avec le type Subjects
}

// Test de la fonction
console.log(teachClass("Math"));     // Affiche "Teaching Math"
console.log(teachClass("History"));  // Affiche "Teaching History"
