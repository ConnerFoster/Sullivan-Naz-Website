const photos = document.querySelectorAll(".main-pics")



let currentPhoto = 0;


function iteratePhoto() {
   //photos[currentPhoto].style.display = "block";
   if (currentPhoto > ((photos.length)-2)) {
       currentPhoto = 0 //check this line if issues
   }
   else {currentPhoto++}
   //console.log(currentPhoto)
   setTimeout(iteratePhoto, 6000);
   displayPhoto()
}

function displayPhoto() {
    photos.forEach(photo => photo.style.display = "none")
    photos[currentPhoto].style.display = "block";
}

iteratePhoto()



