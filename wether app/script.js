function convertTemperature() {
    const celsiusInput = document.getElementById('celsius').value;
    const fahrenheitInput = document.getElementById('fahrenheit').value;

    if (celsiusInput !== '') {
        const celsius = parseFloat(celsiusInput);
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    } else if (fahrenheitInput !== '') {
        const fahrenheit = parseFloat(fahrenheitInput);
        const celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('celsius').value = celsius.toFixed(2);
    } else {
        // If both inputs are empty, clear the other input
        document.getElementById('fahrenheit').value = '';
        document.getElementById('celsius').value = '';
    }
}
