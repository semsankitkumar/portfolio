const typed = document.querySelector('.typed')
const roles = [
    'Software Developer',
    'Nature Lover',
    'Melophile'
]

let currentIdx = 0

function nextRole() {
    currentIdx = (currentIdx + 1) % roles.length
    return roles[currentIdx]
}

async function type() {
    let currentRole = nextRole()
    let text = ''
    let cIdx = 0
    let direction = 1
    
    async function getNextChar() {
        if(direction == 1) {
            text += currentRole[cIdx]
        } else {
            text = text.slice(0, -1)
        }
        
        cIdx += direction
        
        if(cIdx >= currentRole.length) {
            direction = -1
            // await new Promise(r => setTimeout(r, 2000));
        }

        if(cIdx <= 0) {
            direction = 1
            currentRole = nextRole()
        }
    }

    setInterval(async function() {
        typed.textContent = text
        await getNextChar()
    }, 150)
}

type()