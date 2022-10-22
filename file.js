function displayTime() {
  const date = new Date()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  const session = document.getElementById('session')

  if (hour >= 12) {
    session.innerHTML = 'PM'
  } else {
    session.innerHTML = 'AM'
  }

  document.getElementById('hours').innerHTML = hour
  document.getElementById('minutes').innerHTML = minute
  document.getElementById('seconds').innerHTML = second

  // console.log(hour)
  // console.log(minute)
  // console.log(second)
}
setInterval(displayTime, 1000)
// setInterval(displayTime, 10)