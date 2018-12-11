Ext.define('TaskBoard.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main-vm',

    requires: [
        'TaskBoard.model.TaskModel',
        'TaskBoard.store.Tasks'
    ],

    data: {
        name: 'Main'
    },

    stores: {
        tasks: {
            type: 'tasks'
        },
        plan: {
            tyoe: 'chained',
            source: 'tasks',
            sorters: [
                {
                    property: 'priorityOrder',
                    direction: 'ASC'
                },
                {
                    property: 'firstName',
                    direction: 'ASC'
                }
            ],
            filters: [{
                property: 'status',
                operator: '=',
                value: 'PLAN'
            }]
        },
        progress: {
            tyoe: 'chained',
            source: 'tasks',
            sorters: [
                {
                    property: 'priorityOrder',
                    direction: 'ASC'
                },
                {
                    property: 'firstName',
                    direction: 'ASC'
                }
            ],
            filters: [{
                property: 'status',
                operator: '=',
                value: 'IN PROGRESS'
            }]
        },
        testing: {
            tyoe: 'chained',
            source: 'tasks',
            sorters: [
                {
                    property: 'priorityOrder',
                    direction: 'ASC'
                },
                {
                    property: 'firstName',
                    direction: 'ASC'
                }
            ],
            filters: [{
                property: 'status',
                operator: '=',
                value: 'TESTING'
            }]
        },
        done: {
            tyoe: 'chained',
            source: 'tasks',
            sorters: [
                {
                    property: 'priorityOrder',
                    direction: 'ASC'
                },
                {
                    property: 'firstName',
                    direction: 'ASC'
                }
            ],
            filters: [{
                property: 'status',
                operator: '=',
                value: 'DONE'
            }]
        }
    }
});