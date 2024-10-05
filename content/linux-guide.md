+++
title = "LINUX GUIDE FOR NOOBS"
+++

# LINUX DESKTOP GUIDE FOR BEGINNERS WITH LOW ATTENTION SPANS
I think a lot of people try to get into Linux and end up taking a lot of bad advice. There's also a lot of good advice that you've probably already heard. So this is only advice that I don't hear people saying enough.

## You WILL have to use the command line
I don't know why people say otherwise, it's like a cruel joke. You literally do.

Linux excels on servers, not desktops (see: the entire industry). As servers don't run graphical desktops, the terminal is where Linux not only thrives, but is most reliable. So you should probably be familiar with Linux's greatest strength before tackling its weakness (the desktop).

Anyway here's some pointers
- do Ctrl+C to abort a command
- copy/paste is likely Shift+Ctrl instead of Ctrl, depending on your terminal's configuration
- you can "pipe" a command's output to another command like this: `cat lol.txt | grep "gay porn"` <-- prints lines containing "gay porn" in lol.txt
- install [tldr](https://github.com/tldr-pages/tlrc) for brief command explanations. there's also [a web version](https://tldr.inbrowser.app/). it's like manual pages but for iPad babies and I love it

## Don't install it on your gaming laptop
Just don't even bother. It's fucked. Most laptops are already super nonstandard and difficult to support compared to desktop. Before figuring out what drivers to install you should understand how to use it in the first place.

Even if you do, don't bother with trying to setup KVM passthrough with that baked in GPU. It's possible, but it is very easy to just blackscreen your whole install.

Considering how much debugging it takes to stabilize a Linux desktop

## Dual boots will probably explode
Dual booting Windows and Linux is like a two-state solution, a shitty compromise that shouldn't have even had to be made in the first place. I'd opt for 100% freedom anyway since Windows Update will more than likely just cannibalize the other partition anyway.

## Don't recommend Linux to non-technical people
If you still talk to your parents you shouldn't install it on their computers. Unless you hate them then leave them to troubleshoot why the sound isn't working lol