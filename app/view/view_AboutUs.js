// d e a c
Ext.define('WorkShop1.view.view_AboutUs', {
    extend: 'Ext.Container',
    alias: 'widget.wg_view_AboutUs',

    config: {

        items: [
            {
                xtype: 'titlebar',
                title: 'About US',

                items: [
                    {
                        xtype: 'button',
                        text: 'Back',
                        ui: 'back',
                        itemId: 'bntBack'
                    }
                ]
            }
        ],

        html: 'About Us'
    }

});

