const clock = document.querySelector('h2#clock')

function getClock() {
  const date = new Date();
  // padStart로 2칸안에 문자가 1칸만있을경우 0을 추가
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// getClock();
// setInterval(getClock, 1000);

function sayHello(){
  // 오전, 오후 나오게
  // clock.innerText = new Date().toLocaleTimeString();

  // toLocaleTimeString() 메서드에 옵션 추가하시면 24시간 형식도 됩니다.
  clock.innerText = new Date().toLocaleTimeString("en-US", { hour12: false });
}

sayHello()
setInterval(sayHello, 1000);