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

![United States Actors Relative to Artile Mentions on Goldstein Scale](http://imgur.com/qxqMGzY.png)

We can infer that the most article mentions comes out of the state of California. Los Angeles has a red Goldstein scale which related to negative results within the state. Murfreesboro is mainly on the negative side of Goldstein scale and has no beneficial articles relative to homelessness. This shows that places like Los Angeles, Murfreesboro, and the state of West Virginia are main places where homeless people are criminalized. 

## Georeferencing

![an image/images of the different ways you can use georeferencing](image.png?raw=true)

## Source URLs

![an image of your source URL analysis](Q4.png)
There is more articles abouts homelessness in the summer, and the winter months when the issues facing the homeless are the most apparent.

## Conclusions

{{a short write up of your team's analysis}}

{{your hypothesis on this public policy change}}

![additional supporting screenshots](image.png?raw=true)
