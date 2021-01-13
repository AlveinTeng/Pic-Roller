# js-library-PicRoller

The link to my js-library is: https://stormy-coast-37155.herokuapp.com
The link to my documentation is: https://stormy-coast-37155.herokuapp.com/api.html
My html code for getting started is:
```html
<div id ="first-picRoller">
    <div class="display-area">
      <div class="pictures-wrapper-horizontal" data-pause="hover">
        <img src="./pictures/kobe.jpg" alt="" class="picture">
        <img src="./pictures/jordan.jpg" alt="" class="picture">
        <img src="./pictures/O'neal.jpg" alt="" class="picture">
        <img src="./pictures/iverson.jpg" alt="" class="picture">
        <img src="./pictures/westbrook.jpg" alt="" class="picture">
      </div>
    </div>
  </div>
```
My css code for getting started is:
```css
.display-area {
    width: 900px;
    overflow-x: hidden;
    margin: auto;
    overflow-y: hidden;
  }
  
  .pictures-wrapper-horizontal{
    display: flex;
    transition: ease 0.5s;
    max-width: 900px;
    max-height: 400px;
    flex-direction: row;
  }

  .picture {
    height: 400px;
    max-width: 900px;
    max-height: 400px;
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    font-size: 40px;
    flex: 900px 0 0;      
  }
```
My js code for getting started is:
```js
  var picRoller = new picRoller();
  var displayRegion = document.getElementById('first-picRoller')
  picRoller.horizontal(true)
  picRoller.clickable(true)
  picRoller.displayPictures(displayRegion1, 'square');
  picRoller.addButtonText(0, 'Kobe')
  picRoller.addButtonText(1, 'Jordan')
  picRoller.addButtonText(2, 'Shaq')
  picRoller.addButtonText(3, 'Iverson')
  picRoller.addButtonText(4, 'Westbrook')
```

