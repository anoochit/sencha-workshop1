// d e a c
Ext.define('WorkShop1.controller.controller_AboutUs', {
    extend: 'Ext.app.Controller',
    config: {

        refs: {
            ref_wg_view_MainApp: 'wg_view_MainApp',
            ref_wg_view_AboutUs_bnt_Back: 'wg_view_AboutUs #bntBack'
        },

        control: {
            ref_wg_view_AboutUs_bnt_Back: {
                tap: 'FNC_bnt_Back'
            }
        }
    },

    launch: function () {
        console.log("Controller About start...")
    },

    FNC_bnt_Back: function () {
        console.log("Tab back button...")
        var _view = this.getRef_wg_view_MainApp();
        console.log(_view);
        Ext.Viewport.animateActiveItem(_view,{type:'slide',direction:'left'});
    }

});