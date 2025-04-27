let data;  // la declaras en ámbito superior

async function loadData() {
  try {
    const response = await fetch('js/data.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    data = await response.json();   // asignas el JSON a tu variable
    console.log('Datos cargados:', data);
  } catch (err) {
    console.error('Error al cargar JSON:', err);
  }
}

function loadSocialIcon(icons) {
  if (icons.length>0) {
    var social_icon = document.getElementById("social_icon");
    social_icon.innerHTML = "<h1>facebook</h1>"
    console.log('icons: ',icons)
  }
}

loadData().then(() => {
  // aquí te aseguras de que loadData() ya terminó
  console.log('data:', data);
  //loadSocialIcon(data.social)
});