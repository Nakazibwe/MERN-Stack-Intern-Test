import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import SearchIcon from '@mui/icons-material/Search';
import EventIcon from '@mui/icons-material/Event';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import DirectionsOutlinedIcon from '@mui/icons-material/DirectionsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import Brightness1RoundedIcon from '@mui/icons-material/Brightness1Rounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import SingleBedOutlinedIcon from '@mui/icons-material/SingleBedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import GarageOutlinedIcon from '@mui/icons-material/GarageOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Crop54OutlinedIcon from '@mui/icons-material/Crop54Outlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import RotateLeftOutlinedIcon from '@mui/icons-material/RotateLeftOutlined';
import ModeOfTravelOutlinedIcon from '@mui/icons-material/ModeOfTravelOutlined';
import { AppContext } from '../contexts/app.context';
import '../App.css';

import image1 from '../image1.jpg';
import image2 from '../image2.jpeg';
import image3 from '../image3.jpg';
const Landingpage = () => {
  const { token, data, setData, userData, setUserData } =
    useContext(AppContext);
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:4000/api/properties'
        );
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:4000/api/users/user'
        );
        if (response.status === 200) {
          setUserData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, []);
  
  return (
    <Container fluid className='dashboard_wrapper'>
      <div className='left-side'>
        <div className='left-side-A'>
          <div className='logo'>
            <span className='inner-logo'>
              <StarOutlinedIcon style={{ fontSize: '45px' }} />
            </span>
          </div>
        </div>
        <div className='left-side-B'>
          <div className='side-bar-content-container'>
            <div className='active-content-container'>
              <small>Create New Tour +</small>
            </div>
            <div className='content-container'>
              <small>
                <DonutLargeIcon
                  style={{
                    fontSize: 'inherit',
                    marginRight: '4%',
                    color: '#0F1C35',
                  }}
                />
                Dashboard
              </small>
            </div>
            <div className='content-container'>
              <small>
                <SearchIcon
                  style={{
                    fontSize: 'inherit',
                    marginRight: '4%',
                    color: '#0F1C35',
                  }}
                />
                Search Property
              </small>
            </div>
            <div className='content-container'>
              <small>
                <EventIcon
                  style={{
                    fontSize: 'inherit',
                    marginRight: '4%',
                    color: '#0F1C35',
                  }}
                />
                Calender
              </small>
            </div>
            <div className='content-container'>
              <small>
                <PeopleIcon
                  style={{
                    fontSize: 'inherit',
                    marginRight: '4%',
                    color: '#0F1C35',
                  }}
                />
                My Clients
              </small>
            </div>
            <div className='content-container'>
              <small>
                <ShoppingCartIcon
                  style={{
                    fontSize: 'inherit',
                    marginRight: '4%',
                    color: '#0F1C35',
                  }}
                />
                MLS Lists
              </small>
            </div>
            <div className='content-container'>
              <small>
                <NotificationsNoneIcon
                  style={{
                    fontSize: 'inherit',
                    marginRight: '4%',
                    color: '#0F1C35',
                  }}
                />
                Notifications
              </small>
            </div>
            <div className='content-container'>
              <small>
                <PersonAddAltIcon
                  style={{
                    fontSize: 'inherit',
                    marginRight: '4%',
                    color: '#0F1C35',
                  }}
                />
                Invite & Earn
              </small>
            </div>
          </div>
        </div>
        <div className='left-side-C'>
          <div className='left-side-C-innerdiv'>
            <small style={{ fontWeight: '100', fontSize: '12px' }}>
              Need Help?
            </small>
            <br />
            <small style={{ fontWeight: '400', fontSize: '12px' }}>
              <LiveHelpOutlinedIcon
                style={{
                  fontSize: 'inherit',
                  marginRight: '2%',
                  color: '#0F1C35',
                }}
              />
              Help Desk
            </small>
          </div>
        </div>
      </div>
      {data.length == 0 ? (
        <div className='right-side'>
          <div className='content'>
            <div className='nav'>
              <div className='nav-left'>
                <div
                  style={{
                    height: '40px',
                    width: '40px',
                    borderRadius: '5px',
                    border: '1px solid #fff',
                    backgroundColor: '#fff',
                    textAlign: 'center',
                    marginRight: '2%',
                    marginTop: '1%',
                    paddingTop: '1%',
                  }}
                >
                  {' '}
                  <ChevronLeftOutlinedIcon />
                </div>
                <span
                  style={{
                    marginTop: '2.5%',
                    fontSize: '14px',
                    fontWeight: '400',
                    marginRight: '2%',
                  }}
                >
                  <small style={{ color: '#555B67', fontWeight: '300' }}>
                    2218 Thornridge Cir.. E5579076
                  </small>{' '}
                  E5579076
                </span>
              </div>
              <div className='nav-right'>
                <div
                  style={{
                    width: '35%',
                    paddingTop: '2.5%',
                    marginRight: '7%',
                  }}
                >
                  <span
                    className='nav-right-icon-span'
                    style={{
                      position: 'relative',
                      display: 'inlineBlock',
                    }}
                  >
                    <NotificationsNoneIcon
                      style={{
                        color: '#0F1C35',
                        fontSize: '20px',
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        top: '-10px',
                        right: '-1px',
                        display: 'inlineBlock',
                        width: '15px',
                        height: '15px',
                        backgroundColor: '#2E63F6',
                        color: '#fff',
                        fontSize: '10px',
                        fontWeight: '400',
                        textAlign: 'center',
                        borderRadius: '50%',
                      }}
                    >
                      <small>2</small>
                    </span>
                  </span>
                  <span className='nav-right-icon-span'>
                    <SearchIcon
                      style={{
                        color: '#0F1C35',
                        fontSize: '20px',
                      }}
                    />
                  </span>
                  <span className='nav-right-icon-span'>
                    <SettingsOutlinedIcon
                      style={{
                        color: '#0F1C35',
                        fontSize: '20px',
                      }}
                    />
                  </span>
                  <span className='nav-right-icon-span'>
                    <ArrowCircleRightOutlinedIcon
                      style={{
                        color: '#0F1C35',
                        fontSize: '20px',
                      }}
                    />
                  </span>
                </div>

                <div style={{ display: 'flex' }}>
                  <div
                    style={{
                      height: '40px',
                      width: '40px',
                      borderRadius: '25px',
                      marginTop: '1.5%',
                      border: '1px solid #F5F6FA',
                      padding: 0,
                      marginRight: '5%',
                    }}
                  >
                    <img
                      src={image1}
                      alt=''
                      style={{
                        height: '40px',
                        width: '40px',
                        borderRadius: '25px',
                      }}
                    />
                  </div>
                  <div>
                    <small
                      style={{
                        fontSize: '12px',
                        color: '#22222D',
                        fontWeight: '400',
                      }}
                    >
                      {userData.firstname ? userData.firstname : 'Berkay'}{' '}
                      {userData.lastname ? userData.lastname : 'Erdinc'}
                    </small>
                    <br />
                    <small
                      style={{
                        fontSize: '11px',
                        color: '#656B8A',
                        fontWeight: '100',
                      }}
                    >
                      {userData.email ? userData.email : 'hi@berkayerdinc.com'}
                    </small>
                  </div>

                  <KeyboardArrowDownOutlinedIcon
                    style={{
                      color: '#0F1C35',
                      fontSize: '20px',
                      marginLeft: '5%',
                      marginTop: '6%',
                    }}
                  />
                </div>
              </div>
            </div>
            <div className='middle-content'>
              <div
                className='photo-div'
                style={{ marginRight: '1%', position: 'relative' }}
              >
                <img
                  src={image1}
                  alt='room'
                  style={{
                    height: '100%',
                    width: '100%',
                    borderRadius: '4px',
                  }}
                />
                <div
                  style={{
                    height: '40px',
                    width: '40px',
                    borderRadius: '5px',
                    border: '1px solid #fff',
                    backgroundColor: '#fff',
                    textAlign: 'center',
                    position: 'absolute',
                    top: '40%',
                    left: '3%',
                    paddingTop: '2%',
                  }}
                >
                  {' '}
                  <ChevronLeftOutlinedIcon />
                </div>
              </div>
              <div className='photo-div' style={{ marginRight: '1%' }}>
                <img
                  src={image2}
                  alt='room'
                  style={{
                    height: '100%',
                    width: '100%',
                    borderRadius: '4px',
                  }}
                />
              </div>
              <div className='photo-div'>
                <img
                  src={image3}
                  alt='room'
                  style={{
                    height: '100%',
                    width: '100%',
                    borderRadius: '4px',
                  }}
                />
                <div
                  style={{
                    height: '40px',
                    width: '40px',
                    borderRadius: '5px',
                    border: '1px solid #fff',
                    backgroundColor: '#fff',
                    textAlign: 'center',
                    position: 'absolute',
                    top: '25%',
                    right: '3%',
                    paddingTop: '0.5%',
                  }}
                >
                  {' '}
                  <ChevronRightOutlinedIcon />
                </div>
              </div>
            </div>
            <div className='bottom-content'>
              <div className='botom-content-A'>
                <div
                  style={{
                    margin: 'auto',
                    marginTop: '5%',
                    marginBottom: '5%',
                    width: '90%',
                  }}
                >
                  <div className='botom-content-A-top'>
                    <div
                      style={{
                        color: '#5EB182',
                        backgroundColor: '#e2f1ea',
                        width: '120px',
                        height: '30px',
                        borderRadius: '4px',
                        textAlign: 'center',
                        fontSize: '14px',
                        fontWeight: '500',
                        paddingTop: '2%',
                        marginBottom: '3%',
                      }}
                    >
                      <small> For Sale </small>
                    </div>
                    <div
                      style={{
                        color: '#fff',
                        backgroundColor: '#2E63F6',
                        width: '60px',
                        height: '30px',
                        borderRadius: '4px',
                        textAlign: 'center',
                        fontSize: '12px',
                        marginLeft: '9%',
                        fontWeight: '200',
                        paddingTop: '3%',
                      }}
                    >
                      <small>Add List</small>
                    </div>
                  </div>
                  <div style={{ marginBottom: '6%' }}>
                    <span style={{ fontSize: '13px', fontWeight: '500' }}>
                      MLS#: E5579076
                    </span>
                    <br />
                    <span>
                      <small
                        style={{
                          color: '#555B67',
                          fontSize: '12px',
                          fontWeight: '100',
                        }}
                      >
                        Listed for:{' '}
                        <span
                          style={{
                            color: '#2E63F6',
                            fontSize: '12px',
                            fontWeight: '500',
                          }}
                        >
                          $1,549,586
                        </span>
                      </small>
                    </span>
                    <br />
                    <span
                      style={{
                        fontSize: '15px',
                        fontWeight: '300',
                      }}
                    >
                      <small>
                        2118 Thornridge Cir. Syracuse, Connecticut 35624
                      </small>
                    </span>
                  </div>
                  <div style={{ marginBottom: '6%' }}>
                    <div className='bottom-content-A-button'>
                      <MapOutlinedIcon
                        style={{
                          marginLeft: '2%',
                          marginRight: '3%',
                          fontSize: '15px',
                          fontWeight: '100',
                          marginTop: '5%',
                        }}
                      />
                      <small
                        style={{
                          color: '#555B67',
                          fontSize: '11px',
                          fontWeight: '400',
                        }}
                      >
                        View on Map
                      </small>{' '}
                    </div>
                    <div className='bottom-content-A-button'>
                      <DirectionsOutlinedIcon
                        style={{
                          marginLeft: '2%',
                          marginRight: '3%',
                          fontSize: '15px',
                          fontWeight: '100',
                          marginTop: '5%',
                        }}
                      />
                      <small
                        style={{
                          color: '#555B67',
                          fontSize: '11px',
                          fontWeight: '400',
                        }}
                      >
                        Get Directions
                      </small>{' '}
                    </div>
                    <div className='bottom-content-A-button'>
                      <ShareOutlinedIcon
                        style={{
                          marginLeft: '2%',
                          marginRight: '3%',
                          fontSize: '15px',
                          fontWeight: '100',
                          marginTop: '5%',
                        }}
                      />

                      <small
                        style={{
                          color: '#555B67',
                          fontSize: '11px',
                          fontWeight: '400',
                        }}
                      >
                        Share
                      </small>
                    </div>
                    <div className='bottom-content-A-button'>
                      <DateRangeOutlinedIcon
                        style={{
                          marginLeft: '2%',
                          marginRight: '3%',
                          fontSize: '15px',
                          fontWeight: '100',
                          marginTop: '5%',
                        }}
                      />

                      <small
                        style={{
                          color: '#555B67',
                          fontSize: '11px',
                          fontWeight: '400',
                        }}
                      >
                        My Notes
                      </small>
                    </div>
                  </div>
                  <div
                    style={{
                      border: '1px solid #F5F6FA',
                      backgroundColor: '#F5F6FA',
                      borderRadius: '4px',
                      paddingLeft: '5%',
                    }}
                  >
                    <div>
                      <small
                        style={{
                          color: '#555B67',
                          fontSize: '10px',
                          fontWeight: '100',
                        }}
                      >
                        Listing Agent
                      </small>
                      <br />
                      <div style={{ display: 'flex' }}>
                        <div style={{ width: '85%' }}>
                          <small
                            style={{
                              color: '#0F1C35',
                              fontSize: '11px',
                              fontWeight: '200',
                            }}
                          >
                            {userData.firstname
                              ? userData.firstname
                              : 'Courtney'}{' '}
                            {userData.lastname ? userData.lastname : 'Henry'}
                          </small>

                          <div
                            style={{
                              display: 'flex',
                              marginTop: '2%',
                            }}
                          >
                            <Brightness1RoundedIcon
                              style={{
                                color: 'red',
                                fontSize: '15px',
                                marginRight: '3%',
                              }}
                            />

                            <small
                              style={{
                                color: '#0F1C35',
                                fontSize: '10px',
                                fontWeight: '200',
                              }}
                            >
                              {userData.phone
                                ? userData.phone
                                : '+90 552 489 8277'}
                            </small>
                          </div>
                        </div>
                        <span>
                          <MailOutlineRoundedIcon
                            style={{
                              fontSize: '18px',
                              fontWeight: '100',
                              marginTop: '25px',
                            }}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='botom-content-B'>
                <div className='botom-content-B-top'>
                  <div className='front-property-details'>
                    <small>Property Details</small>
                  </div>

                  <div className='property-details'>
                    <span
                      style={{
                        color: '#555B67',
                        fontSize: '10px',
                        fontWeight: '100',
                      }}
                    >
                      <MapsHomeWorkOutlinedIcon />
                    </span>
                    <br />
                    <small
                      style={{
                        color: '#555B67',
                        fontSize: '10px',
                        fontWeight: '100',
                      }}
                    >
                      Apartments
                    </small>
                  </div>
                  <div className='property-details'>
                    <span
                      style={{
                        color: '#555B67',
                        fontSize: '10px',
                        fontWeight: '100',
                      }}
                    >
                      <SingleBedOutlinedIcon />
                    </span>
                    <br />
                    <small
                      style={{
                        color: '#555B67',
                        fontSize: '10px',
                        fontWeight: '100',
                      }}
                    >
                      3 Bedrooms
                    </small>
                  </div>
                  <div className='property-details'>
                    <span
                      style={{
                        color: '#555B67',
                        fontSize: '10px',
                        fontWeight: '100',
                      }}
                    >
                      <BathtubOutlinedIcon />
                    </span>
                    <br />
                    <small
                      style={{
                        color: '#555B67',
                        fontSize: '10px',
                        fontWeight: '100',
                      }}
                    >
                      2 Bathrooms
                    </small>
                  </div>
                  <div className='property-details'>
                    <span
                      style={{
                        color: '#555B67',
                        fontSize: '10px',
                        fontWeight: '100',
                      }}
                    >
                      <GarageOutlinedIcon />
                    </span>
                    <br />
                    <small
                      style={{
                        color: '#555B67',
                        fontSize: '10px',
                        fontWeight: '100',
                      }}
                    >
                      2 Garage
                    </small>
                  </div>
                  <div className='property-details'>
                    <span
                      style={{
                        color: '#555B67',
                        fontSize: '10px',
                        fontWeight: '100',
                      }}
                    >
                      <HomeOutlinedIcon />
                    </span>
                    <br />
                    <small
                      style={{
                        color: '#555B67',
                        fontSize: '10px',
                        fontWeight: '100',
                      }}
                    >
                      1,963 sq. ft.
                    </small>
                  </div>
                  <div className='property-details'>
                    <span
                      style={{
                        color: '#555B67',
                        fontSize: '10px',
                        fontWeight: '100',
                      }}
                    >
                      <Crop54OutlinedIcon />
                    </span>
                    <br />
                    <small
                      style={{
                        color: '#555B67',
                        fontSize: '10px',
                        fontWeight: '100',
                      }}
                    >
                      1,176 sq. ft.
                    </small>
                  </div>
                </div>
                <div className='botom-content-B-middle'>
                  <div
                    style={{
                      width: '34%',
                      fontSize: '14px',
                      textAlign: 'center',
                      fontWeight: '400',
                      paddingTop: '4%',
                      borderBottom: '2px solid #2E63F6',
                    }}
                  >
                    <small>Key Facts</small>
                  </div>
                  <div
                    style={{
                      width: '33%',
                      fontSize: '14px',
                      textAlign: 'center',
                      fontWeight: '400',
                      paddingTop: '4%',
                    }}
                  >
                    <small>Details</small>
                  </div>
                  <div
                    style={{
                      width: '33%',
                      fontSize: '14px',
                      textAlign: 'center',
                      fontWeight: '400',
                      paddingTop: '4%',
                    }}
                  >
                    <small>Rooms</small>
                  </div>
                </div>
                <div className='botom-content-B-bottom'>
                  <div className='inner-botom-content-B-bottom'>
                    <div>
                      <p
                        style={{
                          fontSize: '12px',
                          fontWeight: '100',
                          lineLength: '2px',
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo risus a mattis semper. Integer placerat volutpat odio, at pulvinar tortor laoreet mattis. Proin aliquet semper tempus.
                      </p>
                    </div>
                    <div style={{ marginTop: '3%', marginBottom: '4%' }}>
                      <div className='inner-botom-content-B-bottom-content-div'>
                        <div className='content-div-A'>
                          <small>Tax</small>
                        </div>
                        <div className='content-div-B'>
                          <small>
                            '$1,340 / 2022'
                          </small>
                        </div>
                      </div>
                      <div className='inner-botom-content-B-bottom-content-div'>
                        <div className='content-div-A'>
                          <small>Type</small>
                        </div>
                        <div className='content-div-B'>
                          <small>
                            'Single-Family
                          </small>
                        </div>
                      </div>
                      <div className='inner-botom-content-B-bottom-content-div'>
                        <div className='content-div-A'>
                          <small>Building Age</small>
                        </div>
                        <div className='content-div-B'>
                          <small>
                            5 Year
                          </small>
                        </div>
                      </div>
                      <div className='inner-botom-content-B-bottom-content-div'>
                        <div className='content-div-A'>
                          <small>Size</small>
                        </div>
                        <div className='content-div-B'>
                          <small>
                            1500 - 2000 feet2
                          </small>
                        </div>
                      </div>
                      <div className='inner-botom-content-B-bottom-content-div'>
                        <div className='content-div-A'>
                          <small>Parking</small>
                        </div>
                        <div className='content-div-B'>
                          <small>
                            Detached 2 Garage, 6 Parking
                          </small>
                        </div>
                      </div>
                      <div className='inner-botom-content-B-bottom-content-div'>
                        <div className='content-div-A'>
                          <small>Basement</small>
                        </div>
                        <div className='content-div-B'>
                          <small>
                            Unfinished
                          </small>
                        </div>
                      </div>
                      <div className='inner-botom-content-B-bottom-content-div'>
                        <div className='content-div-A'>
                          <small>MLS#</small>
                        </div>
                        <div className='content-div-B'>
                          <small>
                            E5579076
                          </small>
                        </div>
                      </div>
                      <div className='inner-botom-content-B-bottom-content-div'>
                        <div className='content-div-A'>
                          <small>Possesion</small>
                        </div>
                        <div className='content-div-B'>
                          <small>
                            5 Day
                          </small>
                        </div>
                      </div>
                    </div>
                    <div style={{ marginBottom: '2%' }}>
                      <p style={{ fontWeight: '400', fontSize: '13px' }}>
                        Description
                      </p>
                      <small
                        style={{
                          color: '#555B67',
                          fontSize: '10px',
                          fontWeight: '200',
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo risus a mattis semper. Integer placerat volutpat odio, at pulvinar tortor laoreet mattis. Proin aliquet semper tempus. Etiam auctor lacus leo {' '}
                        <Link to='/' style={{ color: '#2E63F6' }}>
                          read more..
                        </Link>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className='botom-content-C'>
                <div className='botom-content-C-inner-div'>
                  <div
                    style={{
                      display: 'flex',
                      height: '50px',
                    }}
                  >
                    <span
                      style={{
                        color: '#0F1C35',
                        fontSize: '14px',
                        fontWeight: '400',
                        marginTop: '7%',
                        marginRight: '41%',
                      }}
                    >
                      Shortcuts
                    </span>
                    <div
                      style={{
                        backgroundColor: '#F3F5F9',
                        width: '30px',
                        height: '30px',
                        marginTop: '2%',

                        borderRadius: '5px',
                      }}
                    >
                      <div
                        style={{
                          marginTop: '7%',
                          textAlign: 'center',
                          width: '30px',
                          height: '30px',
                          fontWeight: '100',
                        }}
                      >
                        <DashboardOutlinedIcon />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      height: '40px',
                      marginBottom: '3%',
                      borderRadius: '4px',
                      paddingLeft: '5%',
                      backgroundColor: '#F5F6FA',
                      border: '1px solid #F5F6FA',
                    }}
                  >
                    <small
                      style={{
                        color: '#0F1C35',
                        fontSize: '10px',
                        fontWeight: '400',
                        marginTop: '8%',
                        marginRight: '3%',
                      }}
                    >
                      Notify similar properties
                    </small>

                    <ToggleOffOutlinedIcon
                      style={{
                        marginTop: '6%',
                        color: '#555B67',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      height: '40px',
                      marginBottom: '3%',
                      borderRadius: '4px',
                      color: '#fff',
                      paddingLeft: '5%',
                      backgroundColor: '#2E63F6',
                      border: '1px solid #2E63F6',
                    }}
                  >
                    <KeyOutlinedIcon
                      style={{
                        fontSize: '12px',
                        fontWeight: '100',
                        marginRight: '5%',
                        marginTop: '8%',
                      }}
                    />

                    <small
                      style={{
                        fontSize: '10px',
                        fontWeight: '400',
                        marginTop: '8%',
                      }}
                    >
                      Key Facts
                    </small>
                  </div>
                  <div
                    style={{
                      height: '40px',
                      marginBottom: '3%',
                      borderRadius: '4px',
                      paddingLeft: '5%',
                      backgroundColor: '#fff',
                      border: '1px solid #e5e7eb',
                    }}
                  >
                    <UpdateOutlinedIcon
                      style={{
                        color: '#0F1C35',
                        fontSize: '12px',
                        fontWeight: '100',
                        marginRight: '5%',
                        marginTop: '8%',
                      }}
                    />

                    <small
                      style={{
                        fontSize: '10px',
                        fontWeight: '400',
                        marginTop: '8%',
                        color: '#555B67',
                      }}
                    >
                      Property History
                    </small>
                  </div>
                  <div
                    style={{
                      height: '40px',
                      marginBottom: '3%',
                      borderRadius: '4px',
                      paddingLeft: '5%',
                      backgroundColor: '#fff',
                      border: '1px solid #e5e7eb',
                    }}
                  >
                    <RotateLeftOutlinedIcon
                      style={{
                        color: '#0F1C35',
                        fontSize: '12px',
                        fontWeight: '100',
                        marginRight: '5%',
                        marginTop: '8%',
                      }}
                    />

                    <small
                      style={{
                        fontSize: '10px',
                        fontWeight: '400',
                        marginTop: '8%',
                        color: '#555B67',
                      }}
                    >
                      Demographics
                    </small>
                  </div>
                  <div
                    style={{
                      height: '40px',
                      marginBottom: '3%',
                      borderRadius: '4px',
                      paddingLeft: '5%',
                      backgroundColor: '#fff',
                      border: '1px solid #e5e7eb',
                    }}
                  >
                    <ModeOfTravelOutlinedIcon
                      style={{
                        color: '#0F1C35',
                        fontSize: '12px',
                        fontWeight: '100',
                        marginRight: '5%',
                        marginTop: '8%',
                      }}
                    />

                    <small
                      style={{
                        fontSize: '10px',
                        fontWeight: '400',
                        marginTop: '8%',
                        color: '#555B67',
                      }}
                    >
                      Points of interest
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        data.map((property) => (
          <div className='right-side'>
            <div className='content'>
              <div className='nav'>
                <div className='nav-left'>
                  <div
                    style={{
                      height: '40px',
                      width: '40px',
                      borderRadius: '5px',
                      border: '1px solid #fff',
                      backgroundColor: '#fff',
                      textAlign: 'center',
                      marginRight: '2%',
                      marginTop: '1%',
                      paddingTop: '1%',
                    }}
                  >
                    {' '}
                    <ChevronLeftOutlinedIcon />
                  </div>
                  <span
                    style={{
                      marginTop: '2.5%',
                      fontSize: '14px',
                      fontWeight: '400',
                      marginRight: '2%',
                    }}
                  >
                    <small style={{ color: '#555B67', fontWeight: '300' }}>
                      {property.address
                        ? property.address
                        : '2218 Thornridge Cir.. E5579076'}
                    </small>{' '}
                    {property.mls}
                  </span>
                </div>
                <div className='nav-right'>
                  <div
                    style={{
                      width: '35%',
                      paddingTop: '2.5%',
                      marginRight: '7%',
                    }}
                  >
                    <span
                      className='nav-right-icon-span'
                      style={{
                        position: 'relative',
                        display: 'inlineBlock',
                      }}
                    >
                      <NotificationsNoneIcon
                        style={{
                          color: '#0F1C35',
                          fontSize: '20px',
                        }}
                      />
                      <span
                        style={{
                          position: 'absolute',
                          top: '-10px',
                          right: '-1px',
                          display: 'inlineBlock',
                          width: '15px',
                          height: '15px',
                          backgroundColor: '#2E63F6',
                          color: '#fff',
                          fontSize: '10px',
                          fontWeight: '400',
                          textAlign: 'center',
                          borderRadius: '50%',
                        }}
                      >
                        <small>2</small>
                      </span>
                    </span>
                    <span className='nav-right-icon-span'>
                      <SearchIcon
                        style={{
                          color: '#0F1C35',
                          fontSize: '20px',
                        }}
                      />
                    </span>
                    <span className='nav-right-icon-span'>
                      <SettingsOutlinedIcon
                        style={{
                          color: '#0F1C35',
                          fontSize: '20px',
                        }}
                      />
                    </span>
                    <span className='nav-right-icon-span'>
                      <ArrowCircleRightOutlinedIcon
                        style={{
                          color: '#0F1C35',
                          fontSize: '20px',
                        }}
                      />
                    </span>
                  </div>

                  <div style={{ display: 'flex' }}>
                    <div
                      style={{
                        height: '40px',
                        width: '40px',
                        borderRadius: '25px',
                        marginTop: '1.5%',
                        border: '1px solid #F5F6FA',
                        padding: 0,
                        marginRight: '5%',
                      }}
                    >
                      <img
                        src={image1}
                        alt=''
                        style={{
                          height: '40px',
                          width: '40px',
                          borderRadius: '25px',
                        }}
                      />
                    </div>
                    <div>
                      <small
                        style={{
                          fontSize: '12px',
                          color: '#22222D',
                          fontWeight: '400',
                        }}
                      >
                        {userData.firstname ? userData.firstname : 'Berkay'}{' '}
                        {userData.lastname ? userData.lastname : 'Erdinc'}
                      </small>
                      <br />
                      <small
                        style={{
                          fontSize: '11px',
                          color: '#656B8A',
                          fontWeight: '100',
                        }}
                      >
                        {userData.email
                          ? userData.email
                          : 'hi@berkayerdinc.com'}
                      </small>
                    </div>

                    <KeyboardArrowDownOutlinedIcon
                      style={{
                        color: '#0F1C35',
                        fontSize: '20px',
                        marginLeft: '5%',
                        marginTop: '6%',
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className='middle-content'>
                <div
                  className='photo-div'
                  style={{ marginRight: '1%', position: 'relative' }}
                >
                  <img
                    src={image1}
                    alt='room'
                    style={{
                      height: '100%',
                      width: '100%',
                      borderRadius: '4px',
                    }}
                  />
                  <div
                    style={{
                      height: '40px',
                      width: '40px',
                      borderRadius: '5px',
                      border: '1px solid #fff',
                      backgroundColor: '#fff',
                      textAlign: 'center',
                      position: 'absolute',
                      top: '40%',
                      left: '3%',
                      paddingTop: '2%',
                    }}
                  >
                    {' '}
                    <ChevronLeftOutlinedIcon />
                  </div>
                </div>
                <div className='photo-div' style={{ marginRight: '1%' }}>
                  <img
                    src={image2}
                    alt='room'
                    style={{
                      height: '100%',
                      width: '100%',
                      borderRadius: '4px',
                    }}
                  />
                </div>
                <div className='photo-div'>
                  <img
                    src={image3}
                    alt='room'
                    style={{
                      height: '100%',
                      width: '100%',
                      borderRadius: '4px',
                    }}
                  />
                  <div
                    style={{
                      height: '40px',
                      width: '40px',
                      borderRadius: '5px',
                      border: '1px solid #fff',
                      backgroundColor: '#fff',
                      textAlign: 'center',
                      position: 'absolute',
                      top: '25%',
                      right: '3%',
                      paddingTop: '0.5%',
                    }}
                  >
                    {' '}
                    <ChevronRightOutlinedIcon />
                  </div>
                </div>
              </div>
              <div className='bottom-content'>
                <div className='botom-content-A'>
                  <div
                    style={{
                      margin: 'auto',
                      marginTop: '5%',
                      marginBottom: '5%',
                      width: '90%',
                    }}
                  >
                    <div className='botom-content-A-top'>
                      <div
                        style={{
                          color: '#5EB182',
                          backgroundColor: '#e2f1ea',
                          width: '120px',
                          height: '30px',
                          borderRadius: '4px',
                          textAlign: 'center',
                          fontSize: '14px',
                          fontWeight: '500',
                          paddingTop: '2%',
                          marginBottom: '3%',
                        }}
                      >
                        <small> For Sale </small>
                      </div>
                      <div
                        style={{
                          color: '#fff',
                          backgroundColor: '#2E63F6',
                          width: '60px',
                          height: '30px',
                          borderRadius: '4px',
                          textAlign: 'center',
                          fontSize: '12px',
                          marginLeft: '9%',
                          fontWeight: '200',
                          paddingTop: '3%',
                        }}
                      >
                        <small>Add List</small>
                      </div>
                    </div>
                    <div style={{ marginBottom: '6%' }}>
                      <span style={{ fontSize: '13px', fontWeight: '500' }}>
                        MLS#: {property.mls ? property.mls : 'E5579076'}
                      </span>
                      <br />
                      <span>
                        <small
                          style={{
                            color: '#555B67',
                            fontSize: '12px',
                            fontWeight: '100',
                          }}
                        >
                          Listed for:{' '}
                          <span
                            style={{
                              color: '#2E63F6',
                              fontSize: '12px',
                              fontWeight: '500',
                            }}
                          >
                            {property.price ? property.price : '$1,549,586'}
                          </span>
                        </small>
                      </span>
                      <br />
                      <span
                        style={{
                          fontSize: '15px',
                          fontWeight: '300',
                        }}
                      >
                        <small>
                          {property.address
                            ? property.address
                            : '2118 Thornridge Cir. Syracuse, Connecticut 35624'}
                        </small>
                      </span>
                    </div>
                    <div style={{ marginBottom: '6%' }}>
                      <div className='bottom-content-A-button'>
                        <MapOutlinedIcon
                          style={{
                            marginLeft: '2%',
                            marginRight: '3%',
                            fontSize: '15px',
                            fontWeight: '100',
                            marginTop: '5%',
                          }}
                        />
                        <small
                          style={{
                            color: '#555B67',
                            fontSize: '11px',
                            fontWeight: '400',
                          }}
                        >
                          View on Map
                        </small>{' '}
                      </div>
                      <div className='bottom-content-A-button'>
                        <DirectionsOutlinedIcon
                          style={{
                            marginLeft: '2%',
                            marginRight: '3%',
                            fontSize: '15px',
                            fontWeight: '100',
                            marginTop: '5%',
                          }}
                        />
                        <small
                          style={{
                            color: '#555B67',
                            fontSize: '11px',
                            fontWeight: '400',
                          }}
                        >
                          Get Directions
                        </small>{' '}
                      </div>
                      <div className='bottom-content-A-button'>
                        <ShareOutlinedIcon
                          style={{
                            marginLeft: '2%',
                            marginRight: '3%',
                            fontSize: '15px',
                            fontWeight: '100',
                            marginTop: '5%',
                          }}
                        />

                        <small
                          style={{
                            color: '#555B67',
                            fontSize: '11px',
                            fontWeight: '400',
                          }}
                        >
                          Share
                        </small>
                      </div>
                      <div className='bottom-content-A-button'>
                        <DateRangeOutlinedIcon
                          style={{
                            marginLeft: '2%',
                            marginRight: '3%',
                            fontSize: '15px',
                            fontWeight: '100',
                            marginTop: '5%',
                          }}
                        />

                        <small
                          style={{
                            color: '#555B67',
                            fontSize: '11px',
                            fontWeight: '400',
                          }}
                        >
                          My Notes
                        </small>
                      </div>
                    </div>
                    <div
                      style={{
                        border: '1px solid #F5F6FA',
                        backgroundColor: '#F5F6FA',
                        borderRadius: '4px',
                        paddingLeft: '5%',
                      }}
                    >
                      <div>
                        <small
                          style={{
                            color: '#555B67',
                            fontSize: '10px',
                            fontWeight: '100',
                          }}
                        >
                          Listing Agent
                        </small>
                        <br />
                        <div style={{ display: 'flex' }}>
                          <div style={{ width: '85%' }}>
                            <small
                              style={{
                                color: '#0F1C35',
                                fontSize: '11px',
                                fontWeight: '200',
                              }}
                            >
                              {userData.firstname
                                ? userData.firstname
                                : 'Courtney'}{' '}
                              {userData.lastname ? userData.lastname : 'Henry'}
                            </small>

                            <div
                              style={{
                                display: 'flex',
                                marginTop: '2%',
                              }}
                            >
                              <Brightness1RoundedIcon
                                style={{
                                  color: 'red',
                                  fontSize: '15px',
                                  marginRight: '3%',
                                }}
                              />

                              <small
                                style={{
                                  color: '#0F1C35',
                                  fontSize: '10px',
                                  fontWeight: '200',
                                }}
                              >
                                {userData.phone
                                  ? userData.phone
                                  : '+90 552 489 8277'}
                              </small>
                            </div>
                          </div>
                          <span>
                            <MailOutlineRoundedIcon
                              style={{
                                fontSize: '18px',
                                fontWeight: '100',
                                marginTop: '25px',
                              }}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='botom-content-B'>
                  <div className='botom-content-B-top'>
                    <div className='front-property-details'>
                      <small>Property Details</small>
                    </div>

                    <div className='property-details'>
                      <span
                        style={{
                          color: '#555B67',
                          fontSize: '10px',
                          fontWeight: '100',
                        }}
                      >
                        <MapsHomeWorkOutlinedIcon />
                      </span>
                      <br />
                      <small
                        style={{
                          color: '#555B67',
                          fontSize: '10px',
                          fontWeight: '100',
                        }}
                      >
                        Apartments
                      </small>
                    </div>
                    <div className='property-details'>
                      <span
                        style={{
                          color: '#555B67',
                          fontSize: '10px',
                          fontWeight: '100',
                        }}
                      >
                        <SingleBedOutlinedIcon />
                      </span>
                      <br />
                      <small
                        style={{
                          color: '#555B67',
                          fontSize: '10px',
                          fontWeight: '100',
                        }}
                      >
                        3 Bedrooms
                      </small>
                    </div>
                    <div className='property-details'>
                      <span
                        style={{
                          color: '#555B67',
                          fontSize: '10px',
                          fontWeight: '100',
                        }}
                      >
                        <BathtubOutlinedIcon />
                      </span>
                      <br />
                      <small
                        style={{
                          color: '#555B67',
                          fontSize: '10px',
                          fontWeight: '100',
                        }}
                      >
                        2 Bathrooms
                      </small>
                    </div>
                    <div className='property-details'>
                      <span
                        style={{
                          color: '#555B67',
                          fontSize: '10px',
                          fontWeight: '100',
                        }}
                      >
                        <GarageOutlinedIcon />
                      </span>
                      <br />
                      <small
                        style={{
                          color: '#555B67',
                          fontSize: '10px',
                          fontWeight: '100',
                        }}
                      >
                        2 Garage
                      </small>
                    </div>
                    <div className='property-details'>
                      <span
                        style={{
                          color: '#555B67',
                          fontSize: '10px',
                          fontWeight: '100',
                        }}
                      >
                        <HomeOutlinedIcon />
                      </span>
                      <br />
                      <small
                        style={{
                          color: '#555B67',
                          fontSize: '10px',
                          fontWeight: '100',
                        }}
                      >
                        1,963 sq. ft.
                      </small>
                    </div>
                    <div className='property-details'>
                      <span
                        style={{
                          color: '#555B67',
                          fontSize: '10px',
                          fontWeight: '100',
                        }}
                      >
                        <Crop54OutlinedIcon />
                      </span>
                      <br />
                      <small
                        style={{
                          color: '#555B67',
                          fontSize: '10px',
                          fontWeight: '100',
                        }}
                      >
                        1,176 sq. ft.
                      </small>
                    </div>
                  </div>
                  <div className='botom-content-B-middle'>
                    <div
                      style={{
                        width: '34%',
                        fontSize: '14px',
                        textAlign: 'center',
                        fontWeight: '400',
                        paddingTop: '4%',
                        borderBottom: '2px solid #2E63F6',
                      }}
                    >
                      <small>Key Facts</small>
                    </div>
                    <div
                      style={{
                        width: '33%',
                        fontSize: '14px',
                        textAlign: 'center',
                        fontWeight: '400',
                        paddingTop: '4%',
                      }}
                    >
                      <small>Details</small>
                    </div>
                    <div
                      style={{
                        width: '33%',
                        fontSize: '14px',
                        textAlign: 'center',
                        fontWeight: '400',
                        paddingTop: '4%',
                      }}
                    >
                      <small>Rooms</small>
                    </div>
                  </div>
                  <div className='botom-content-B-bottom'>
                    <div className='inner-botom-content-B-bottom'>
                      <div>
                        <p
                          style={{
                            fontSize: '12px',
                            fontWeight: '100',
                            lineLength: '2px',
                          }}
                        >
                          {property.description
                            ? property.description
                            : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo risus a mattis semper. Integer placerat volutpat odio, at pulvinar tortor laoreet mattis. Proin aliquet semper tempus.'}
                        </p>
                      </div>
                      <div style={{ marginTop: '3%', marginBottom: '4%' }}>
                        <div className='inner-botom-content-B-bottom-content-div'>
                          <div className='content-div-A'>
                            <small>Tax</small>
                          </div>
                          <div className='content-div-B'>
                            <small>
                              {property.tax ? property.tax : '$1,340 / 2022'}
                            </small>
                          </div>
                        </div>
                        <div className='inner-botom-content-B-bottom-content-div'>
                          <div className='content-div-A'>
                            <small>Type</small>
                          </div>
                          <div className='content-div-B'>
                            <small>
                              {property.type ? property.type : 'Single-Family'}
                            </small>
                          </div>
                        </div>
                        <div className='inner-botom-content-B-bottom-content-div'>
                          <div className='content-div-A'>
                            <small>Building Age</small>
                          </div>
                          <div className='content-div-B'>
                            <small>
                              {property.building_age
                                ? property.building_age
                                : '5 Year'}
                            </small>
                          </div>
                        </div>
                        <div className='inner-botom-content-B-bottom-content-div'>
                          <div className='content-div-A'>
                            <small>Size</small>
                          </div>
                          <div className='content-div-B'>
                            <small>
                              {property.size
                                ? property.size
                                : '1500 - 2000 feet2'}
                            </small>
                          </div>
                        </div>
                        <div className='inner-botom-content-B-bottom-content-div'>
                          <div className='content-div-A'>
                            <small>Parking</small>
                          </div>
                          <div className='content-div-B'>
                            <small>
                              {property.parking
                                ? property.parking
                                : 'Detached 2 Garage, 6 Parking'}
                            </small>
                          </div>
                        </div>
                        <div className='inner-botom-content-B-bottom-content-div'>
                          <div className='content-div-A'>
                            <small>Basement</small>
                          </div>
                          <div className='content-div-B'>
                            <small>
                              {property.basement
                                ? property.basement
                                : 'Unfinished'}
                            </small>
                          </div>
                        </div>
                        <div className='inner-botom-content-B-bottom-content-div'>
                          <div className='content-div-A'>
                            <small>MLS#</small>
                          </div>
                          <div className='content-div-B'>
                            <small>
                              {property.mls ? property.mls : 'E5579076'}
                            </small>
                          </div>
                        </div>
                        <div className='inner-botom-content-B-bottom-content-div'>
                          <div className='content-div-A'>
                            <small>Possesion</small>
                          </div>
                          <div className='content-div-B'>
                            <small>
                              {property.possesion
                                ? property.possesion
                                : '5 Day'}
                            </small>
                          </div>
                        </div>
                      </div>
                      <div style={{ marginBottom: '2%' }}>
                        <p style={{ fontWeight: '400', fontSize: '13px' }}>
                          Description
                        </p>
                        <small
                          style={{
                            color: '#555B67',
                            fontSize: '10px',
                            fontWeight: '200',
                          }}
                        >
                          {property.description
                            ? property.description
                            : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo risus a mattis semper. Integer placerat volutpat odio, at pulvinar tortor laoreet mattis. Proin aliquet semper tempus. Etiam auctor lacus leo'}{' '}
                          <Link to='/' style={{ color: '#2E63F6' }}>
                            read more..
                          </Link>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='botom-content-C'>
                  <div className='botom-content-C-inner-div'>
                    <div
                      style={{
                        display: 'flex',
                        height: '50px',
                      }}
                    >
                      <span
                        style={{
                          color: '#0F1C35',
                          fontSize: '14px',
                          fontWeight: '400',
                          marginTop: '7%',
                          marginRight: '41%',
                        }}
                      >
                        Shortcuts
                      </span>
                      <div
                        style={{
                          backgroundColor: '#F3F5F9',
                          width: '30px',
                          height: '30px',
                          marginTop: '2%',

                          borderRadius: '5px',
                        }}
                      >
                        <div
                          style={{
                            marginTop: '7%',
                            textAlign: 'center',
                            width: '30px',
                            height: '30px',
                            fontWeight: '100',
                          }}
                        >
                          <DashboardOutlinedIcon />
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        height: '40px',
                        marginBottom: '3%',
                        borderRadius: '4px',
                        paddingLeft: '5%',
                        backgroundColor: '#F5F6FA',
                        border: '1px solid #F5F6FA',
                      }}
                    >
                      <small
                        style={{
                          color: '#0F1C35',
                          fontSize: '10px',
                          fontWeight: '400',
                          marginTop: '8%',
                          marginRight: '3%',
                        }}
                      >
                        Notify similar properties
                      </small>

                      <ToggleOffOutlinedIcon
                        style={{
                          marginTop: '6%',
                          color: '#555B67',
                        }}
                      />
                    </div>
                    <div
                      style={{
                        height: '40px',
                        marginBottom: '3%',
                        borderRadius: '4px',
                        color: '#fff',
                        paddingLeft: '5%',
                        backgroundColor: '#2E63F6',
                        border: '1px solid #2E63F6',
                      }}
                    >
                      <KeyOutlinedIcon
                        style={{
                          fontSize: '12px',
                          fontWeight: '100',
                          marginRight: '5%',
                          marginTop: '8%',
                        }}
                      />

                      <small
                        style={{
                          fontSize: '10px',
                          fontWeight: '400',
                          marginTop: '8%',
                        }}
                      >
                        Key Facts
                      </small>
                    </div>
                    <div
                      style={{
                        height: '40px',
                        marginBottom: '3%',
                        borderRadius: '4px',
                        paddingLeft: '5%',
                        backgroundColor: '#fff',
                        border: '1px solid #e5e7eb',
                      }}
                    >
                      <UpdateOutlinedIcon
                        style={{
                          color: '#0F1C35',
                          fontSize: '12px',
                          fontWeight: '100',
                          marginRight: '5%',
                          marginTop: '8%',
                        }}
                      />

                      <small
                        style={{
                          fontSize: '10px',
                          fontWeight: '400',
                          marginTop: '8%',
                          color: '#555B67',
                        }}
                      >
                        Property History
                      </small>
                    </div>
                    <div
                      style={{
                        height: '40px',
                        marginBottom: '3%',
                        borderRadius: '4px',
                        paddingLeft: '5%',
                        backgroundColor: '#fff',
                        border: '1px solid #e5e7eb',
                      }}
                    >
                      <RotateLeftOutlinedIcon
                        style={{
                          color: '#0F1C35',
                          fontSize: '12px',
                          fontWeight: '100',
                          marginRight: '5%',
                          marginTop: '8%',
                        }}
                      />

                      <small
                        style={{
                          fontSize: '10px',
                          fontWeight: '400',
                          marginTop: '8%',
                          color: '#555B67',
                        }}
                      >
                        Demographics
                      </small>
                    </div>
                    <div
                      style={{
                        height: '40px',
                        marginBottom: '3%',
                        borderRadius: '4px',
                        paddingLeft: '5%',
                        backgroundColor: '#fff',
                        border: '1px solid #e5e7eb',
                      }}
                    >
                      <ModeOfTravelOutlinedIcon
                        style={{
                          color: '#0F1C35',
                          fontSize: '12px',
                          fontWeight: '100',
                          marginRight: '5%',
                          marginTop: '8%',
                        }}
                      />

                      <small
                        style={{
                          fontSize: '10px',
                          fontWeight: '400',
                          marginTop: '8%',
                          color: '#555B67',
                        }}
                      >
                        Points of interest
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </Container>
  );
};

export default Landingpage;
