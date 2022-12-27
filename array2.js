function User(name, age, isAdmin) {
    this.name = name;
    this.age = age;
    this.isAdmin = isAdmin;
  }
  
  const users = [
    new User('Alice', 42, true),
    new User('Bob', 24, false),
    new User('Charlie', 18, false),
    new User('Dave', 32, true),
    new User('Eve', 53, false)
  ];
  
  // a) Create a new array consisting only of user's that have an age greater than 20.
  const usersOver20 = users.filter(function(user) {
    return user.age > 20;
  });
  console.log(usersOver20);

  [
    { name: 'Alice', age: 42, isAdmin: true },
    { name: 'Bob', age: 24, isAdmin: false },
    { name: 'Dave', age: 32, isAdmin: true },
    { name: 'Eve', age: 53, isAdmin: false }
  ]

  
  // b) Create a new array consisting only of user's that are admins.
  const admins = users.filter(function(user) {
    return user.isAdmin;
  });
  console.log(admins);

  [
    { name: 'Alice', age: 42, isAdmin: true },
    { name: 'Dave', age: 32, isAdmin: true }
  ]
  
  // c) Create a new array consisting only of user's that are both admin and have an age less than 50.
  const youngAdmins = users.filter(function(user) {
    return user.isAdmin && user.age < 50;
  });
  console.log(youngAdmins);

  [
    { name: 'Alice', age: 42, isAdmin: true },
    { name: 'Dave', age: 32, isAdmin: true }
  ]

  
  // d) Sort the array by the user's names, alphabetically, ascending.
  const sortedByName = users.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
  console.log(sortedByName);

  [
    { name: 'Alice', age: 42, isAdmin: true },
    { name: 'Bob', age: 24, isAdmin: false },
    { name: 'Charlie', age: 18, isAdmin: false },
    { name: 'Dave', age: 32, isAdmin: true },
    { name: 'Eve', age: 53, isAdmin: false }
  ]

  // e) Sort the array by the user's age, descending (oldest to youngest).

  const sortedByAge = users.sort(function(a, b) {
    return b.age - a.age;
  });
  console.log(sortedByAge);
  [
    { name: 'Eve', age: 53, isAdmin: false },
    { name: 'Alice', age: 42, isAdmin: true },
    { name: 'Dave', age: 32, isAdmin: true },
    { name: 'Bob', age: 24, isAdmin: false },
    { name: 'Charlie', age: 18, isAdmin: false }
  ]