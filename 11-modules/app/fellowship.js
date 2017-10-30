// How do other files access this data?
// export keyword does that :)

//Let's export the fellowship array below
// const fellowship = ['Frodo', 'Sam', 'Gandalf'];
const fellowship = ['Frodo', 'Sam', 'Gandalf'];
const total = fellowship.length;
export { fellowship, total };