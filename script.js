window.addEventListener('DOMContentLoaded', () => {
    fetchActualUSDExchangeRate();
});

function fetchActualUSDExchangeRate() {
    const exchangeRatesUrl = 'https://open.er-api.com/v6/latest/USD';

    fetch(exchangeRatesUrl)
        .then(response => {
            if (!response.ok) throw new Error('Błąd pobierania danych z API');
            return response.json();
        })
        .then(data => {
            const actualExchangeRate = data.rates.PLN;

            if (actualExchangeRate) {
                const exchangeRate = document.getElementById('usdpln');
                if (exchangeRate) {
                    exchangeRate.value = actualExchangeRate.toFixed(2);
                    calculate();
                }
            }
        })
        .catch(error => {
            console.log('Błąd API. Używam domyślnego kursu 4.00.', error);
        });
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}

function calculate() {
    const price = parseFloat(document.getElementById('price').value) || 0;
    const taxPercent = parseFloat(document.getElementById('tax').value) || 0;
    const tipPercent = parseFloat(document.getElementById('tip').value) || 0;
    const exchangeRate = parseFloat(document.getElementById('usdpln').value) || 4.00;

    const tax = price * (taxPercent / 100);
    const tip = price * (tipPercent / 100);

    const sumUSD = price + tax + tip;
    const sumPLN = sumUSD * exchangeRate;

    document.getElementById('resUSD').innerText = '$' + sumUSD.toFixed(2);
    document.getElementById('resPLN').innerText = sumPLN.toFixed(2) + ' zł';
}
