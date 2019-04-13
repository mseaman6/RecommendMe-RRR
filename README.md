# RecommendMe
##Description:
This application was created in order to organize and share recommendations among a groups of individuals.   A user is able to see a listing of all the current recommendations.  A user may create new recommendations, and comment on existing recommendations.  A user may also view details on existing recommendations (including user's comments).  Recommendations may also be viewed limited to specific categories.

##Install Instructions:
To use this app, just fork and clone it from GitHub, run 'bundle install', and 'rake db:migrate'. Then launch it by entering "rake start" in your terminal.  This will initiate to separate connections, one to the React

##Contributors Guide:
We welcome the input, advice and contribution of others.

If you see an opportunity for improvement and can make the change yourself go ahead and use a typical git workflow to make it happen:

-Fork this repository
-Make the change on your fork, with descriptive commits in the standard format
-Open a Pull Request against this repo

We will review your change and approve or comment on it.

If you notice a problem with the application that you believe needs improvement but you're unable to make the change yourself, you should raise a Github issue containing a clear description of the problem. Include relevant snippets of the content and/or screenshots if applicable. We strive to regularly review issue lists.

##Link to License for Code:
This project has been licensed under the MIT open source license. Please view the LICENSE file for permissions related to this application.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

#next steps
-set up Recommendation edit page; need to figure out how to prevent setState from endless cycle
-and then create actions for update to recommendations
-check comments actions with add and delete for refreshing of comment list
