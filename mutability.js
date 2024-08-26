// const person = {
//     name: 'Rick',
//     age: 77,
//     country: 'US',
//   };

  const clone1 = JSON.parse(JSON.stringify(person));
  //const clone1 = {...person}
  const clone2 = Object.assign({}, person);
  const samePerson = person;
  
  // samePerson should be mutable
  person.age++;
  person.country = 'FR';

//   // Print the original person object and the clones
//   console.log('Original Person:', person);
//   console.log('Clone 1:', clone1);
//   console.log('Clone 2:', clone2);
//   console.log('Same Person:', samePerson);

//   // Check if the clones are unaffected by changes in the original person object
//   console.log('Clone 1 after change:', clone1);
//   console.log('Clone 2 after change:', clone2);
//   console.log('Same Person after change:', samePerson);

// // Output:
