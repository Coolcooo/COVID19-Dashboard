// Footer
const generateFooter = () => {
  let template = '';
  const footer = document.querySelector('.footer__wrapper');
  template += '<div class="footer__developers">';
  template += '<div class="developer developer__1st">Andrew Murashko';
  template += '<div class="developer__links">';
  template += `<a class="ico GitHub-ico developer__1st_GitHub" href="https://rs.school/js/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" enable-background="new 0 0 50 50">
    <path d="M25,1C11.8,1,1,11.8,1,25c0,10.2,6.4,18.9,15.3,22.4c0.9-0.2,1.7-1,1.7-2V41h-2.6c-1.9,0-3.5-0.9-4.3-2.3 c-0.2-0.4-0.4-0.9-0.6-1.4c-0.4-1.1-0.9-2.3-1.9-3C8.2,34,8,33.4,8.1,32.9c0.2-0.5,0.7-0.9,1.6-0.8c1,0.1,2.5,1.2,3.4,2.4 c0.8,1,1.4,1.6,2.6,1.6h0.3c0.9,0,3.1,0,3.5-0.4l0,0c0.3-0.4,0.5-0.7,0.8-1c-6-1.2-9.4-4.7-9.4-10c0-1.8,0.5-3.6,1.6-5.2 c-0.4-1.5-1.3-5.4,0.6-7.1l0.3-0.3h0.4c2.6,0,4.5,1.1,5.7,2c3.5-1.3,7.5-1.3,11,0c1.1-0.9,3-2,5.7-2h0.4l0.3,0.3 c1.9,1.8,1,5.6,0.6,7.1c1,1.6,1.6,3.4,1.6,5.2c0,5.3-3.4,8.8-9.3,10c1.5,1.6,2.3,4,2.3,5.9v4.9c0,1,0.7,1.8,1.7,2 C42.6,43.9,49,35.2,49,25C49,11.8,38.2,1,25,1z"/></svg></a>`;
  template += `<a class="ico telegram-ico developer__1st_telegram" href="https://t.me/AndrewMurashko"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" d="M 26.070312 3.9960938 C 25.732466 4.0107344 25.416138 4.1080163 25.134766 4.21875 L 25.132812 4.21875 C 24.84842 4.3311303 23.49044 4.9031118 21.433594 5.7675781 C 19.376747 6.6320444 16.702977 7.7568723 14.052734 8.8730469 C 8.7522493 11.105396 3.5449219 13.300781 3.5449219 13.300781 L 3.609375 13.277344 C 3.609375 13.277344 3.2489735 13.392984 2.8730469 13.650391 C 2.6850836 13.779094 2.4740306 13.948164 2.2890625 14.21875 C 2.1040944 14.489336 1.957942 14.901882 2.0117188 15.330078 C 2.1021968 16.050506 2.5704774 16.485697 2.9082031 16.724609 C 3.2459289 16.963522 3.5722656 17.076172 3.5722656 17.076172 L 3.5800781 17.080078 L 8.4628906 18.722656 C 8.677807 19.427337 9.9494832 23.596654 10.253906 24.558594 C 10.435545 25.132614 10.608999 25.490676 10.826172 25.767578 C 10.934902 25.906212 11.059175 26.024986 11.207031 26.117188 C 11.264451 26.152987 11.327916 26.179618 11.390625 26.205078 C 11.411385 26.213938 11.43059 26.216824 11.451172 26.224609 L 11.402344 26.210938 C 11.416394 26.216438 11.429169 26.225559 11.443359 26.230469 C 11.481362 26.243614 11.508277 26.245999 11.556641 26.255859 C 12.333094 26.487217 12.953125 26.007812 12.953125 26.007812 L 12.988281 25.980469 L 15.869141 23.355469 L 20.703125 27.0625 L 20.814453 27.111328 C 21.818462 27.549379 22.838391 27.302986 23.380859 26.869141 C 23.923326 26.435299 24.132813 25.875 24.132812 25.875 L 24.167969 25.787109 L 27.902344 6.6582031 C 28.008466 6.1835344 28.033707 5.7427558 27.917969 5.3125 C 27.802231 4.8822442 27.501123 4.4786116 27.134766 4.2636719 C 26.768408 4.0487322 26.40816 3.9814529 26.070312 3.9960938 z M 25.966797 6.0449219 C 25.964097 6.1092329 25.975999 6.102796 25.949219 6.2226562 L 25.947266 6.234375 L 22.251953 25.164062 C 22.236153 25.190932 22.205164 25.248772 22.132812 25.306641 C 22.053722 25.369891 21.993292 25.408607 21.666016 25.28125 L 15.757812 20.75 L 12.185547 24.005859 L 12.939453 19.214844 C 12.939453 19.214844 22.19575 10.586844 22.59375 10.214844 C 22.99175 9.8438437 22.859375 9.7636719 22.859375 9.7636719 C 22.886375 9.3126719 22.257812 9.6347656 22.257812 9.6347656 L 10.082031 17.175781 L 10.076172 17.15625 L 4.2421875 15.191406 L 4.2402344 15.189453 C 4.2400959 15.189398 4.2293136 15.183994 4.2285156 15.183594 C 4.2316356 15.182294 4.2558594 15.169922 4.2558594 15.169922 L 4.2890625 15.158203 L 4.3222656 15.144531 C 4.3222656 15.144531 9.5300637 12.948948 14.830078 10.716797 C 17.480085 9.6007214 20.153018 8.4754243 22.208984 7.6113281 C 24.263626 6.7477885 25.782827 6.1134525 25.867188 6.0800781 C 25.950228 6.0473981 25.911497 6.0485569 25.966797 6.0449219 z" font-weight="400" font-family="sans-serif" white-space="normal" overflow="visible"/>
</svg></a>`;
  template += `<a class="ico email-ico developer__1st_email" href="mailto:murashko.kbtem@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
        <path d="M 3 4 C 1.344 4 0 5.344 0 7 L 0 19 C 0 20.656 1.344 22 3 22 L 23 22 C 24.656 22 26 20.656 26 19 L 26 7 C 26 5.344 24.656 4 23 4 L 3 4 z M 3 6 L 23 6 C 23.551 6 24 6.449 24 7 L 24 7.5 L 13 13.4375 L 2 7.5 L 2 7 C 2 6.449 2.449 6 3 6 z M 2 7.78125 L 8.53125 12.875 L 2.125 19.4375 L 9.9375 13.875 L 13 15.84375 L 16.0625 13.875 L 23.875 19.4375 L 17.46875 12.875 L 24 7.78125 L 24 19 C 24 19.162317 23.944058 19.301757 23.875 19.4375 C 23.709633 19.762549 23.388683 20 23 20 L 3 20 C 2.6113169 20 2.2903669 19.762549 2.125 19.4375 C 2.0559416 19.301757 2 19.162317 2 19 L 2 7.78125 z"/>
    </svg></a>`;
  template += '</div>';
  template += '</div>';
  template += '<div class="developer developer__2nd">Denis qwerty';
  template += '<div class="developer__links">';
  template += `<a class="ico GitHub-ico developer__2nd_GitHub" href="https://rs.school/js/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" enable-background="new 0 0 50 50">
    <path d="M25,1C11.8,1,1,11.8,1,25c0,10.2,6.4,18.9,15.3,22.4c0.9-0.2,1.7-1,1.7-2V41h-2.6c-1.9,0-3.5-0.9-4.3-2.3 c-0.2-0.4-0.4-0.9-0.6-1.4c-0.4-1.1-0.9-2.3-1.9-3C8.2,34,8,33.4,8.1,32.9c0.2-0.5,0.7-0.9,1.6-0.8c1,0.1,2.5,1.2,3.4,2.4 c0.8,1,1.4,1.6,2.6,1.6h0.3c0.9,0,3.1,0,3.5-0.4l0,0c0.3-0.4,0.5-0.7,0.8-1c-6-1.2-9.4-4.7-9.4-10c0-1.8,0.5-3.6,1.6-5.2 c-0.4-1.5-1.3-5.4,0.6-7.1l0.3-0.3h0.4c2.6,0,4.5,1.1,5.7,2c3.5-1.3,7.5-1.3,11,0c1.1-0.9,3-2,5.7-2h0.4l0.3,0.3 c1.9,1.8,1,5.6,0.6,7.1c1,1.6,1.6,3.4,1.6,5.2c0,5.3-3.4,8.8-9.3,10c1.5,1.6,2.3,4,2.3,5.9v4.9c0,1,0.7,1.8,1.7,2 C42.6,43.9,49,35.2,49,25C49,11.8,38.2,1,25,1z"/>
</svg></a>`;
  template += `<a class="ico telegram-ico developer__2nd_telegram" href="https://rs.school/js/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" d="M 26.070312 3.9960938 C 25.732466 4.0107344 25.416138 4.1080163 25.134766 4.21875 L 25.132812 4.21875 C 24.84842 4.3311303 23.49044 4.9031118 21.433594 5.7675781 C 19.376747 6.6320444 16.702977 7.7568723 14.052734 8.8730469 C 8.7522493 11.105396 3.5449219 13.300781 3.5449219 13.300781 L 3.609375 13.277344 C 3.609375 13.277344 3.2489735 13.392984 2.8730469 13.650391 C 2.6850836 13.779094 2.4740306 13.948164 2.2890625 14.21875 C 2.1040944 14.489336 1.957942 14.901882 2.0117188 15.330078 C 2.1021968 16.050506 2.5704774 16.485697 2.9082031 16.724609 C 3.2459289 16.963522 3.5722656 17.076172 3.5722656 17.076172 L 3.5800781 17.080078 L 8.4628906 18.722656 C 8.677807 19.427337 9.9494832 23.596654 10.253906 24.558594 C 10.435545 25.132614 10.608999 25.490676 10.826172 25.767578 C 10.934902 25.906212 11.059175 26.024986 11.207031 26.117188 C 11.264451 26.152987 11.327916 26.179618 11.390625 26.205078 C 11.411385 26.213938 11.43059 26.216824 11.451172 26.224609 L 11.402344 26.210938 C 11.416394 26.216438 11.429169 26.225559 11.443359 26.230469 C 11.481362 26.243614 11.508277 26.245999 11.556641 26.255859 C 12.333094 26.487217 12.953125 26.007812 12.953125 26.007812 L 12.988281 25.980469 L 15.869141 23.355469 L 20.703125 27.0625 L 20.814453 27.111328 C 21.818462 27.549379 22.838391 27.302986 23.380859 26.869141 C 23.923326 26.435299 24.132813 25.875 24.132812 25.875 L 24.167969 25.787109 L 27.902344 6.6582031 C 28.008466 6.1835344 28.033707 5.7427558 27.917969 5.3125 C 27.802231 4.8822442 27.501123 4.4786116 27.134766 4.2636719 C 26.768408 4.0487322 26.40816 3.9814529 26.070312 3.9960938 z M 25.966797 6.0449219 C 25.964097 6.1092329 25.975999 6.102796 25.949219 6.2226562 L 25.947266 6.234375 L 22.251953 25.164062 C 22.236153 25.190932 22.205164 25.248772 22.132812 25.306641 C 22.053722 25.369891 21.993292 25.408607 21.666016 25.28125 L 15.757812 20.75 L 12.185547 24.005859 L 12.939453 19.214844 C 12.939453 19.214844 22.19575 10.586844 22.59375 10.214844 C 22.99175 9.8438437 22.859375 9.7636719 22.859375 9.7636719 C 22.886375 9.3126719 22.257812 9.6347656 22.257812 9.6347656 L 10.082031 17.175781 L 10.076172 17.15625 L 4.2421875 15.191406 L 4.2402344 15.189453 C 4.2400959 15.189398 4.2293136 15.183994 4.2285156 15.183594 C 4.2316356 15.182294 4.2558594 15.169922 4.2558594 15.169922 L 4.2890625 15.158203 L 4.3222656 15.144531 C 4.3222656 15.144531 9.5300637 12.948948 14.830078 10.716797 C 17.480085 9.6007214 20.153018 8.4754243 22.208984 7.6113281 C 24.263626 6.7477885 25.782827 6.1134525 25.867188 6.0800781 C 25.950228 6.0473981 25.911497 6.0485569 25.966797 6.0449219 z" font-weight="400" font-family="sans-serif" white-space="normal" overflow="visible"/>
</svg></a>`;
  template += `<a class="ico email-ico developer__2nd_email" href="mailto:murashko.kbtem@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
        <path d="M 3 4 C 1.344 4 0 5.344 0 7 L 0 19 C 0 20.656 1.344 22 3 22 L 23 22 C 24.656 22 26 20.656 26 19 L 26 7 C 26 5.344 24.656 4 23 4 L 3 4 z M 3 6 L 23 6 C 23.551 6 24 6.449 24 7 L 24 7.5 L 13 13.4375 L 2 7.5 L 2 7 C 2 6.449 2.449 6 3 6 z M 2 7.78125 L 8.53125 12.875 L 2.125 19.4375 L 9.9375 13.875 L 13 15.84375 L 16.0625 13.875 L 23.875 19.4375 L 17.46875 12.875 L 24 7.78125 L 24 19 C 24 19.162317 23.944058 19.301757 23.875 19.4375 C 23.709633 19.762549 23.388683 20 23 20 L 3 20 C 2.6113169 20 2.2903669 19.762549 2.125 19.4375 C 2.0559416 19.301757 2 19.162317 2 19 L 2 7.78125 z"/>
    </svg></a>`;
  template += '</div>';
  template += '</div>';
  template += '<div class="developer developer__3d">Vladimir Privezenov';
  template += '<div class="developer__links">';
  template += `<a class="ico GitHub-ico developer__3d_GitHub" href="https://github.com/Coolcooo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" enable-background="new 0 0 50 50">
    <path d="M25,1C11.8,1,1,11.8,1,25c0,10.2,6.4,18.9,15.3,22.4c0.9-0.2,1.7-1,1.7-2V41h-2.6c-1.9,0-3.5-0.9-4.3-2.3 c-0.2-0.4-0.4-0.9-0.6-1.4c-0.4-1.1-0.9-2.3-1.9-3C8.2,34,8,33.4,8.1,32.9c0.2-0.5,0.7-0.9,1.6-0.8c1,0.1,2.5,1.2,3.4,2.4 c0.8,1,1.4,1.6,2.6,1.6h0.3c0.9,0,3.1,0,3.5-0.4l0,0c0.3-0.4,0.5-0.7,0.8-1c-6-1.2-9.4-4.7-9.4-10c0-1.8,0.5-3.6,1.6-5.2 c-0.4-1.5-1.3-5.4,0.6-7.1l0.3-0.3h0.4c2.6,0,4.5,1.1,5.7,2c3.5-1.3,7.5-1.3,11,0c1.1-0.9,3-2,5.7-2h0.4l0.3,0.3 c1.9,1.8,1,5.6,0.6,7.1c1,1.6,1.6,3.4,1.6,5.2c0,5.3-3.4,8.8-9.3,10c1.5,1.6,2.3,4,2.3,5.9v4.9c0,1,0.7,1.8,1.7,2 C42.6,43.9,49,35.2,49,25C49,11.8,38.2,1,25,1z"/>
</svg></a>`;
  template += `<a class="ico telegram-ico developer__3d_telegram" href="https://t.me/somVolodya"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" d="M 26.070312 3.9960938 C 25.732466 4.0107344 25.416138 4.1080163 25.134766 4.21875 L 25.132812 4.21875 C 24.84842 4.3311303 23.49044 4.9031118 21.433594 5.7675781 C 19.376747 6.6320444 16.702977 7.7568723 14.052734 8.8730469 C 8.7522493 11.105396 3.5449219 13.300781 3.5449219 13.300781 L 3.609375 13.277344 C 3.609375 13.277344 3.2489735 13.392984 2.8730469 13.650391 C 2.6850836 13.779094 2.4740306 13.948164 2.2890625 14.21875 C 2.1040944 14.489336 1.957942 14.901882 2.0117188 15.330078 C 2.1021968 16.050506 2.5704774 16.485697 2.9082031 16.724609 C 3.2459289 16.963522 3.5722656 17.076172 3.5722656 17.076172 L 3.5800781 17.080078 L 8.4628906 18.722656 C 8.677807 19.427337 9.9494832 23.596654 10.253906 24.558594 C 10.435545 25.132614 10.608999 25.490676 10.826172 25.767578 C 10.934902 25.906212 11.059175 26.024986 11.207031 26.117188 C 11.264451 26.152987 11.327916 26.179618 11.390625 26.205078 C 11.411385 26.213938 11.43059 26.216824 11.451172 26.224609 L 11.402344 26.210938 C 11.416394 26.216438 11.429169 26.225559 11.443359 26.230469 C 11.481362 26.243614 11.508277 26.245999 11.556641 26.255859 C 12.333094 26.487217 12.953125 26.007812 12.953125 26.007812 L 12.988281 25.980469 L 15.869141 23.355469 L 20.703125 27.0625 L 20.814453 27.111328 C 21.818462 27.549379 22.838391 27.302986 23.380859 26.869141 C 23.923326 26.435299 24.132813 25.875 24.132812 25.875 L 24.167969 25.787109 L 27.902344 6.6582031 C 28.008466 6.1835344 28.033707 5.7427558 27.917969 5.3125 C 27.802231 4.8822442 27.501123 4.4786116 27.134766 4.2636719 C 26.768408 4.0487322 26.40816 3.9814529 26.070312 3.9960938 z M 25.966797 6.0449219 C 25.964097 6.1092329 25.975999 6.102796 25.949219 6.2226562 L 25.947266 6.234375 L 22.251953 25.164062 C 22.236153 25.190932 22.205164 25.248772 22.132812 25.306641 C 22.053722 25.369891 21.993292 25.408607 21.666016 25.28125 L 15.757812 20.75 L 12.185547 24.005859 L 12.939453 19.214844 C 12.939453 19.214844 22.19575 10.586844 22.59375 10.214844 C 22.99175 9.8438437 22.859375 9.7636719 22.859375 9.7636719 C 22.886375 9.3126719 22.257812 9.6347656 22.257812 9.6347656 L 10.082031 17.175781 L 10.076172 17.15625 L 4.2421875 15.191406 L 4.2402344 15.189453 C 4.2400959 15.189398 4.2293136 15.183994 4.2285156 15.183594 C 4.2316356 15.182294 4.2558594 15.169922 4.2558594 15.169922 L 4.2890625 15.158203 L 4.3222656 15.144531 C 4.3222656 15.144531 9.5300637 12.948948 14.830078 10.716797 C 17.480085 9.6007214 20.153018 8.4754243 22.208984 7.6113281 C 24.263626 6.7477885 25.782827 6.1134525 25.867188 6.0800781 C 25.950228 6.0473981 25.911497 6.0485569 25.966797 6.0449219 z" font-weight="400" font-family="sans-serif" white-space="normal" overflow="visible"/>
</svg></a>`;
  template += `<a class="ico email-ico developer__3d_email" href="mailto:privezenoff@yandex.ru"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
        <path d="M 3 4 C 1.344 4 0 5.344 0 7 L 0 19 C 0 20.656 1.344 22 3 22 L 23 22 C 24.656 22 26 20.656 26 19 L 26 7 C 26 5.344 24.656 4 23 4 L 3 4 z M 3 6 L 23 6 C 23.551 6 24 6.449 24 7 L 24 7.5 L 13 13.4375 L 2 7.5 L 2 7 C 2 6.449 2.449 6 3 6 z M 2 7.78125 L 8.53125 12.875 L 2.125 19.4375 L 9.9375 13.875 L 13 15.84375 L 16.0625 13.875 L 23.875 19.4375 L 17.46875 12.875 L 24 7.78125 L 24 19 C 24 19.162317 23.944058 19.301757 23.875 19.4375 C 23.709633 19.762549 23.388683 20 23 20 L 3 20 C 2.6113169 20 2.2903669 19.762549 2.125 19.4375 C 2.0559416 19.301757 2 19.162317 2 19 L 2 7.78125 z"/>
    </svg></a>`;
  template += '</div>';
  template += '</div>';
  template += '<div class="footer__school-logo-container">';
  template += '<a class="footer__school-logo" href="https://rs.school/js/"><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 552.8 205.3"><style>.st0{fill:#fff}.st1{clip-path:url(#SVGID_2_)}.st2{clip-path:url(#SVGID_4_)}.st3{clip-path:url(#SVGID_6_)}.st4{clip-path:url(#SVGID_8_)}.st5{fill:#fff;stroke:#000;stroke-width:4;stroke-miterlimit:10}.st6{clip-path:url(#SVGID_8_)}.st6,.st7{fill:none;stroke:#000;stroke-width:4;stroke-miterlimit:10}.st8,.st9{clip-path:url(#SVGID_10_)}.st9{fill:none;stroke:#000;stroke-width:4;stroke-miterlimit:10}</style><title>rs_school_js</title><path d="M285.4 68l26.3-1.7c.6 4.3 1.7 7.5 3.5 9.8 2.9 3.6 6.9 5.4 12.2 5.4 3.9 0 7-.9 9.1-2.8 2-1.5 3.2-3.9 3.2-6.4 0-2.4-1.1-4.7-3-6.2-2-1.8-6.7-3.6-14.1-5.2-12.1-2.7-20.8-6.3-25.9-10.9-5.1-4.3-8-10.6-7.8-17.3 0-4.6 1.4-9.2 4-13 3-4.3 7.1-7.7 12-9.6 5.3-2.3 12.7-3.5 22-3.5 11.4 0 20.1 2.1 26.1 6.4 6 4.2 9.6 11 10.7 20.3l-26 1.5c-.7-4-2.1-6.9-4.4-8.8s-5.3-2.8-9.2-2.8c-3.2 0-5.6.7-7.2 2-1.5 1.2-2.5 3-2.4 5 0 1.5.8 2.9 2 3.8 1.3 1.2 4.4 2.3 9.3 3.3 12.1 2.6 20.7 5.2 26 7.9 5.3 2.7 9.1 6 11.4 9.9 2.4 4 3.6 8.6 3.5 13.3 0 5.6-1.6 11.2-4.8 15.9-3.3 4.9-7.9 8.7-13.3 11-5.7 2.5-12.9 3.8-21.5 3.8-15.2 0-25.7-2.9-31.6-8.8S286.1 77 285.4 68zM6.3 97.6V8.2h46.1c8.5 0 15.1.7 19.6 2.2 4.4 1.4 8.3 4.3 10.9 8.2 2.9 4.3 4.3 9.3 4.2 14.5.3 8.8-4.2 17.2-11.9 21.6-3 1.7-6.3 2.9-9.7 3.5 2.5.7 5 1.9 7.2 3.3 1.7 1.4 3.1 3 4.4 4.7 1.5 1.7 2.8 3.6 3.9 5.6l13.4 25.9H63L48.2 70.2c-1.9-3.5-3.5-5.8-5-6.9-2-1.4-4.4-2.1-6.8-2.1H34v36.3H6.3zM34 44.4h11.7c2.5-.2 4.9-.6 7.3-1.2 1.8-.3 3.4-1.3 4.5-2.8 2.7-3.6 2.3-8.7-1-11.8-1.8-1.5-5.3-2.3-10.3-2.3H34v18.1zM0 174.2l26.3-1.7c.6 4.3 1.7 7.5 3.5 9.8 2.8 3.6 6.9 5.5 12.2 5.5 3.9 0 7-.9 9.1-2.8 2-1.6 3.2-3.9 3.2-6.4 0-2.4-1.1-4.7-3-6.2-2-1.8-6.7-3.6-14.2-5.2-12.1-2.7-20.8-6.3-25.9-10.9-5.1-4.3-8-10.6-7.8-17.3 0-4.6 1.4-9.2 4-13 3-4.3 7.1-7.7 12-9.6 5.3-2.3 12.7-3.5 22-3.5 11.4 0 20.1 2.1 26.1 6.4s9.5 11 10.6 20.3l-26 1.5c-.7-4-2.1-6.9-4.4-8.8-2.2-1.9-5.3-2.8-9.2-2.7-3.2 0-5.6.7-7.2 2.1-1.6 1.2-2.5 3-2.4 5 0 1.5.8 2.9 2 3.8 1.3 1.2 4.4 2.3 9.3 3.3 12.1 2.6 20.7 5.2 26 7.9 5.3 2.7 9.1 6 11.4 9.9 2.4 4 3.6 8.6 3.6 13.2 0 5.6-1.7 11.1-4.8 15.8-3.3 4.9-7.9 8.7-13.3 11-5.7 2.5-12.9 3.8-21.5 3.8-15.2 0-25.7-2.9-31.6-8.8-5.9-6-9.2-13.4-10-22.4z"/><path d="M133 167.2l24.2 7.3c-1.3 6.1-4 11.9-7.7 17-3.4 4.5-7.9 8-13 10.3-5.2 2.3-11.8 3.5-19.8 3.5-9.7 0-17.7-1.4-23.8-4.2-6.2-2.8-11.5-7.8-16-14.9-4.5-7.1-6.7-16.2-6.7-27.3 0-14.8 3.9-26.2 11.8-34.1s19-11.9 33.4-11.9c11.3 0 20.1 2.3 26.6 6.8 6.4 4.6 11.2 11.6 14.4 21l-24.4 5.4c-.6-2.1-1.5-4.2-2.7-6-1.5-2.1-3.4-3.7-5.7-4.9-2.3-1.2-4.9-1.7-7.5-1.7-6.3 0-11.1 2.5-14.4 7.6-2.5 3.7-3.8 9.6-3.8 17.6 0 9.9 1.5 16.7 4.5 20.4 3 3.7 7.2 5.5 12.7 5.5 5.3 0 9.3-1.5 12-4.4 2.7-3.1 4.7-7.4 5.9-13zm56.5-52.8h27.6v31.3h30.2v-31.3h27.8v89.4h-27.8v-36.2h-30.2v36.2h-27.6v-89.4z"/><path d="M271.3 159.1c0-14.6 4.1-26 12.2-34.1 8.1-8.1 19.5-12.2 34-12.2 14.9 0 26.3 4 34.4 12S364 144 364 158.4c0 10.5-1.8 19-5.3 25.7-3.4 6.6-8.7 12-15.2 15.6-6.7 3.7-15 5.6-24.9 5.6-10.1 0-18.4-1.6-25-4.8-6.8-3.4-12.4-8.7-16.1-15.2-4.1-7-6.2-15.7-6.2-26.2zm27.6.1c0 9 1.7 15.5 5 19.5 3.3 3.9 7.9 5.9 13.7 5.9 5.9 0 10.5-1.9 13.8-5.8s4.9-10.8 4.9-20.8c0-8.4-1.7-14.6-5.1-18.4-3.4-3.9-8-5.8-13.8-5.8-5.1-.2-10 2-13.4 5.9-3.4 3.9-5.1 10.4-5.1 19.5zm93.4-.1c0-14.6 4.1-26 12.2-34.1 8.1-8.1 19.5-12.2 34-12.2 14.9 0 26.4 4 34.4 12S485 144 485 158.4c0 10.5-1.8 19-5.3 25.7-3.4 6.6-8.7 12-15.2 15.6-6.7 3.7-15 5.6-24.9 5.6-10.1 0-18.4-1.6-25-4.8-6.8-3.4-12.4-8.7-16.1-15.2-4.1-7-6.2-15.7-6.2-26.2zm27.6.1c0 9 1.7 15.5 5 19.5 3.3 3.9 7.9 5.9 13.7 5.9 5.9 0 10.5-1.9 13.8-5.8 3.3-3.9 4.9-10.8 4.9-20.8 0-8.4-1.7-14.6-5.1-18.4-3.4-3.9-8-5.8-13.8-5.8-5.1-.2-10.1 2-13.4 5.9-3.4 3.9-5.1 10.4-5.1 19.5z"/><path d="M482.1 114.4h27.6v67.4h43.1v22H482v-89.4z"/><ellipse transform="rotate(-37.001 420.46 67.88)" class="st0" cx="420.5" cy="67.9" rx="63" ry="51.8"/><defs><ellipse id="SVGID_1_" transform="rotate(-37.001 420.46 67.88)" cx="420.5" cy="67.9" rx="63" ry="51.8"/></defs><clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"/></clipPath><g class="st1"><path transform="rotate(-37.001 420.82 68.353)" class="st0" d="M330.9-14.2h179.8v165.1H330.9z"/><g id="Layer_2_1_"><defs><path id="SVGID_3_" transform="rotate(-37.001 420.82 68.353)" d="M330.9-14.2h179.8v165.1H330.9z"/></defs><clipPath id="SVGID_4_"><use xlink:href="#SVGID_3_" overflow="visible"/></clipPath><g id="Layer_1-2" class="st2"><ellipse transform="rotate(-37.001 420.46 67.88)" class="st0" cx="420.5" cy="67.9" rx="63" ry="51.8"/><defs><ellipse id="SVGID_5_" transform="rotate(-37.001 420.46 67.88)" cx="420.5" cy="67.9" rx="63" ry="51.8"/></defs><clipPath id="SVGID_6_"><use xlink:href="#SVGID_5_" overflow="visible"/></clipPath><g class="st3"><path transform="rotate(-37 420.799 68.802)" class="st0" d="M357.8 17h125.9v103.7H357.8z"/><defs><path id="SVGID_7_" transform="rotate(-37 420.799 68.802)" d="M357.8 17h125.9v103.7H357.8z"/></defs><clipPath id="SVGID_8_"><use xlink:href="#SVGID_7_" overflow="visible"/></clipPath><g class="st4"><ellipse transform="rotate(-37.001 420.46 67.88)" class="st5" cx="420.5" cy="67.9" rx="63" ry="51.8"/></g><path transform="rotate(-37 420.799 68.802)" class="st6" d="M357.8 17h125.9v103.7H357.8z"/><ellipse transform="rotate(-37.001 420.46 67.88)" class="st7" cx="420.5" cy="67.9" rx="63" ry="51.8"/><path transform="rotate(-37 420.799 68.802)" class="st0" d="M357.8 17h125.9v103.7H357.8z"/><defs><path id="SVGID_9_" transform="rotate(-37 420.799 68.802)" d="M357.8 17h125.9v103.7H357.8z"/></defs><clipPath id="SVGID_10_"><use xlink:href="#SVGID_9_" overflow="visible"/></clipPath><g class="st8"><ellipse transform="rotate(-37.001 420.46 67.88)" class="st5" cx="420.5" cy="67.9" rx="63" ry="51.8"/></g><path transform="rotate(-37 420.799 68.802)" class="st9" d="M357.8 17h125.9v103.7H357.8z"/><path transform="rotate(-37.001 420.82 68.353)" class="st7" d="M330.9-14.2h179.8v165.1H330.9z"/></g><ellipse transform="rotate(-37.001 420.46 67.88)" class="st7" cx="420.5" cy="67.9" rx="63" ry="51.8"/><path d="M392.4 61.3l10-7 12.3 17.5c2.1 2.8 3.7 5.8 4.9 9.1.7 2.5.5 5.2-.5 7.6-1.3 3-3.4 5.5-6.2 7.3-3.3 2.3-6.1 3.6-8.5 4-2.3.4-4.7 0-6.9-1-2.4-1.2-4.5-2.9-6.1-5.1l8.6-8c.7 1.1 1.6 2.1 2.6 2.9.7.5 1.5.8 2.4.8.7 0 1.4-.3 1.9-.7 1-.6 1.7-1.8 1.6-3-.3-1.7-1-3.4-2.1-4.7l-14-19.7zm30 11.1l9.1-7.2c1 1.2 2.3 2.1 3.7 2.6 2 .6 4.1.2 5.8-1.1 1.2-.8 2.2-1.9 2.6-3.3.6-1.8-.4-3.8-2.2-4.4-.3-.1-.6-.2-.9-.2-1.2-.1-3.3.4-6.4 1.7-5.1 2.1-9.1 2.9-12.1 2.6-2.9-.3-5.6-1.8-7.2-4.3-1.2-1.7-1.8-3.7-1.9-5.7 0-2.3.6-4.6 1.9-6.5 1.9-2.7 4.2-5 7-6.8 4.2-2.9 7.9-4.3 11.1-4.3 3.2 0 6.2 1.5 9 4.6l-9 7.1c-1.8-2.3-5.2-2.8-7.5-1l-.3.3c-1 .6-1.7 1.5-2.1 2.6-.3.8-.1 1.7.4 2.4.4.5 1 .9 1.7.9.8.1 2.2-.3 4.2-1.2 5-2.1 8.8-3.3 11.4-3.7 2.2-.4 4.5-.2 6.6.7 1.9.8 3.5 2.2 4.6 3.9 1.4 2 2.2 4.4 2.3 6.9.1 2.6-.6 5.1-2 7.3-1.8 2.7-4.1 5-6.8 6.8-5.5 3.8-10 5.4-13.6 4.8-3.9-.6-7.1-2.6-9.4-5.5z"/></g></g></g></svg></a>';
  template += '2020-Q3';
  template += '</div>';
  template += '</div>';

  footer.innerHTML = template;
  return footer;
};
generateFooter();

export { generateFooter };
