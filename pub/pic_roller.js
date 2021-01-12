(function(global, document) { 
function picRoller() {
    this.pictures = []
    this.picture_clickable = false
    this.buttons = []
    this.autoPlay = false
    this.actived= 0
    this.clicked = 0
    this.next = 0
    this.moveHorizontal = false
    this.speed = 3000
    this.multiPic = 1
    this.hoverOnPause = false
    this._pause = false
}

picRoller.prototype = {
    
    addButtonText: function (button, textContent) {
        const targetButton = this.buttons[button]
        targetButton.innerText = textContent
    },
    setSpeed(speed){
        this.speed = speed
    },
    setMutiPic(mutipic){
        this.multiPic = mutipic
    },
    horizontal: function(horizontal){
        this.moveHorizontal = horizontal
    },
    auto: function(autoplay){
        this.autoPlay = autoplay
    },
    clickable: function(clickable){
        this.picture_clickable = clickable
    },
    hoverPause: function(){
        this.hoverOnPause = true
    },
    _checkNext: function(current){
        if (current < this.pictures.length - this.multiPic){
            return current + this.multiPic
        }
        return current  - this.pictures.length + this.multiPic
    },
    _getpixel: function(display, clicked){
        let buttons = this.buttons
        let pixels = -display * clicked
        buttons[this.actived].classList.remove('active');
        buttons[clicked].classList.add('active');
        this.actived = clicked;
        this.next = this._checkNext(this.actived)
        return pixels
    },
    _moveVertical: function(clicked, displayRegion){
        const picturesWrapper = displayRegion.querySelector('.pictures-wrapper-vertical')
        if(this.actived != clicked){
            let displayArea = picturesWrapper.parentElement.clientHeight;
            let pixels = this._getpixel(displayArea, clicked)
            picturesWrapper.style.transform = 'translateY('+ pixels + 'px)';  
        }
    },
    _moveHorizontal: function(clicked, displayRegion){
        const picturesWrapper = displayRegion.querySelector('.pictures-wrapper-horizontal')
        if(this.actived != clicked){
            let displayArea = picturesWrapper.parentElement.clientWidth;
            let pixels = this._getpixel(displayArea, clicked)
            picturesWrapper.style.transform = 'translateX('+ pixels + 'px)';
        }

    },
    _hoverpause: function(self){
        console.log('hoverpause')
        // picturesWrapper.style.transform = 'none'
        self._pause = true
    },
    _outhover: function(self){
        self._pause = false
    },
    displayPictures: function(displayRegion, buttonType) {
        // let picturesWrapper = this.moveHorizontal ? displayRegion.querySelector('.pictures-wrapper-horizontal'): displayRegion.querySelector('.pictures-wrapper-vertical')
        // console.log(picturesWrapper)
        if(this.hoverOnPause){
            displayRegion.addEventListener('mouseover', this._hoverpause.bind(displayRegion, this))
            displayRegion.addEventListener('mouseout', this._outhover.bind(displayRegion, this ))
        }
        const pictures = displayRegion.querySelectorAll('.picture');
        pictures.forEach(picture => {
            this.pictures.push(picture)
        })
        const buttonsWrapper = document.createElement('div')
        let activeButton = 0;
        let nextButton = this._checkNext(activeButton)
            // Decide which wrapper
        if (buttonType == 'square') {
                buttonsWrapper.className = 'squares-wrapper'
        } else {
                buttonsWrapper.className = 'dots-wrapper'   
        }
        let buttons = this.buttons
        for (let i = 0; i < this.pictures.length; i++){
            const but = document.createElement('button')
                // Decide which button
            if (buttonType == 'square'){
                 but.className = 'text-button'
            } else if(buttonType == "dot") {
                but.className = 'dot'   
            }
            but.setAttribute('data-num', i.toString())
            but.addEventListener('click', (e) => {
                    // activeButton = i
                    // nextButton = this._checkNext(activeButton)
                    // // buttons[activeButton].classList.remove('active')
                    // buttons[activeButton].classList.remove('active')
                    // // buttons[nextButton].classList.add('active')
                    // // activeButton = nextButton
                    // // nextButton = this._checkNext(nextButton)
                    // nextpic = this._checkNext(i)
                let clickedDot = e.target
                let clickedButton = parseInt(clickedDot.dataset.num)
                if (this.moveHorizontal){
                    this._moveHorizontal(clickedButton, displayRegion)
                }else{
                    this._moveVertical(clickedButton, displayRegion) 
                }
                this.buttons[activeButton].classList.remove('active')
                this.buttons[clickedButton].classList.add('active')
                activeButton = clickedButton
                nextButton = this._checkNext(activeButton)
                    
            })
            buttonsWrapper.appendChild(but)
            this.buttons.push(but)
        }
        displayRegion.append(buttonsWrapper)
        if(this.picture_clickable){
            let nextpic = 0
                // let buttons = this.buttons
            let activepic = 0
            for (let i = 0; i < this.pictures.length; i++){
                pictures[i].setAttribute('data-num', i.toString())
                pictures[i].addEventListener('click', (e) =>{
                    console.log(activeButton)
                    let clicked = e.target
                    let clickedPic = parseInt(clicked.dataset.num)
                    // console.log(clickedPic)
                    pictures[activeButton].classList.remove('active')
                    // buttons[clickedPic].classList.add('active')
                    activeButton = clickedPic
                    activepic = clickedPic
                    nextpic = this._checkNext(activepic)
                    // this.actived = i
                    // this.next = nextpic
                    // this.actived = nextpic
                    if(this.moveHorizontal){
                        this._moveHorizontal(nextpic, displayRegion)
                        }else{
                        this._moveVertical(nextpic, displayRegion)
                        }   
                    })
            }
        }   
        if (this.autoPlay){
            let buttons = this.buttons
                
            nextButton = this._checkNext(activeButton)
            const self = this
            // buttons[activeButton].classList.add('active')
            setInterval(function(){
                let picturesWrapper = self.moveHorizontal ? displayRegion.querySelector('.pictures-wrapper-horizontal'): displayRegion.querySelector('.pictures-wrapper-vertical')
                let displayAreaVertical = picturesWrapper.parentElement.clientHeight
                let displayAreaHorizontal = picturesWrapper.parentElement.clientWidth
                let pixelsHorizontal = -displayAreaHorizontal * nextButton
                let pixelsVertical = -displayAreaVertical * nextButton
                if(!self._pause){
                    picturesWrapper.style.transform = self.moveHorizontal ?'translateX('+ pixelsHorizontal + 'px)' : 'translateY('+ pixelsVertical + 'px)'
                    buttons[activeButton].classList.remove('active')
                    buttons[nextButton].classList.add('active')
                    activeButton = nextButton
                    nextButton = self._checkNext(nextButton)
                }       
            }, self.speed)
        }
    },

}
global.picRoller = global.picRoller || picRoller
})(window, window.document);