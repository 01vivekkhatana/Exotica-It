import Sidebar from "../components/Sidebar";
import React, { useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import ListIcon from '@mui/icons-material/List';

function Header_dynamic() {
  const navigationRef = useRef(null);
  const mainRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {

    const listItems = $(navigationRef.current).find('li');
    listItems.on('mouseover', function () {
      listItems.removeClass('hovered');
      $(this).addClass('hovered');
    });

   
    $(toggleRef.current).on('click', () => {
      $(navigationRef.current).toggleClass('active');
      $(mainRef.current).toggleClass('active');
    });


    return () => {
      listItems.off('mouseover');
      $(toggleRef.current).off('click');
    };
  }, []);

  const [logo, setLogo] = useState(null);
  const [buttons, setButtons] = useState([{ text: '', url: '' }]);
  const [contact, setContact] = useState([{ flag_logo: '', phone: '' }]);

  useEffect(() => {
    // Fetch header data
    fetch('http://localhost:5000/api/header')
      .then(res => res.json())
      .then(data => {
        setLogo(data.logo || null);
        setButtons(data.buttons || [{ text: '', url: '' }]);
        setContact(data.contact || [{ flag_logo: '', phone: '' }]);
      })
      .catch(err => console.error('Error fetching header data:', err));
  }, []);

  const handleFileChange = (e) => {
    setLogo(e.target.files[0]);
  };

  const handleButtonChange = (index, field, value) => {
    const newButtons = [...buttons];
    newButtons[index][field] = value;
    setButtons(newButtons);
  };

  const handleContactChange = (index, field, value) => {
    const newContact = [...contact];
    newContact[index][field] = value;
    setContact(newContact);
  };

  const handleFlagLogoChange = (index, e) => {
    const newContact = [...contact];
    newContact[index].flag_logo = e.target.files[0];
    setContact(newContact);
  };

  const addButton = () => {
    setButtons([...buttons, { text: '', url: '' }]);
  };

  const removeButton = (index) => {
    const newButtons = buttons.filter((_, i) => i !== index);
    setButtons(newButtons);
  };

  const addContact = () => {
    setContact([...contact, { flag_logo: '', phone: '' }]);
  };

  const removeContact = (index) => {
    const newContact = contact.filter((_, i) => i !== index);
    setContact(newContact);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (logo) formData.append('logo', logo);
    formData.append('buttons', JSON.stringify(buttons));
    contact.forEach((cont, index) => {
      if (cont.flag_logo instanceof File) {
        formData.append('flag_logos', cont.flag_logo);
      }
    });
    formData.append('contact', JSON.stringify(contact.map(cont => ({
      ...cont,
      flag_logo: cont.flag_logo instanceof File ? undefined : cont.flag_logo,
    }))));

    fetch('http://localhost:5000/api/header', {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(() => {
        alert('Header updated successfully');
      })
      .catch(err => {
        console.error('Error updating header:', err);
        alert('Error updating header');
      });
  };

  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="main" ref={mainRef}>
          <div className="topbar">
            <div className="toggle" ref={toggleRef}>
              <ListIcon/>
            </div>

            <div className="search">
              <label>
                <input type="text" placeholder="Search here" />
                <ion-icon name="search-outline"></ion-icon>
              </label>
            </div>

            <div className="user">
              <img src="techhnology.png" alt="" />
            </div>
          </div>
          <div className="header-dashboard">
            <h1>Manage Header</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Logo:</label>
                <input type="file" onChange={handleFileChange} />
                {logo && (
                  <div>
                    <img src={logo instanceof File ? URL.createObjectURL(logo) : logo} alt="Logo" width="100" />
                  </div>
                )}
              </div>
              <div>
                <label>Buttons:</label>
                {buttons.map((button, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      placeholder="Text"
                      value={button.text}
                      onChange={(e) => handleButtonChange(index, 'text', e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="URL"
                      value={button.url}
                      onChange={(e) => handleButtonChange(index, 'url', e.target.value)}
                    />
                    <button type="button" onClick={() => removeButton(index)}>Remove</button>
                  </div>
                ))}
                <button type="button" onClick={addButton}>Add Button</button>
              </div>
              <div>
                <label>Contact:</label>
                {contact.map((cont, index) => (
                  <div key={index}>
                    <input
                      type="file"
                      onChange={(e) => handleFlagLogoChange(index, e)}
                    />
                    {cont.flag_logo && (
                      <div>
                        <img src={cont.flag_logo instanceof File ? URL.createObjectURL(cont.flag_logo) : cont.flag_logo} alt="Flag Logo" width="50" />
                      </div>
                    )}
                    <input
                      type="text"
                      placeholder="Phone"
                      value={cont.phone}
                      onChange={(e) => handleContactChange(index, 'phone', e.target.value)}
                    />
                    <button type="button" onClick={() => removeContact(index)}>Remove</button>
                  </div>
                ))}
                <button type="button" onClick={addContact}>Add Contact</button>
              </div>
              <button type="submit">Save</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header_dynamic;
