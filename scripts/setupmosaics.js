function setupMosaics() {
    fetch("gallery_captions.json")
        .then(response => response.json())
        .then(data => {
            let galleryObject = document.getElementById("gallery");
            for(let d in data) {
                let image = data[d];
                if(image["caption"] !== "") {
                    galleryObject.innerHTML = galleryObject.innerHTML +
                        "<div id='galleryimagecontainer" + image["filename"].substr(5,3)+ "' class='galleryimage-container'>" +
                            "<img src='" + image["filename"] + "' width='20%' class='gallery-image' alt='"+image["caption"]+"' id='galleryimage"+image["filename"].substr(5,3)+"' onclick='showGalleryImageDetails(\""+image["filename"].substr(5,3)+"\")'/>" +
                            "<p class='galleryimage-text'>" + image["caption"] + "</p>" +
                        "</div>";
                } else {
                    galleryObject.innerHTML = galleryObject.innerHTML + "<div id='galleryimagecontainer" + image["filename"].substr(5,3)+ "' class='galleryimage-container'><img src=\"" + image["filename"] + "\" width='20%' class='gallery-image' alt='"+image["caption"]+"' id='galleryimage"+image["filename"].substr(5,3)+"' onclick='showGalleryImageDetails(\""+image["filename"].substr(5,3)+"\")'/>" + "</div>";
                }
            }
        });
}
