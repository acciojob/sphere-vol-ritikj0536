function volume_sphere() {
  // Get the value from the input field
  const radiusInput = document.getElementById("radius").value;

  // Convert the value to a number
  const r = parseFloat(radiusInput);

  // Get the output field
  const volumeOutput = document.getElementById("volume");

  // Check for invalid or negative input
  if (isNaN(r) || r < 0) {
    volumeOutput.value = NaN;
    return false; // prevent form submission
  }

  // Calculate volume: (4/3) * π * r³
  const volume = (4 / 3) * Math.PI * Math.pow(r, 3);

  // Display result rounded to 4 decimal places
  volumeOutput.value = volume.toFixed(4);

  return false; // prevent form submission
}

// Attach the function to the form submission
document.getElementById("MyForm").onsubmit = volume_sphere;
