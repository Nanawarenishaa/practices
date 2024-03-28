function moveItem(item) {
   const selectedItem = item.cloneNode(true);
   const removeIcon = document.createElement("i");
   removeIcon.className = "ri-close-circle-line remove-icon";
   
   removeIcon.addEventListener("click", function(event) {
      event.stopPropagation();
      this.parentNode.remove();
  });
   selectedItem.innerHTML = `${selectedItem.textContent} `;
   selectedItem.appendChild(removeIcon);
   
   document.getElementById("selectedList").appendChild(selectedItem);
  
}
    // Event delegation for removing items
    document.getElementById("selectedList").addEventListener("click", function(event) {
      if (event.target && event.target.classList.contains("remove-icon")) {
          event.target.parentNode.remove();
      }
  });

