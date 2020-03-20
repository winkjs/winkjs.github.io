# winkjs.org

This the repo of for the [wink.js](http://winkjs.org/) website. It uses
[middleman](http://middlemanapp.com/) a static website generator. You'll need
the latest
[stable](https://www.ruby-lang.org/en/news/2018/03/28/ruby-2-5-1-released/) version of Ruby to run it. It is recommended that you use [rvm](https://rvm.io/)
to get the latest version of Ruby, and [bundler](https://bundler.io/) to install
gems and manage the environment.

## Development

After cloning, you'll need to install dependencies using `bundle install`.
Then run `bundle exec middleman server` to start a preview web server. You can
then navigate to
[http://localhost:4567/](http://localhost:4567/) too see the local website.

You can also run `bundle exec middleman build` to generate a build in the
`build/` directory. *Note: this directory is ignored in `.gitignore`*.

**NOTE:** All development for this repository happens in the `dev`
branch. The `master` branch is only used for deployment. Do not push
directly to `master`. Only push to `dev`.

See
[Middleman documentation](https://middlemanapp.com/basics/development-cycle/)
for more details.

### Adding a new wink package

To add a new package, add its name and description to `data/packageinfo.json`.
The name should be without the `wink-` prefix. Then add the package to the list
of packages in `source/packages.html.erb`.

## Deploy

We are hosting this website using [Github pages](https://pages.github.com/).
Since this website is an
*[Organization Pages site](https://help.github.com/articles/user-organization-and-project-pages/#user-and-organization-pages-sites)*
it must be deployed from the `master` branch. And so, the default branch has been
set to `dev`.

Also, due to some compatibility issues we use a *pre alpha* version of
[middelman-deploy](https://github.com/karlfreeman/middleman-deploy). Our
`deploy-method` is `git`, and we push to `master`, where Middleman creates an
[automatic commit](https://github.com/winkjs/winkjs.github.io/commits/master)
for deployment.

After you're happy with the changes in the `dev` branch you can run:

```
bundle exec middleman build
bundle exec middleman deploy
```

for Middleman to automatically build the website and push it to `master`.
