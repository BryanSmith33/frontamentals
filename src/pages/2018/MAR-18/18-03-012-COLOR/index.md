---
path: '/guide-to-color'
date: '2018-03-12'
month: 'mar'
day: '12th'
year: '2018'
title: 'Guide to Color'
tags: ['css', 'html', 'intro', 'color']
image: './color.jpg'
---

Let's talk about using color in our projects. We will cover everything from the different color types all the way to using different color schemes to make your designs come to life! Effectively using colors can make a world of difference in your project and take your design to the next level you are looking for. There won't be much code in this article but don't let that scare you! We are going to show you how you can utilize some tools, tricks and tweaks to take your usage of color from zero to hero.

## Why Color?
Why would I write a post on color? Because this blog is here for more than just HTML, CSS and JavaScript. This blog is here to make you an overall better developer and that will more than likely include having to make some tough decisions like what colors to use. Choosing colors that go well together can make an enormous difference in the look and feel of your site. Take for example these two demos.

<iframe height='353' scrolling='no' title='Frontamentals Color 1' src='//codepen.io/beeg/embed/OvVZWP/?height=353&theme-id=dark&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/beeg/pen/OvVZWP/'>Frontamentals Color 1</a> by Bryan Smith (<a href='https://codepen.io/beeg'>@beeg</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<iframe height='353' scrolling='no' title='Frontamentals Color 2' src='//codepen.io/beeg/embed/aYOGyK/?height=353&theme-id=dark&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/beeg/pen/aYOGyK/'>Frontamentals Color 2</a> by Bryan Smith (<a href='https://codepen.io/beeg'>@beeg</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The first one is hard to look it. The blue text is not easy on the eyes and that yellow background leaves a lot to be desired. Below it, a simple gradient moves your eyes from left to right along with the text. A nice salmon-like color pops out against the dark background to emphasize the text. Now a lot of beauty is in the eye of the person looking at it. What I like and what you like can and will be different. And that is totally fine! There are some things though that just can't be accepted and one of them is that harsh blue color.

## Types of Color
I'm not talking about how you see magenta but I see purple. I'm talking about Hex, RGB(A) and HSL(A). The A's are in parentheses because they are optional. These three different types of color are really only different by name. For example: #ff0000, rgb(255, 0, 0) and hsl(0, 100%, 50%) will all shake out to the exact same color (<span style="background: hsl(0, 100%, 50%); color: #fff">red</span>). Then what the hell do all of these words mean? Great question. Let's break them all down.

### Hex
Hex is short for hexadecimal. Hex is the most common color form in web development because it used to be the only way HTML documents could read which color you were wanting to use. When using hex colors, they will start off with a # and then some combination of numbers and letters from A-F. There is some math to the why each digit or character represent a different color but math was never my scene and I only recently started liking Star Wars and it honestly isn't crucial to know. One nicety of hex colors is that they can be turned into shorthand like we learned about with <a href='/css-box-model'>padding and margin</a>. If you have a hex color like this #ffffff (white), it can be shortened to #fff because the first three characters are the same as the last three. This #bb00cc (<span style="background: #bb00cc; color: #fff">purple</span>) can be this #B0C. Capitalization don't make a difference but it is good practice to be consistent.

### RBG(A)
RGB stands for Red, Blue and Green. The A is for the opacity of the color. If you are standing, you are going to want to sit down because I have some pretty big news. Different levels of red, blue and green are used to create different colors 🤯. I know, I know. Earth shattering. What does this mean for us? Those three colors in varying amounts make up every other color we know, unless you are one of those people that claim they can see more colors and if that is the case, good for you and go get some new hobbies.

The RBG patterns goes like this `rgb(NUMBER-BETWEEN-0-255,NUMBER-BETWEEN-0-255,NUMBER-BETWEEN-0-255)` or `rgba(NUMBER-BETWEEN-0-255,NUMBER-BETWEEN-0-255,NUMBER-BETWEEN-0-255, PERCENTAGE-OF-OPACITY)`.

What does this mean for you as a developer? Not a whole lot. RGB used to be the preferred method for opaque background but hex colors can do just the same. Maybe you took a class in college that says RGB colors are superior and should always be used. If that makes you happy, go nuts.

### HSL(A)
HSL is short for Hue, Saturation and Light. I really don't want to go too deep into it because it is similar to RBG which is similar to Hex. It is honestly just another way to express what color you would like to show up on your page. The A also stands for the opacity of the color in this case.

The RBG patterns goes like this `hsl(HUE-PERCENTAGE,SATURATION-PERCENTAGE,LIGHT-PERCENTAGE)` or `hsla(HUE-PERCENTAGE,SATURATION-PERCENTAGE,LIGHT-PERCENTAGE, PERCENTAGE-OF-OPACITY)`.

Aside from the previous three methods for describing a color, you also have the plain old color names like red, blue and yellow. Do be careful using these as your colors as some browsers will display them as slightly different shades so it is best to use one of the methods above.

I am excited for all you color snobs to let me know that there is in fact a difference in these color types and I am eagerly awaiting to ignore your comments from my yoga ball office chair.

## Picking Colors
Remember how up above I said some people are just born with the ability to pick colors that go well? Yeah, I don't like them too. For everyone else, there are some awesome tools out there that can help you in your search.

### Coolors.co
<img src='https://coolors.co/export/png/c1c1c1-2c4251-d16666-b6c649-ffffff' />

Oh man I am a big fan of [coolors.co](https://www.coolors.co). Whenever I am starting a new project and I don't have any sort of color scheme determined, I will start off here. With the simple tap of the space bar you can get a new color palette instantly. Like one (or two or three) of the colors? Go ahead and lock it in. Maybe you almost like that color but not quite? You can adjust it slightly and see alternate shades. Oh, it also has the hex code right at the bottom which honestly makes it so easy to quickly pull together colors. 

Now this isn't a cure all for picking colors that look great together. Occasionally I will get a palette that is truly horrible. If you aren't able to get across the color picking finish line with the help of coolors, reach out to me and I will help you pick a few colors.

### Color-hex.com
This is another one of my go to sites. Maybe I have one single color in mind or I am have a few colors I am trying to decide between for the main color of my page. Off to [color-hex.com](http://www.color-hex.com) I go. As the name implies, you provide a hex color and it will give you more information about that color than you thought was possible. Shades/tints of your color? Got em'. Complementary colors? Yup. Color previews on white and black backgrounds as shapes and text? You know it!

One of my favorite features of color-hex though is that it will provide triadic, analogous and complementary colors to my provided color. What are triadic, analogous and complementary colors you ask? Let's dive in and find out!

### Triadic Colors
Triadic colors will be any three colors that are exactly three colors away from each other, making a triangle like shape on the color wheel. Now when you are picking colors, they don't have to be exactly three whole colors away from each other but being close is good as they will provide some sense of balance to your design.

### Analogous Colors
Analogous colors are any three colors that are right next to each other other the color wheel. Using analogous colors will create a natural blend and flow of your colors. There also won't be any harsh changes in the colors that can be distracting or hard to look at.

### Complementary Colors
Complementary colors are colors that are on the exact opposite side of the color wheel. These colors can be used to effectively create a contrast to each other. Complementary color play off the other color well and can often go well next to each other.

Take a peek at this color wheel to get an idea of how the color schemes can work together.

<br>

<img src='./color-wheel.png'>

<br>

### How many colors can I pick?
Great question! I am by no means the rule maker on this but I usually try to stick with three colors in a design. This generally doesn't include black or white for me. Why three? That gives you enough colors to be able to be able to create some separation in your design but not too many colors that your design begins to feel busy. If I am really feeling adventurous I will sometimes go up to five colors. I know, don't tell my mom and dad.

## Text and Backgrounds
Take another look at the very first demos above. Remember how awful that blue text on that yellow background was? It is jarring to look at. Now compare that to the black gradient background with the salmon colored text. The contrast from the dark to lighter color works really well together. One thing that I cannot stress enough is that text should have a high contrast to the background it is on. This will make it much easier to read for just about everyone. One interesting note though is that using a black text on a white background looks fantastic but when used on the web can cause a strain on the users eyes.

> *But Bryan, like every single website uses white background and black text*

Not so. One very popular website, Medium, uses a white background (#fff) but if you take a peek at their font color it has a slight opacity to it (rgba(0,0,0,.84)) that makes it not so hard on the eyes. A website like Medium depends on viewers being willing to read their articles and ideally multiple articles in one sitting so cutting down on that high contrast will help with some of the stress it can cause on the eyes.

Ultimately, these are all suggestions and there is nothing I love more than throwing suggestions to the wind and doing my own thing, it is how I have learned the very most. Who knows, maybe you will read this and think "I am going to make X an Y color really cool together" and that will become the coolest way to design a website. Look at the comeback gradients have made since Instagram completely changed their logo. Go ahead, go crazy and try something new.