# Chef Recipe Lessons

A premium static cooking education website for Chef Scott Stokes. It combines a cinematic culinary school landing page, searchable recipe library, structured lessons, printable recipe template, lesson template, chef notebook, about section, and contact/signup form.

## Run locally

```bash
npm run dev
```

Then open `http://localhost:5173`.

## Validate the site

```bash
npm run build
```

This project is intentionally dependency-light so it can run in restricted environments. The build command validates the required static site files.

## Add a new recipe

1. Open `src/data/recipes.js`.
2. Copy an existing recipe object in the exported `recipes` array.
3. Update the `slug`, `name`, `category`, timing, yield, ingredients, method, tips, safety, storage, and plating fields.
4. Save the file; the recipe library renders from this data automatically.

## Add a new lesson

1. Open `src/data/lessons.js`.
2. Copy an existing lesson object in the exported `lessons` array.
3. Update the `slug`, `title`, `category`, difficulty, timing, objective, tools, practice steps, demo notes, assignment, and related recipes.
4. Save the file; the lesson cards render from this data automatically.

## Recommended next improvements

- Add real routes for individual recipes and lessons.
- Connect the signup/contact form to a backend or email service.
- Add professional food photography or chef portraits.
- Add structured schema data for recipes and lessons.
- Add automated browser checks when a test runner is introduced.
