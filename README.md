# Formula One Quiz

[Formula One Quiz](https://siobhaing.github.io/formula1-quiz/index.html)

This quiz is designed to test users knowledge on Formula One. It includes 8 multiple choice questions with 4 different answers for each question. The user is provided with their score at the end of the quiz.

![Am I Responsive Image](/assets/images/amiresponsive.PNG)

## Features

- ### Start Page
    - The Start Page provides the user with information on the quiz and short instructions on how to complete it.
    - The Title allows the user to link back to the start page at any time.
    - This page also provides the user with a Start button to begin the quiz.

![Start Page Image](/assets/images/startpage.PNG)

- ### Quiz Questions
    - Once the user begins the quiz they will be provided with the first question.
    - The user is provided with four multiple choice answers to choose from.
    - Once the user clicks the Next button, their answer is logged and they will move on to the next question.

![Questions image](/assets/images/questionimage.PNG)

- ### Score Section
    - At the end of the quiz the users score is shown within a congratulations message.
    - The user is provided with a Try Again button in case they want to give the quiz another shot.

![End Image](/assets/images/endpage.PNG)

## Testing
- I tested the quiz works on Desktop, iOS and Andrioid using [SmartBear's cross browser testing tool](https://smartbear.com/product/bitbar/). I signed up for a free trial and used the tool to ensure the project was working on all three device types.

![Desktop Test](/assets/images/desktop-test.png)
![iOS Test and Android test](/assets/images/ios-and-android-test.jpg)

- I confirmed that this project is responsive, looks good and functions on all standard screen sizes using the Devtools devide toolbar.
- I confirmed that the Start and Next buttons work correctly on all devices, that they take the users to the correct page and log the users answers before moving on.

### Bugs
#### Solved Bugs
- After deploying my project to GitHub pages, I disovered the background image of the quiz was not working.
- I added ".." to the beginning of the file path for my background image in the CSS stylesheet and this resolved the issue.
#### Unfixed Bugs
- No unfixed bugs.
### Validator Testing
- HTML
    - No errors were returned when passing through the officail W3C validator.
![HTML Check 1](/assets/images/html-check1.PNG)
![HTML Check 2](/assets/images/html-check-2.PNG)
- CSS
    - No errors were returned when passing through the official Jigsaw validator.
![CSS Check](/assets/images/css-test.PNG)
- Accessibility
    - I confirmed that the colours and fonts chosen were legible and accessible by running it through the Lighthouse in devtools.



## Deployment
- This website was deployed to GitHub pages. The steps to deploy are:
    - In the GitHub repository, navigate to the Settings tab
    - From the source section drop-down menu, choose the main branch
    - Once the main branch is selected, the page has provided the link to the completed website

The live link can be found here - [Formula One Quiz](https://siobhaing.github.io/formula1-quiz/index.html)

## Credits
### Content
- The code that inspired the quiz is from [Coding With Nick](https://www.youtube.com/watch?v=CqddbIrEM5I&t=858s)

### Media
- The background image for the project was sourced from [Abed Ismail on Unsplash](https://unsplash.com/photos/S3Xu9cvq2d0)


