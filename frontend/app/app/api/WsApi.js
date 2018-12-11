/**
 * Апи подключения к БЭК
 */
Ext.define('TaskBoard.api.WsApi', {
    singleton: true,
    requires: [
        'Ext.ux.WebSocket',
        'Ext.ux.data.proxy.WebSocket'
    ],
    config: {
        ws: null
    },
    constructor() {
        this.setWs(Ext.create('Ext.ux.WebSocket', {
            url: 'ws://127.0.0.1:8000',
            communicationType: 'event',
            autoReconnect: true,
            autoReconnectInterval: 5000
        }));
    }
});
