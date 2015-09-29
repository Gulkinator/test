Rev.appModel('Beep',
  Backbone.Model.extend({
    urlRoot: '/beeps'
  })
);

Rev.appModel('BeepCollection',
  Backbone.Collection.extend({
    url: '/beeps',
    model: App.Models.Beep
  })
);
