const body = document.body;

const scheme = checkScheme() ?? detectScheme();
console.log({ scheme });
setScheme(scheme);

function checkScheme() {
  return localStorage.getItem('color-scheme');
}

function saveScheme(value) {
  localStorage.setItem('color-scheme', value);
}

function detectScheme() {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return 'dark';
  } else {
    return 'light';
  }
}

function setScheme(scheme) {
  body.classList.add(scheme);
}

function switchMode(el) {
  const bodyClass = body.classList;
  bodyClass.toggle('dark');
  bodyClass.toggle('light');
  
  bodyClass.contains('dark') ? saveScheme('dark') : saveScheme('light');
  
  bodyClass.contains('dark')
    ? (el.innerHTML = 'light')
    : (el.innerHTML = 'dark'); 
}


