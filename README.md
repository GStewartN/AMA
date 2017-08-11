# Basic AMA App

Epicodus-JavaScript, Week 2 Independent Project 08.11.2017

## Description

This app allows the user to enter a question, and other users to enter answers to said question. The app displays questions as links, and can be answered on their individual pages.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

You will also need a [Firebase](https://console.firebase.google.com/) account if you wish to use your own database. Follow prompts to add the app to your database. Edit the 'firebase' section of environment.js with your own information.

## Configuration/dependencies

* ember-cli
* emberfire
* ember-bootstrap

The app will use ember-cli and its myriad of pre-loaded assets.

## Setup/Installation

* `git clone <repository-url>` this repository
* `cd ama`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).


### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Specifications

| Behavior | Input | Output |
|----------|-------|--------|
| User visits home page, chooses to ask question | Click ask question button | Home page displays form to enter question|
| User enters question | How do I install nodejs? | Question displays on home page as link with author's name|
| User views a question | Click any question link | Question page displays with the content, edit and delete buttons, and an answer button |
| User chooses to answer question | Click answer button | A form to enter answer displays on the question page |
| User enters answer | Go to nodejs site and follow directions | The answer displays below the question along with previous answers |

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

### License

MIT License

Copyright &copy; 2017 Nathan Stewart

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
