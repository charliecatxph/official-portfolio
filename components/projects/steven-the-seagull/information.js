export default function Information() {
  return (
    <section className="information-section" id="information">
      <div className="container">
        <div className="wrapper">
          <section className="info-boxes">
            <div className="title">
              <h1>information</h1>
            </div>
            <div className="box">
              <div className="box-title">
                <h1>Steven&apos;s Commands</h1>
              </div>
              <div className="box-main">
                <div className="col command">
                  <div className="title">
                    <h3>Command</h3>
                  </div>
                  <div className="text">
                    <h1>$join</h1>
                    <h1>$play</h1>
                    <h1>$playLast</h1>
                    <h1>$skip</h1>
                    <h1>$leave</h1>
                    <h1>$queue</h1>
                    <h1>$resume</h1>
                    <h1>$pause</h1>
                    <h1>$skipTo</h1>
                    <h1>$nowPlaying</h1>
                    <h1>$seek</h1>
                    <h1>$shuffle</h1>
                    <h1>$aboutMe</h1>
                    <h1>$help</h1>
                    <h1>$setFilter</h1>
                    <h1>$quote</h1>
                    <h1>$lyrics</h1>
                  </div>
                </div>
                <div className="col alias">
                  <div className="title">
                    <h3>Alias</h3>
                  </div>
                  <div className="text">
                    <span>No aliases.</span>
                    <span>$p</span>
                    <span>$pl</span>
                    <span>$s, $next</span>
                    <span>$dc, $disconnect</span>
                    <span>$q, $list</span>
                    <span>$rs</span>
                    <span>No aliases.</span>
                    <span>$st</span>
                    <span>$np</span>
                    <span>No aliases.</span>
                    <span>$mix</span>
                    <span>No aliases.</span>
                    <span>No aliases.</span>
                    <span>$sf</span>
                    <span>No aliases.</span>
                    <span>$ly</span>
                  </div>
                </div>
                <div className="col function">
                  <div className="title">
                    <h3>Function</h3>
                  </div>
                  <div className="text">
                    <span>
                      Steven will join the current voice channel the requester
                      is in.
                    </span>
                    <span>Steven will play the requested playlist/song.</span>
                    <span>
                      Steven will play the last song played. (If there’s one)
                    </span>
                    <span>Steven will skip the current song.</span>
                    <span>Steven will leave the current voice channel.</span>
                    <span>Steven will send the current play queue.</span>
                    <span>Steven will resume the player.</span>
                    <span>Steven will pause the player.</span>
                    <span>
                      Steven will skip to a desired song inside the queue.
                    </span>
                    <span>Steven will send the current song playing.</span>
                    <span>Steven will seek to a desired time in the song.</span>
                    <span>Steven will shuffle the current queue.</span>
                    <span>Steven will introduce himself.</span>
                    <span>Steven will send his base commands.</span>
                    <span>
                      Steven will set a filter. (Unstable. Cause: Server
                      Performance)
                    </span>
                    <span>Steven will fetch a quote from his quote book.</span>
                    <span>
                      Steven will fetch the lyrics for the current song.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="info-boxes">
            <div className="box">
              <div className="box-title">
                <h1>Project Info</h1>
              </div>
              <div className="box-main-modified">
                <div className="row">
                  <div className="main-text">
                    <h1>Release Date</h1>
                  </div>
                  <div className="support-text">
                    <span>Feb 14, 2022</span>
                  </div>
                </div>
                <div className="row">
                  <div className="main-text">
                    <h1>Reason for development</h1>
                  </div>
                  <div className="support-text">
                    <span>I needed a friend.</span>
                  </div>
                </div>
                <div className="row">
                  <div className="main-text">
                    <h1>Technologies</h1>
                  </div>
                  <div className="support-text">
                    <span>
                      Javascript, Node.js, Discord.js, Distube Framework,
                      FFMPEG, Lyrics API, Quote API, Heroku, Git
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="main-text">
                    <h1>Current version</h1>
                  </div>
                  <div className="support-text">
                    <span>v1.9</span>
                  </div>
                </div>
                <div className="row">
                  <div className="main-text">
                    <h1>License</h1>
                  </div>
                  <div className="support-text">
                    <span>MIT</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
