const celsiusInput = document.getElementById('celsiusInput');
const fahrenheitInput = document.getElementById('fahrenheitInput');
const explanationDiv = document.getElementById('explanation');

function updateExplanation(result, formula, calculation, basicConversion) {
  explanationDiv.innerHTML = `
    <h2>PENJELASAN :</h2>
    <p><strong>Hasil:</strong> ${result}</p>
    <p><strong>Rumus:</strong> ${formula}</p>
    <p><strong>Perhitungan:</strong> ${calculation}</p>
    <p><strong>Penjelasan dasar:</strong> ${basicConversion}</p>
  `;
}

function sanitizeInput(value) {
  // Hapus semua spasi
  value = value.replace(/\s+/g, '');
  // Ganti koma menjadi titik
  value = value.replace(',', '.');
  return value;
}

celsiusInput.addEventListener('input', () => {
  const sanitizedValue = sanitizeInput(celsiusInput.value);
  const celsiusValue = parseFloat(sanitizedValue);

  if (!isNaN(celsiusValue)) {
    const fahrenheit = (celsiusValue * 9 / 5) + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);

    updateExplanation(
      `${celsiusValue}°C = ${fahrenheit.toFixed(2)}°F`,
      "(°C × 9/5) + 32 = °F",
      `(${celsiusValue} × 9/5) + 32 = ${fahrenheit.toFixed(2)}°F`,
      "1°C = 33.8°F"
    );
  } else {
    fahrenheitInput.value = '';
    explanationDiv.innerHTML = '<h2>PENJELASAN :</h2>';
  }
});

fahrenheitInput.addEventListener('input', () => {
  const sanitizedValue = sanitizeInput(fahrenheitInput.value);
  const fahrenheitValue = parseFloat(sanitizedValue);

  if (!isNaN(fahrenheitValue)) {
    const celsius = (fahrenheitValue - 32) * 5 / 9;
    celsiusInput.value = celsius.toFixed(2);

    updateExplanation(
      `${fahrenheitValue}°F = ${celsius.toFixed(2)}°C`,
      "(°F - 32) × 5/9 = °C",
      `(${fahrenheitValue} - 32) × 5/9 = ${celsius.toFixed(2)}°C`,
      "1°F = -17.22°C"
    );
  } else {
    celsiusInput.value = '';
    explanationDiv.innerHTML = '<h2>PENJELASAN :</h2>';
  }
});