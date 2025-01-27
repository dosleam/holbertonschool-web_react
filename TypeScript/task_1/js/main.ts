interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number; // Propriété optionnelle
    location: string;
    [key: string]: any; // Signature d'index pour des attributs supplémentaires
  }
  
  interface Directors extends Teacher {
    numberOfReports: number; // Attribut requis
  }
  
  // Exemple d'utilisation de l'interface Directors
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  console.log(director1);
  
  // Affichage attendu :
  // Object
  // firstName: "John"
  // fullTimeEmployee: true
  // lastName: "Doe"
  // location: "London"
  // numberOfReports: 17
  