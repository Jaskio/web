            /* Random oblik elementa */
            function randomShape() {
                randomNumber = Math.floor(Math.random() * 2);
                if (randomNumber == 0) {
                    document.getElementById("shape").style.borderRadius = "50%";
                } else {
                    document.getElementById("shape").style.borderRadius = "0%";
                }
            }
            
            /* Random pozicija elementa */
            function shapePosition() {
                document.getElementById("shape").style.top = (Math.random() * 400) + "px";
                document.getElementById("shape").style.left = (Math.random() * 800) + "px";
            }
            
            /* Random boja elementa */
            function shapeColor() {
                var red = Math.floor(Math.random() * 255);
                var green = Math.floor(Math.random() * 255);
                var blue = Math.floor(Math.random() * 255);
                document.getElementById("shape").style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
            }
            
            /* Random velicina elementa */
            function shapeSize() {
                var widthHeight = Math.random() * 150 + 100;
                document.getElementById("shape").style.width = widthHeight + "px";
                document.getElementById("shape").style.height = widthHeight + "px";
            }
            
            //Pocetak odbrojavanja
            var start = new Date().getTime();
            
            /* Prikaz elementa sa svim random karakteristikama */
            function makeShapeAppear() {
                randomShape();
                shapeSize();
                shapeColor();
                shapePosition();
                document.getElementById("shape").style.display = "block";
                start = new Date().getTime();
            }

            /* Pauza prilikom pojavljivanja novog elementa */
            function appearAfterDelay() {
                 setTimeout(makeShapeAppear, 1000);
            }
            
            appearAfterDelay();
            
            /* Izracun i ispis prolaznog vremena */
            document.getElementById("shape").onclick = function() {
                document.getElementById("shape").style.display = "none";
                var end = new Date().getTime();
                var elapsedTime = (end - start) / 1000;
                document.getElementById("time").innerHTML = elapsedTime + "s";
                appearAfterDelay();
            }