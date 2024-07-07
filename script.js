// Lista haseł
const passwords = ["StickMan", "Naganix", "The", "Shark", "TheKettle"];

// Funkcja sprawdzająca hasło
function checkPassword() {
    const passwordInput = document.getElementById("passwordInput").value;
    const result = document.getElementById("result");

    if (passwordInput === "Spiffo") {
        document.getElementById("mainContent").innerHTML = '<h1>OCZEKUJCIE DALEJ</h1>';
    } else if (passwords.includes(passwordInput)) {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    } else {
        result.textContent = "Nieprawidłowe hasło";
    }
}
