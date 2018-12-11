/*
 * This call registers your application to be launched when the browser is ready.
 */
Ext.application({
    name: 'TaskBoard',

    mainView: 'TaskBoard.view.main.Main',

    requires: [
        'TaskBoard.view.main.Main',
        'Ext.*',
        'TaskBoard.*'
    ],

    launch: function () {
        //Ext.Msg.alert('Hello Ext JS', 'Hello! Welcome to Ext JS.');
    }
});
