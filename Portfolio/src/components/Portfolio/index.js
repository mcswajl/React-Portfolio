import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <PhotoList category={currentCategory.name} />
    </section>
  );
}

    // My Projects
 <section id="my-projects">
  <div class="flex-row">
    <h2 class="section-title primary-border">
      My First Project
    </h2>
  </div>

  <div class="First-Project">
    <div class="project">
      <a href="https://mcswajl.github.io/project-1/">
      <img src="./assets/images/screenshot2.jpg" 
        alt="Pets, Facts, Cats, Dogs" />
      </a>
    </div>  
  </div>

  <div class="flex-row">
    <h2 class="section-title primary-border">
      My Second Project
    </h2>
  </div>

  <div class="Seconday-Project">
    <div class="project">
      <a href="https://github.com/spurgason/verbose-potato"></a>
      <a href="https://family-media-uncc.herokuapp.com/">
      <img src="./assets/images/screenshot3.jpg" 
        alt="Calendar, Famliy, Clouinay" />
      </a>
    </div>  
  </div>
</section>
export default Portfolio;
