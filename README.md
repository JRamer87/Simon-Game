# Retro Simon Game
![App Screenshot](https://github.com/JonDRamer/Angular-PostgreSQL-Reddit-Clone/blob/master/screenshots/Reddit.png)

### Technologies used:

###### HTML5
###### CSS3
###### Javascript
###### JQuery

### Goal
###### To re-create the Simon memory game created by Milton Bradley in 1978.  I tried to make the game feel as authentic as possible.  I followed the style of the original game as closely as possible.  

### Description

###### I created this app at the end of the first quarter during the Full-Stack Web Development immersive at galvanize in Austin.  I learned Javascript, HTML, CSS, and JQuery during the first quarter so that's all I had to work with on this project.  I had one week to make this project.  Simon is a memory game where the player is shown a pattern and they must play that pattern back in the right order to get a new pattern.  The goal is to get as many patterns right as possible and build your streak.  Once you get one wrong you have to start over.

### Challenges

###### I had a problem with displaying the pattern properly.  I was trying to loop through an array and toggle a class that lit up the correct color in the pattern.  I was trying to use a for loop, but the iterations happened so quickly that all of the colors were just lighting up at the same time.  I tried everything I could think of to delay the iterations in the for loop with no success.  I eventually did some research and came up with a custom recursive solution that used setTimeouts to control the speed of the toggling and the incrementation through the array.  

### App Walkthrough

### Posts View

###### From here you can view all of the posts in your feed.  You can see how long ago the post was made.  You can also see how many up-votes and comments a post has received.  

![App Screenshot](https://github.com/JonDRamer/Angular-PostgreSQL-Reddit-Clone/blob/master/screenshots/Reddit%20Clone.png)

### Edit Post View

###### From this page you can edit the content of a post.  When you click the edit post button the form is pre-filled with the existing information from the post.  This allows you to only update the specific items that need to be updated.

![Edit Page Screenshot](https://github.com/JonDRamer/Angular-PostgreSQL-Reddit-Clone/blob/master/screenshots/Edit%20Post.png)

### New Post Form

###### With the new post form a user can create a new post.  As you can see in this screenshot the fields turn red until they are considered valid.  The create post button is also disabled until the entire form is considered valid.  Users are prompted with validation messages that inform them of the criteria they must meet to validate each field.  Once the field is valid it will turn green to notify the user that they have met the criteria for the field.  Finally once the entire form is valid the create post button is enabled.

![New Post Form Screenshot](https://github.com/JonDRamer/Angular-PostgreSQL-Reddit-Clone/blob/master/screenshots/New%20Post%20Form.png)

### Filter/Search View

###### Users can filter their feed using the Sort By button.  Users can sort  posts in chronological or reverse chronological order.  They can also sort by total votes or by post title.  The posts will be dynamically sorted once a selection is made. Users can also type in the search field to dynamically search for a post.  The user will only be shown the post(s) that match their search criteria.

![Filter Screenshot](https://github.com/JonDRamer/Angular-PostgreSQL-Reddit-Clone/blob/master/screenshots/Filter.png)
