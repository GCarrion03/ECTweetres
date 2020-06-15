# -*- coding: utf-8 -*-
import tweepy
import datetime
from elasticsearch import Elasticsearch
from datetime import timedelta
import sched, time
from random import randint

#Write info to the log file
def writeLog(msg):
    file_name = "log_retweetbot_0.dat"
    with open(file_name, "a") as myfile:
        myfile.write(msg + "\n")
    myfile.close()
s = sched.scheduler(time.time, time.sleep)
#DEVSBOTECU - 765271929657892864
#DA_GUZ - 496692665
def retweet_sched(sc):
        writeLog("Running retweeter...")
        es = Elasticsearch()
        tw_counter =0
        err_counter = 0
        follow_counter = 0
        # create bot DEVSBOTECU
        now = datetime.datetime.now()
        xminsago = datetime.datetime.now() - datetime.timedelta(minutes=30)
        now=now - timedelta(hours=5)
        xminsago=xminsago- timedelta (hours=5)
        writeLog(unicode(now))
        auth = tweepy.OAuthHandler("oyAu0xxchJOhmfGZ41IJPi3uq", "YZ2nwLF0JS68L0UTzNxFa5JE4e6uj5JB38bhdTiO9tCGYPsF0r")
        auth.set_access_token("765271929657892864-JwQJ4Gv3EJintjUtrVWfY8QnaBAyTPz", "rhahJ7xqwjJEr6YK9jD0PMJOYGLp5ASyqRuOPtO0h3hEL")
        api = tweepy.API(auth)
        res = es.search(index="ecuador-index", body={"sort": [{"retweeted_status.retweet_count": {"order": "desc"}}],"aggs": {"2": {"terms": {"field": "retweeted_status.id_str","size": 5,"order": {"1": "desc"}},"aggs": {"1": {"max": {"field": "retweeted_status.retweet_count"}}}},"3": {"max": {"field": "retweeted_status.retweet_count"}}},"size": 3,"query": {"filtered": {"query": {"query_string": {"analyze_wildcard": True,"query": "*"}},"filter": {"bool": {"must": [{"query": {"filtered": {"query": {"query_string": {"analyze_wildcard": True,"query": "*"}},"filter": {"range": {"retweeted_status.created_at": {"gte": xminsago,"lte": now,"time_zone": "-5:00"}}}}}}],"must_not": []}}}}})
        writeLog("Got %d Hits:" % res['hits']['total'])
        for hit in res['hits']['hits']:
                try:
                        #print api.show_friendship(target_id=hit["_source"]["user"]["id"])[0].following
                        if str(api.show_friendship(target_id=hit["_source"]["user"]["id"])[0].following) == 'False' and follow_counter <4:
                                api.create_friendship(hit["_source"]["user"]["id"])
                                #writeLog("Creating friendship with the user %s." % (hit["_source"]["user"]["id"]))
                                writeLog("Creating friendship with the user %s." % (hit["_source"]["user"]["id"]))
				api.send_direct_message(user_id=hit["_source"]["user"]["id"], text="Hola! Quieres saber las noticias más importantes referentes a Ecuador en el momento en el que se generan? Sígueme serás la sensación entre tus seguidores y tendraś siempre noticias de primera mano, te daré followback!")
                                writeLog("sending followme message to the user %s." % (hit["_source"]["user"]["id"]))
                                follow_counter+=1
                        else:
                                #writeLog("Friendship with %s already exists." % (hit["_source"]["user"]["id"]))           
                                writeLog("Friendship with %s already exists." % (hit["_source"]["user"]["id"]))
                                continue

                except tweepy.error.TweepError as e:
                        # just in case tweet got deleted in the meantime or already retweeted
                        writeLog("Couldn't create friendship with the user %s." % (hit["_source"]["user"]["id"]))
                        print e
        for hit in res['aggregations']['2']['buckets']:
                try:
                        writeLog( hit["key"])
                        api.retweet(hit["key"])
                        tw_counter += 1
                except tweepy.error.TweepError as e:
                        # just in case tweet got deleted in the meantime or already retweeted
                        err_counter += 1
                        writeLog(str(e))
        writeLog("Finished. %d Tweets retweeted, %d errors occured." % (tw_counter, err_counter))
	i=0
	randomN=randint(0,3000)
	print(randomN)
	followers = api.followers_ids()
	#Code to remove no followbacks
	for f in api.friends_ids():
	   if (i==randomN):
	      if f not in followers:
		 writeLog("Unfollowing %s." % f)
		 api.destroy_friendship(f)
	      else:
		 writeLog("%s is a follower all good." % f)
	   i=i+1
	#if now.hour == 13:
	#	if currsched != 1:
			#ToDo: Write the code to tweet the top content generator at 1 pm
	#		sc.enter(120, 1, retweet_sched, (sc,))	
	#elif now.hour == 19:
	#	if currsched != 2:
			#ToDo: Write the code to tweet the top content generator at 7 pm
	#		sc.enter(120, 1, retweet_sched, (sc,))		
	sc.enter(120, 1, retweet_sched, (sc,))
s.enter(20, 1, retweet_sched, (s,))
s.run()
