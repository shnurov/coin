import React from 'react'
import './Contacts.css';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <section className='contacts container'>
        <h3>Contacts</h3>
        <div className='contacts-map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d732.7925209025954!2d-70.9834823!3d42.3954449!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e36e3e3e8a12f9%3A0x8c465449083e152!2zMjUwIEVuZGljb3R0IEF2ZSwgUmV2ZXJlLCBNQSAwMjE1MSwg0KHQqNCQ!5e1!3m2!1sru!2s!4v1684166186752!5m2!1sru!2s" width="" height="" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias provident quasi sit sed molestiae autem atque quisquam beatae corrupti temporibus? Saepe quibusdam quo nostrum enim. Labore odit reiciendis minima doloribus!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, repudiandae eum incidunt voluptatibus, a aspernatur commodi voluptates, suscipit ab nesciunt eos nisi! Incidunt quibusdam adipisci id molestiae labore numquam commodi.</p>
      </section>
    );
  }
}

export default Contacts;