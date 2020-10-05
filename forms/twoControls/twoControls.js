
ddFruits.onclick = function(s) {
  let name = lblName.value
  if (typeof(s) == "object") {
        return;
}
    
NSB.MsgBox(`${name}, your favorite fruit is a ${ddFruits.selection}.`);
}


imgVinny.onmouseover = function() {
NSB.MsgBox("You found Vinny!")
}

