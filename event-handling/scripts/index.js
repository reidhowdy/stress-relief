const addFire = () => {
    const newFire = document.createElement("span");
    const fireContainer = document.querySelector("#fireContainer");
    newFire.textContent = "🔥";
    fireContainer.appendChild(newFire);
}

const registerEventHandlers = () => {
    const fireButton = document.querySelector("#addFireButton");
    fireButton.addEventListener("click", addFire);

};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
