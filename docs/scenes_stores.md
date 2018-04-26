<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## ChecklistStore

The store that holds all the data and methods for both the
`<ByFile />` and `<ByCategory />` components

**Parameters**

-   `app` **AppStore** The AppStore singleton passed in through mobx-react

### isEmptyObject

Check whether an object is empty ({})
reference: [https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object][1]

**Parameters**

-   `obj` **[Object][2]** The object we are checking

### isEmptyArray

Check whether an array is empty (\[])

**Parameters**

-   `array` **[Array][3]** The array we are checking

### errorSort

Comparator function used in sort() to sort issues by severity

**Parameters**

-   `a` **[Object][2]** The first issue
-   `b` **[Object][2]** The second issue

### errorFilter

function used in filter() to filter issues by the currently active
severities.

**Parameters**

-   `error` **[Object][2]** The error object

### getCategoryIssues

Get all issues for a give category (filtered and sorted). This is used
in the <ByCategory /> page

**Parameters**

-   `category` **[String][4]** The category we get the errors for

### flattenIssues

Get all issues associated with files. Note that we also make sure to
apply the currently active filters. Basically transforms the Object
format into one long array

**Parameters**

-   `files` **[Object][2]** The Object containing issues

Returns **[Array][3]** Array of flattened issues

### canExpandTree

Determines whether the current directory can be expanded further

**Parameters**

-   `dir` **[String][4]** The directory to check

Returns **[Boolean][5]** Whether or not the directory is valid as the new
treeRoot

### directoryBfs

Perform a bfs to format the data in a nested way that actually matches
the directory structure of the project itself. This traversal is to get
the format for the nested Collapse Panels in `<ByFile />`

**Parameters**

-   `directory` **[String][4]** The directory that we are currently iterating
    over in the traversal

Returns **[Array][3]** Array of length two where the first element is the
current directory structure and the second is the number of files in
that directory and all directories it contains

### directoryGraphBfs

Get a count of all the issues in the directory passed in.

**Parameters**

-   `directory` **[String][4]** The directory that we are currently iterating
    over in the traversal

Returns **[Number][6]** Number of issues in the directory

### directoryTreemapBfs

Traverse the data and construct a representation of the file structure
that can be used by the <Treemap /> component of Recharts. Currently this
method is a bit long and should maybe be refactored

**Parameters**

-   `directory` **[string][4]** 

Returns **[Array][3]** Array of length two where the first element is the
current directory structure and the second is the number of files in
that directory and all directories it contains

## computed

Data for the `<ByFileBarChart />` and `<ByFilePieChart />`. Note that
the data for the `<ByFileTreemap />` is in a separate format which is
constructed with `directoryTreemapBfs()`.

Returns **[Array][3]** Array containing objects with a name and a
number of issues

## computed

Data for the treemap displayed on the byFile page

## computed

Data that is displayed in the Collapse panels on the <ByFile /> page
which is essentially a representation of the file structure.

## computed

An array containing the severities that are currently active (not
filtered). Basically just a convenience and this format is easier ot
parse than the format stored in `AppStore.js`.

## computed

Returns an object issues for all categories. Note that in the future
the categories should be dynamically set from the API response instead
of hardcoded on the frontend

## computed

Get the active category errors and filter them

## computed

Number of issues for each category

## computed

Issues that are displayed in the issues modal

## action

Opens the issues modal

## action

Closes the issues modal

## action

Sets the treeRoot property back to 'src', which is the root directory
for all of the projects

## action

Moves `this.treeRoot` up a directory if it is possible

## action

Change the currently visible graph type on the `<ByFile />` page.

**Parameters**

-   `type` **GraphType** The string type of the graph (e.g. 'treemap')

## action

Attempts to change the root of the tree to a particular directory. If this
directory is in fact a file, it istead opens the issues modal and does not
change `this.treeRoot`.

**Parameters**

-   `root` **[String][4]** The directory or file that we are attempting to change
    the treeRoot to

## action

Refresh the correct API data based on the currently active route

## action

Change the current active category on the `<ByCategory />` page.

## action

Clear the stores error

## action

Show a notification displaying an error

**Parameters**

-   `description` **[String][4]** The message to be displayed

## action

If the issues by cateogry data is not cached in sessionStorage
then we call the API endpoint. This method is used when the
`<ByCategory />` component is mounted.

## action

If the issues by file data is not cached in sessionStorage
then we call the API endpoint. This method is used when the
`<ByFile />` component is mounted.

## action

Get the data to be used in the `<ByCategory />` component from the
backend.

## action

Get the data to be used in the `<ByFile />` component from the
backend.

## GraphsStore

Store that handles the data related to commits, which is diplayed in
graph format in <Graphs />

**Parameters**

-   `app` **AppStore** The appstore injected by mobx-react

[1]: https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[5]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[6]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number