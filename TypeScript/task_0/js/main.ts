interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Création de deux étudiants
  const student1: Student = {
    firstName: "Jean",
    lastName: "Dupont",
    age: 21,
    location: "Paris"
  };
  
  const student2: Student = {
    firstName: "Marie",
    lastName: "Curie",
    age: 22,
    location: "Lyon"
  };
  
  // Liste des étudiants
  const studentsList: Student[] = [student1, student2];
  
  // Création du tableau HTML
  document.addEventListener("DOMContentLoaded", () => {
    const table = document.createElement("table");
    const tableHead = document.createElement("thead");
    const tableBody = document.createElement("tbody");
  
    // Ajouter les en-têtes du tableau
    const headerRow = document.createElement("tr");
    const headers = ["First Name", "Location"];
  
    headers.forEach(headerText => {
      const th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
  
    tableHead.appendChild(headerRow);
  
    // Ajouter les lignes pour chaque étudiant
    studentsList.forEach(student => {
      const row = document.createElement("tr");
  
      const firstNameCell = document.createElement("td");
      firstNameCell.textContent = student.firstName;
  
      const locationCell = document.createElement("td");
      locationCell.textContent = student.location;
  
      row.appendChild(firstNameCell);
      row.appendChild(locationCell);
      tableBody.appendChild(row);
    });
  
    table.appendChild(tableHead);
    table.appendChild(tableBody);
    document.body.appendChild(table);
  });
  