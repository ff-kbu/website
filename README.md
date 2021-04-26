
This is the source code for our website **kbu.freifunk.net**. It's a static website, written with hugo, a website generator. 

To use this repository, just clone it, install hugo 
out of the package repository of your linux distribution and start the system in the cloned directory with the command 
_hugo server -D_.

This starts a local webserver on port 1313 serving this site. 

**Don't forget to comment out the parameter _baseURL_ in the config.toml for local development!** 

You find the content of this site in the directory **content**, written in the markdown language. 

To generate the final website, just use the command _hugo -D_ in the cloned directory. After that you'll find the generated website in the directory **public**.
