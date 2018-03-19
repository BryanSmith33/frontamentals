---
path: '/intro-to-javascript'
date: '2018-03-19'
month: 'mar'
day: '19th'
year: '2018'
title: 'This is JavaScript'
tags: ['intro', 'javascript']
image: './intro-to-javascript.jpg'
---

Whoo Darlin'! I figured it is finally time to start writing about JavaScript. We have covered <a href='/html-intro'>intro to HTML</a> and have an <a href='/intro-to-css'>intro to CSS</a> and while those two were not exhaustive of what those two technologies can do, they were enough to wet your whistle and hopefully get you going. Today we are going to talk about JavaScript and why you need to know it to be a solid developer and before the (insert some technology) crowd gets after me, yes I know that you can build a website without JavaScript but you also get around without Google Maps but life is better with it. JavaScript allows our pages to become interactive and have different responses based on what your user does.

In the post we will talk about the history and some of the absolute basics of JavaScript and how you can start using it today. One single post will barely scratch the surface of what JavaScript can do so keep your eyes peeled and hold onto your butts for future posts.

## History of JS (JavaScript)
While it supposedly took 7 days to create the Earth, it took 10 days to create what was the first proposal for what we now know as JavaScript. Taking it back to 1995. The 90's were just hitting their stride and the internet was becoming more and more accessible to people. There was a need to make the web easier for part time developers and designers to create websites. Honestly, isn't that what is still happening today? We are lucky to be learning web development today but I digress. Enter Brendan Eich. He was hired by Netscape, which was once one of the most popular web browsers ever, to create a scripting language that would be easy to use and slightly resemble Java. Why slightly resemble Java? Because Java was/is incredibly popular and they could ride that wave of popularity. While we are on that note of Java and JavaScript, Java is to JavaScript as Ham is to Hamster. Ham is a meat and hamsters have meat but you wouldn't eat a hamster (hopefully, but if you do, no judgment here but let me buy you a spicy chicken or something) and Java and JavaScript are both languages you can build things on the web with but they are used in different ways.

Long story short, JavaScript is now the defacto programming language of the web.

## How does it work?
JavaScript relies on a run-time environment (think your web browser, but not strictly your browser) to work. JavaScript processes tasks in a queue (or stack) and performs each task to completion but hold on right there because JavaScript can perform some tasks asynchronously, or before a previous task finishes. For example, you can fetch data from an API (Application Program Interface or just a way to get data from somewhere) and still have interactions based on actions from your user.

Take a look at this pen for more on asynchronous tasks in JavaScript. If you click the 'Get Random Name' button it will, with a slight added delay, get a random first name. While it is fetching the data, you can click the blue (or is it green?) box as many times as you would like. Go ahead, play around with it.

<iframe height='400' scrolling='no' title='Frontamentals - Intro to JavaScript 1' src='//codepen.io/beeg/embed/MVbOMX/?height=400&theme-id=dark&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/beeg/pen/MVbOMX/'>Frontamentals - Intro to JavaScript 1</a> by Bryan Smith (<a href='https://codepen.io/beeg'>@beeg</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

As you can see, even though the random name request hasn't finished, you aren't left in some sort of weird state of not being able to use your the site. That is the asynchronous side of JavaScript. Also, don't worry too much about what that JavaScript in the demo is doing for this post but what I do hope you see is a couple keywords like const and function. Lets talk about some of these important keywords.

## Variables
Variables are like little pieces of information you want to remember for later use. Think of variables as people that you interact with each day, there are some people that you put in the effort to remember their names and then their are the people we designate as "dude", "buddy" or "pal", we don't really commit to knowing their names because we don't anticipate knowing them for a while. Well just like those two people, there are two different types of variables declarations; const and let. Now if you are already familiar with JavaScript, you may be saying "There are more than two and you are forgetting var." Well guess what buddy, var is on it's way out (read dead) and so are your bleached tips.

We used to use var (shorthand for variable) for every variable. Then came a version of JavaScript called ES6 and they introduced us to const (short for constant) and let (short for who knows what, not everything has to make sense). `Const` are the people that we want to remember and know about and `let` is similar to var in that it can be reassigned like a beach ball at a concert. There is so much more to variable than this but it could (and will) be it's own post. Check out all these different types of variables.

```javascript
  const name = 'Bryan'; // string

  let age = 28 // number

  const me = {
    firstName: name,
    lastName: 'Smith',  // object
    twitter: '@beeg_smith'
  }

  var dead = ':skull:' // don't use var but this is a string
```
<br>

A good rule of thumb is to always use const unless you know that the variables value will change and then you can use let. You may read the exact opposite of that somewhere online but that is the cool part of JavaScript, it is pretty flexible. Notice as well that I used a semicolon after some variables and didn't after others. Semicolons are technically optional with JavaScript but best practice is to be consistent and do whatever feels good. If you do choose to use them, use them like the end of a paragraph when writing sentence. It will come naturally with time.

## Functions
Functions are an enormous part of JavaScript. They are how the magic happens but that magic is literally whatever you decide to come up with. Think of functions as a recipe for something to happen. Take a look at this demo for a little preview.

### Function Declaration
```javascript
  // function declaration
  function makeCake(milk, flour, sugar){
    return milk + flour + sugar
  }

  makeCake(10, 35, 50) // would return 95
```

See how we have milk, flour and sugar between the parenthesis? Those are called parameters. Think of them as placeholders for our function. One thing you need to remember is that whatever you call them in the parenthesis is what you need to call them in your function. Below our function declaration is our function invocation. The invocation is what makes our function run. Notice that we passed in numbers this time. Those are known as arguments. Our function above would just return 95 because we will add 10 + 35 + 50 but a function can do whatever we tell it to.

### Function Expression
There are is another way to declare a function and it is called a function express and it looks like this.

```javascript
  // function expression
  const makeCake = function(milk, flour, sugar){
    return milk + flour + sugar
  }

  makeCake(10, 35, 50) // would return 95
```

At first glance these two may seem almost exactly the same and really they are pretty damn close. The biggest difference is that a function declaration will get hoisted but that is a topic for another day. I typically stick with function declarations unless I am using an arrow function then I will go with a function expression. What is an arrow function you ask? Glad you asked!

### Arrow Functions
Arrow functions, like const and let, were introduced is ES6 and look goofy as can be at first but once you get used to them, they are a dream. Take a look at this for example. I will first write a regular function and then convert it to an arrow function so we can see what that looks like.

```javascript
  const myArray = [1,3,4,5]
  const myDoubledArray = myArray.map(function(element){
    return element * 2
  })

  const myArray = [1,3,4,5]
  const myDoubledArray = myArray.map((element) => element * 2) 
  myDoubledArray // [2,6,8,10]
  🤯 // You
```

There is a lot happening there and it's not vital to know the ins and outs right now but just know that it is an option. We will cover more about functions in our next post.

## Including JavaScript in our Projects
Lastly I want to talk about how to include JavaScript into our basic projects. There are a couple of ways we can do this and they come with their own pros and cons. First off, in a &lt;script> tag at the end of our body tag.

```html
<html>
  <head>
    <title>How to include JavaScript to our Project</title>
  </head>
  <body>
  
  <scirpt>
    const myName = 'Bryan'

    function sayName(name){
      return 'Hello ' + name
    }

    sayName(myName)
  </scirpt>
  </body>
</html
```

This works fine and dandy but just like how we talked about <a href='/intro-to-css'>with our CSS</a>, we should also have a separate JavaScript file. Now there are two options for including a separate JavaScript file.

```HTML
<!-- In the head tag -->
<head>
  <script src="index.js"></script>
</head>
<body>
  ...
</body>
```

```HTML
<!-- In the body tag -->
<head>
  ...
</head>
<body>
  ...
  <script src="index.js"></script>
</body>
```

The question you should ask yourself is "Are there any elements that my JavaScript relies on being loaded to function properly?" If you answered yes, put your script tag in the end of your body tag. If you answered no, then it will mostly likely be fine in the head tag unless you make it an enormous bear of a file to include.

## Conclusion
To wrap up, JavaScript is an fantastic language that can make our pages dynamic and you are using JavaScript almost every single time you use the internet and probably didn't even know it. This post will feel lighter compared to some of the other intros and that is because I am honestly only covering the barest of bones of what JavaScript is. There is so much more to it than this and we will be diving into all of that in later articles. In the mean time, put your new found skills to use and make something awesome !

Got some questions? Want to yell at a stranger on the internet? Want to show me that cool thing you made? <a href='https://twitter.com/beeg_smith'>Reach out on Twitter!</a>