#! /usr/bin/python
import tweepy
from random import randint
auth = tweepy.OAuthHandler("oyAu0xxchJOhmfGZ41IJPi3uq", "YZ2nwLF0JS68L0UTzNxFa5JE4e6uj5JB38bhdTiO9tCGYPsF0r")
auth.set_access_token("765271929657892864-JwQJ4Gv3EJintjUtrVWfY8QnaBAyTPz", "rhahJ7xqwjJEr6YK9jD0PMJOYGLp5ASyqRuOPtO0h3hEL")
api = tweepy.API(auth)
i=0
randomN=randint(0,3000)
print(randomN)
followers = api.followers_ids()
for f in api.friends_ids():
   #print ("Following %s." % follower)
   if (i==randomN):
      if f not in followers:
         print ("Unfollowing %s." % f)
	 api.destroy_friendship(f)
      else:
	 print ("%s is a follower all good." % f)
   i=i+1
