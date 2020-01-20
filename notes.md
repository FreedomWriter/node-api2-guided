REST (Representational state transfers) is a generally agreed upon set of principles and constraints
-these are recommendations, not a standard

Constraints:

1. Client server
2. stateless
3. cacheable
4. layered system
5. code on demand
6. uniform interfaces
   1. HATEOAS (Hypermedia As The Engine Of Application State) (choose your own adventure)

Richardson Maturity Model
REST Glory
Level 3: Hypermedia Controls
Level 2: HTTP Verbs
Level 1: Resources
Level 0: A swamp of POX

-everything is a resource
-each resource is accessible via a unique URI
-resources can have multiple representations
-communication happes of a stateless protocol (HTTP)
-resource management happens via HTTP methods

Sometimes you need the whole user, sometimes just the name and id - those are representations of the resources

## Design process

- gather requirements
- list of resources (noun) [user, values, value-explanation, projects, projects-details, value-linked-to-projects]
- list of endpoints

## Endpoints

- avoid using verbs, it's not a URL, it's a URI(Universal Resource Identifier) (instead of 'create-projects' => /api/projects. You want to point to the resource)
- actions are expressed with http methods
-

Projects

properties
-project name
-project description
-associated value

Actions
-create
-find by filters
-update
-delete
-pagination list (filters)
-images //not for essentialism but because images are diff, including for notes

| Action            | Method | Endpoint               |
| :---------------- | :----- | :--------------------- |
| List projects     | GET    | /api/projects          |
| Create a project  | POST   | /api/projects          |
| Update a project  | PUT    | /api/projects/:id      |
| Remove a project  | DELETE | /api/projects/:id      |
| Add project image | PUT    | api/projects/:id/image |

## CommonJS module system

- import a module using: require("")
- export a module using: module.exports

## Query string

- [article about a url](https://deopud.com.uk/blog/anatomy-of-a-url)
- begins with a '?'
- is made up of key=value pairs
- each key=value pair is separated by an '&'
- the query values are accessed on: re.query

## Misc

- filtering, sorting are the responsibility of the back end as is converting data

- PATCH is available to update only a portion of the object. PUT requires the entire object but only modifies what it's told to.

- a good starting point is one router per resource
