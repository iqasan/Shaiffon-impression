 var images = ["slideshow_1.jpg", "slideshow_2.jpg", "slideshow_5.jpg", "slideshow_6.jpg","slideshow_3.jpg"];
        var totalImages = 5;
        var currentImage = 0;
        var next = true;
        showNext();
        setInterval(function () {
            showNext();

        }, 4000)
        function showNext() {
            if (!next) currentImage++;
            if (currentImage == totalImages) currentImage = 0;
            document.getElementById("slider").innerHTML = "<img src='images/" + images[currentImage] + "' class='setValue' />"
            dotCircles()
            currentImage++;
            next = true;
        }
        function showPrevious() {
            if (next) currentImage--;
            if (currentImage == 0) currentImage = totalImages;
            document.getElementById("slider").innerHTML = "<img src='images/" + images[currentImage - 1] + "' class='setValue' />"
            currentImage--;
            dotCircles();
            next = false;
        }
        function dotCircles() {
            var a = document.getElementsByClassName("circles");
            for (var i = 0; i < a.length; i++) {
                if (i == currentImage) {
                    a[i].id = "changeBackground";
                }
                else {
                    a[i].id = "removeBackground";
                }

            }
        }