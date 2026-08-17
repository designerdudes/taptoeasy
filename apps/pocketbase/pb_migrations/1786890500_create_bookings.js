/// <reference path="../pb_data/types.d.ts" />

migrate(
    (app) => {
        let collection;
        try {
            collection = app.findCollectionByNameOrId('bookings');
        } catch (_) {
            collection = new Collection({
                type: 'base',
                name: 'bookings',
                listRule: null,
                viewRule: null,
                createRule: '',
                updateRule: null,
                deleteRule: null,
                fields: [
                    { name: 'name', type: 'text', required: true, max: 120 },
                    { name: 'phone', type: 'text', required: true, max: 20 },
                    { name: 'city', type: 'text', max: 120 },
                    { name: 'address', type: 'text', max: 500 },
                    {
                        name: 'service',
                        type: 'select',
                        required: true,
                        maxSelect: 1,
                        values: ['new_installation', 'repair', 'relocation', 'enquiry'],
                    },
                    {
                        name: 'model',
                        type: 'select',
                        maxSelect: 1,
                        values: ['ceiling_pulley', 'wall_foldable', 'not_sure'],
                    },
                    { name: 'preferred_date', type: 'text', max: 40 },
                    { name: 'notes', type: 'text', max: 1000 },
                    { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
                    { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
                ],
            });
            app.save(collection);
        }
    },
    (app) => {
        try {
            const collection = app.findCollectionByNameOrId('bookings');
            app.delete(collection);
        } catch (e) {
            if (String(e.message).includes('no rows in result set')) return;
            throw e;
        }
    },
);
