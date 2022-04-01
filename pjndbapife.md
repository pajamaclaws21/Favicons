# PJ's Database
A super-basic API that can act as a backend.
All routes can be accessed via a "get" call.
<br>
<br>
# Documentation
## Get all contents of a file
```
/get/[filename]
```
This returns an array which contains all contents of a file.


### Required inputs:
- filename: the name of the file you would like to get the contents of

### Example output:
```
["xdlol", "file"]
```

## Set contents of a file
```
/send/[filename]/[contents]
```
This attatches your specified message to the file of your choosing.

### Required inputs:
- filename: the name of the file you would like to add to
- contents: the thing you would like to add to the file

### Example output:
```
["Wrote \"thing\" to database.txt."]
```
