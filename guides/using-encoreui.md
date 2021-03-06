# Using EncoreUI In Your Own Project

We have provided a [full tutorial on getting started with Encore](https://pages.github.rackspace.com/EncoreUI/encore-tutorial/index.html) (accessible only to Rackspace employees). If this is your first time using EncoreUI, we *highly* recommend you start there.

Otherwise, the basic steps to install EncoreUI can be found below.

## Installation

### Easy Setup: Encore Generator

The [Encore Generator](https://github.com/rackerlabs/generator-encore) is a project template to help get things started with new EncoreUI-based apps. You must be a Rackspace employee in order to access the repository.


### Manual Setup: Create a New Angular Project

If you're unable to (or prefer not to) use the Encore Generator, you need to manually create a new Angular project. Once set up, add the EncoreUI files to your page either through the CDN or Bower:

#### Bower

If you have a static server that you'd like to build your files off of, you can install EncoreUI via [Bower](http://bower.io):

```
bower install encore-ui
```

## Using Components

Now that EncoreUI is installed, you may begin using its components.

Very likely, the first component you'll want to get in to is `<rx-app>`. If you used the Encore Generator, rxApp is already set up in the index.html file. If not, you'll want to read through [the rxApp documentation](http://rackerlabs.github.io/encore-ui/#/components/rxApp) for more information on its use (including how to use `<rx-page>`).

From there, just start building pages, using whatever EncoreUI component is needed.

## Using EncoreUI without Angular

While the intention of EncoreUI is for it to be used in conjunction with AngularJS, it is possible to use just the styles (similar to how Twitter Bootstrap can be used without JS).

The entirety of the EncoreUI CSS is available via the main CSS file. To use, include it on your page [as described above](#cdn).

> Disclaimer: At any point in time, an HTML change to the Angular directive template can change the HTML needed for the CSS to work properly. Be sure when upgrading major/minor versions of the CSS file to check [the releases](https://github.com/rackerlabs/encore-ui/releases) for details on what has been updated.

## Further Guidance

For further help, reach out to the EncoreUI team via [our support information](https://github.com/rackerlabs/encore-ui#general-support).
