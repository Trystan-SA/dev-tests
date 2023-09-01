# Summary
In this test we are going to code a small Web Application to help the managers better understand the results of their teammate's happiness survey results, as well as create actions to follow up on these surveys in a simple kanban view

The test should take ~4-8h, getting everything done might be a bit challenging, but we will evaluate your coding skills on multiple aspects, even beyond what is listed below, so please feel free to invest your time in any area you might feel is valuable / would be interesting to discuss in the follow up technical interview.

## Instructions
We are trying to build an appp to review teammates mindstates, which will be done in two phases:

### Phase 1
* Create a small dashboard containing general information you can gather from the joined csv files in the ```data``` folder. This data contains results to a survey your teammates took, where they give insights about their personal aspirations in their job. It is anonymised / simplified so you should be able to quickly reconstruct the final survey results when reading the data structure. For example you could show charts of:

  * Number of survey answered
  * Information about these users 
  * Repartition of "modes"
  * Anything else you might feel is relevant

 **Requirements**
The data dashboard can be part of the following action app in phrase #2, or implemented separately using any tech stack you so desire


> If you struggle re-assembling the results for some reason, you can also use the survey_results.json file which contain the pre aggregated final results for part #2

### Phase 2
* Create a small kanban app to create and track actions to help your teammates change their job toward something that suits them better :
  
  * Create an action
  * Fetch the existing user actions
  * Display the user actions
  * Change the card status from Pending or Rejected to Done and from Done to Rejected.
  * Add a local filtering by user name or action title
  * opt: Display a list of survey results
  * opt: Link them with actions



The actions app must use the following tech stack:
* Angular
* NestJS
* Postgres

  
The whole application must run under docker, and be startable using docker-compose or using a simple makefile oneliner

## Bonus points
* Code structure, data modeling and best practices
* UI/UX design
* Writing tests

## Timing
Don't forget to share with us the time you spent on this project!

![alt text][rabbit]


[rabbit]:  https://github.com/CardioLogs/card-triage/raw/master/images/wonderland.gif
