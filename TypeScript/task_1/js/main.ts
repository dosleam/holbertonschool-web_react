interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number; // Propriété optionnelle
    location: string;
    [key: string]: any; // Signature d'index pour des attributs supplémentaires
  }
  
  // Exemple d'utilisation de l'interface Teacher
  const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false, // Propriété additionnelle
  };
  
  console.log(teacher3);
  
  // Affichage attendu :
  // Object
  // contract: false
  // firstName: "John"
  // fullTimeEmployee: false
  // lastName: "Doe"
  // location: "London"
  