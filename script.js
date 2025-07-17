function calculateAge() {
  const dob = document.getElementById('dob').value;
  const result = document.getElementById('result');

  if (!dob) {
    result.innerHTML = `<p style="color: #ffeb3b;">Please select your date of birth.</p>`;
    return;
  }

  const birthDate = new Date(dob);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.innerHTML = `
    <div class="result-box">
      <span>${years}</span>
      <label>Years</label>
    </div>
    <div class="result-box">
      <span>${months}</span>
      <label>Months</label>
    </div>
    <div class="result-box">
      <span>${days}</span>
      <label>Days</label>
    </div>
  `;
}
