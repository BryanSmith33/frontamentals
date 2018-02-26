---
path: '/intro-to-css'
date: '2018-02-26'
month: 'feb'
day: '26th'
year: '2018'
title: 'Intro to CSS'
tags: ['css', 'intro']
image: './introToCSS.jpg'
---

In todays post we are going to cover CSS at a high level but don't you worry, similar to how we did with HTML, we will drill down on different topics in later posts. Oh, we also haven't covered HTML in great depth either and there will be plenty more posts to wet your HTML whistle.

In our <a href='/html-intro'>Intro to HTML</a> post, we compare HTML to a skeleton. HTML is the layout of our site and can be done in many different ways similar to how our individual bodies can be. CSS is what makes up the appearance of your site, to some effect. It is the makeup and clothes that we apply to our site to make it (hopefully) look great.

## What even is CSS?

CSS is what gives your page some style, some beauty. CSS is the difference between this:

<iframe height='500' scrolling='no' title='Frontamentals - CSS pt. 1' src='//codepen.io/beeg/embed/NyLmZe/?height=500&theme-id=dark&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/beeg/pen/NyLmZe/'>Frontamentals - CSS pt. 1</a> by Bryan Smith (<a href='https://codepen.io/beeg'>@beeg</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

And this:

<iframe height='500' scrolling='no' title='Frontamentals - CSS pt. 2' src='//codepen.io/beeg/embed/bLxyGO/?height=500&theme-id=dark&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/beeg/pen/bLxyGO/'>Frontamentals - CSS pt. 2</a> by Bryan Smith (<a href='https://codepen.io/beeg'>@beeg</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Do they accomplish the same thing? Yes, but I am willing to bet you interacted with the styled one more.

## A little history

CSS stands for Cascading Style Sheet. It was developed in the mid 90's by two gentlemen named Bert Bos and Håkon Wium Lie. CSS was initially created to create a separation of content and presentation on your site. 

 > *"BUT WHAT DOES THAT EVEN MEAN?"*

 > -You

 You are likely a human. You look similar to other humans (content) but you have the ability to look different by the way that you dress yourself along with makeup (presentation), if that is your thing. And don't worry, before you get your jimmies rustled, you are a unique flower in a field of other flowers. Don't let anyone tell you differently.

CSS was also created to make it easy to share multiple styles on different pages by using a shared `.css` file. All that is needed to be included is a link to a style sheet on each page and BAM your pages are looking similar. This means less code to write and maintain which is and always will be a principle to be followed.

## Structure 

CSS can be included in your page in many different ways. You could go inline, like this:

```html
<div style='color: red'></div>
```
But this approach should be avoided. We will talk about why in just a bit.

You could go a `<style></style>` tag approach in the `<head>` of your HTML file like this:

```html
  <style>
    body {
      background: red;
    }

    .my-class {
      color: blue;
      font-size: 30px;
    }
  </style>
```

But guess what? There is a better way that will make your life a little easier. Now stay with me here but as you get started with web development you should keep your HTML out of your CSS (that goes for JavaScript as well) so your files are only containing information that they actually should. It can be easy to just include all your CSS in the `<head>` (and all of your JavaScript at the end of your HTML in a `<script>` tag) but it is also easy to not pay any taxes but here we are, payin' taxes.

Now let me stop you right there. We are talking about basic, introductory HTML and CSS (and a little JavaScript). I am not talking about React or anything else like that. Eventually you will get to a point where including all of the information about your site is cool but that time will come with more experience.

Okay, okay back to CSS. The best way to include CSS into your site is with a `<link>` tag in the head of your HTML file. Check this out:

```html
<!--index.html-->
  <html>
    <head>
      <!-- STUFF IN YO' HEAD -->
      <link rel="stylesheet" href="style.css">
      <link>
    </head>
    <body>
      <nav class='nav'></nav>
      <div class='hero'></div>
      <div class='bio'></div>
      ...
    </body>
  </html>
```

```css
 /*style.css*/
  body {
    color: tomato;
  }

  .nav {
    width: 100%;
    height: 70px;
  }

  .hero {
    background: url('');
    text-align: center;
  }

  .bio {
    margin: 15px;
  }
```

Now our HTML file will have the specified styles from our style.css file. Isn't that so cool?

Now one of the key things I want you to take away from this article is that CSS cascades down, or flows down, like a waterfall in your CSS file.

 > *"BUT WHAT DOES THAT EVEN MEAN?"*

 > -You, again

 Let's look at this example and then talk about it a little bit more.

 <iframe height='500' scrolling='no' title='Frontamentals - CSS pt. 3' src='//codepen.io/beeg/embed/QQVXKG/?height=500&theme-id=dark&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/beeg/pen/QQVXKG/'>Frontamentals - CSS pt. 3</a> by Bryan Smith (<a href='https://codepen.io/beeg'>@beeg</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Notice that how even though we never specified our `<h1>Frontamentals</h1>` to have a `color: tomato` property, it still is the tomato color. Why is that? Because the styles from the body cascades down onto the`<h1>`. Cascading is a powerful idea that can really help you write less code but be careful as it can get tricky quick and that is when you start writing CSS that isn't reusable. I could (and probably will) write a whole article on cascading.

One more tip that goes hand-in-hand with cascading is that your CSS file should follow a similar structure to your HTML file. Take a look at this example again:

```html
<!--index.html-->
  <html>
    <head>
      <!-- STUFF IN YO' HEAD -->
      <link rel="stylesheet" href="style.css">
      <link>
    </head>
    <body>
      <nav class='nav'></nav>
      <div class='hero'></div>
      <div class='bio'></div>
      ...
    </body>
  </html>
```

Your CSS file should follow a similar structure:

```css
 /*style.css*/
  body {
    color: tomato;
  }

  .nav {
    width: 100%;
    height: 70px;
  }

  .hero {
    background: url('');
    text-align: center;
  }

  .bio {
    margin: 15px;
  }
```

Start with the `body` tag, move down to the `.nav`, `.hero` and finally end at the `.bio` just like how your HTML is laid out. This approach takes out the guesswork on where to put the CSS that correlates with the HTML.

## Classes and ID's

How have we gotten this far without talking about classes and ID's? Who knows, time flies when you are learning. There are quite a few ways to attach a style to your desired tag. We touched on inline styles earlier but those should be avoided as they are the most specific you can be with your CSS and will make it a pain for yourself or future developers. You will generally use two options 1: class or 2: ID, and while there are a couple other options we will stick with these for this intro.

 Let's talk about being specific, or specificity, in your CSS. Different approaches to styling carry different weights which makes them less or more specific. The higher the specificity, the more precedent that styling will have. Take a look at the following table to illustrate:

| Specificity   | Weight |
| ------------- |:------:|
| Elements      | 1      |
| Classes       | 10     |
| ID's          | 100    |
| Inline Styles | 1000   |

As you can see, inline styling is going to be pretty difficult to top.

 > *"BUT WHAT DOES THAT EVE..."*

 For the last time, just raise your hand 🙋 to ask a question. 
 
 Let's say you landed that dream job and you are writing some CSS to make your homepage look great. You forgot to add the styling to your CSS file and instead added it inline. 6 months later a senior developer is working on the homepage redesign and can't figure out why adjusting a certain class isn't showing any changes on the site. He spends hours banging his head against a figurative wall because he is too hard headed to ask for help. An entire day wasted. 

 Two things here; 1: that senior developer should have stopped and asked for help and 2: you should have included your styling in a CSS file. Your inline styles were more specific than using a class in a CSS file but the developer never thought to look in the actual HTML.

Now this is where things can get tricky. You can include styling to an element in a lot of different ways as showing by the table above but I like to be more visual as that is how I learn so back to an example! Take a look at the following HTML and CSS. What color will Frontamentals end up being?

```html
<div class="demo" id="title">
    <h1 class="heading-class" id="heading-id">Frontamentals</h1>
</div>
```
```css
  body {
    color: tomato;
  }

  .demo {
      color: aquamarine;
  }

  #title {
      color: goldenrod;
  }

  h1 {
      color: black;
  }

  #heading-id {
      color: #BADA55
  }

  .heading-class {
      color: blue;
  }
```

If you guessed #BADA55, you were right! Let's break it all down:
 1. The color starts out tomato because that is applied to the `body` and nothing else is specified for the color
 2. Then the `.demo` parent div is given a color of aquamarine which then cascades down as well
 3. The aquamarine color is short lived because the parent div also has a ID of `#title` which gives Frontamentals the color of goldenrod
 4. Our H1 is then given a color of black because even though a ID has more weight, the H1 is more specific as it is the actual tag we are styling
 5. We then apply the color #BADA55 to our H1
 6. But why doesn't the hideous blue color get applied? Because ID's are more specific than classes so the `.heading-class` will never be applied, even though it is further down.


<iframe height='500' scrolling='no' title='Frontamentals - CSS pt.4' src='//codepen.io/beeg/embed/bLxPQW/?height=500&theme-id=dark&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/beeg/pen/bLxPQW/'>Frontamentals - CSS pt.4</a> by Bryan Smith (<a href='https://codepen.io/beeg'>@beeg</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

 To recap:

 * Styling can be done many ways but when starting out should be done in a separate style sheet from your HTML
 * Styling is generally applied via a class or ID
 * CSS cascades, or flows down, top to bottom
 * CSS respects the different specificity of elements, classes, ID's and inline styling.

 Learn something new? Feel like I missed something? Hit me up on <a href="https://twitter.com/beeg_smith">Twitter @beeg_smith</a> and let me know your thoughts!