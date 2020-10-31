const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

// Event Listeners
addEventListener('mousemove', (event) => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})



class Circle {
    constructor(x, y, r, c, count) {
        this.x = x
        this.y = y
        this.r = r
        this.c = c
        this.count = count
        this.ttl = cw + ch
    }

    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.c
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false)
        ctx.fill()
        ctx.closePath()
    }

    update() {
        this.draw()
        this.x += this.count.x
        this.y += this.count.y
        this.ttl--
    }
}


function random() {

}



let circles = []
let fireGame = []

addEventListener('click', e => {


    const angle = Math.atan2(e.clientY - ch, e.clientX - cw / 2)
    const countX = Math.cos(angle)
    const countY = Math.sin(angle)
    const circleCount = 10
    const r = 2


    for (let i = 0; i < circleCount; i++) {

        circles.push(
            new Circle(cw / 2, ch, r, 'white', {
                x: countX,
                y: countY
            })
        )

        fireGame.push(
            new Circle(0, 0, 20, 'yellow', null)
        )
    }

    function animate() {
        ctx.fillStyle = 'rgba(0,0,0,0.05)'
        ctx.fillRect(0, 0, cw, ch)
        requestAnimationFrame(animate)

        circles.forEach((circle, i) => {
            if (circle.ttl < 0) {
                circles.splice(i, 1)
            } else {
                circle.update()
            }

            if (circle.x < 0) {
                fireGame.forEach(fire => {

                })
            }
        })
    }

    animate()

})


