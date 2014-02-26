// d e a c
Ext.define('WorkShop1.controller.controller_MainApp', {
    extend: 'Ext.app.Controller',
    config: {

        refs: {
            ref_wg_view_MainApp_bnt_Add: 'wg_view_MainApp #bnt_Add',
            ref_wg_view_AboutUs: 'wg_view_AboutUs'

        },

        control: {
            ref_wg_view_MainApp_bnt_Add: {
                tap: 'FNC_bntAdd'
            }
        }

    },
    launch: function () {
        console.log("Controller start...")
    },
    FNC_bntAdd: function () {
        console.log("Tap add button...")
        var _view = this.getRef_wg_view_AboutUs();
        console.log(_view);
        //EVa
        Ext.Viewport.animateActiveItem(_view,{type:'slide',direction:'left'});

    }

});