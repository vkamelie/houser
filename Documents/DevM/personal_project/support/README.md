# Organ Transplant Online Support Groups

## FrontEnd

### Depedecies 
- axios
- react-redux
- redux
- react-router-dom {browserRouter}
- react-promise-middleware
- sockets on the front end?

### Components
- header
- admin
- users
- login
- resourses 
- forums
    -add post
    -comment   
- chatRoom
- Dashboard

## Redux
- store
- reducer
- (users)

- Dashboard => '/'
- resourses => '/resoures'
- forum => '/forum'
    - forum groups => '/forum/:id'
- chat => '/chat'

## Backend

## Depedecies 
- express
- expresss-session
- dotenv
- bcrypt
- sockets

## DB Schema

- admin 
```sql
create table admin( 
    admin_id serial primary key,
    username varchar(64) not null,
    password varchar(64) not null,
    name text not null
)
```
```sql
create table users(
    user_id serial primary key,
    username varchar(64) not null,
    password varchar(64) not null,
    name text not null

);
```

```sql
create table user_post(
    post_id serial primary key,
    poster int references user(user_id),
    post_text text
)
 
create table post_comments(
    comment_id serial primary key,
    comment_post text,
    post_id int references user_post(post_id),
    user_id int references users(user_id)

)

```

- still working on chatRoom schemas need to do more research 
