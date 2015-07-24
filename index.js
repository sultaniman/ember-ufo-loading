/* jshint node: true */
'use strict';

module.exports = {
	name: 'ember-ufo-loading',

	included: function(app) {
		this._super.included(app);
		app.import('/vendor/stars-loading.png');
		app.import('/vendor/ufo.png');
		app.import('/vendor/ufo-light.png');
		app.import('/vendor/small-ghost.png');
		app.import('/vendor/cloud.png');
		app.import('/vendor/cloud-reverse.png');
	}
};
