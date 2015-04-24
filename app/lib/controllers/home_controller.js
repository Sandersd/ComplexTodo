HomeController = RouteController.extend({
  layoutTemplate: 'MasterLayout',

  subscriptions: function() {
      this.subscribe('todos');
        this.subscribe('userData');
  },

  action: function() {
    this.render('Home');
  }
});
