# Gulp, Node, Express, Ejs, D3 - start project

start - gulp

### Added Admin Rights:
- in the views files:
app show page and comment show page for button visibility
```
 <% if (currentUser && app.author.id.equals(currentUser._id) || currentUser && currentUser.isAdmin === true) { %>
 <% if (currentUser && comment.author.id.equals(currentUser._id) || currentUser && currentUser.isAdmin === true) { %>
```
in the middleware:
in the CheckUsersApp:
```
    if(app.author.id.equals(req.user._id) || req.user.isAdmin) {

    }
```
and :
in the checkUserComment:
```
    if(comment.author.id.equals(req.user._id) || req.user.isAdmin) {

        }
```

### Added User Profiles
