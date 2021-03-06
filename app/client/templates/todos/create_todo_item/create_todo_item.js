/*****************************************************************************/
/* CreateTodoItem: Event Handlers */
/*****************************************************************************/
Template.CreateTodoItem.events({

    'submit form': function (e, tmpl) {
        e.preventDefault();

        var subject = tmpl.find('input').value;

        Todos.insert({
           subject: subject,
            createdAt: new Date,
            userId: Meteor.userId(),
            isDone: false
        });

        tmpl.find('form').reset();
    }
});

/*****************************************************************************/
/* CreateTodoItem: Helpers */
/*****************************************************************************/
Template.CreateTodoItem.helpers({
});

/*****************************************************************************/
/* CreateTodoItem: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateTodoItem.created = function () {
};

Template.CreateTodoItem.rendered = function () {
};

Template.CreateTodoItem.destroyed = function () {
};
