function setupHome() {
    fetch("home.json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("home-title").innerText = data["title"];
            document.getElementById("home-subtitle").innerText = data["subtitle"];
            document.getElementById("home-date").innerText = data["date"];
            document.getElementById("home-description").innerText = data["description"];
            if(data["contact"]) {
                document.getElementById("home-contact").innerText = "Contact Me!";
            }
            document.getElementById("home-img").setAttribute("src", data["image"])
        });
}