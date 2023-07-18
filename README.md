# Frontend Mentor - Newsletter sign-up form with success message

![Design preview for the Newsletter sign-up form with success message coding challenge](./design/desktop-preview.jpg)

## [Built with](#built-with)

-  HTML
-  CSS
-  Vanilla Javascript

## [What I learned](#what-i-learned)

The JavaScript `innerWidth` property refers to the width of the browser window's content area. It represents the available horizontal space for displaying website content, excluding scrollbars and other browser elements. You can use this property in JavaScript to dynamically adjust or respond to changes in the browser window's width.

```javascript
const screenWidth = window.innerWidth;

if (screenWidth <= 425) {
   imgChange.setAttribute("src", "./assets/images/illustration-sign-up-mobile.svg");
} else {
   imgChange.setAttribute("src", "./assets/images/illustration-sign-up-desktop.svg");
}
```
