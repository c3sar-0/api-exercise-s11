const apiUrl = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
const container = document.getElementById("container");

const getData = async () => {
  const res = await fetch(apiUrl);

  if (res.status == "ok") {
    const data = await res.json();
    container.innerHTML = `
      <strong>${data.title}</strong>
      <p>${data.explanation}</p>
      <p>${data.copyright} - ${data.date}</p>
      <img src=${data.hdurl} class="image">
      `;
  } else {
    container.innerHTML = `An error ocurred!`;
    console.log(res);
  }
};

getData();
