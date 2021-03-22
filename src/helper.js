export const greetUser = (user) => {
  return 'Hello ' + user
}

export const createRandomNumber = () => Math.ceil(Math.random() * 10)
// we're ALSO exporting createRandomNumber

export default greetUser
// default export can happen just for ONE function
