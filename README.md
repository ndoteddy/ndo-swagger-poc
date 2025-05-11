# Project Learn Swagger

## Background
Learn and share how to use Swagger IO in your API development.  
**Author**: Nando Teddy

---

## Table of Contents
- [Objective](#objective)
- [Prerequisite](#prerequisite)
- [Contributing](#contributing)
- [Changelog](#changelog)

---

## Objective

1. Learn how to use Swagger with OpenAPI Specification.
2. Understand how to integrate Node.js and Express for API development.

---

## Prerequisite

1. Basic knowledge of:
    - **JSON**: [Learn JSON](https://json.org)
    - **YAML**: [Learn YAML](http://yaml.org)
    - **Node.js**: [Install Node.js](https://nodejs.org/en/)
    - **Express.js**: [Learn Express](https://expressjs.com/)
    - **PostgreSQL**: [Install PostgreSQL](https://www.postgresql.org/)
    - **Swagger Code Editor**: [Swagger Editor](https://editor.swagger.io/)
    - **NPM**: [Learn NPM](https://www.npmjs.com/)
    
2. Clone or fork this repository:  
   [https://github.com/ndoteddy/Project-Learn-Swagger](https://github.com/ndoteddy/Project-Learn-Swagger)

3. Install dependencies:
   ```bash
   npm install
````

4. Install PostgreSQL and run the schema:

   ```bash
   psql.exe -U <your-username> -d <your-dbname> -f tshirt.sql
   ```

5. Update the connection string in `queries.js`:

   ```javascript
   var connectionString = 'postgres://<your-username>:<your-password>@localhost:5432/tshirt';
   ```

6. Start the server:

   ```bash
   npm start
   ```

---

## Hosting

You can host this project on any Node.js-compatible platform. Recommended options:

* [Heroku](https://www.heroku.com/)
* [AWS](https://aws.amazon.com/)
* [Azure](https://azure.microsoft.com/)

---

## Contributing

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b my-new-feature
   ```
3. Commit your changes:

   ```bash
   git commit -am 'Add some feature'
   ```
4. Push to the branch:

   ```bash
   git push origin my-new-feature
   ```
5. Create a Pull Request.

See the [Contributing Guidelines](CONTRIBUTING.md) and [List of Contributors](https://github.com/ndoteddy/Project-Learn-Swagger/graphs/contributors).

---

## Changelog

For a detailed list of changes, check out the [Changelog](CHANGELOG.md).

```

Now the installation steps, hosting, and contributing instructions are all inside the markdown code block as you requested!
```
