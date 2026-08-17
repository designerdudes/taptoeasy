/// <reference path="../pb_data/types.d.ts" />

migrate(
  (app) => {
    const collection = app.findCollectionByNameOrId("bookings");

    collection.fields.add(
      new TextField({
        name: "product",
        max: 120,
      }),
    );

    collection.fields.add(
      new NumberField({
        name: "deposit_amount",
        min: 0,
      }),
    );

    app.save(collection);
  },
  (app) => {
    const collection = app.findCollectionByNameOrId("bookings");
    collection.fields.removeByName("product");
    collection.fields.removeByName("deposit_amount");
    app.save(collection);
  },
);
