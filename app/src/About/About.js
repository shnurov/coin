import React from 'react'
import './About.css';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <section className='about container'>
        <h3>About</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias provident quasi sit sed molestiae autem atque quisquam beatae corrupti temporibus? Saepe quibusdam quo nostrum enim. Labore odit reiciendis minima doloribus!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, repudiandae eum incidunt voluptatibus, a aspernatur commodi voluptates, suscipit ab nesciunt eos nisi! Incidunt quibusdam adipisci id molestiae labore numquam commodi.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, beatae autem quia quam ab, ipsa esse perspiciatis accusantium cumque veritatis delectus vitae. Ducimus, qui porro ex ipsam harum odio dolorem. Odit ipsa consectetur voluptate pariatur reiciendis officia, ducimus quasi numquam harum ex nemo aperiam consequuntur repudiandae voluptatum possimus hic dolor.Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </section>
    );
  }
}

export default About;
