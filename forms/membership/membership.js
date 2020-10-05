
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

let userName = ""

btnSubmitMem.onclick=function() {
  userName = inptUserName.value
  if (members.includes(userName))
    lblMessage.textContent = "You are a member"
  else {
  lblMessageMem.textContent = "You are not a member"
  members.push(userName)
  }
}

