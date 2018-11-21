import firebase from 'firebase/app';
import 'bootstrap';
import $ from 'jquery';

import apiKeys from '../db/apiKeys.json';

import createNavbar from './components/Navbar/navbar';
import loginButton from './components/Auth/auth';
import authHelpers from './helpers/authHelpers';
import initializeFriendPage from './components/FriendsPage/friendsPage';
import showAddForm from './components/AddEditFriends/addEditFriends';

import './index.scss';

const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  createNavbar.createNavbar();
  authHelpers.checkLoginStatus(initializeFriendPage);
  loginButton.loginButton();
  $('#show-friend-form').on('click', showAddForm.buildAddForm);
};

initializeApp();
