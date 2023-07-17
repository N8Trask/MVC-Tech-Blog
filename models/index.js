const User = require('./User');
const Post = require('./Post');
const Comments = require('./Comments');

User.hasMany(Post, {
    foreignKey: 'created_by',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'created_by',
});

Post.hasMany(Comments, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comments.belongsTo(Post, {
    foreignKey: 'post_id',
});

User.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Comments.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post, Comment };