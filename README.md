# Project-2---API-App

SBTerrain is a mini app to provide information about the terrains of different mountains for snowboard enthusiasts. 

Usage: Enter or click a mountain to obtain terrain information

Functionality:
    - location/mountain-based
    - get a list of mountains
    - get a photo of the mountain
    - get information about mountain
    
Models:
    - SNOTEL station data API
    - User model
    - Mountain model
    - Comment

Technologies:
    - Node
    - Express
    - Liquid
    - Mongoose
    - .env
    -Bootstrap

Users - signup, sign in
Seed - seed photos from API
comments - post comments from users about resort

User stories: (`As a user...`)
CRUD Actions - CREATE - READ - UPDATE - DELETE
- create a comment
    - new schema
    - create model to use
    - return a newly create comment
- view all mountains
    - view all mountains/resort on index page
- view a single mountain
 - view a single mountain in the show page
 - view activties on the mountain
- update a single resort
 - look for resort - by id
 - update resort
  - return updated resort
- delete a single resort
 - look for resort - by id
 - remove resort
 - return updated resort

- STRETCH GOALS
    - be able to sort mountains by regions
    - be able to sort mountains by resort
    - be able to like a resort

- Data
    - Mountain
        - name: String
        - location: String
        - Elevation: String
        - Wind: Number
    - Comment
        - type: String
        - require: String
    