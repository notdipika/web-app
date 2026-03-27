const addBtn = document.getElementById('addBtn');
const removeBtn = document.getElementById('removeBtn');
const addInputBtn = document.getElementById('addInputBtn');
const itemList = document.getElementById('itemList');
const itemInput = document.getElementById('itemInput');
  
addBtn.addEventListener('click', () => 
{
    const li = document.createElement('li');
    li.textContent = `New Item`;
    li.style.backgroundColor = "yellow";
    itemList.appendChild(li);
});

removeBtn.addEventListener('click', () => 
{
    if(itemList.lastChild)
        {
            itemList.removeChild(itemList.lastChild);
        } else 
        {
            alert("No items to remove!");
        }
});

    
addInputBtn.addEventListener('click', () => 
{
    const value = itemInput.value.trim();
    if(value !== "")
        {
            const li = document.createElement('li');
            li.textContent = value;
            li.style.backgroundColor = "yellow";
            itemList.appendChild(li);
            itemInput.value = "";
        } else 
        {
            alert("Please enter an item!");
        }
});