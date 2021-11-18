import React from 'react';

function Gallery() {
  return (
    <section id="work" class="work">
            <article class="right">
                <a class="main Moarkett" href="https://radiant-reef-51120.herokuapp.com/" title="Moarkett website">
                    <div>
                        <h4>Moarkett</h4>
                        <p>JWT/Graphql/Node/MongoDB/React/Express</p>
                    </div>
                </a>
                <a class="main Adventure" href="http://myadventureteam.herokuapp.com/" title="My Adventure website">
                    <div>
                        <h4>My Adventure</h4>
                        <p>HTML/CSS/JS/MySQL/HandleBars/Express</p>
                    </div>
                </a>
                <a class="main Social" href="https://github.com/NukaGrizz/socialmediaAPI" title="My Adventure website">
                    <div>
                        <h4>Social Media API</h4>
                        <p>JS/NoSQL/Express/MongoDB/Mongoose</p>
                    </div>
                </a>
                <a href="https://nukagrizz.github.io/Horiseon-Social-Solution-Services/" class="secondary horiseon" title="Horiseon website">
                    <div>
                        <h4>Horiseon</h4>
                        <p>HTML/CSS</p>
                    </div>
                </a>
                <a href="https://nukagrizz.github.io/robot-gladiators/" class="secondary robot" title="Robot Gladiators game">
                    <div>
                        <h4>Robot Gladiators</h4>
                        <p>JavaScript</p>
                    </div>
                </a>
                <a href="https://www.streamguard.com/" class="secondary streamguard" title="StreamGuard Website">
                    <div>
                        <h4>StreamGuard</h4>
                        <p>Wix</p>
                    </div>
                </a>
                <a href="https://flying-dink.github.io/Read-My-Lips/" class="secondary portfolio" title="Read My Lips Game" >
                    <div>
                        <h4>Read My Lips</h4>
                        <p>HTML/CSS/JS</p>
                    </div>
                </a>

            </article>
        </section>
  );
}
export default Gallery;
