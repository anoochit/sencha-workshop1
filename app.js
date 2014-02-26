// app na luk EVa
Ext.application({
    name: 'WorkShop1',
    views: ['view_MainApp', 'view_AboutUs', 'view_AboutMe'],
    controllers: ['controller_MainApp','controller_AboutUs'],

    launch: function () {

        console.log('App Start');

        var page_MainApp = {
            xtype: 'wg_view_MainApp'
        };

        var page_AboutUs = {
            xtype: 'wg_view_AboutUs'
        };

        var page_AboutMe = {
            xtype: 'wg_view_AboutMe'
        };

        // EVa
        Ext.Viewport.add([page_MainApp,page_AboutMe, page_AboutUs]);

    }

});