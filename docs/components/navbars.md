# Navbars & Headers

### Creating a header

Create a header in html is as simple as putting a `header` tag. Additionally, Astra has a `header` class that adds a shadow below the header.

```html
<header>
    <!-- This is a normal header-->
</header>
<div class="header">
    <!-- And this is an Astra header-->
</div>
```

### Creating a navbar

Let's create a navbar inside our header. You can use the `nav` tag or the `navbar` class, which brings some extra details, like having a minimum height.

```html
<div class="header">
    <nav>
        <!-- This is a normal navbar-->
    </nav>
    <div class="navbar">
        <!-- And this is an Astra navbar-->
    </div>
</div>
```

##### Navbar links

Inside the navbar, the links needs to have the `navbar-link` class. Additionally, the `active` class disables the link and changes its color.

```html
<div class="navbar">
   <a class="navbar-link active"></a>
   <a class="navbar-link"></a>
   <a class="navbar-link"></a>
</div>
```
##### Navbar pills

An alternative style that you can apply to the navbar is using `navbar-pills` on the navbar. This changes the links' style to pills.
```html
<div class="navbar navbar-pills">
   <a class="navbar-link"></a>
   <a class="navbar-link"></a>
   <a class="navbar-link"></a>
</div>
```
##### Dark links

If you want to use the dark style on the navbar, you can use the `dark` class on the navbar links. This will change their color, that you can customize later. Learn more of colour customization [here]().

```html
<div class="navbar">
   <a class="navbar-link dark"></a>
   <a class="navbar-link dark"></a>
   <a class="navbar-link dark"></a>
</div>
```

