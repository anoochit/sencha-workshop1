// d e a c
Ext.define('WorkShop1.view.view_MainApp', {
    extend: 'Ext.Container',
    alias: 'widget.wg_view_MainApp',

    requires: ['Ext.TitleBar'],

    config: {
        items: [
            {
                xtype: 'titlebar',
                title: 'Main App',

                items: [
                    {
                        xtype: 'button',
                        text: "Add",
                        itemId: 'bnt_Add'
                    }
                ]
            }
        ],

        html: 'Main App'
    }

});

