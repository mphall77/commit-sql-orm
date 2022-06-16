from django.db import models

class User(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

class Commit(models.Model):
    message = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)


# Feel free to use https://docs.djangoproject.com/en/4.0/topics/db/models/ as a reference

# Update this function to accept an optional parameter 'userId' - and return the commits created by that user
def getCommits():
    return Commit.objects.all()

# Complete this function so that it creates a new commit ()
def createCommit(message, user):
    pass

# Complete this function -- remove a commit based on the commit id
def deleteCommit(id):
    pass

# Complete this function -- return a User and all of their associated commits
def getUserWithCommits(userId):
    pass


