const API_BASE_URL = "https://earngenius-backend.onrender.com";

let coins = 0;

function updateBalance() {
  document.getElementById('coin-balance').innerText = coins;
}

// ✅ Load current coin balance from server
function loadCoins() {
  fetch(`${API_BASE_URL}/api/user/balance`)
    .then(res => res.json())
    .then(data => {
      coins = data.coins;
      updateBalance();
    })
    .catch(() => {
      alert("Failed to load balance.");
    });
}

// ✅ Watch video
function watchVideo() {
  fetch(`${API_BASE_URL}/api/earn/watch`, { method: "POST" })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
      coins = data.coins;
      updateBalance();
    });
}

// ✅ Click ad
function clickAd() {
  fetch(`${API_BASE_URL}/api/earn/ad`, { method: "POST" })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
      coins = data.coins;
      updateBalance();
    });
}

// ✅ Daily check-in
function dailyCheckIn() {
  fetch(`${API_BASE_URL}/api/check-in`, { method: "POST" })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
      coins = data.coins;
      updateBalance();
    });
}

// ✅ Redeem
function redeemCoins() {
  if (coins < 50) {
    alert("You need at least 50 coins to redeem.");
    return;
  }

  fetch(`${API_BASE_URL}/api/redeem`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount: coins })
  })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
      coins = data.coins;
      updateBalance();
    });
}

loadCoins();
