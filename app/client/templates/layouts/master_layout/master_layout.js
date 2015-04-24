

Template.MasterLayout.helpers({

    picURL: function () {

        return Meteor.user().services.twitter.profile_image_url;
    }
});

Template.MasterLayout.events({
});
