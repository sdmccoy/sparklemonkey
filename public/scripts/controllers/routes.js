'use strict';

page('/', app.mapController.index);
page('/list', app.listController.index);
page('/about', app.aboutController.index);


page('/list/:area/:start/:end', app.generalController.createFilter, app.generalController.loadFromFilter, app.listController.index)
page('/:area/:start/:end', app.generalController.createFilter, app.generalController.loadFromFilter, app.mapController.index)


page();
