'use strict';

page('/', app.mapController.index);
page('/list', app.listController.index);
page('/about', app.aboutController.index);

page('/:area/:start/:end', app.generalController.createFilter, app.mapController.index)
page('/list/:area/:start/:end', app.generalController.createFilter, app.listController.index)

page();
