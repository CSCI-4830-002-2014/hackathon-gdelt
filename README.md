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

![screenshot of the related events analysis](image.png?raw=true)

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

{{discuss whether this is "good" or "bad"}}

## Actors Involved

![screenshot of actors involved analysis](Analysis2.png?raw=true)

We can infer that the United States Government and Police Officers are the ones dealing with homelessness, as well as foreign governments. We can also infer that their actions are relatively benign based on the Goldstein Scale. Groups like Amnesty International tend to have a positive score. However, the Marines have a very negative effect on society with regards to homelessness.

## Georeferencing

![an image/images of the different ways you can use georeferencing](image.png?raw=true)

## Source URLs

![an image of your source URL analysis](image.png?raw=true)

## Conclusions

{{a short write up of your team's analysis}}

{{your hypothesis on this public policy change}}

![additional supporting screenshots](image.png?raw=true)
