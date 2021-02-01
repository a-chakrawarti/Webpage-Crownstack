# HTML (Hyper Text Markup Language)

- `<!DOCTYPE>` declaration represents the document type and `<!DOCTYPE html>` is declaration for HTML5.
- The `<html>` element is the root element and it defines the whole HTML document.
- The `<body>` element defines the document's body.
- The `<br>` tag defines a line break, and is an empty element without a closing tag.
- The `<a>` tag defines a hyperlink. The `href` attribute specifies the URL of the page the link goes to. Example: `<a href="https://www.w3schools.com">Visit W3Schools</a>`
    - The target attribute specifies where to open the linked document.

    - The target attribute can have one of the following values:

      1. _self - Default. Opens the document in the same window/tab as it was clicked
      2. _blank - Opens the document in a new window or tab
      3. _parent - Opens the document in the parent frame
      4. _top - Opens the document in the full body of the window

- Use `mailto:` inside the href attribute to create a link that opens the user's email program. Example: `<a href="mailto:someone@example.com">Send email</a>`

- The `<img>` tag is used to embed an image in an HTML page. The `src` attribute specifies the path to the image to be displayed. Two ways to specific URL in `src` attribute.
  1. Absolute URL - Links to an external image that is hosted on another website. Example: `src="https://www.w3schools.com/images/img_girl.jpg"`
  2. Relative URL - Links to an image that is hosted within the website. Example: `src="/images/img_girl.jpg"`
  - The value of the `alt` attribute should describe the image. If a browser cannot find an image, it will display the value of the `alt` attribute.
  - We can use `style` attribute to specify the width and height of an image or alternatively we can use `width` and `height` attributes.

  > It is almost always best to use relative URLs. They will not break if you change domain.

- To use an image as a link, just put the `<img>` tag inside the `<a>` tag.

- The `style` attribute is used to add styles to an element, such as color, font, size, and more. Example: `<p style="color:red;">This is a red paragraph.</p>`

- `<html lang="en">` is meant to assist search engines and browsers. `<html lang="en-US">` country codes can also be added to the language code.

- The `title` attribute defines some extra information about an element.

    The value of the title attribute will be displayed as a tooltip when you mouse over the element. Example: `<p title="I'm a tooltip">This is a paragraph.</p>`

- Search engines use the headings to index the structure and content of your web pages.

    Users often skim a page by its headings. It is important to use headings to show the document structure.

- The `<hr>` tag defines a thematic break in an HTML page, and is most often displayed as a horizontal rule. The `<hr>` tag is an empty tag, which means that it has no end tag.

- The HTML `<pre>` element defines preformatted text. The text inside the element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks.

- The HTML `<strong>` element defines text with strong importance. The content inside is typically displayed in bold.

- The HTML `<small>` element defines smaller text.

- The HTML `<mark>` element defines text that should be marked or highlighted.

- The HTML `<del>` element defines text that has been deleted from a document. Browsers will usually strike a line through deleted text.

- The HTML `<ins>` element defines a text that has been inserted into a document. Browsers will usually underline inserted text.

- The HTML `<sub>` element defines subscript text. Subscript text appears half a character below the normal line, and is sometimes rendered in a smaller font. Subscript text can be used for chemical formulas.

- The HTML `<sup>` element defines superscript text. Superscript text appears half a character above the normal line, and is sometimes rendered in a smaller font.

- The HTML `<blockquote>` element defines a section that is quoted from another source.
Browsers usually indent `<blockquote>` elements.

- The HTML `<q>` tag defines a short quotation. Browsers normally insert quotation marks around the quotation.

- The HTML `<abbr>` tag defines an abbreviation or an acronym. Use the global `title` attribute to show the description for the abbreviation/acronym when you mouse over the element.

- The HTML `<address>` tag defines the contact information for the author/owner of a document or an article.

- The HTML `<cite>` tag defines the title of a creative work. The text in the `<cite>` element usually renders in italic. A person's name is not the title of a work.

- The HTML `<bdo>` tag is used to override the current text direction. BDO stands for Bi-Directional Override. Example: `<bdo dir="rtl">This text will be written from right to left</bdo>`

> HTML supports 140 standard color names.

- In HTML, a color can be specified using hue, saturation, and lightness (HSL) in the form.

- Bookmarks can be useful if a web page is very long.
To create a bookmark - first create the bookmark, then add a link to it.
When the link is clicked, the page will scroll down or up to the location with the bookmark. 

    ```
        <h2 id="C4">Chapter 4</h2>
        <a href="#C4">Jump to Chapter 4</a>

        // You can also add a link to a bookmark on another page
        <a href="html_demo.html#C4">Jump to Chapter 4</a>
    ```


# CSS (Cascading Style Sheets)

- CSS can be added to HTML documents in 3 ways:

    - Inline - by using the style attribute inside HTML elements. Example: `<h1 style="color:blue;">A Blue Heading</h1>`
    - Internal - by using a `<style>` element in the `<head>` section
    ```
    <!DOCTYPE html>
    <html>
    <head>
    <style>
    body {background-color: powderblue;}
    h1   {color: blue;}
    p    {color: red;}
    </style>
    </head>
    <body>

    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>

    </body>
    </html>
    ```
    - External - by using a `<link>` element to link to an external CSS file. `<link rel="stylesheet" href="styles.css">`

- The CSS `padding` property defines a padding (space) between the text and the border.
- The CSS `margin` property defines a margin (space) outside the border

-  One can change the link state colors, by using CSS, A link can also be styled as a button, by using CSS.
    ```
    <style>
    a:link {
    color: green;
    background-color: transparent;
    text-decoration: none;
    }

    a:visited {
    color: pink;
    background-color: transparent;
    text-decoration: none;
    }

    a:hover {
    color: red;
    background-color: transparent;
    text-decoration: underline;
    }

    a:active {
    color: yellow;
    background-color: transparent;
    text-decoration: underline;
    }
    </style>
    ````

