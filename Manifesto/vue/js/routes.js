/*global app, Router */

(function (app, Router) {

	'use strict';

	var router = new Router();

	['all', 'active', 'completed'].forEach(function (visibility) {
		router.on(visibility, function () {
			app.visibility = visibility;
		});
	});

	router.configure({
		notfound: function () {
			window.location.hash = '';
			app.visibility = 'all';
		}
	});

	router.init();

})(app, Router);

(function (app1, Router) {

	'use strict';

	var router = new Router();

	['all', 'active', 'completed'].forEach(function (visibility) {
		router.on(visibility, function () {
			app1.visibility = visibility;
		});
	});

	router.configure({
		notfound: function () {
			window.location.hash = '';
			app1.visibility = 'all';
		}
	});

	router.init();

})(app1, Router);

(function (app2, Router) {

	'use strict';

	var router = new Router();

	['all', 'active', 'completed'].forEach(function (visibility) {
		router.on(visibility, function () {
			app2.visibility = visibility;
		});
	});

	router.configure({
		notfound: function () {
			window.location.hash = '';
			app2.visibility = 'all';
		}
	});

	router.init();

})(app2, Router);

(function (app3, Router) {

	'use strict';

	var router = new Router();

	['all', 'active', 'completed'].forEach(function (visibility) {
		router.on(visibility, function () {
			app3.visibility = visibility;
		});
	});

	router.configure({
		notfound: function () {
			window.location.hash = '';
			app3.visibility = 'all';
		}
	});

	router.init();

})(app3, Router);


