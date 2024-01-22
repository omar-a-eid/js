let alarmTimeout;

function setAlarm() {
  const hours = parseInt(document.getElementById("hour-input").value, 10) || 0;
  const minutes =
    parseInt(document.getElementById("minute-input").value, 10) || 0;
  const seconds =
    parseInt(document.getElementById("second-input").value, 10) || 0;

  const alarmDateTime = new Date();
  alarmDateTime.setHours(hours, minutes, seconds);

  const timeUntilAlarm = alarmDateTime - new Date();

  if (timeUntilAlarm > 0) {
    alarmTimeout = setTimeout(() => {
      alert("Beep Beep!");
    }, timeUntilAlarm);
    alert("Alarm set!");
  } else {
    alert("Please select a future time for the alarm.");
  }
}

function clearAlarm() {
  if (alarmTimeout) {
    clearTimeout(alarmTimeout);
    alert("Alarm cleared!");
  } else {
    alert("No alarm is set.");
  }
}
