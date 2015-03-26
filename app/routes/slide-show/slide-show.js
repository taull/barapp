import Ember from 'ember';

var SLIDES = [
    "bartender1",
    "bartender2",
    "bartender3"
];

export default Ember.Route.extend({

    model: function () {
        return SLIDES;
    }
});
