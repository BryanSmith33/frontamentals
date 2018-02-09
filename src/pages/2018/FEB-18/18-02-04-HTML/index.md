---
path: '/html-intro'
date: '2018-02-05'
month: 'feb'
day: '5th'
year: '2018'
title: 'Intro to HTML'
tags: ['html', 'intro']
image: './introToHTML.jpg'
---

*If you haven't read how we will structure our topics on Frontamentals,* <a href='/structure'>take a peek at this first!</a>

Let's talk HTML. What is HTML? Why do we need HTML? *What does HTML even stand for?* In this week's post, we are going to get you a baseline understanding of HTML so let's get after it!

# HyperText Markup Language
☝️ That is what HTML stands for, in case you were wondering. It was the early 90's and the internet was starting to become common in homes thanks to the desktop becoming more affordable. There was a need to be able to effectively structure web pages in a unified way. Enter Tim Berners-Lee. Berners-Lee is a really smart guy that essentially came up with the proposal for HTML. He presented that we use tags to layout different information on our screens in a simple yet meaningful way.

## But what are tags?
I'm glad you asked! To be technical, tags are the `<` and `>` that wrap what is called an element. Here on out I will refer to them as tags. 

Let's think of HTML as a skeleton. Inside of most of us we have our skull, our arm bones, chest bones and so on going down our body that connect us together. Web pages also have a skeleton-like structure and the different parts are separated with tags. Take a look at the following example:

```html
<!-- This is what a comment looks like in HTML, ps. 
Comments are useful to let people know what is happening in certain parts of your code. 
They should be short and sweet unlike this comment -->

<!DOCTYPE html>
<html>
  <head>
  <!-- A head! Just like you and me! -->
  </head>
  <body>
    <!-- Look at that! A body too -->
  </body>
</html
```

You can see there is a structure to how things are laid out. It all starts with `<!DOCTYPE html>`. This is letting your browser know that the page is going to be rendered as HTML. There are some other pieces of data that you can potentially insert along with `html` but we won't dive into that now. Notice how `!DOCTYPE html` is between a `<>`.

## &lt;head&gt;&lt;/head&gt; Tag
Moving down we have a `<head>` tag. The `<head>` tag is what will store important information about our page. Think of the `<head>` tag as the unique things about the site. We all have traits that make us who we are and web pages do too! Let's take a look at another example:

```html{4-11}
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- meta tags are unique bits of info about your site-->
    <meta name="description" content="This is a description of the site">
    <meta name="keywords" content="keywords, describing, your, site">
    <!-- 👇👇👇 This is what will show up in the tab on your browser -->
    <title>The title of our page</title>
    <!-- 👇👇👇 This will allow us to add styling to our page from a .css file -->
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <!-- Look at that! A body too -->
  </body>
</html
```

There is a lot of info that can be added to the `<head>` tag. The best way to think of what to put in there are the things that your user doesn't directly need to know about but will help the user and browser behind the scenes.

## &lt;body&gt;&lt;/body&gt; Tag

This is where the magic happens, as they say. What we put into the `<body>` tag will represent what the user sees on the screen when they visit our page. Let's build out a navbar for our users.

```html{14-26}
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- meta tags are unique bits of info about your site-->
    <meta name="description" content="This is a description of the site">
    <meta name="keywords" content="keywords, describing, your, site">
    <!-- 👇👇👇 This is what will show up in the tab on your browser -->
    <title>The title of our page</title>
    <!-- 👇👇👇 This will allow us to add styling to our page from a .css file -->
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <nav>
      <ul>
        <a href="#home">
          <li>Home</li>
        </a>
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
      </ul>
    </nav>
  </body>
</html
```
> *Quick side note. I will use CodePen to demonstrate a topic. It is a fantastic tool because you can go in and adjust the code and see the output right on the screen! Here is the above code put into [CodePen](www.codepen.com).*

<iframe height='700' scrolling='no' title='Frontamentals - Intro to HTML pt1' src='//codepen.io/beeg/embed/PQqBXO/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/beeg/pen/PQqBXO/'>Frontamentals - Intro to HTML pt1</a> by Bryan Smith (<a href='https://codepen.io/beeg'>@beeg</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Notice how the only things we see on the screen are Home, About and Contact. Let's talk about what is happening.

Let's start with that `<nav>` tag. In HTML, we want our tags to be semantic. Semantic is just a fancy way to say that the tag has a specific meaning on the page. In this case, the `<nav>` is our pages navigation. It is where our users will go to navigate to different pages.

Inside of the `<nav>` is a heap of other tags. Not to worry though, we will break each one down together.

`<ul></ul>` stands for unordered list. There is a similar tag to this called `<ol></ol>` but that is an ordered list. The main difference is that with `<ul>` you get bullet points next to your list items and with `<ol>` you get descending numbers.

Next is an `<a></a>` tag. The `<a>` stands for anchor. It is most often used to create a link to something within our outside of the page. We can tell the `<a>` tag where we would like to send our users by using `href="WHERE WE WANT OUR USERS TO GO"`. You will see that we wrapped our `<li></li>` tags with our `<a>` tag. Doing so allows our entire `<li>` to be clickable.

You may have already guessed but our next tag `<li></li>` stands for list item. These are the specific items we want our list to contain. It is best practice to use `<li>`'s inside of `<ul>` or `<ol>`.

## Nesting

No, we aren't talking about parents who are soon going to be bringing new children into their home. We are talking about the layout and indentation of our tags. Notice how our tags are nested, or are children of their parent tag.
```html
  <div class='parent-one'>
    <div class='child-to-parent-one parent-two'>
      <img class='child-to-parent-two' src='./path/to/image' alt='Flowers'/>
    </div>
  </div>
```
When you are structuring your page, keep in mind that their can be multiple levels of nesting. See how the class names in the above example relate to each other. If you don't want to feel the wrath of your co-workers and even possibly your loved ones, please keep the opening and closing tag indentation (amount of spaces or tabs) the same.

## TAGS TAGS TAGS

> *How many more tags are there Bryan?*

I'm glad you asked! There are over 80 different tags in HTML. Some of them are incredibly obscure and are rarely used or are on their way out of HTML. Speaking of being on it's way out, HTML is continuously evolving. It doesn't quite move at the breakneck speed of JavaScript but it is changing. If you are hell-bent on finding out about each tag and want to see a full list, <a href="https://www.w3.org/TR/html5/semantics.html#semantics" target="_blank">check out this site</a>.

## Self Closing/Void tags
Some tags will automatically "close" themselves. Meaning that you won't need a trailing `</TAGNAME>`. Here are some of the more common void tags;

* &lt;img /&gt;
* &lt;input /&gt;
* &lt;meta /&gt;
* &lt;link /&gt;

There are several other void tags but these are the ones that I typically use the most. Who knows, maybe you use others 🤷.

## Inline vs Block

Tags can be either inline or block by default. The easiest way to think about this is to think of inline like people in a line. They stand right next to each, side by side. You can think of block like some wooden block you probably played with as a kid. They stacked on top of each other. Check out this CodePen for a visual:

<iframe height='500' scrolling='no' title='Frontamentals - Intro to HTML pt2' src='//codepen.io/beeg/embed/qxdJRK/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/beeg/pen/qxdJRK/'>Frontamentals - Intro to HTML pt2</a> by Bryan Smith (<a href='https://codepen.io/beeg'>@beeg</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Notice that the inline tags are side by side, left to right. The block tags are stacked on top of each other. Keep in mind, this isn't an exhaustive list. There are many other tags but these are the ones that I use most often.

There is so much more to HTML than what is covered in this post but remember, we will be covering topics in a pattern that is called interleaving. The idea here was to give you a high level overview and then come back to that topic to give your brain a refresh. Felt like this was too basic? Check back in a bit for a deeper dive into the specifics of HTML!

Thoughts? Questions? Comments? [Reach out on Twitter](https://twitter.com/beeg_smith)!
