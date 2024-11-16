function calculateWinnings() {
    const betAmount = parseFloat(document.getElementById('bet-amount').value);
    const odds = parseFloat(document.getElementById('odds').value);

    if (isNaN(betAmount) || isNaN(odds) || betAmount <= 0 || odds <= 0) {
        alert("Please enter valid bet amount and odds!");
        return;
    }

    const winnings = betAmount * odds;
    document.getElementById('result').innerText = `Potential Winnings: $${winnings.toFixed(2)}`;
}
