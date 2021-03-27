const valid = (firstName, lastName, password, email) => {
  if (!email || !firstName || !lastName || !password)
    return "Please add all fields"

  if (password.length < 6) {
    return "Password must at least 6 characters"
  }
  if (validateEmail(email)) return "Invalid emails."
}
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

export default valid
