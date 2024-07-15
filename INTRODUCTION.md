# Intro

This document describes the decisions that I made while developing this challenge and other considerations.

I tried not to overengineer it too much, while I tried to create something that resembles a real application.

## Stack

- react-router-dom
  - The most used, supported and stable router for React
- react-helmet-async
  - To update the page title per route
- react-hook-form
  - To facilitate working with forms in React
- @tabler/icons-react
  - Nice free icons package
- clsx
  - Lighter version of `classnames`
- @tanstack/react-query
  - To cache requests
- ky
  - Package similar to `axios` but lighter and uses `fetch` instead of `XMLHttpRequest`
- zod
  - For data validation
- CSS Modules
  - Used it because Vite supports it OOTB and provides a good base for styles isolation

## Tools

- Prettier
  - It's an essential tool that removes the burden from developers and code reviewers of checking for style consistency. I changed just a few settings, with the reason for each one described in the configuration.
- ESLint
  - ESLint in an essential tool that helps us to catch potential bugs earlier and also provides many official rules and rules provided by plugins to enforce good practices or code conventions if the team finds necessary. I configured it with just the recommended rules for JavaScript, React, React Hooks, and Jest, which should help to catch common mistakes without enforcing any particular code style.
- @testing-library/\*
  - Tool essential for testing web applications and components, providing a good API that directs us to test like a real user instead of relying on internal states.
- husky
  - To create a `git`'s `pre-commit` hook to run Prettier and ESLint before each commit.
- lint-staged
  - Allow the `pre-commit` hook to run only on changed files, which speeds up the process.

## Setup

Before starting to code, as a good practice, I updated all dependencies. Because this is a starter project, I updated everything in one shot. However, on a living project, I would have updated them independently or by groups of relation, to be able to track and isolate any possible bug or regression introduced by one of the updates. After that, I installed and configure the above mentioned tools.

## Architecture

I used an architecture that ruffly resembles the one described in Clean Architecture by Robert Martin, using layers to isolate different parts of the application (infra, ui, presenters, ...). It also divides the code by group of domain, which in this case I call "modules". Each module has its layers that are part of that domain. For this project, I created the `sign-up` module, thinking that it would be part of a larger application in the future. I didn't isolate each layer as described in the book because it would require inversion of control and a dependency injection container. From my previous experiences, it is very unlikely that we would need to replace an entire layer in the future, and the extra work required for that is not worth it.

One thing that I found great working with this architecture is on a larger application, where multiple teams are working on different parts of it at the same time. We can control the ownership of each domain to a team using the GitHub's CODEOWNERS feature. This way, each team is independent to do its job because they will be coding inside their business domain, but, if required, they can change other modules and that domain's experts have to review and approve the code.

## UI Components

I decided to create my own components to showcase my ability to do so, instead of just using some existing library. However, to limit the scope of this project, I chose to change just some spacings, typeface, and font sizes.

## Future work

- I would like to improve the testing by mocking the requests on the network level using [msw](https://mswjs.io). I tried to add it to the project, but it failed to work with Jest and Vite, and to not lose too much time figuring out how to fix, I mocked the modules that make the request.
- I also would like to create skeleton components to better communicate to the user that the screen is loading.

## Final considerations

For the purpose of this challenge, I understand having separate routes for each page. However, I consider that each URL of an application should represent a unique state that I can bookmark it and reopen in the future. This is not possible in the requested use case because each screen requires a shared state that is not persisted on the backend.
