# Basics
Learn the most basic implementations that Astra brings

#### Headings and displays

Astra has predefined styles for headings. Additionally, you can use the `h1` to `h6` classes for styling the content like a heading.
```html
<h1>Hello world!</h1>
<div class="h1">Hello world!</div>
<!-- The h1 and the div will display the same text with the same style -->
```
For adding more variety, Astra has **displays**, big and non-bold texts that are used to make large titles. To use them, you can use the `display-1` to `display-6` classes.
```html
<h1>Hello world!</h1> <!-- Title -->
<div class="display-1">Hello world!</div> <!-- Big title -->
```
#### New types of text

There are some special classes that will add new styles to your text. 

* `lead` class will transform a normal paragraph into a lead one, making it bigger.
* `b` class will make a bold text, while `semi-b` will make a semi-bold one.
* `i` class makes an italic text.
* `bq-footer`  transforms the bottom text of a blockquote.
* `unmarked` is used on lists when you don't want to have any mark on a list element.

#### Custom input designs

Astra has new input designs for your labels. The mode to activate this new style is very easy: just add the `input` class to the element that will have the new style. It works too with the `textarea` and `select` tags.

```html
<input type="text"> <!-- Normal input -->
<input type="text" class="input"> <!-- Astra input -->
<textarea class="input"></textarea> <!-- It works too! -->
```

 Internally, it will apply a different style depending on its type, so this system makes easier to apply the Astra's default styles to your inputs.
 
 #### Two types of buttons
 
 Astra has two predefined styles for both **primary** and **secondary** buttons. They can be used with the `primary-btn` and `secondary-btn` classes.
 
 ```html
 <!-- This will display a button with background color -->
<button class="primary-btn">Primary</button> 
<!-- This will display a button with no background color, only the borders -->
<button class="secondary-btn">Secondary</button>
```
