# Team Members

* [Austin Wood](https://github.com/indiesquidge)
* [Ian Ker-Seymer](https://github.com/ianks)
* [Chris Wittenberg](https://github.com/cwitty1919)
* [Sam Korn](https://github.com/sako0938)
* [Daniel Nolan](https://github.com/dano8957)

# Objective 1. Pick your public policy change issue.

* [Criminalization of Homelessness](http://nationalhomeless.org/issues/civil-rights/)

# Objective 2. Analyze & discuss your issue.

## Related Events Increase/Decrease

![screenshot of the related events analysis](https://www.dropbox.com/s/d5jxnyqq8u3xgwi/Screenshot%202014-10-13%2018.45.38.png?dl=1)

```sql
SELECT *,
  FROM [gdelt-bq:full.events]
  WHERE SOURCEURL CONTAINS "homeless"
  AND (SOURCEURL CONTAINS "legal"
  OR   SOURCEURL CONTAINS "criminal"
  OR   SOURCEURL CONTAINS "rights"
  OR   SOURCEURL CONTAINS "prohibit"
  OR   SOURCEURL CONTAINS "law")
  AND NOT SOURCEURL CONTAINS "help";
```

As you can see, there are certain days which have tons of activity with respect
to homelessness and law. In particular January 7th had issues about homelessness
with coldfronts in the weather. Overall, it seemed that the data about criminalization
of homelessness got drowned out by data about the homeless.



{{discuss whether this is "good" or "bad"}}

## Actors Involved

![screenshot of actors involved analysis](Analysis2.png?raw=true)

We can infer that the United States Government and Police Officers are the ones dealing with homelessness, as well as foreign governments. Most of the sectors are red, which shows that actions taken against homelessness is destabilizing society in areas where these actors are/ It's strange that Wells Fargo is positive.  However, the Marines have a very negative effect on society with regards to homelessness.

## Georeferencing

![an image/images of the different ways you can use georeferencing](image.png?raw=true)

## Source URLs

![an image of your source URL analysis](image.png?raw=true)

## Conclusions

{{a short write up of your team's analysis}}

{{your hypothesis on this public policy change}}

![additional supporting screenshots](image.png?raw=true)
