# Contributing to Modrunner

So you wanna contribute to Modrunner, eh? Cool!

Below are some guidelines (not rules) to keep in mind when developing for Modrunner.

## I just have a question...

That's cool! However, questions are best asked in our [Discord](https://discord.gg/HZMCRNUd5Z). You don't really need to 
make a new issue for them (though we will still respond if you do).

There also a few community resources that may help to point you in the right direction if you are confused:

- [Modrunner Docs](https://modrunner.net/docs/intro/)
- [Modrunner FAQs](https://modrunner.net/docs/faq/)
- [Modrunner Getting-Started](https://modrunner.net/docs/setting-up/)

## Things to know/do before getting started

### The term "Modrunner"

When we refer to "Modrunner" in the context of this repository, we are talking about both the bot application (which 
resides at the root) and the website, which is situated in the `website` folder. Both of these are open for contribution, 
but just be sure which one you want to be working on before you start.

### Design choices and development

Modrunner does not particularly follow a standard or have an official process of software development. However, be aware 
that if your goal when contributing is to significantly alter the structure or tech stack of the application, know that 
your changes will more than likely be rejected unless you've talked to us personally to justify your changes. We are not 
interested in radically altering our project unless it has some significant benefit to the short or long-term success of 
the project.

### Co-development

You don't need to talk to us before opening a pull request, but doing so is still a good idea, particularly if you intend 
on implementing new features or refactoring major systems. Starting your contribution can be as simple as opening a pull 
request with your proposed changes and stating you intend to implement them yourself or with the help of the Modrunner 
team. You can also talk with us in [Discord](https://discord.gg/HZMCRNUd5Z) to help facilitate quicker and more responsive 
development.

## How can I contribute?

### Reporting bugs

This probably the number one way issues with Modrunner get solved. Oftentimes, issues can go unnoticed during development, 
and due to the nature of Modrunner's functionality and its small dev team, covering all cases can be a challenge. Letting 
us know of issues you have encountred, along with any additional information you can provide, will assist the Modrunner 
team immensely in dealing with bugs as they pop up.

The best way to submit reports is to open a new issue. This allows the team to easily keep track of new bugs and related 
information that will assist in tracking it down and fixing it. Otherwise, reporting them in our 
[Discord](https://discord.gg/HZMCRNUd5Z) is also perfectly fine.

#### How to submit a good bug report

Easy-peasy: just use one of the pre-existing bug report templates listed when you click the "New Issue" button. They are 
pre-filled with fields that will help the Modrunner team in dealing with the issue effectively and promptly.

## Suggesting new features or updates

Got a neat idea for Modrunner? Awesome, we'd love to hear about it. Making an issue with your proposal or posting about 
it in our [Discord](https://discord.gg/HZMCRNUd5Z) are both valid ways to get us to hear about it.

## Your first code contribution

If you're unsure of where to start, consult [Modrunner Roadmap](https://trello.com/b/tNrFYngk). There we have listed 
tasks that are currently in the backlog, planned for implementation, currently being implemented and tasks which have been 
finished. **It is highly recommended that you check this project to avoid performing work on a task that has already been done, 
or currently being worked on**, particularly if you are implementing new features or fixing bugs.

### Setting up your local development environment

#### Modrunner Bot

To get started ensure you have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed.

1. Fork the repository to your own GitHub account by using the `Fork` button in the top right (you will need your own GitHub account for this, obviously).
2. Clone the fork to your local machine and open it in your editor or IDE of choice. Visual Studio Code is a great choice.
3. Install the required dependencies by running `npm install` in your console.
4. Make any desired changes to the code and save it.
5. To test your changes, you will need your own Discord bot client application.
   1. Log into the [Discord Developer Portal](https://discord.com/developers).
   2. Create a new application. Give a name like `Testing Bot`.
   3. Head to the `Bot` tab and click `Add Bot`.
   4. Click `Reset Token` and copy the new token generated. The token will only be shown once, so make sure to save it somewhere safe.

6. You will need a system for storing secrets. I use [Doppler](https://www.doppler.com/) but a simpler solution like
[Dotenv](https://www.npmjs.com/package/dotenv) will also work. You will need five different secret fields:
   - `BOT_TOKEN`: This is the token from the Discord developer dashboard that you copied earlier.
   - `CF_API_KEY`: See [obtaining a CurseForge API key](#obtaining-a-curseforge-api-key).
   - `CLIENT_ID`: The ID of your bot application. You can get this from the developer dashboard under General Information.
   - `DEV_GUILD_ID`: A Discord server ID to use for testing the bot. You can get this by enabling Developer Mode in settings,
then right-clicking on the server icon and choosing Copy ID.
   - `LOGGING`: When set to `dev` it will set the bot's logging output level to `trace`. For more information see [the pino docs](https://getpino.io/#/).

7. Now you're ready to being testing your changes! Here's a quick overview of the npm scripts.
   1. Before starting the bot for the first time, type `npm run register` and `npm run dbInit` into your console. This will register the bot's commands to all guilds listed under `guildIds` in your `config.json`, and will create the `database.sqlite` file in the project's root directory.
   2. Now you can run `npm run start`. This will start the bot and log it into Discord.
8. Once you're satisfied with your changes, commit your changes and open a pull request to `big7star/modrunner-bot` to merge your changes.

##### Obtaining a CurseForge API Key

1. Log into the [CurseForge Core Console](https://console.curseforge.com/#/).
2. Go to **API keys**.
3. Copy the key listed under your username. Be sure to keep this a secret!

#### Modrunner Website

The Modrunner website is built using [Docusaurus](https://docusaurus.io/) and resides in the `website` folder. It primarily serves as the documentation for the Modrunner bot, but it also contains several utility links, as well as the Modrunner blog.

For a complete picture, see the [Docusaurus documentation](https://docusaurus.io/docs) to get started. If you're just looking to make changes to the docs:

1. Create a markdown page (`.md`) under the `docs` folder. Title it however you want, but know that the filename will appear in the url bar as such (`docs/my_super_cool_doc.md` will show up in the search bar as `https://modrunner.net/docs/my_super_cool_doc`). You can also create doc categories by placing your markdown files within a folder in `docs`, as seen with the `commands` folder.
2. Once you're done with a page, add an object for it in `sidebars.js`.

   - For single doc pages, format it like so:

   ```JS
   	{
   		type: 'doc',
   		label: 'My Super Cool Doc',
   		id: 'my_super_cool_doc',
   	}
   ```

   `id` is the file name of the page (minus the extension)

   - For categories, format it like so:

   ```JS
   	{
   		type: 'category',
   		label: 'My Super Cool Category',
   		items: [
   			{
   				type: 'autogenerated',
   				dirName: 'supercoolfoldername',
   			},
   		],
   	}
   ```

   `dirName` is the name of the folder in `docs` where you placed your page.

   You can leave the `type` as **autogenerated** and Docusaurus will automatically generate the sidebar for all your pages 
in that folder. If you want to customize the order or labeling then remove the autogenerated and place objects for each page in `items` instead.

3. When you're done making your desired changes, run `npm run start`. This will open the website in your browser so you can preview your changes.

### Style guide

#### Code

Modrunner uses [Eslint](https://eslint.org/) and [Prettier](https://prettier.io/) for code formatting and error checking. 
While we don't deny your pull request if you don't use these, it is recommended that you do to ensure consistent 
formatting and error-free code while developing.

#### Commits

Please make sure to make your commit messages accurate and descriptive. Otherwise, we don't enforce a particular style of commit message.
