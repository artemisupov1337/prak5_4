const numInput = document.getElementById("num")
const btn = document.getElementById("btn")

function calc() {
  const num = parseFloat(numInput.value);

  if (isNaN(num)) {
    alert("Enter the number!")
    return
  }

  switch (true) {
    case (num > 4):
      alert(`x > 4\n\n${Math.log(num) + 3}`)
      break
    case (num == 4):
      alert(`x = 4\n\n${35*Math.PI}`)
      break
    case (num < 4):
      alert(`x < 4\n\n${Math.tan(num) - Math.pow(num, 2)}`)
      break
  }
}

btn.addEventListener("click", calc)
