import Ember from 'ember';

import SlideShowController from "ember-slide-show/mixins/slide-show-controller";

export default Ember.Controller.extend(SlideShowController, {

    // the slides are the content in this simple app
    slides: function () {
        return this.get("content");
    }.property("content")
});
