/* Exploring sentiment in Edinburgh using social media on cloud resources
 Authors: Andres Chaves, Diego Montufar, Ilkan Esiyok, Gustavo Carrion, Clifford Siu
 ID’s: 706801, 661608, 616394,667597, 591158
 Qbuilder.js: This is a class for building the specific JSON query syntax following Elasticsearch DSL
*/

var QBuilder = {
    
    getEmptyAggregation: function (query,startDate,endDate) {
        
      var request = {
              "size": 0,
              "query": {
                "query_string": {
                  "analyze_wildcard": true,
                  "query": query
                }
              },
              "filter" : {
                       "range": {"created_at": {"gte": startDate,"lte": endDate,"time_zone": "-5:00"}}
                  },
              "aggs": {
              }
            };

        return request;
    },
    getIndividualTweetInfo: function (term,query) {
        
        var request = {
        		  "query": {
        		    "bool": {
        		      "must": [
        		        {
        		          "term": {
        		        	  term: query
        		          }
        		        }
        		      ],
        		      "must_not": [],
        		      "should": []
        		    }
        		  },
        		  "from": 0,
        		  "size": 10,
        		  "sort": [],
        		  "aggs": {}
        		};

          return request;
      },
    
    getPolygonAggregation: function (query,strPoints) {
        
    	var points = JSON.parse(strPoints);
        var request = {
                "size": 0,
                "query": {
                  "query_string": {
                    "analyze_wildcard": true,
                    "query": query}},
                    "filter":{"geo_polygon":{"coordinates":{
                    	points}}},
                "aggs": {
                }
              };

          return request;
      },
      getBasicAggregation: function (query,size,field) {
          
        var request = {
                "size": 0,
                "query": {
                  "query_string": {
                    "analyze_wildcard": true,
                    "query": query
                  }
                },
                "aggs": {
                  "2": {
                    "terms": {
                      "field": field,
                      "size": size,
                      "order": {
                        "_count": "desc"
                      }
                    }
                  }
                }
              };
          return request;
      },
    getBasicAggregationByDate: function (query,size,field,startDate,endDate) {
        

      
//      {
//    	  "size": 0,
//    	  "query": {
//    	    "filtered": {
//    	      "query": {
//    	        "query_string": {
//    	          "analyze_wildcard": true,
//    	          "query": "*"
//    	        }
//    	      },
//    	      "filter": {
//    	        "range": {
//    	          "created_at": {
//    	            "gte": "2016-07-21T00:00:00",
//    	            "lte": "2016-07-22T23:59:59",
//    	            "time_zone": "-5:00"
//    	          }
//    	        }
//    	      }
//    	    }
//    	  },
//    	  "aggs": {
//    	    "2": {
//    	      "terms": {
//    	        "field": "*",
//    	        "size": 5,
//    	        "order": {
//    	          "_count": "desc"
//    	        }
//    	      }
//    	    }
//    	  }
//    	}
      
      var request ={
    	  "size": size,
    	  "query": {
    	    "filtered": {
    	      "query": {
    	    	  "query_string": {
    	              "analyze_wildcard": true,
    	              "query": query
    	            }
    	      },
    	      "filter": {
    	        "range": {
    	          "created_at": {
    	            "gte": startDate,
    	            "lte": endDate,
    	            "time_zone": "-5:00"
    	          }
    	        }
    	      }
    	    }
    	  },
    	  "aggs": {
    	    "2": {
    	      "terms": {
    	        "field": field,
    	        "size": size,
    	        "order": {
    	          "_count": "desc"
    	        }
    	      }
    	    }
    	  }
    	};
      

        return request;
    },
    
    getUniqueAggregationByDate: function (query,size,field,startDate,endDate) {
      
      var request ={
    	  "size": size,
    	  "query": {
    	    "filtered": {
    	      "query": {
    	    	  "query_string": {
    	              "analyze_wildcard": true,
    	              "query": query
    	            }
    	      },
    	      "filter": {
    	        "range": {
    	          "created_at": {
    	            "gte": startDate,
    	            "lte": endDate,
    	            "time_zone": "-5:00"
    	          }
    	        }
    	      }
    	    }
    	  },
    	  "aggs": {
		  "distinct_users" : {
	            "cardinality" : {
	              "field" : field
	            }
	        }
    	  }
    	};
      

        return request;
    },
    
    getBasicPolygonAggregation: function (query,size,field,strPoints) {
    	var points = JSON.parse(strPoints);
        
        var request ={"size":0,"query":{"filtered":{
        	"query": { "wildcard": { "text": query }},
        	"filter":
        	{"bool":{ "should":[
        	{"geo_polygon":{
        		"coordinates":{points}}}]}}}},"aggs":{"2": {
        	                    "terms": {
        	                    	"field": field,
        	                      "size": size,
        	                      "order": {
        	                        "_count": "desc"
        	                      }
        	                    }
        	                  }
        	                 }
        	}

          return request;
      },

    getHistogramAggregation: function (query) {

        var request = {
                  "query": {
	            	  "filtered": {
	            	      "query": {
	            	    	  "query_string": {
	            	              "analyze_wildcard": true,
	            	              "query": query
	            	            }
	            	      },
	            	      "filter": {
	            	        "range": {
	            	          "created_at": {
	            	            "gte": startDate,
	            	            "lte": endDate,
	            	            "time_zone": "-5:00"
	            	          }
	            	        }
	            	      }
	            	    }
                  },
                  "size": 0,
                  "aggs": {
                    "2": {
                      "date_histogram": {
                        "field": "date.date_only",
                        "interval": "1w",
                        "pre_zone": "+10:00",
                        "pre_zone_adjust_large_interval": true,
                        "min_doc_count": 1
                      }
                    }
                  }
                };

        return request;
    },

//    getProlificTweeterAggregation: function (query,size) {
//
//        var request = {
//      "query": {
//        "filtered": {
//          "query": {
//            "query_string": {
//              "analyze_wildcard": true,
//              "query": "*"
//            }
//          },
//          "filter": {
//            "bool": {
//              "must": [
//                {
//                  "query": {
//                    "query_string": {
//                      "analyze_wildcard": true,
//                    "query": "*"
//                  }
//                }
//              }
//            ],
//            "must_not": []
//          }
//        }
//      }
//    },
//    "size": 0,
//    "aggs": {
//      "2": {
//        "terms": {
//          "field": "user.screen_name",
//          "size": size,
//          "order": {
//            "_count": "desc"
//          }
//        }
//      }
//                }
//       };
//
//        return request;
//    },

    getTopTweetsAggregation: function (query,size,startDate,endDate) {

        var request =  {
        			  "sort": [
        			    {
        			      "retweeted_status.retweet_count": {
        			        "order": "desc"
        			      }
        			    }
        			  ],
        			  "aggs": {
        			    "2": {
        			      "terms": {
        			        "field": "retweeted_status.id_str",
        			        "size": 5,
        			        "order": {
        			          "1": "desc"
        			        }
        			      },
        			      "aggs": {
        			        "1": {
        			          "max": {
        			            "field": "retweeted_status.retweet_count"
        			          }
        			        }
        			      }
        			    },
        			    "3": {
        			      "max": {
        			        "field": "retweeted_status.retweet_count"
        			      }
        			    }
        			  },
        			  "size": 200,
        			  "query": {
        			    "filtered": {
        			      "query": {
        			        "query_string": {
        			          "analyze_wildcard": true,
        			          "query": query
        			        }
        			      },
        			      "filter": {
        			        "bool": {
        			          "must": [
        			            {
        			              "query": {
        			                "filtered": {
        			                  "query": {
        			                    "query_string": {
        			                      "analyze_wildcard": true,
        			                      "query": query
        			                    }
        			                  },
        			                  "filter": {
        			                    "range": {
        			                      "retweeted_status.created_at": {
        			                        "gte": startDate,
        			                        "lte": endDate,
        			                        "time_zone": "-5:00"
        			                      }
        			                    }
        			                  }
        			                }
        			              }
        			            }
        			          ],
        			          "must_not": []
        			        }
        			      }
        			    }
        			  }
        			};
        
//    	  "sort": [
//    	    {
//    	      "retweeted_status.retweet_count": {
//    	        "order": "desc"
//    	      }
//    	    }
//    	  ],
//    	  "aggs": {
//    	    "2": {
//    	      "terms": {
//    	        "field": "retweeted_status.text.raw",
//    	        "size": size,
//    	        "order": {
//    	          "3": "desc"
//    	        }
//    	      },
//    	      "aggs": {
//    	        "3": {
//    	          "max": {
//    	            "field": "retweeted_status.retweet_count"
//    	          }
//    	        }
//    	      }
//    	    }
//    	  },
//    	  "query": {
//    	    "filtered": {
//    	      "query": {
//    	        "query_string": {
//    	          "analyze_wildcard": true,
//    	          "query": query
//    	        }
//    	      },
//    	      "filter": {
//    	        "bool": {
//    	          "must": [
//    	            {
//    	              "query": {
//    	                "filtered": {
//    	                  "query": {
//    	                    "query_string": {
//    	                      "analyze_wildcard": true,
//    	                      "query": query
//    	                    }
//    	                  },
//    	                  "filter": {
//    	                    "range": {
//    	                      "created_at": {
//    	                        "gte": startDate,
//    	                        "lte": endDate,
//    	                        "time_zone": "-5:00"
//    	                      }
//    	                    }
//    	                  }
//    	                }
//    	              }
//    	            }
//    	          ],
//    	          "must_not": []
//    	        }
//    	      }
//    	    }
//    	  }
//    	};
        return request;
},

populateTopContentGenerators: function (query,size,startDate,endDate) {

    var request =  {
    			  "sort": [
    			    {
    			      "retweeted_status.retweet_count": {
    			        "order": "desc"
    			      }
    			    }
    			  ],
    			  "aggs": {
    			    "2": {
    			      "terms": {
    			        "field": "retweeted_status.user.screen_name",
    			        "size": size
    			        
    			      },
    			      "aggs": {
    			        "1": {
    			          "max": {
    			            "field": "retweeted_status.retweet_count"
    			          }
    			        }
    			      }
    			    },
    			    "3": {
    			      "max": {
    			        "field": "retweeted_status.retweet_count"
    			      }
    			    }
    			  },
    			  "size": 200,
    			  "query": {
    			    "filtered": {
    			      "query": {
    			        "query_string": {
    			          "analyze_wildcard": true,
    			          "query": query
    			        }
    			      },
    			      "filter": {
    			        "bool": {
    			          "must": [
    			            {
    			              "query": {
    			                "filtered": {
    			                  "query": {
    			                    "query_string": {
    			                      "analyze_wildcard": true,
    			                      "query": query
    			                    }
    			                  },
    			                  "filter": {
    			                    "range": {
    			                      "retweeted_status.created_at": {
    			                        "gte": startDate,
    			                        "lte": endDate,
    			                        "time_zone": "-5:00"
    			                      }
    			                    }
    			                  }
    			                }
    			              }
    			            }
    			          ],
    			          "must_not": []
    			        }
    			      }
    			    }
    			  }
    			};
    return request;
},
    getFollowerAggregation: function (query,size,startDate,endDate) {

        var request = {
		      "query": {
		    	  "filtered": {
		    	      "query": {
		    	    	  "query_string": {
		    	              "analyze_wildcard": true,
		    	              "query": query
		    	            }
		    	      },
		    	      "filter": {
		    	        "range": {
		    	          "created_at": {
		    	            "gte": startDate,
		    	            "lte": endDate,
            	            "time_zone": "-5:00"
		    	          }
		    	        }
		    	      },
		              "filter": {
		                  "bool": {
		                    "must": [
		                      {
		                    	  "query": {
		            		    	  "filtered": {
					                        "query": {
					                          "query_string": {
					                            "analyze_wildcard": true,
					                            "query": query
					                          }
					                        },
						  		    	      "filter": {
						  		    	        "range": {
						  		    	          "created_at": {
						  		    	            "gte": startDate,
						  		    	            "lte": endDate,
						              	            "time_zone": "-5:00"
						  		    	          }
						  		    	        }
						  		    	      }
		            		    	  }
		                    	  }
		                      }
		                  ],
		                  "must_not": []
		                }
		              }
		    	    }
		    },
		    "aggs": {
		      "2": {
		        "terms": {
		          "field": "user.screen_name",
		          "size": size,
		          "order": {
		            "1": "desc"
		          }
		        },
		        "aggs": {
		          "1": {
		            "max": {
		              "field": "user.followers_count"
		            }
		          }
		        }
		      }
		    }
       };

        
//        {
//        	  "sort": [
//        	    {
//        	      "retweeted_status.retweet_count": {
//        	        "order": "desc"
//        	      }
//        	    }
//        	  ],
//        	  "aggs": {
//        	    "2": {
//        	      "terms": {
//        	        "field": "retweeted_status.id_str",
//        	        "size": 5,
//        	        "order": {
//        	          "1": "desc"
//        	        }
//        	      },
//        	      "aggs": {
//        	        "1": {
//        	          "max": {
//        	            "field": "retweeted_status.retweet_count"
//        	          }
//        	        }
//        	      }
//        	    },
//        	    "3": {
//        	      "max": {
//        	        "field": "retweeted_status.retweet_count"
//        	      }
//        	    }
//        	  },
//        	  "query": {
//        	    "filtered": {
//        	      "query": {
//        	        "query_string": {
//        	          "analyze_wildcard": true,
//        	          "query": "*"
//        	        }
//        	      },
//        	      "filter": {
//        	        "bool": {
//        	          "must": [
//        	            {
//        	              "query": {
//        	                "filtered": {
//        	                  "query": {
//        	                    "query_string": {
//        	                      "analyze_wildcard": true,
//        	                      "query": "*"
//        	                    }
//        	                  },
//        	                  "filter": {
//        	                    "range": {
//        	                      "created_at": {
//        	                        "gte": "2016-07-21T00:00:00",
//        	                        "lte": "2016-07-22T23:59:59",
//        	                        "time_zone": "-5:00"
//        	                      }
//        	                    }
//        	                  }
//        	                }
//        	              }
//        	            }
//        	          ],
//        	          "must_not": []
//        	        }
//        	      }
//        	    }
//        	  }
//        	};
//        {
//        	  "tweet": {
//        	    "properties": {
//        	      "retweeted_status": {
//	        	    	  "properties": {
//		        	      "text": {
//		        	        "type": "string",
//		        	        "fields": {
//		        	          "raw": {
//		        	            "type": "string",
//		        	            "index_analyzer": "simple"
//		        	          }
//		        	        }
//		        	      }
//        	    	  }
//        	    }}
//        	  }
//        	}
//        
        
        return request;
    },

    getLanguageSentimentAggregation: function (query,size) {

        var request = {
              "query": {
                "filtered": {
                  "query": {
                    "query_string": {
                      "analyze_wildcard": true,
                      "query": query
                    }
                  }
                }
              },
              "size": 0,
              "aggs": {
                "2": {
                  "terms": {
                    "field": "user.lang",
                    "size": size,
                    "order": {
                      "_count": "desc"
                    }
                  },
                  "aggs": {
                    "3": {
                      "terms": {
                        "field": "sentiment_analysis.sentiment",
                        "size": 3,
                        "order": {
                          "_count": "desc"
                        }
                      }
                    }
                  }
                }
              }
            };

        return request;
    },

    getGenderSentimentAggregation: function (query,size) {

        var request = {
      "query": {
        "query_string": {
          "query": query,
          "analyze_wildcard": true
        }
      },
      "size": 0,
      "aggs": {
        "2": {
          "terms": {
            "field": "user.gender",
            "size": 0,
            "order": {
              "_count": "desc"
            }
          },
          "aggs": {
            "3": {
              "terms": {
                "field": "sentiment_analysis.sentiment",
                "size": 5,
                "order": {
                  "_count": "desc"
                }
              }
            }
          }
        }
      }
    };

        return request;
    },

    getActiveTravellerAggregation: function (query,size) {

        var request = {
      "query": {
        "query_string": {
          "query": "*",
          "analyze_wildcard": true
        }
      },
      "size": 0,
      "aggs": {
        "2": {
          "terms": {
            "field": "user.screen_name",
            "size": size,
            "order": {
              "1": "desc"
            }
          },
          "aggs": {
            "1": {
              "cardinality": {
                "field": "place.full_name"
              }
            },
            "3": {
              "terms": {
                "field": "place.full_name",
                "size": 5,
                "order": {
                  "1": "desc"
                }
              },
              "aggs": {
                "1": {
                  "cardinality": {
                    "field": "place.full_name"
                  }
                }
              }
            }
          }
        }
      }
    };

        return request;
    },

    getElectionPopAnalysisAggregation: function (query) {

        var request = {  
         "size":0,
         "query":{  
            "query_string":{  
               "query":"*",
               "analyze_wildcard":true
            }
         },
         "aggs":{  
            "2":{  
               "terms":{  
                  "field":"text",
                  "include":{  
                     "pattern":"uklabour",
                     "flags":"CASE_INSENSITIVE"
                  },
                  "size":0,
                  "order":{  
                     "_count":"desc"
                  }
               }
            },
               "3":{  
                  "terms":{  
                     "field":"text",
                     "include":{  
                        "pattern":"snp",
                        "flags":"CASE_INSENSITIVE"
                     },
                     "size":0,
                     "order":{  
                        "_count":"desc"
                     }
                  }
            },
               "4":{  
                  "terms":{  
                     "field":"text",
                     "include":{  
                        "pattern":"conservative",
                        "flags":"CASE_INSENSITIVE"
                     },      
                     "size":0,
                     "order":{  
                        "_count":"desc"
                     }
                  }
            }
         }
      };

      return request;
    },

    getElectionPartyAnalysisAggregation: function (query, partyName) {

        var request = {
        "size": 0,
        "query": {
          "query_string": {
            "query": "*",
            "analyze_wildcard": true
          }
        },      
        "aggs": {
          "2": {
            "terms": {
              "field": "text",
              "include": {
                "pattern": partyName,
                "flags": "CASE_INSENSITIVE"
              },
              "size": 0,
              "order": {
                "_count": "desc"
              }
            },
            "aggs": {
              "3": {
                "terms": {
                  "field": "sentiment_analysis.sentiment",
                  "size": 3,
                  "order": {
                    "_count": "desc"
                  }
                }
              }
            }
          }
        }
      };
      return request;
    },

    getFavouritePlaceAggregation: function (query, placeName) {

      var request = {
          "size": 0,
          "query": {
            "query_string": {
              "query": placeName,
              "analyze_wildcard": true

            }
          },
          "aggs": {
            "2": {
              "terms": {
                "field": "sentiment_analysis.sentiment",
                "size": 0,
                "order": {
                  "_count": "desc"
                }
              }
            }
          }
      };
      return request;
    },

    getTweetTimeAggregation: function (query,startDate,endDate) {

        var request = {
          "size": 0,
          "query": {
        	    "filtered": {
		          "query": {
		            "query_string": {
		              "query": query,
		              "analyze_wildcard": true
		            }
		          },
			      "filter": {
		  	        "range": {
		  	          "created_at": {
		  	            "gte": startDate,
		  	            "lte": endDate,
        	            "time_zone": "-5:00"
		  	          }
		  	        }
		  	      }
        	    }
          },
          "aggs": {
            "2": {
              "terms": {
                "field": "date.time_type",
                "size": 0,
                "order": {
                  "_count": "desc"
                }
              }
            }
          }
      };
      return request;
    },

    getTweetDaySentimentAggregation: function (query,startDate,endDate) {

        var request = {
          "size": 0,
          "query": {
      	    "filtered": {
	          "query": {
	            "query_string": {
	              "query": query,
	              "analyze_wildcard": true
	            }
	          },
		      "filter": {
		  	        "range": {
		  	          "created_at": {
		  	            "gte": startDate,
		  	            "lte": endDate,
        	            "time_zone": "-5:00"
		  	          }
		  	        }
		  	      }
      	    }
          },
          "aggs": {
            "2": {
              "terms": {
                "field": "date.day_type",
                "size": 0,
                "order": {
                  "_count": "desc"
                }
              },
              "aggs": {
                "3": {
                  "terms": {
                    "field": "sentiment_analysis.sentiment",
                    "size": 0,
                    "order": {
                      "_count": "desc"
                    }
                  }
                }
              }
            }
          }
      };
        /*{
  "size": 0,
  "query": {
    "filtered": {
      "query": {
        "query_string": {
          "query": "*",
          "analyze_wildcard": true
        }
      },
      "filter": {
        "range": {
          "created_at": {
            "gte": "2016-6-30T20:03:12.963",
            "lte": "2016-7-1T20:03:12.963"
          }
        }
      }
    }
  },
  "aggs": {
    "2": {
      "terms": {
        "field": "date.day_type",
        "size": 0,
        "order": {
          "_count": "desc"
        }
      },
      "aggs": {
        "3": {
          "terms": {
            "field": "sentiment_analysis.sentiment",
            "size": 0,
            "order": {
              "_count": "desc"
            }
          }
        }
      }
    }
  }
}*/
      return request;
    },


    getClusteredData: function (query, key) {
        
      var request = {
             "search_request":{
              "query": {
                "query_string": {
                  "query": query
                }
              },
              },
              "size": 400000,
	      "query_hint": key,
              "field_mapping":{
		"title": ["_source.title"],
		"content": ["_source.text"]
	       },
	      "algorithm": "lingo",
              "attributes": {
                  "LingoClusteringAlgorithm.desiredClusterCountBase": 5
              },
              "include_hits": true
            };

        return request;
    },

    getWeatherSentimentAggregation: function (query) {

    var request = {
      "query": {
        "query_string": {
          "query": query,
          "analyze_wildcard": true
        }
      },
      "size": 0,
      "aggs": {
        "2": {
          "date_histogram": {
                "field": "date.date_only",
                "interval": "1m",
                "pre_zone": "+10:00",
                "pre_zone_adjust_large_interval": true,
                "min_doc_count": 1
          },
          "aggs": {
            "4": {
              "terms": {
                "field": "date.time_no_second"
              },
	      "aggs":{
	         "3": {
		      "terms": {
		        "field": "sentiment_analysis.sentiment",
		        "size": 3,
		        "order": {
		          "_count": "desc"
		        }
		   }
               }
              }
            }
          }
        }
      }};
      return request;
    },

    getWeatherTypeSentimentAggregation: function (query, date) {

      var request = {
          "size": 0,
          "query": {
            "query_string": {
              "query": date,
              "analyze_wildcard": true

            }
          },
          "aggs": {
            "2": {
              "terms": {
                "field": "sentiment_analysis.sentiment",
                "size": 0,
                "order": {
                  "_count": "desc"
                }
              }
            }
          }
      };
      return request;
    }
}
