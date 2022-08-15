window.onload = () => {

    //calls background canvas from html to set where drawing will occur 
    var canvas = document.getElementById('background-canvas');
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    var ctx = canvas.getContext('2d');
    //randomly generates operations 
    function getRandomFromList(l) {
        return l[Math.round(Math.random() * (l.length - 1))]
    }

    var locations = [];
    var ops = ['+', '-', 'x', '/'];
    var directions = [1, -1]

    //up to 50 operations 
    for (var i = 0; i < 50; i++) {
        locations.push({
            op: getRandomFromList(ops),
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            moveDirectionX: getRandomFromList(directions),
            moveDirectionY: getRandomFromList(directions),
            fontSize: Math.random() * 50 + 10
        });
    }

    //movement and direction of the list of operations 
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        locations.forEach((location) => {
            ctx.font = `${location.fontSize}px Arial`;
            ctx.fillText(location.op, location.x, location.y);
        });


        locations.forEach((location) => {
            if (location.x > canvas.width) {
                location.moveDirectionX = -1;
            }
            if (location.y > canvas.height) {
                location.moveDirectionY = -1;
            }
            if (location.y < 0) {
                location.moveDirectionY = 1;
            }
            if (location.x < 0) {
                location.moveDirectionX = 1;
            }
            location.x += 1 * location.moveDirectionX;
            location.y += 1 * location.moveDirectionY;

        })


        requestAnimationFrame(animate)
    }
    animate();
}