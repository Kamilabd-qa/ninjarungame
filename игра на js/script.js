const ninja = document.getElementById("ninja");
const tree = document.getElementById("tree");

document.addEventListener("keydown", function(event) {
    jump();
});
function jump () {
  if (ninja.classList != "jump") {
    ninja.classList.add("jump")
  }
  setTimeout( function() {
    ninja.classList.remove("jump")
  }, 300)
}

let isAlive = setInterval ( function() {
    let ninjaTop = parseInt(window.getComputedStyle(ninja).getPropertyValue("top"));
    let treeLeft = parseInt(window.getComputedStyle(tree).getPropertyValue("left"));

    if (treeLeft < 50 && treeLeft > 0 && ninjaTop >=180) {
        alert("GAME OVER!!")
    }
}, 12)


