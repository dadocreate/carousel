#SapientNitro HTML,CSS & JS Test

##Introduction
This is a standard test where we expect the developer to respond to several aspects:
1. Own the technology and ensure the output reflects your understanding of best in breed technology for today. 
2. Utilising a JS library or framework (i.e. jQuery, Backbone, Angular, Ember, React, etc) build the necessary functionality in JS
3. Where possible to provide nice flourishes to demonstrate a flair
4. We would like to see how you use Git in your workflow. Please provide a git bundle in your response.
5. Please feel free to utilise NPM, package.json, grunt, gulp to accelerate your development.

## Example of what you will be building
![Carousel Test Example](./carousel_mockup.jpg)

##HTML / CSS

Above is the graphic design for a 'carousel' a simple widget that cycles through 12 images, using the icons at the bottom. [On this page](./basic_carousel.html) is the beginning of some HTML / CSS - which needs to be completed.

## JavaScript
This is our carousel, it should look something like the image above. Looks though, are less important than **working JavaScript**. You can find the beginnings of an HTML page for you to start from here on the [Basic carousel page.](./basic_carousel.html)

Our carousel is made up of 'Teaser' adverts. You can see 4 of these teasers at any one time. The idea is to allow the user to seamlessly switch between 3 different 'pages' of teasers. The data for the teasers is stored in a [JSON format file](./basic_carousel.json) that you can get with an AJAX request.

**It's not important to complete the code** in the time that you have, but it is important that you put in plenty of comments to show how you would structure your code, so I might imagine how you would complete the task.

##Rules
- You are requested to download any core library you like (e.g. jQuery, Backbone, Angular, Ember, React, etc) **BUT…**
- Please **DO NOT** use a 3rd party carousel plugin - We want to see your JS skills.
- Please return the code in a git bundle see instructions below

###Key requirements
- Valid (X)HTML, CSS & JS
- Clear comments, explaining your thinking
- When you click 'prev' link, it should show the previous 4 items
- When you click 'next' link, it should show the next 4 items
- When you click '1', '2' or '3' it should show the respective set of items

### Evaluation Criteria
- Style the controls to match the visual design above
- Style the fonts to match the visual design above
- Correct any HTML errors and reformat if you need to.
- Use of git and commits
- We're looking for tidy code, that's valid & accessible and semantic.
- Technology choices that reflect the best in breed for today. 
**HINT:** We expect you to advise us where technology doesn't match best practices and provide appropriate solutions.

###Extra credits for (any of the following)
- Responsive
- Hiding controls if JS is disabled
- Accurate presentation in IE and Chrome.
- JavaScript quality
- Attention to detail in providing little embleshments that make the experience better
- Nice animated transitions (Fades / slides etc.)
- Styling the carousel controls to look like the image above (sprite supplied)
- Hiding controls if JS is disabled
- Cross-browser functionality for IE8+ and latest Chrome, Firefox and Safari.
- Performance considerations
- Grunt, Gulp, Package.json

###How to create a git bundle

`git bundle create path/to/where/you/want/to/save/filename.bundle master`

please note, if you have created a new branch please replace master with the name of your branch
