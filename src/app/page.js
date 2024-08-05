import Logo from "@/components/Logo/Logo";
import Panels, { Panel, PanelLink } from "@/components/Panels/Panels";
import work from "@/content/work/index.json";

export default function Home() {

  return <>
      {/* <div style={{position: 'absolute', fontFamily: 'sans-serif', top: 0, left: 0, width: '100%', height: '100%', background: 'var(--bg-color)', zIndex: 0, fontSize: '32vw'}}>
          WORK
      </div> */}

      <Panels>

      <Panel title="∞" name="blck" bgColor="var(--bg-color)">
          <Logo />
          <h2>BLCK is a creative production studio out of Copenhagen, Denmark.</h2>
      </Panel>

      <Panel title="∞∞" name="hidden1" bgColor="var(--bg-color)">
          <h4 style={{textAlign: 'left', marginTop: '10vw', marginBottom: '2vw', fontFamily: 'sans-serif', textAlign: 'center', whiteSpace: 'pre'}}>  
            {`            ···········`}
          </h4>
          <h2 style={{margin: '2rem 2vw 0 8vw', fontFamily: 'sans-serif'}}>
            SPECIALIZED IN:
            internet techonologies
            +++ creative coding
            +++ graphic design
            +++ sound design and production
            +++ cross-disciplinary projects
            +++ good ideas
          </h2>

          <h1 style={{margin: '4em 0 0 0.9em', whiteSpace: 'pre', fontSize: '10em', fontFamily: 'sans-serif', transform: 'rotate(90deg)', transformOrigin: '45% 50%'}}>
            {`:) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :) :)                                  `}
            <span style={{transform: 'skewX(10deg)', display: 'inline-block'}}>
              {`love you `}
            </span>
          </h1>
          
      </Panel>


      <Panel title="∞∞∞" name="panel3" bgColor="var(--bg-color)">

          {/* <h3 style={{margin: '5rem 50px 0 50px', fontFamily: 'sans-serif', whiteSpace: 'pre'}}>
            Always looking for new<br/>and exciting collaborations at the <br/><blink>! iNtErSeCTioN !</blink> <br/>of art, technology and culture.
          </h3> */}


  
          <p style={{margin: '12rem 50px 0 50px', fontFamily: 'sans-serif'}}>
            BLCK brings over two decades of multi-disciplinary expertise to the digital frontier. With extensive experience in internet technologies, music production, sound design, and digital graphic design, BLCK crafts innovative cross-disciplinary projects that push boundaries and challenge conventions.
            <br/>
            <br/>
            Through a diverse portfolio of innovative projects and consultancy services, BLCK consistently works to reveal and develop the latent possibilities within our digital landscape, engaging with fellow creators to shape more meaningful and impactful forms of technological expression.
          </p>

                    <h3 style={{margin: '5rem 50px 0 50px', fontFamily: 'sans-serif', whiteSpace: 'pre'}}>
            Always looking for new<br/>and exciting collaborations at the <br/><blink>! iNtErSeCTioN !</blink> <br/>of art, technology and culture.
          </h3>

          {/* <blink>
          <h1 style={{fontSize: '5em', fontFamily: 'sans-serif', margin: '5rem 0 0 50px'}}>
            <a href="mailto:troels@blck.dk">
              contact
            </a>
          </h1>
        </blink> */}

<h1 style={{textAlign: 'right', marginRight: '1vw'}}>
            <PanelLink panel={3}>
            {`··>`}
            </PanelLink>
          </h1>


{/* 
          <div style={{margin: '20rem 0 0 0em', fontSize: '0.8em', lineHeight: '2em', fontFamily: 'monospace'}}>
            {`“§£∞™\{}{\˜‰¢$£∞™¶[]≈}{\˜‰¢$”§£∞™¶[]≈}{\˜‰¢§£‰˜\{}≈}{\˜‰¢§£∞™¶[]}`}
            {`>`.repeat(50)}
          </div> */}

          <div style={{position: 'absolute', bottom: 0, right: 0, padding: '7rem 0'}}>
            <h5 style={{textTransform: 'uppercase', fontFamily: 'sans-serif', letterSpacing: '1.5em', margin: "10em 0 0 2vw"}}>
            {`© BLCK ${new Date().getFullYear()}`}
            </h5>
          </div>
      </Panel>
{/* 
      <Panel title="∞∞∞∞" name="panel4" fullWidth style={{boxShadow: '0 0 50vw var(--bg-color) inset'}}>

        <div style={{margin: '40vw 20% 0 20%'}}>
          
          <p>
            BLCK brings over two decades of multi-disciplinary expertise to the digital frontier. With extensive experience in internet technologies, music production, sound design, and digital graphic design, BLCK crafts innovative cross-disciplinary projects that push boundaries and challenge conventions.
            <br/>
            <br/>
            Through a diverse portfolio of innovative projects and consultancy services, BLCK consistently works to reveal and develop the latent possibilities within our digital landscape, engaging with fellow creators to shape more meaningful and impactful forms of technological expression.
          </p>


          <div style={{margin: '0 10vw 0 0'}}>
            
            <h4 style={{margin: '0 0 2em 0', fontFamily: 'sans-serif'}}>
              Selected cases
            </h4>
  
            {work.map((w, i) => {
              return <a key={i} href={`/work/${w.slug}`} target="_blank" style={{display: 'block', margin: '0 0 2em 0'}}>
                <h3 style={{margin: '0 0 2em 0', fontFamily: 'sans-serif'}}>
                  {w.title}
                </h3>
                <p>
                {w.description}
                </p>
                {w.tasks && w.tasks.map((t, i) => {
                  return <span key={i} style={{marginRight: '1em', fontFamily: 'sans-serif'}}>
                    {t}
                  </span>
                })}
              </a>
            })}

          </div>

        </div>
      

      </Panel> */}

      <Panel name="contact" fullWidth bgColor="var(--bg-color)" style={{justifyContent: 'center', alignItems: 'center'}}>
        <blink>
          <h1 style={{fontSize: '5em', fontFamily: 'sans-serif', marginTop: '-1.8em', padding: 0}}>
            <a href="mailto:troels@blck.dk">
              contact
            </a>
          </h1>
        </blink>
      </Panel>
      {/* <PanelHandler /> */}
    </Panels>
  </>
}
