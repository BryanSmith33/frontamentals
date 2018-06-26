---
path: '/css-position'
date: '2018-06-11'
month: 'june'
day: '11th'
year: '2018'
title: 'CSS Position Property'
tags: ['css', 'html', 'position']
image: './cssPosition.jpg'
---

If you are already a CSS wizard, you can choose from the options below for a quick refresher:

Take me to [Static](#static)
<br>
Take me to [Inherit](#inherit)
<br>
Take me to [Relative](#relative)
<br>
Take me to [Absolute](#absolute)
<br>
Take me to [Fixed](#fixed)
<br>
Take me to [Sticky](#Sticky)

Get ready to *position* (<span role='img' aria-label='glasses smile emoji'>🤓</span>) your CSS skills for success because today we are going to demystify the CSS position property. There really isn't too much to the property, just six values in total, but it can be confusing as to which value does what and when to use the correct one. Hold onto your <span role='img' aria-label='peach'>🍑</span>'s because we are about to do some learning!

The position property in CSS allows us the flexibility to adjust where our elements layout on the page. That really is a vague explanation of what position does so the best way to learn is to dive into each property and see how it behaves.

I am going to start off with the two properties I use the least, `static` and `inherit`, but are still good to know.

## <a name="static"></a>Static
The `static` position value is the elements default position according to the flow of the page. Basically `static` is that person we all know that had no influence from the outside world and followed the path given to them. The `top`, `right`, `bottom` and `left` properties have no effect on the element when `static` is present. A good use for `static` is if you are ever manipulating an elements position with JavaScript and want to put it back in the normal flow.

## <a name="inherit"></a>Inherit
By default, the position property won't cascade from parent to child. If you don't quite remember cascading, check out the <a href='/intro-to-css'>Intro to CSS</a> to get a better feel for how cascading works. But what if you want to force a child element to take on, or `inherit` <span role='img' aria-label='glasses smile emoji'>🤓</span>(sorry, last time), their parents position property? If that went right over your head, you could set the value of position to `inherit` and your element will take on the parents value. If no value is specified it will default to static.

Okay let's get to the properties that I use most.

## <a name="relative"></a>Relative
The `relative` property is one of the most misused or misunderstood properties I come across. The `relative` property specifies a position relative to the elements normal position. Let me repeat that in more basic terms. If you apply 

```css 
  .box {
    position: absolute;
    top: 50px
  }
```

The element with a class of `box` will be 50 pixels lower from the top than it normally would be. That is it. Just remember, if you use `relative` it will be `relative to its initial position`. Relative also plays a key part in manipulating child elements with the position value of `absolute`. Let's break that down a bit further.

## <a name="absolute"></a>Absolute
Elements with an `absolute` position can be taken completely out of the flow of the page meaning that other elements will pretend they aren't even there. Absolutely positioned elements are effected by the `top`, `right`, `left` and `bottom` values. Absolute is really handy when you want to adjust a single child element. Let's imagine we have this HTML structure:

```html
  <div class='parent'>
    <div class='child one'></div>
    <div class='child two'></div>
    <div class='child three'></div>
  </div>
```

Along with this CSS

```css
  .parent {
    position: relative;
  }

  .child.two {
    position: absolute;
    top: 50px;
    left: 20px;
  }
```

This will make the element with a class of `.child.two` be totally out of the flow. It has no respect for its siblings. It will respect the parent element as far as `top`, `right`, `left` and `bottom` values go meaning that it will use the parent to determine where to move to. Check out this code pen for a visual with some color added:

<iframe height='400' scrolling='no' title='Frontamentals CSS Position Property: Absolute' src='//codepen.io/beeg/embed/GxwyyG/?height=400&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/beeg/pen/GxwyyG/'>Frontamentals CSS Position Property: Absolute</a> by Bryan Smith (<a href='https://codepen.io/beeg'>@beeg</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

But what if the parent element doesn't set any sort of restraints? What if they let that child be young, wild and free? Welp, someone has to run the show and that responsibility falls to the `body`. If relative isn't specified on a elements parent, it will look upward until it finds the `relative` position property on some sort of containing element above it. If it doesn't find any element that matches that, it will default to the `body` element. Two very important characteristics of the `absolute` position are that it can still be forced out of it's parent/body container and that `height` and `width` is required to make the element appear on the screen.

## <a name="fixed"></a>Fixed
I often will see `fixed` and `absolute` used in a similar fashion but they aren't the same! The `fixed` property will make an element fixed in a specific spot. It also respects the `top`, `right`, `left` and `bottom` values just like absolute does. You will often see fixed used with nav bars to make them stay at the top of the page. As a matter of fact, look at the nav bar on this page. It is fixed to the top if you are on a device that is wider than 700 pixels but then fixed to the bottom if you are viewing on anything smaller like a phone.

`fixed` does not give two rips about the other position values. Think of it as the ultimate rebel _with_ a cause. It's cause is to make sure that it isn't going anywhere you tell it not to.

## <a name="sticky"></a>Sticky
For the longest time I didn't get how the `sticky` position worked. In fact, I was convinced it didn't do anything and was all a ruse to see how many people would try to use it and look like an idiot. It wasn't until I read a [fantastic article by Dave Geddes](http://gedd.ski/post/position-sticky/) that really made it clear how to use it. You honestly should all give that a read as it is a great primer into exactly how `sticky` works but if doing more reading isn't your thing, the `sticky` position essentially tells an element to be fixed into view while a user is scrolling until a specified pixel value from the top, right, bottom or left of the view. 

If you want to see an example of this is action, look no further than the subscribe box on this very website on the desktop view (and go ahead and toss your email in there for future updates of awesome). It appears like a regular div until we get to 82 pixels from the top. Once it reaches 82 pixels from the top it becomes fixed into place as an incessant reminder to subscribe. Pretty cool, right?


## The Roundup
That is just the surface of the position properties but having a solid understanding of these properties is absolutely vital to being able to master layouts. Keep your eyes peeled for individual tutorials on each property where we dive deeper and show examples of real world problems you can solve with each property!