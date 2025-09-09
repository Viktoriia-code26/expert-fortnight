
function createUser(user: { name: string; age: number }): { name: string; age: number; isAdmin: boolean } {
  return {
    ...user,
    isAdmin: false
  };
}

createUser({ name: "Alice", age: 30 });

console.log(createUser({name: "Alice", age: 30 }));