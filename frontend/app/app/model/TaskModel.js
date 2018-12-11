/**
 * Модель задания
 */
Ext.define('TaskBoard.model.TaskModel', {
    extend: 'Ext.data.Model',

    identifier: 'sequential',

    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'num',
        description: "Номер задачи",
        type: 'string'
    }, {
        name: 'summary',
        description: "Название задачи",
        type: 'string'
    }, {
        name: 'firstName',
        description: "Имя",
        type: 'string'
    }, {
        name: 'lastName',
        description: "Фамилия",
        type: 'string'
    }, {
        name: 'status',
        description: "Статус",
        type: 'string'
    }, {
        name: 'priority',
        description: "Приоритет",
        type: 'string'
    }, {
        name: 'create',
        description: "Дата создания",
        type: 'date',
        dateFormat: 'c'
    }, {
        name: 'priorityOrder',
        type: 'int',
        convert(val, record) {
            switch(record.get('priority')) {
                case 'MUST': return 1;
                case 'SHOULD': return 2;
                case 'COULD': return 3;
                default: return val;
            }
        },
        depends: ['priority']
    }]
});