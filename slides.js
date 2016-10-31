import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit, Link,
  Heading, Image, Layout, ListItem, List, Quote, Spectacle, Slide, Text
} from 'spectacle';
import theme from './theme';
import REPL from './runtime/repl';
const fs = require('fs');

const BigHeading = props => <Heading className="heading" fit caps lineHeight={1.15} size={1} {...props}>{props.children}</Heading>
const SmallHeading = props => <Heading fill size={2} {...props}>{props.children}</Heading>
const AppearingBlock = props => <Appear {...props}><div>{props.children}</div></Appear>

class Slides extends Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} progress="none" controls={false}>
          <Slide>
            <BigHeading>The Anatomy of</BigHeading>
            <BigHeading>Stack-based</BigHeading>
            <BigHeading>Generative Art</BigHeading>
            <SmallHeading>Stian Veum Møllersen</SmallHeading>
            <SmallHeading>@mollerse</SmallHeading>
          </Slide>
          <Slide>
            <BigHeading>Nysgjerrighet</BigHeading>
          </Slide>
          <Slide>
            <BigHeading>Hva i alle dager er et</BigHeading>
            <BigHeading>stack-basert språk?</BigHeading>
          </Slide>
          <Slide className="text-slide">
            <SmallHeading>
              Stack-baserte språk får navnet sitt fra måten språket håndterer
              funksjonsargumenter
            </SmallHeading>
          </Slide>
          <Slide className="text-slide">
            <SmallHeading>
              Alle funksjoner opererer på samme argument: Stacken
            </SmallHeading>
          </Slide>
          <Slide className="text-slide">
            <SmallHeading>
              Stacken er også programmets tilstand
            </SmallHeading>
          </Slide>
          <Slide className="repl-slide">
            <REPL mode="stack" code={`# The stack
# push pop dup swap`}/>
          </Slide>
          <Slide className="text-slide">
            <SmallHeading>
              Stack-baserte språk kalles ofte concatenative languages
            </SmallHeading>
          </Slide>
          <Slide className="text-slide">
            <SmallHeading>
              Det navnet stammer fra måten du lager abstraksjoner
            </SmallHeading>
          </Slide>
          <Slide className="repl-slide">
            <REPL mode="stack" code={fs.readFileSync('./code/records.ait', 'utf8')}/>
          </Slide>
          <Slide className="text-slide">
            <SmallHeading>
              Denne språk-familien er formet etter en problemløsningsfilosofi
            </SmallHeading>
            <Appear>
              <Image src="assets/cover.jpg" display="block" width="200px"/>
            </Appear>
          </Slide>
          <Slide>
            <BlockQuote>
              <Quote>A language that does not affect the way you think about programming, is not worth knowing.</Quote>
              <Cite>Alan Perlis</Cite>
            </BlockQuote>
          </Slide>
          <Slide className="text-slide">
            <SmallHeading>
              Er det rart jeg ble nysgjerrig på stack-baserte språk?
            </SmallHeading>
          </Slide>
          <Slide>
            <AppearingBlock>
              <BigHeading>Generative</BigHeading>
              <BigHeading>Art</BigHeading>
            </AppearingBlock>
          </Slide>
          <Slide className="text-slide">
            <SmallHeading>
              Concatenative languages + Generative Art
            </SmallHeading>
            <AppearingBlock>
              <BigHeading>
                = &lt;3
              </BigHeading>
            </AppearingBlock>
          </Slide>
          <Slide className="text-slide">
            <SmallHeading>
              Fant ingen stack-baserte språk som hadde canvas-bindings
            </SmallHeading>
            <AppearingBlock>
              <br />
              <SmallHeading>
                Så jeg lagde mitt eget: Ait
              </SmallHeading>
            </AppearingBlock>
          </Slide>
          <Slide className="repl-slide">
            <REPL mode="canvas" code={fs.readFileSync('./code/1.ait', 'utf8')} />
          </Slide>
          <Slide className="text-slide">
            <SmallHeading>
              La datamaskinen ta avgjørelsene!
            </SmallHeading>
          </Slide>
          <Slide className="repl-slide">
            <REPL mode="canvas" code={fs.readFileSync('./code/2.ait', 'utf8')} />
          </Slide>
          <Slide className="text-slide">
            <SmallHeading>En prikk er gøy</SmallHeading>
            <SmallHeading>flere prikker er n*gøy</SmallHeading>
          </Slide>
          <Slide className="text-slide">
            <SmallHeading>
              Men først et crashcourse i aggregates
            </SmallHeading>
          </Slide>
          <Slide className="repl-slide">
            <REPL mode="stack" code={fs.readFileSync('./code/quotations.ait', 'utf8')} />
          </Slide>
          <Slide className="repl-slide">
            <REPL mode="canvas" code={fs.readFileSync('./code/3.ait', 'utf8')} />
          </Slide>
          <Slide className="text-slide">
            <SmallHeading>Flere prikker i fart må være n*gøy<sup>n</sup></SmallHeading>
          </Slide>
          <Slide className="repl-slide">
            <REPL mode="canvas" code={fs.readFileSync('./code/4.ait', 'utf8')} />
          </Slide>
          <Slide className="text-slide">
            <SmallHeading>Nå kan vi begynne å eksperimentere!</SmallHeading>
          </Slide>
          <Slide className="repl-slide">
            <REPL mode="canvas" code={fs.readFileSync('./code/finished.ait', 'utf8')} />
          </Slide>
          <Slide className="text-slide">
            <SmallHeading>Eksperimenter, lek, utvid horisontene</SmallHeading>
            <AppearingBlock>
              <SmallHeading>&mdash; lær.</SmallHeading>
            </AppearingBlock>
          </Slide>
          <Slide className="text-slide">
            <SmallHeading>Synes du dette var interesssant?</SmallHeading>
            <Appear>
              <Link href="https://github.com/mollerse/ait-lang">github/mollerse/ait-lang</Link>
            </Appear>
          </Slide>
          <Slide>
            <BigHeading>Takk for meg!</BigHeading>
            <SmallHeading>@mollerse</SmallHeading>
            <Text>Slides: <Link href="https://mollerse.github.io/stackart-presentation">mollerse.github.io/stackart-presentation</Link></Text>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

const mount = document.createElement('div');
document.body.appendChild(mount);
render(<Slides/>, mount);
