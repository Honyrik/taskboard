Ext.define('TaskBoard.view.main.Main', {
    extend: 'Ext.panel.Panel',
    plugins: 'viewport',
    
    xtype: 'app-main',

    title: 'TaskBoard',

    requires: [
        'Ext.plugin.Viewport',
        'TaskBoard.api.WsApi',
        'TaskBoard.view.main.MainModel',
        'TaskBoard.view.main.MainController',
        'TaskBoard.component.agilegrid.AgileGrid'
        ],

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    viewModel: 'main-vm',
    controller: 'main-ctrl',
    
    scrollable: true,
    
    bodyPadding: 10,

    
    items: [{
        xtype: 'container',
        flex: 2,
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        defaults: {
            xtype: 'agilegrid',
            flex: 1,
            margin: '0 5',
        },
        items: [{
            statusView: 'PLAN',
            mode: 1,
            bind: {
                selection: '{selectedTask}',
                store: '{plan}'
            }
        }, {
            statusView: 'IN PROGRESS',
            mode: 2,
            bind: {
                selection: '{selectedTask}',
                store: '{progress}'
            }
        }, {
            statusView: 'TESTING',
            mode: 3,
            bind: {
                selection: '{selectedTask}',
                store: '{testing}'
            }
        }, {
            statusView: 'DONE',
            mode: 4,
            bind: {
                selection: '{selectedTask}',
                store: '{done}'
            }
        }]
    }, {
        xtype: 'panel',
        layout: 'vbox',
        flex: 1,
        hidden: true,
        bind: {
            hidden: '{!selectedTask}'
        },
        defaults: {
            xtype: 'displayfield',
            labelWidth: 200,
        },
        items: [{
            fieldLabel: 'Номер задачи',
            bind: {
                value: '{selectedTask.num}'
            }
        }, {
            fieldLabel: 'Название задачи',
            bind: {
                value: '{selectedTask.summary}'
            }
        }, {
            fieldLabel: 'ФИО',
            bind: {
                value: '{selectedTask.firstName}, {selectedTask.lastName}'
            }
        }, {
            fieldLabel: 'Статус',
            bind: {
                value: '{selectedTask.status}'
            }
        }, {
            fieldLabel: 'Важность',
            bind: {
                value: '{selectedTask.priority}'
            }
        }, {
            fieldLabel: 'Дата',
            bind: {
                value: '{selectedTask.create:date("d.m.Y H:i:s")}'
            }
        }]
    }]
});
