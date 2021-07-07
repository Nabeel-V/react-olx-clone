import React, {useContext, useState} from 'react';
import {useHistory} from 'react-router-dom'
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import Chat from '../../assets/Chat';
import Notification from '../../assets/Notification';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../Store/Context';

function Header() {
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  const [userOpen, setUserOpen]= useState(false)
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="chat">
          <Chat></Chat>
        </div>
        <div className="notification">
          <Notification></Notification>
        </div>{user ?(
        <div className="profilesection" onClick={() => setUserOpen(!userOpen)}>
          <img src="../../../Images/avatar_4.png" alt="" />
          <Arrow></Arrow>
        </div>):(
                      <div className="direct" onClick={()=>{history.push('/login')}}>Login</div>
                    )}
        {userOpen && (
          <div className="userSection">
            <div className="userSection-r1">
              <img src="../../../Images/avatar_4.png" alt="" />
              <span>
                <div className="welcome">
                  <span>Hello</span>
                </div>
                <div className="userName">
                  <span>
                    {user && (
                      `${user.displayName}`
                    )}
                  </span>
                </div>
                <div className="view-edit">
                  <span>View and edit profile</span>
                </div>
              </span>
            </div>
            <div className="userSection-r2">
              <div className="userOptions" href="/myads">
                <div className="userOption-icon">
                  <svg
                    width="23px"
                    height="23px"
                    viewBox="0 0 1024 1024"
                    data-aut-id="icon"
                    fill-rule="evenodd"
                  >
                    <path
                      className="icon-fill"
                      d="M349.46 85.333h487.619l40.635 40.635v609.524l-40.635 40.635h-487.619l-40.635-40.635v-609.524l40.635-40.635zM390.095 694.857h406.35v-528.254h-406.35v528.254zM146.286 247.873l40.635-40.635 40.635 40.635v609.524h528.254l40.635 40.635-40.635 40.635h-568.889l-40.635-40.635v-650.159zM512 329.143h162.54l40.635 40.635-40.635 40.635h-162.54l-40.635-40.635 40.635-40.635zM512 491.683h81.27l40.635 40.635-40.635 40.635h-81.27l-40.635-40.635 40.635-40.635z"
                    ></path>
                  </svg>
                </div>
                <span onClick={()=>{history.push('/myads')}}>My Ads</span>
              </div>
              <div
                className="userOptions"
              >
                <div className="userOption-icon">
                  <svg
                    width="23px"
                    height="23px"
                    viewBox="0 0 1024 1024"
                    data-aut-id="icon"
                    fill-rule="evenodd"
                  >
                    <path
                      className="icon-fill"
                      d="M426.667 42.667h170.667l42.667 42.667-42.667 42.667h256l42.667 42.667v768l-42.667 42.667h-682.667l-42.667-42.667v-768l42.667-42.667h256l-42.667-42.667 42.667-42.667zM213.333 896h597.333v-682.667h-597.333v682.667zM469.333 426.667v-85.333h256v85.333h-256zM298.667 426.667v-85.333h85.333v85.333h-85.333zM469.333 597.333v-85.333h256v85.333h-256zM298.667 597.333v-85.333h85.333v85.333h-85.333zM469.333 768v-85.333h256v85.333h-256zM298.667 768v-85.333h85.333v85.333h-85.333z"
                    ></path>
                  </svg>
                </div>
                <span>Buy Business Packages</span>
              </div>
              <div
                className="userOptions"
                
              >
                <div className="userOption-icon">
                  <svg
                    width="23px"
                    height="23px"
                    viewBox="0 0 1024 1024"
                    data-aut-id="icon"
                    fill-rule="evenodd"
                  >
                    <path
                      className="icon-fill"
                      d="M899.285 256l39.381 39.083v476.501l-39.381 39.083h-774.571l-39.381-39.083v-476.501l39.381-39.083h774.571zM853.461 511.573h-681.6v213.632h681.6v-213.632zM693.205 618.411h76.459l34.901 32.213-34.901 32.213h-128.896l-34.901-32.213 34.901-32.213h52.437zM853.461 341.248h-681.387v86.357l681.387-2.347v-84.053z"
                    ></path>
                  </svg>
                </div>
                <span>Bought Packages &amp; Billing</span>
              </div>
              <div className="userOptions">
                <div className="userOption-icon">
                  <svg
                    width="23px"
                    height="23px"
                    viewBox="0 0 1024 1024"
                    data-aut-id="icon"
                    fill-rule="evenodd"
                  >
                    <path
                      className="icon-fill"
                      d="M550.789 744.728c0 21.41-17.377 38.789-38.789 38.789s-38.789-17.377-38.789-38.789 17.377-38.789 38.789-38.789 38.789 17.377 38.789 38.789zM686.546 415.030c0 82.89-58.105 152.513-135.757 170.201v43.131l-38.789 38.789-38.789-38.789v-77.575l38.789-38.789c53.489 0 96.97-43.481 96.97-96.97s-43.481-96.97-96.97-96.97-96.97 43.481-96.97 96.97l-38.789 38.789-38.789-38.789c0-96.232 78.312-174.546 174.546-174.546s174.546 78.312 174.546 174.546zM512 861.090c-192.505 0-349.090-156.626-349.090-349.090 0-192.505 156.587-349.090 349.090-349.090 192.466 0 349.090 156.587 349.090 349.090 0 192.466-156.626 349.090-349.090 349.090zM512 85.333c-235.288 0-426.667 191.379-426.667 426.667s191.379 426.667 426.667 426.667 426.667-191.379 426.667-426.667-191.379-426.667-426.667-426.667z"
                    ></path>
                  </svg>
                </div>
                <span>Help</span>
              </div>
              <div
                className="userOptions"
                
              >
                <div className="userOption-icon">
                  <svg
                    width="23px"
                    height="23px"
                    viewBox="0 0 1024 1024"
                    data-aut-id="icon"
                    fill-rule="evenodd"
                  >
                    <path
                      className="icon-fill"
                      d="M341.333 640c55.595 0 102.912 35.712 120.533 85.333v0h434.133l42.667 42.667-42.667 42.667h-434.133c-17.621 49.621-64.939 85.333-120.533 85.333s-102.912-35.712-120.533-85.333v0h-92.8l-42.667-42.667 42.667-42.667h92.8c17.621-49.621 64.939-85.333 120.533-85.333zM341.333 725.333c-23.531 0-42.667 19.136-42.667 42.667s19.136 42.667 42.667 42.667c23.531 0 42.667-19.136 42.667-42.667s-19.136-42.667-42.667-42.667zM682.667 384c55.595 0 102.912 35.712 120.533 85.333v0h92.8l42.667 42.667-42.667 42.667h-92.8c-17.621 49.621-64.939 85.333-120.533 85.333s-102.912-35.712-120.533-85.333v0h-434.133l-42.667-42.667 42.667-42.667h434.133c17.621-49.621 64.939-85.333 120.533-85.333zM682.667 469.333c-23.531 0-42.667 19.136-42.667 42.667s19.136 42.667 42.667 42.667c23.531 0 42.667-19.136 42.667-42.667s-19.136-42.667-42.667-42.667zM341.333 128c55.595 0 102.912 35.712 120.533 85.333v0h434.133l42.667 42.667-42.667 42.667h-434.133c-17.621 49.621-64.939 85.333-120.533 85.333s-102.912-35.712-120.533-85.333v0h-92.8l-42.667-42.667 42.667-42.667h92.8c17.621-49.621 64.939-85.333 120.533-85.333zM341.333 213.333c-23.531 0-42.667 19.136-42.667 42.667s19.136 42.667 42.667 42.667c23.531 0 42.667-19.136 42.667-42.667s-19.136-42.667-42.667-42.667z"
                    ></path>
                  </svg>
                </div>
                <span>Settings</span>
              </div>
              <div
                className="userOptions"
                
              >
                <div className="userOption-icon userOptions">
                  <svg
                    width="23px"
                    height="23px"
                    viewBox="0 0 1024 1024"
                    data-aut-id="icon"
                    fill-rule="evenodd"
                  >
                    <path
                      className="icon-fill"
                      d="M891.008 822.315l47.659 48.853-47.701 48.085h-757.931l-47.701-48.853 47.787-48.043h757.888zM493.525 85.333l46.507 46.592 0.213 475.179 178.475-189.483 62.976 0.299-0.256 58.752 2.091 4.267-290.005 302.592-291.84-304.512 4.011-4.139 0.256-57.472 62.507 0.213 178.475 189.483 0.171-475.179 46.421-46.592z"
                    ></path>
                  </svg>
                </div>
                <span>Install OLX Lite app</span>
              </div>
              <span className="userOptions" >
                <div className="userOption-icon">
                  <svg
                    width="23px"
                    height="23px"
                    viewBox="0 0 1024 1024"
                    data-aut-id="icon"
                    fill-rule="evenodd"
                  >
                    <path
                      className="icon-fill"
                      d="M128 85.333l-42.667 42.667v768l42.667 42.667h768l42.667-42.667v-213.333l-42.667-42.667-42.667 42.667v170.667h-682.667v-682.667h682.667v170.667l42.667 42.667 42.667-42.667v-213.333l-42.667-42.667h-768zM494.336 298.667l-183.168 183.168v60.331l183.168 183.168h60.331v-60.331l-110.336-110.336h323.669l42.667-42.667-42.667-42.667h-323.669l110.336-110.336v-60.331h-60.331z"
                    ></path>
                  </svg>
                </div>
                {user && (
                  <span
                    onClick={() => {
                      firebase
                        .auth()
                        .signOut()
                        .then(() => {
                          history.push("/login");
                        });
                    }}
                  >
                    Logout
                  </span>
                )}
              </span>
            </div>
          </div>
        )}

        <div className="sellMenu" onClick={()=>{history.push('/create')}}>
          
            <SellButton></SellButton>
            <div className="sellMenuContent">
              <SellButtonPlus></SellButtonPlus>
              <span>SELL</span>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default Header;
