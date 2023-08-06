const subjects = document.querySelectorAll("[data-subject]");
const data = getData();

function getData () {
  try {
    const data = JSON.parse(localStorage.getItem("subjects") || "{}");
    return data ? data : {};
  } catch (error) {
    console.error(error);
    return {};
  }
}

window.onload = () => initData();

function saveData () {
  localStorage.setItem("subjects", JSON.stringify(data));
}

function initData () {
  subjects.forEach((element, index) => {
    element.innerText = data[index] || "";
  });
}

for (let i = 0; i < subjects.length; i++) {
  const index = i;
  subjects[i].addEventListener("input", (event) => {
    data[index] = event.target.textContent;
    saveData();
  });
}