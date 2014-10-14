# Team Members

* [Austin Wood](https://github.com/indiesquidge)
* [Ian Ker-Seymer](https://github.com/ianks)
* [Chris Wittenberg](https://github.com/cwitty1919)
* [Sam Korn](https://github.com/sako0938)
* [Daniel Nolan](https://github.com/dano8957)

# Objective 1. Pick your public policy change issue.

{{input your team's choice here}}

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

![screenshot of actors involved analysis](image.png?raw=true)

{{discuss whether you can infer anything from this}}

## Georeferencing

![an image/images of the different ways you can use georeferencing](image.png?raw=true)

## Source URLs

![an image of your source URL analysis](image.png?raw=true)

## Conclusions

{{a short write up of your team's analysis}}

{{your hypothesis on this public policy change}}

![additional supporting screenshots](image.png?raw=true)
