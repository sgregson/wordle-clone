# 1-hour wordle challenge!

> Vast majority of the work happened in src/components/keyboard.js and related files
>
> This deployment represents 1h of work: https://wordle-clone-j5dvapydy-stgregson.vercel.app/, find the final/latest in the sidebar

Some fun bits to implement here:

1. start with my personal prototyping base
    * nextjs with vercel
    * tailwind css, including an SSR dark mode toggle
    * gitpod.io for quick devbox / iteration
    * the Lea Verou trick for emoji-as-favicon https://css-tricks.com/emoji-as-a-favicon/
    * https://giscus.app/ for site discussions backed by github
2. adds the useEventListener.js hook from https://usehooks.com/useEventListener/ to bind keys to keypress events
3. does a little tailwindy UI to make it look clean

It was fun work to hammer out the useeventlistener placement and do a bit of CSS to make it look decently like the wordle original!

***

# A Nextjs starter template on Gitpod

This is a [Learn Next.js](https://nextjs.org/learn) template configured for ephemeral development environments on [Gitpod](https://www.gitpod.io/).

## Next Steps

Click the button below to start a new development environment:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/template-nextjs)

## Get Started With Your Own Project

### A new project

Click the above "Open in Gitpod" button to start a new workspace. Once you're ready to push your first code changes, Gitpod will guide you to fork this project so you own it.

### An existing project

To get started with Next.js on Gitpod, add a [`.gitpod.yml`](./.gitpod.yml) file which contains the configuration to improve the developer experience on Gitpod. To learn more, please see the [Getting Started](https://www.gitpod.io/docs/getting-started) documentation.
