'use strict';

page('/', app.mapController.index);
page('/list', app.listController.index);
page('/about', app.aboutController.index);

page('/:area/:start/:end', app.mapController.createFilter, app.mapController.index)

page();
