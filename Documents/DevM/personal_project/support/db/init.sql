drop table if exists post_comments;
drop table if exists user_post;
drop table if exists users;

create table users(
    id serial primary key,
    username varchar(64) unique not null,
    password varchar(64) not null,
    name text not null
);

create table user_post(
    post_id serial primary key,
    poster int references users(id),
    post_text text
);
 
create table post_comments(
    comment_id serial primary key,
    comment_post text,
    post_id int references user_post(post_id),
    user_id int references users(id)

);

