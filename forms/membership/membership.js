
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

let userName = ""

btnSubmitMem.onclick=function() {
 let userName = inptUserName.value
  if (members.includes(userName)) {
    lblMessageMem.textContent = `${userName} is a member`
  } else {
    members.push(userName)
  lblMessageMem.textContent = `${userName} has been added as a member`
  members.push(userName)
  }
}

