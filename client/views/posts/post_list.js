var postData = [
{
	title: 'Introducing Telescoper',
    author: 'Sacha Greif',
    url: 'http://sachagreif.com/introducing-telescope/'
},
{
	title: 'Meteor',
    author: 'Tom Coleman',
    url: 'http://meteor.com'
},
{
	title: 'The Meteor Book',
    author: 'Tom Coleman',
    url: 'http://themeteorbook.com'
}
];

Template.postList.helpers({
	posts: postData
});