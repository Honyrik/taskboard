/**
 * Хранилище задач
 */
Ext.define('TaskBoard.store.Tasks', {
    extend: 'Ext.data.Store',
    alias: 'store.tasks',
    storeId: 'tasks',
    
    requires: [
        'TaskBoard.model.TaskModel',
        'TaskBoard.api.WsApi'
    ],
    
    model: 'TaskBoard.model.TaskModel',
    proxy: {
        type: 'websocket',
        storeId: 'tasks',
        websocket: TaskBoard.api.WsApi.getWs(),
        api: {
            create: 'postTask',
            read: 'getTask',
            update: 'updateTask',
            destroy: 'deleteTask'
        }
    },
    autoLoad: true,
    autoSync: true,
});