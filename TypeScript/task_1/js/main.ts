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
  
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  
  // Exemple d'utilisation
  console.log(printTeacher("John", "Doe")); // J. Doe
  
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
  
  interface StudentClassConstructor {
    firstName: string;
    lastName: string;
  }
  
  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
  
    constructor({ firstName, lastName }: StudentClassConstructor) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  // Exemple d'utilisation
  const student = new StudentClass({ firstName: "Jane", lastName: "Doe" });
  console.log(student.displayName()); // Jane
  console.log(student.workOnHomework()); // Currently working
