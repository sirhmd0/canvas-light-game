addEventListener('resize', () => {
    cw = innerWidth
    ch = innerHeight

    init()
})


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
    constructor(x, y, r, c, radian) {
        this.x = x
        this.y = y
        this.r = r
        this.c = c
        this.radian = radian
        this.ttl = 1000
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
        this.x += this.radian.x;
        this.y += this.radian.y;
        this.ttl--

    }
}


let circles

function init() {
    circles = []
}

const circlesCount = 40

function generateRing() {

    setTimeout(generateRing, 500)
    const color = Math.random() * 360

    for (let i = 0; i < circlesCount; i++) {

        const count = (Math.PI * 2) / circlesCount;
        const x = mouse.x
        const y = mouse.y
        const r = 2

        circles.push(
            new Circle(x, y, r, `hsl(${color},100%,50%)`,
            {
                x: Math.cos(count * i) * 1,
                y: Math.sin(count * i) * 1
            }))
    }

}



function animate() {
    requestAnimationFrame(animate)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
    ctx.fillRect(0, 0, cw, ch)
    circles.forEach((circle, i) => {
        if (circle.ttl < 0) {
            circles.splice(i, 1)
        } else {
            circle.update()
        }
    })
}
init()
animate()
generateRing()
