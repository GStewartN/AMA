# ama

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

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

### Deploying

Specify what it takes to deploy your app.

## Planning

1. Configuration/dependencies

 * ember-cli pre-loaded dependencies and assets, possibly bootstrap
 * google firebase

2. Specifications

 | Behavior | Input | Output |
 |----------|-------|--------|
 | User visits home page, chooses to ask question | Click ask question button | Home page displays form to enter question|
 | User enters question | How do I install nodejs? | Question displays on home page as link with author's name|
 | User views a question | Click any question link | Question page displays with the content, edit and delete buttons, and an answer button |
 | User chooses to answer question | Click answer button | A form to enter answer displays on the question page |
 | User enters answer | Go to nodejs site and follow directions | The answer is displays below the question along with previous answers |

 3. Integration

  * index route
  * links route
  * firebase setup and config
  * question route and components
  * edit question component
  * answer components

4. UX/UI

 * add bootstrap if time allows
 * refine styling

5. Polish

 * refactor where possible
 * clean/remove whitespace and unnecessary comments
 * proofread and edit all displayed text
 * polish readme

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
