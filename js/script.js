// Cristiano
// ICS2O-Unit3-03-HTML
// April 4 2022

/**
 * Calculates the volume of a sphere using the radius the user provides in number fields.
 */
function calculate() {
  const radius = parseFloat(document.getElementById("radius").value)
  const answer = ((4 / 3) * Math.PI * (radius ** 3)).toFixed(2)

  document.getElementById("output").innerHTML = "<br><p>The volume of this sphere is " + answer + " cm³</p>"
}
