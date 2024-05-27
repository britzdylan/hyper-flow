# Modular based design pattern

File Structure for each module

- app
  - controllers
  - middleware
  - models
  - validators
- start
  - events
  - routes
- tests
- ui

Rules

- Entry point for the module is controlled via the global start/routes.tsx file by simply importing the module
- register module level events by importing the module events in start/events.ts
- add the event typings to types/events.ts
- Only module level logic are contained in the modules folder, modules never use cross dependency with other modules. if you want to use logic from other modules either bind to and event of the module action or move the specific logic to the global scope.
- all modules can be configured via app/modules/config.ts
- modules never create new models or db migrations. Instead modules will create an expectation on specific models to exists and have certain structure, then extend the model and add module specific methods to the new model
- middleware in a module is never global only named middleware per route
- module ui files must match the controller files.
- modules ui files only hold UI related to the module, and makes use of global components, layouts and blocks defined in ui/\*_/_.ts
- module action methods should only perform the action specified for side effects bind to the events
