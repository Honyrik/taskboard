Ext.define('TaskBoard.component.agilegrid.AgileGrid', {
    extend: 'Ext.grid.Panel',
    
    xtype: 'agilegrid',
    
    config: {
        statusView: null
    },

    viewConfig: {
        plugins: { 
            ptype: 'gridviewdragdrop',
            ddGroup: 'gridtask',
            dropZone: {
                handleNodeDrop(data) {
                    var view = this.view,
                        grid = view.grid;
                        data.records.forEach(element => {
                            element.set('status', grid.statusView);
                        });
                }
            }
        }
    },

    applyStatusView(value) {
        this.columns = [{
            text: value,
            xtype: 'templatecolumn',
            menuDisabled: true,
            sortable: false,
            flex: 1,
            tpl: '<div class="{priority}"><span class="label-task">{num}</span><div>{summary}</div></div>'
        }];
        this.statusView = value;
    }
});
