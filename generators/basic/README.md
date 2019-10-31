# Deconstructing Master Artists (dma)

> Starter kit for the seminar "Creative Technologists - Tracing the City" @ University of Applied Sciences Potsdam (Germany) winter semester 2019/2020 by Fabian Morón Zirfas


## Assignment

1. Find a master artist/group/style
2. Analyse one or several of her/his/their/its works.
3. Create an algorithm that generates versions of these works.
4. Update this README.md with some informations about your Artist(s) and describe your result.
5. Save three **extraordinary** results as png files and add them to this README.md
6. Prepare a verbal 2 minute presentation of your project.

### Hints

- Try not to replicate the image in its [phenotype](https://en.wikipedia.org/wiki/Phenotype). Try to define the algorithm behind its [genotype](https://en.wikipedia.org/wiki/Genotype) and create environmental factors.
- Try not use fixed values. Try to find a rule. e.g. the center of the canvas is `width/2` and `height/2`. This allows to scale your graphic and the center stays the center
- Try to use [HSB/HSL over RGB](https://p5js.org/reference/#/p5/colorMode) because HSB/HSL is way easier to understand if you want to create rules for harmonic colors. 


## Inspiration

Some possible artists could be: _(graphic designers) Josef Müller-Brockmann, Karl Gerstner, Paul Rand, Otl Aicher, Ken Garland, (typographers): Adrian Frutiger, Jan Tschichold,Herbert Bayer, Paul Renner (artists) Aaron Marcus ,Giovanni Pintori,Sol LeWitt, Roy Lichtenstein, Francis Picabia, (styles) Dadaismus, Futurismus, constructivism, (groups) De Stijl: Piet Mondrian, Theo van Doesburg, Vilmos Huszár, Bart van der Leck, Gerrit Rietveld (architect), Robert van 't Hoff (architect), Jacobus Oud (architect) Neue Tendenzen: Ivan Picelj Bauhaus: Alfred Arndt, Georg Muche, Gerhard Marcks, Hannes Meyer, Heinrich Beberniss, Johannes Itten, Josef Albers, Laszlo Moholy-Nagy, Lothar Schreyer, Ludwig Mies van der Rohe, Lyonel Feininger, Marcel Breuer, Max Krehan, Oskar Schlemmer, Paul Klee, Walter Gropius, Walter Peterhans, Wassily Kandinsky, Joost Schmidt, Gertrud Grunow…_[^1]

See the some results of the seminar gestalten-in-code for some inspiration.

- [Deconstructing Master Artists: Marcel Storr](https://interface.fh-potsdam.de/gestalten-in-code/projects/deconstructing-storr/) by <span><a href="https://incom.org/profil/7029">Joshua Pacheco</a></span> and <span><a href="http://invitrocolor.com">Theodor Hillmann</a></span>
- [Deconstructing master artists: Bart van der Leck – Mountain view](https://interface.fh-potsdam.de/gestalten-in-code/projects/bart-van-der-leck/) by <span><a href="https://github.com/edgalindo">Edmundo Mejia Galindo</a></span> and <span><a href="https://github.com/piixelcat">Julia Hilt</a></span>
- And many more [great projects](https://interface.fh-potsdam.de/gestalten-in-code/projects/) from this series
- And here are even more [code snippets you can learn from](https://interface.fh-potsdam.de/gestalten-in-code/categories/)[^2]

## Usage

1. If you are enrolled the GitHub classroom for the seminar - accept the invite for your first assignment. If not clone the repo by running `git clone git@github.com:FH-Potsdam/dma.git`, [download the source](https://github.com/FH-Potsdam/dma/archive/master.zip) or [use it as a template](https://github.com/FH-Potsdam/dma/generate) from the GitHub interface.

2. Open a terminal session in the root of the repository and type `npm install`  and hit return ↩ to install all dependencies.

3. Type `npm start` and hit return ↩ to start the reload server.

4. Start deconstructing your master artist.

5. When you are done and enrolled in the classroom, use the classroom to submit your assignment.

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/FH-Potsdam/dma/issues)

## Author(s)

**Fabian Morón Zirfas:**

- [github/](https://github.com/fabianmoronzirfas)
- [twitter/](http://twitter.com/fmoronzirfas)

## License

Copyright © 2019 [Fabian Morón Zirfas](https://fabianmoronzirfas.me)
Licensed under the MIT license.

[^1]: Please extend this list with some more artists. Also no women here?  
[^2]: Some of the examples are not written for P5.js but for Basil.js or Processing. Try to port them, ask for help.
