import { Injectable } from '@angular/core';

@Injectable()
export class ConnectionConfigService {
  //serverUrl = '//localhost:9090/api/'; // HTTP

  // The HTTP gets automatically transformed to HTTPS in the "EnsureHTTPSInterceptor", if we enable it to do it in "_interceptors/index.ts"
  //serverUrl = 'https//localhost:8443/api/'; // HTTPS
  serverUrl = '//localhost:8443/api/'; // HTTPS <-- try this with base URL to be in HTTPS

  signInEndpoint  = this.serverUrl + 'signin';

  usersEndpoint = this.serverUrl + 'users';

  generalFilesEndpoint = this.serverUrl + 'uploads';
  //userFilesEndpoint = this.serverUrl + this.generalFilesEndpoint + '/' + this.usersEndpoint;

  relationshipEndpoint = this.serverUrl + 'relationships';

  conversationsEndpoint = this.serverUrl + 'conversations';
  messagesEndpoint = 'messages';

  usersSearchEndpoint = this.usersEndpoint + '/searchUser';
  usersXMLdataEndpoint = this.usersEndpoint + '/getXMLdata';

  // These are just "endings", as between them and the "serverUrl" will be the userId.
  occupationEndpoint = 'occupation';
  experienceEndpoint = 'experience';
  educationEndpoint = 'education';
  skillEndpoint = 'skills';
  networkEndpoint = 'network';
  homeEndpoint = 'home';
  postsEndpoint = 'posts';
  likesEndpoint = 'likes';
  commentsEndpoint = 'comments';
  notificationsEndpoint = 'notifications'

  jobOffersTimelineEndpoint = 'networkJobOffers';
  jobOffersEndpoint = 'jobOffers';
  jobAppliesEndpoint = 'jobApplies';
}
