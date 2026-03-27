const bulb = document.getElementById("bulb");
const button = document.getElementById("toggleBtn");
const statusText = document.getElementById("status");

let isOn = false;

button.addEventListener("click", function() 
{
    if (isOn) 
    {
        bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
        statusText.textContent = "The bulb is OFF";
        button.textContent = "Turn ON";
        isOn = false;
    } else 
    {
        bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
        statusText.textContent = "The bulb is ON";
        button.textContent = "Turn OFF";
        isOn = true;
    }
});
