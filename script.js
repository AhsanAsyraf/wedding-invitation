(() => {
  // The venue time is Malaysia Time (UTC+08:00): 25 December 2026, 8:00 PM.
  const target = new Date("2026-12-25T20:00:00+08:00").getTime();
  const dayEl = document.getElementById("days");
  const hourEl = document.getElementById("hours");
  const minuteEl = document.getElementById("minutes");
  const secondEl = document.getElementById("seconds");
  if (!dayEl || !hourEl || !minuteEl || !secondEl) return;

  const pad = (value) => String(value).padStart(2, "0");
  const updateCountdown = () => {
    const remaining = Math.max(0, target - Date.now());
    const days = Math.floor(remaining / 86400000);
    const hours = Math.floor((remaining % 86400000) / 3600000);
    const minutes = Math.floor((remaining % 3600000) / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);
    dayEl.textContent = pad(days);
    hourEl.textContent = pad(hours);
    minuteEl.textContent = pad(minutes);
    secondEl.textContent = pad(seconds);
  };

  updateCountdown();
  window.setInterval(updateCountdown, 1000);
})();
