//-- Get Autho From User --//


function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    console.log('Calling userIdToPhotos');

    userIdToPhotos(response.authResponse.userID);
    console.log('Finished calling userIdToPhotos');
 
  } else if (response.status === 'not_authorized') {
    // The person is logged into Facebook, but not your app.
    console.log('User did not authorize your app');
  } else {
    // The person is not logged into Facebook, so we're not sure if
    // they are logged into this app or not.

    console.log('We have no idea whats going on...');
  }
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}
  
window.fbAsyncInit = function() {
  FB.init({
    appId      : '954952301299869',
    xfbml      : true,
    version    : 'v2.7',
    status     : true
  });
  
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
 
 //-- Get All User Photos --//
 function userIdToPhotos(userIdentification){

    FB.api('/' + userIdentification + '/' + 'photos?type=uploaded', 
      function( response ) {
          if (response && !response.error){

              console.log(response);
          }
      });
}

