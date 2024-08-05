// const draggables = document.querySelectorAll(".draggable");
// const gallery = document.querySelectorAll(".gallery");

// draggables.forEach((draggable) => {
//     draggable.addEventListener("dragstart", () => {
//         draggable.classList.add("dragging");
//     });

//     draggable.addEventListener("dragend", () => {
//         draggable.classList.remove("dragging");
//     })
// });

// gallery.forEach((image) => {
//     gallery.addEventListener("dragover", (e) => {
//         e.preventDefault();
//         const afterElement = getDragAfterElement(gallery, e.clientX);
//         const draggable = document.querySelector(".dragging");
//         if(afterElement === undefined){
//             image.appendChild(draggable)
//         }else{
//             image.insertBefore(draggable, afterElement)
//         }
//     })
// });

// function getDragAfterElement(container, x){
//     const draggableElements = [
//         ...gallery.querySelectorAll(".draggable:not(.dragging)")
//     ];

//     return draggableElements.reduce((closest, child) => {
//         const box = child.getBoundingClientRect();
//         const offset = x - box.left - box.width / 2;
//         if(offset < 0 && offset > closest.offset) {
//             return { offset: offset, element: child};
//         }else {
//             return closest;
//         }

//     }, {offset: Number.NEGATIVE_INFINITY}

// ).element; 
// }

const gallery = document.getElementById('gallery');
const images = gallery.querySelectorAll('img');
let dragImage = null;

images.forEach((image) => {

    image.addEventListener("dragstart", () => {
        image.classList.add("dragging");
        dragImage = image;
    });
    
    image.addEventListener("dragend", () => {
        image.classList.remove("dragging");
    });
    image.addEventListener("dragover", (e) => {
        e.preventDefault();
        console.log("드래그 오버");
    });
    image.addEventListener("drop", (e) => {
        e.preventDefault();
        if(dragImage != image){
            gallery.insertBefore(dragImage, image);
        }else{

        }
    })

})