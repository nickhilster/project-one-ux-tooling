
PROJECT: UX TOOLING
Group: Tanvi Karwa + Nikhil Khedkar

Note: All group communication was conducted over Discord Video/Screen sharing for the ease of collaboration and helping each other out to troubleshoot issues

Moodboard and Wireframe available in the pdf document

While we looked at many amazing websites out there for inspiration and reference below are a select few that inspired us the most.

https://beauvoir.ca/en/ (Primary inspiration)

https://www.rickandmorty.com/

https://www.davidebaratta.com/projects/

https://the-goonies.webflow.io/ 

https://dogstudio.co/

https://toyfight.co/who/

http://www.marlousderoode.nl/

https://circus-inc.com/en/value/

https://activetheory.net/home




Design Points to consider:

Homepage opens with image carousel
Scroll spy/landmark bar on the right-side
Scroll spy stays on top of all other layers
Keep the images ‘fresh’ and ‘vibrant’ referencing travel and nature
Horizontal scrolling after the homepage is scrolled
Load new content as the user reaches the end of the last page



Code	

Carousel
Carousels will require the use of an id for carousel controls.
Create a unique input field for every slide with a unique ID which will be connected with a label.
Define options like number of slides and transition speed. The speed should be defined in ‘seconds’


Horizontal scrolling
Create containers and then children divs inside of it. These divs will scroll horizontally.
Use the function ‘flex-wrap’. Set overflow: hidden and use the ‘grid-template-columns’ function alignment.
 Turn off vertical scrolling (overflow-y) and enable horizontal scrolling (overflow-x). Then with each card set it to display ‘flex’.
Calculate the height  and width of the window
Calculate the total height and width of the document
Calculate maximum height by subtracting window height from the doc height.
Calculate maximum width by subtracting window width from the doc width.
Round up the final calculated answer using the math.round function.



Landmark/Scrollspy: 

Add data-spy="scroll" to the body as that would be the scrollable area.


Add data-target attribute with a value of the id or the class name of the navigation bar (.navbar)
All the scrollable elements must match the ID of the links inside the navbar's list items. For eg: <div id="section1"> matches <a href="#section1">

Can add optional ‘data-offset’ to specify the number of pixels to offset from top when calculating the position of scroll. Use this to set the position if the active state of the landmark changes too soon or too early when jumping to the scrollable elements.
Chat App:
Add HTML while using a <form> element to process the input.

Add the CSS and styling based on the style guide colors

Add the Javascript to toggle the chat form open-close on click







