// Création d'un type pour les employés
type Employee = {
    id: number;
    role: string; // rôle de l'employé (par exemple, "Director" ou "Teacher")
  };
  
  // Fonction pour créer un employé (peut être modifiée selon les besoins)
  function createEmployee(id: number): Employee {
    if (id < 500) {
      return { id, role: "Teacher" };
    }
    return { id, role: "Director" };
  }
  
  // Fonction de type prédicat qui vérifie si l'employé est un directeur
  function isDirector(employee: Employee): employee is Employee & { role: "Director" } {
    return employee.role === "Director";
  }
  
  // Fonction spécifique pour les tâches d'un directeur
  function workDirectorTasks() {
    console.log("Getting to director tasks");
  }
  
  // Fonction spécifique pour les tâches d'un enseignant
  function workTeacherTasks() {
    console.log("Getting to work");
  }
  
  // Fonction qui exécute les tâches en fonction du rôle de l'employé
  function executeWork(employee: Employee) {
    if (isDirector(employee)) {
      workDirectorTasks();
    } else {
      workTeacherTasks();
    }
  }
  
  // Test des fonctions avec des employés
  executeWork(createEmployee(200));  // Affiche "Getting to work"
  executeWork(createEmployee(1000)); // Affiche "Getting to director tasks"
  