// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  Slide,
  Layout,
  Spectacle
  // BlockQuote,
  // Cite,
  // Markdown,
  // Quote,
  // Fill,
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../custom_styles.css");

const images = {
  cycle: require("../assets/cycle.png"),
  darpa: require("../assets/darpa.gif"),
  closedLoop: require("../assets/closed-loop.png"),
  robotFail: require("../assets/robot-fail.gif"),
  human: require("../assets/human.png"),
  human2: require("../assets/human2.svg"),
  uiFunction: require("../assets/ui-function.png"),
  inputFunction: require("../assets/input-function.png"),
  inputOutputFunction: require("../assets/input-output-function.png"),
  function: require("../assets/function.png"),
  controlEq: require("../assets/controleq.png"),
  drivers: require("../assets/drivers.svg"),
  inception: require("../assets/inception.svg"),
  intent: require("../assets/model-view-intent.jpg"),
  showMeWhatYouGot: require("../assets/showMeWhatYouGot.gif"),
  events: require("../assets/events.png"),
  mouse: require("../assets/mouse.jpg"),
  pointless: require("../assets/pointless.gif"),
  things: require("../assets/things.png"),
  map: require("../assets/map.png"),
  clicks: require("../assets/clicks.png"),
  xTeam: require("../assets/x-team.svg"),
  bloo: require("../assets/bloo.png"),
  cycleLogo: require("../assets/cycle-logo.svg"),
  request: require("../assets/server.png")
};

preloader(images);

const theme = createTheme({
  primary: "#290935",
  secondary: "#ffffff",
  alternative: "#000000"
});

const padding = {
  paddingTop: "40px"
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps>
              Reactive Programming
            </Heading>
            <Heading size={1} fit caps>
              with Cycle.js
            </Heading>
            <Image src={images.cycleLogo} style={ padding } width="120px"/>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Layout>
              <Image width="120px" height="120px" src={images.bloo}/>
            </Layout>
            <Layout>
              <Heading size={4} textSize="90" textColor="secondary">
                Bartosz Król
              </Heading>
            </Layout>
            <Layout>
              <Heading size={4} textSize="30" textColor="secondary">
                Full Stack Engineer at X-Team
              </Heading>
            </Layout>
            <Layout>
              <Heading size={4} textSize="30" textColor="secondary">
                Digital Nomad
              </Heading>
            </Layout>
            <Layout>
              <Image src={images.xTeam}/>
            </Layout>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2} fit caps>
              What does reactive even mean?
            </Heading>
            <Heading size={2} caps style={ { visibility: "hidden" } }>
              What is UI?
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2} fit caps>
              <strike>What does reactive even mean?</strike>
            </Heading>

            <Heading size={2} caps>
              What is UI?
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Image src={images.uiFunction} height="500px"/>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Image src={images.inputFunction} height="500px"/>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Image src={images.inputOutputFunction} height="500px"/>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <Image src={images.function} height="500px"/>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={2}>
              #1 UI is a Function
            </Heading>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={2}>Is it interactive?</Heading>

            <Image src={images.pointless} style={ padding} height="500px"/>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={2} fit>Interactive means events</Heading>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={2}>Are those events?</Heading>

            <Image src={images.request} style={ padding} height="500px"/>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={2}>What about those?</Heading>

            <Image src={images.mouse} style={ padding} height="500px"/>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={2}>Call them Streams!</Heading>

            <Image src={images.events} style={ padding } height="500px"/>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={2} fit caps>
              How to represent streams?
            </Heading>
            <Appear style={ {paddingTop: "5px"} }><Heading size={2} fit caps>
              Observables to the rescue!
            </Heading></Appear>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={2}>How does it work?</Heading>

            <Image src={images.things} style={ padding } height="400px" width="800px"/>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={2}>Just like Arrays</Heading>

            <Image src={images.map} style={ padding } height="500px"/>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Image src={images.clicks} margin="-100px auto" height="800px"/>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Link fit caps href="http://yang-wei.github.io/elmflux/#/signalMap" textSize="50px" textColor="#6BC0FF">Visualisation</Link>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <CodePane
              style={ padding }
              lang="jsx"
              textSize="20px"
              source={require("raw!../assets/var.example")}
              margin="20px auto"
            />

            <Appear>
              <CodePane
                style={ padding }
                lang="jsx"
                textSize="20px"
                source={require("raw!../assets/observables.example")}
                margin="20px auto"
              />
            </Appear>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading textAlign="left" size={2}>
              #1 UI is a Function
            </Heading>
            <Heading style={ {paddingTop: "5px"} } textAlign="left" size={2}>
              #2 UI is Async
            </Heading>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgImage={images.darpa} />

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={2}>Closed Loop System</Heading>

            <Image src={images.closedLoop} style={ padding }/>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={2} fit>It gets more complicated...</Heading>

            <Image src={images.controlEq} style={ padding }/>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={2} fit>I dont need this, right?</Heading>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgImage={images.robotFail} />

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Image src={images.human} height="500px"/>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Image src={images.human2} height="500px"/>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading textAlign="left" size={2}>
              #1 UI is a Function
            </Heading>
            <Heading textAlign="left" size={2}>
              #2 UI is Async
            </Heading>
            <Heading style={ {paddingTop: "5px"} } textAlign="left" size={2}>
              #3 UI is a Cycle
            </Heading>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={2} fit caps>
              How to represent a cycle?
            </Heading>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Image src={images.cycle}/>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
              <CodePane
                lang="jsx"
                textSize="20px"
                source={require("raw!../assets/cycle.example")}
                margin="20px auto"
              />
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <CodePane
              lang="js"
              textSize="20px"
              source={require("raw!../assets/cycle-core.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Image src={images.drivers} style={padding}/>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={2}>
              Drivers
            </Heading>
            <List>
              <Appear><ListItem>Socket.IO</ListItem></Appear>
              <Appear><ListItem>HTML Notifications</ListItem></Appear>
              <Appear><ListItem>Local Storage</ListItem></Appear>
              <Appear><ListItem>React Native</ListItem></Appear>
              <Appear><ListItem>and many more...</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={2} fit>
              Stop talking!
            </Heading>

            <Heading size={2} fit>
              We want to build something!
            </Heading>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <iframe src="examples/first-toggle.html" height="40px" scrolling="no" />
            <Appear>
              <CodePane
                lang="js"
                textSize="20px"
                source={require("raw!../assets/toggle.example")}
                margin="20px auto"
              />
            </Appear>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <iframe src="examples/toggle.html" height="40px" scrolling="no" />
            <CodePane
              lang="js"
              textSize="20px"
              source={require("raw!../assets/toggle2.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={2} fit>
              What about something bigger?
            </Heading>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={2} fit>
              Composable components
            </Heading>

            <Image src={images.inception} style={ padding }/>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <CodePane
              lang="js"
              textSize="20px"
              source={require("raw!../assets/toggle3.1.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <CodePane
              lang="js"
              textSize="20px"
              source={require("raw!../assets/toggle3.2.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <CodePane
              lang="js"
              textSize="20px"
              source={require("raw!../assets/toggle3.3.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <CodePane
              lang="js"
              textSize="20px"
              source={require("raw!../assets/toggle3.4.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <CodePane
              lang="js"
              textSize="20px"
              source={require("raw!../assets/toggle3.5.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <CodePane
              lang="js"
              textSize="20px"
              source={require("raw!../assets/toggle3.6.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["zoom", "slide"]} align="flex-start" bgColor="primary">
            <iframe width="1000px" height="700px" style={ { posiion: "absolute", top: "0px", left: "0px" } } src="/examples/draw-cycle/index.html" />
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <CodePane
              lang="js"
              textSize="20px"
              source={require("raw!../assets/cycle-core.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={2} fit>
              Model-View-Intent Architecture
            </Heading>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Image src={images.intent} margin="-100px auto" width="800px"/>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <CodePane
              lang="js"
              textSize="20px"
              source={require("raw!../assets/toggle4.1.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <CodePane
              lang="js"
              textSize="20px"
              source={require("raw!../assets/toggle4.2.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <CodePane
              lang="js"
              textSize="20px"
              source={require("raw!../assets/toggle4.3.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["fade"]} bgColor="primary">
            <CodePane
              lang="js"
              textSize="20px"
              source={require("raw!../assets/toggle4.4.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading size={2} fit caps>
              Questions?
            </Heading>
            <Image src={images.showMeWhatYouGot} style={ padding }/>
          </Slide>

          <Slide transition={["zoom", "slide"]} bgColor="primary">
            <Heading textAlign="left" size={4} textColor="secondary">Cycle.js - 244KB</Heading>
            <List fit>
              <ListItem>cycle.min.js: <strong>4KB</strong></ListItem>
              <ListItem>cycle-dom.min.js: <strong>96KB</strong></ListItem>
              <ListItem>rx.all.min.js: <strong>144KB</strong></ListItem>
            </List>
            <Heading textAlign="left" size={4} textColor="secondary">Angular - 158KB</Heading>
            <Heading textAlign="left" size={4} textColor="secondary">React - 146KB + 7KB</Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
