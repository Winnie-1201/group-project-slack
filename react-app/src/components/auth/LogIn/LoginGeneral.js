import React from 'react';
import { NavLink } from 'react-router-dom';
import './LoginGeneral.css';

export default function LoginGeneral() {
  return (
    <div className='login-general-div'>
      <NavLink to='/' exact={true} activeClassName='active' className='landing-login-logo-link'>
        <svg className="slack-logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <circle cx="77" cy="13" r="1" fill="#f1bc19"></circle>
          <circle cx="50" cy="50" r="37" fill="#fce0a2"></circle>
          <circle cx="83" cy="15" r="4" fill="#f1bc19"></circle>
          <circle cx="87" cy="24" r="2" fill="#ee3e54"></circle>
          <circle cx="76.875" cy="66.25" r="2" fill="#fbcd59"></circle>
          <circle cx="36.25" cy="82.75" r="4" fill="#fbcd59"></circle>
          <circle cx="27.5" cy="84.625" r="2" fill="#ee3e54"></circle>
          <circle cx="34.5" cy="22.375" r="2.5" fill="#fff"></circle>
          <circle cx="44.625" cy="78.625" r="1" fill="#f1bc19"></circle>
          <circle cx="80" cy="34" r="1" fill="#fff"></circle>
          <circle cx="24" cy="24" r="2" fill="#ee3e54"></circle>
          <path fill="#fbb821" d="M59.054,33.072l-8.271,2.882l-1.754-5.389c-0.752-2.256,0.376-4.762,2.757-5.514	c2.256-0.752,4.762,0.376,5.514,2.757L59.054,33.072z"></path>
          <polygon fill="#fbb821" points="56.402,53.123 64.818,50.241 61.885,41.343 53.469,44.226"></polygon>
          <path fill="#fbb821" d="M60.808,65.905c0.627,1.754,2.381,3.008,4.135,3.008c0.501,0,1.003-0.125,1.378-0.251	c2.256-0.752,3.509-3.258,2.757-5.514l-1.504-4.511l-8.271,2.882L60.808,65.905z"></path>
          <path fill="#18c9c4" d="M41.51,39.213l-8.271,2.882l-1.754-5.263c-0.752-2.256,0.376-4.762,2.757-5.514	c2.256-0.752,4.762,0.376,5.514,2.757L41.51,39.213z M43.264,72.171c0.627,1.754,2.381,3.008,4.135,3.008	c0.501,0,1.003-0.125,1.378-0.251c2.256-0.752,3.509-3.258,2.757-5.514l-1.504-4.637L41.76,67.66L43.264,72.171z M44.267,47.609	l-8.271,2.882l2.882,8.897l8.271-2.882L44.267,47.609z"></path><path fill="#55a7f9" d="M61.811,41.469l-2.757-8.271l5.138-1.754c2.256-0.752,4.762,0.376,5.514,2.757	c0.752,2.256-0.376,4.762-2.757,5.514L61.811,41.469z M53.54,44.351l-2.757-8.271l-9.273,3.258l2.757,8.271L53.54,44.351z M27.976,43.975c-2.256,0.752-3.509,3.258-2.757,5.514c0.627,1.88,2.381,3.008,4.135,3.008c0.501,0,1.003-0.125,1.378-0.251	l5.138-1.754l-2.757-8.271L27.976,43.975z"></path><path fill="#e23855" d="M38.302,59.46l2.757,8.271l-5.313,1.809c-0.501,0.125-1.003,0.251-1.378,0.251	c-1.88,0-3.509-1.128-4.135-3.008c-0.752-2.256,0.376-4.762,2.757-5.514L38.302,59.46z M74.718,51.494	c-0.752-2.256-3.258-3.509-5.514-2.757l-4.386,1.504l2.757,8.396l4.511-1.504C74.342,56.256,75.596,53.75,74.718,51.494z M47.149,56.381l2.757,8.271l9.141-2.933l-2.625-8.596L47.149,56.381z"></path><path fill="#6f913d" d="M62.328,41.469l-3-8.813l-8.719,3.234l2.813,8.766L62.328,41.469z"></path><path fill="#068e8a" d="M41.422,39.031l-8.587,3.035l2.845,8.578l8.93-2.918L41.422,39.031z"></path>
          <path fill="#ba203a" d="M56.328,52.944l2.908,9L68,58.906l-3-9.047L56.328,52.944z"></path><path fill="#685446" d="M38.176,59.191l2.918,8.61l9.234-3.097l-2.918-8.61L38.176,59.191z"></path>
          <path fill="#472b29" d="M53.202,24.821c1.803,0,3.502,1.1,4.098,2.988l1.754,5.263l0.037,0.113l5.101-1.742	c0.467-0.156,0.945-0.231,1.416-0.231c1.803,0,3.501,1.1,4.098,2.988c0.752,2.256-0.376,4.762-2.757,5.514l-4.989,1.703l2.858,8.823	l4.386-1.504c0.445-0.148,0.899-0.219,1.348-0.219c1.827,0,3.562,1.165,4.165,2.976c0.877,2.256-0.376,4.762-2.632,5.639	l-4.511,1.504l1.504,4.511c0.752,2.256-0.501,4.762-2.757,5.514c-0.376,0.125-0.877,0.251-1.378,0.251	c-1.754,0-3.509-1.253-4.135-3.008l-1.504-4.386l-0.034-0.102l-9.403,3.246l0.038,0.114l0.125,0l1.504,4.637	c0.752,2.256-0.501,4.762-2.757,5.514c-0.376,0.125-0.877,0.251-1.378,0.251c-1.754,0-3.509-1.253-4.135-3.008l-0.825-2.474	l-0.033-0.009l-0.733-2.195l-5.928,2.047c-0.501,0.125-1.002,0.251-1.378,0.251c-1.88,0-3.509-1.128-4.135-3.008	c-0.752-2.256,0.376-4.762,2.757-5.514l5.924-2.045l-2.916-8.732l-0.002-0.005l-5.262,1.759c-0.376,0.125-0.877,0.251-1.378,0.251	c-1.754,0-3.509-1.128-4.135-3.008c-0.752-2.256,0.501-4.762,2.757-5.514l5.299-1.772l-0.035-0.108l-1.754-5.263	c-0.752-2.256,0.376-4.762,2.757-5.514c0.467-0.156,0.945-0.231,1.416-0.231c1.802,0,3.502,1.1,4.098,2.988l1.754,5.138l0.037,0.112	l9.175-3.041l0.062-0.33l-1.754-5.389c-0.752-2.256,0.376-4.762,2.757-5.514C52.253,24.896,52.731,24.821,53.202,24.821 M47.148,56.38l9.4-3.257l-3.008-8.772l-9.273,3.258L47.148,56.38 M53.202,23.421C53.202,23.421,53.202,23.421,53.202,23.421	c-0.631,0-1.256,0.102-1.859,0.303c-1.443,0.456-2.629,1.455-3.319,2.807c-0.698,1.369-0.816,3.001-0.324,4.478l1.411,4.334	l-6.687,2.216l-1.344-3.937c-0.739-2.341-2.922-3.935-5.422-3.935c-0.631,0-1.256,0.102-1.859,0.303	c-1.443,0.456-2.629,1.455-3.319,2.807c-0.698,1.369-0.816,3.001-0.324,4.478l1.348,4.044l-3.973,1.328	c-3.011,1.004-4.645,4.272-3.641,7.284c0.791,2.371,2.986,3.965,5.464,3.965c0.567,0,1.179-0.109,1.821-0.322l3.935-1.316	l2.035,6.094l-4.614,1.593c-1.429,0.451-2.615,1.45-3.305,2.802c-0.698,1.369-0.816,3.001-0.324,4.478	c0.803,2.409,2.947,3.965,5.464,3.965c0.548,0,1.143-0.149,1.718-0.292c0.04-0.01,0.079-0.022,0.118-0.035l4.591-1.585l0.285,0.853	c0.03,0.09,0.069,0.176,0.116,0.257l0.742,2.226c0.824,2.309,3.118,3.965,5.464,3.965c0.567,0,1.179-0.109,1.821-0.322	c3.013-1.004,4.647-4.272,3.642-7.285l-1.126-3.472l6.663-2.301l1.084,3.161c0.821,2.298,3.114,3.954,5.46,3.954	c0.566,0,1.179-0.109,1.821-0.322c1.446-0.482,2.623-1.51,3.316-2.895c0.692-1.385,0.808-2.944,0.327-4.39l-1.061-3.183l3.183-1.061	c0.022-0.007,0.043-0.015,0.065-0.023c1.436-0.558,2.589-1.626,3.247-3.005c0.674-1.413,0.743-2.979,0.194-4.414	c-0.794-2.334-2.992-3.9-5.483-3.9c-0.61,0-1.213,0.098-1.791,0.29l-3.05,1.046l-1.995-6.157l3.684-1.258	c1.434-0.452,2.62-1.451,3.309-2.803c0.698-1.369,0.816-3.001,0.324-4.478c-0.742-2.351-2.926-3.945-5.426-3.945	c-0.631,0-1.256,0.102-1.859,0.303l-3.776,1.289l-1.346-4.038C57.885,25.015,55.702,23.421,53.202,23.421L53.202,23.421	L53.202,23.421z M46.025,48.475l6.648-2.336l2.097,6.118l-6.737,2.334L46.025,48.475L46.025,48.475z"></path>
          <path fill="#472b29" d="M40.18,65.168c-0.105,0-0.203-0.067-0.237-0.172l-5.148-15.768c-0.043-0.131,0.028-0.272,0.16-0.315	c0.132-0.042,0.272,0.029,0.314,0.16l5.148,15.768c0.043,0.131-0.028,0.272-0.16,0.315C40.231,65.164,40.205,65.168,40.18,65.168z"></path><path fill="#472b29" d="M34.32,47.257c-0.104,0-0.202-0.066-0.237-0.171l-1.945-5.867c-0.043-0.131,0.027-0.272,0.158-0.316	c0.133-0.043,0.272,0.028,0.316,0.159l1.945,5.867c0.043,0.131-0.027,0.272-0.158,0.316C34.373,47.253,34.347,47.257,34.32,47.257z"></path><rect width=".5" height="29.587" x="45.789" y="37.246" fill="#472b29" transform="rotate(-18.377 46.037 52.035)"></rect><rect width=".5" height="29.483" x="54.578" y="34.344" fill="#472b29" transform="rotate(-18.348 54.828 49.085)"></rect><path fill="#472b29" d="M68.375,60.234c-0.104,0-0.202-0.066-0.237-0.171l-6.703-20.25c-0.043-0.131,0.027-0.272,0.159-0.316	c0.128-0.043,0.271,0.027,0.315,0.159l6.703,20.25c0.043,0.131-0.027,0.272-0.159,0.316C68.428,60.23,68.401,60.234,68.375,60.234z"></path><path fill="#472b29" d="M61.016,38.063c-0.105,0-0.203-0.066-0.237-0.172l-0.497-1.506c-0.043-0.131,0.028-0.272,0.159-0.315	c0.127-0.044,0.272,0.027,0.315,0.159l0.497,1.506c0.043,0.131-0.028,0.272-0.159,0.315C61.068,38.059,61.042,38.063,61.016,38.063z"></path><path fill="#472b29" d="M60.045,35.121c-0.104,0-0.202-0.066-0.237-0.17l-0.951-2.824c-0.044-0.131,0.026-0.272,0.157-0.316	c0.132-0.042,0.273,0.027,0.317,0.157l0.951,2.824c0.044,0.131-0.026,0.272-0.157,0.316C60.099,35.116,60.071,35.121,60.045,35.121z"></path><path fill="#472b29" d="M63.977,60.446c-0.104,0-0.2-0.065-0.236-0.168c-0.045-0.13,0.024-0.272,0.154-0.318l4.208-1.456	c0.132-0.044,0.272,0.024,0.318,0.155c0.045,0.13-0.024,0.272-0.154,0.318l-4.208,1.456C64.031,60.441,64.004,60.446,63.977,60.446z"></path><path fill="#472b29" d="M41.047,68.297c-0.104,0-0.2-0.065-0.236-0.168c-0.045-0.13,0.024-0.272,0.154-0.318l19.922-6.891	c0.132-0.044,0.272,0.024,0.318,0.155c0.045,0.13-0.024,0.272-0.154,0.318l-19.922,6.891C41.102,68.292,41.074,68.297,41.047,68.297	z"></path><rect width="29.396" height=".5" x="37.154" y="54.203" fill="#472b29" transform="rotate(-18.933 51.852 54.46)"></rect><path fill="#472b29" d="M60.623,42.466c-0.104,0-0.2-0.064-0.236-0.168c-0.045-0.13,0.023-0.273,0.154-0.318l2.69-0.937	c0.131-0.043,0.272,0.023,0.318,0.154c0.045,0.13-0.023,0.273-0.154,0.318l-2.69,0.937C60.678,42.461,60.65,42.466,60.623,42.466z"></path><path fill="#472b29" d="M34.813,51.422c-0.104,0-0.2-0.064-0.236-0.167c-0.045-0.13,0.023-0.273,0.153-0.318l23.813-8.344	c0.13-0.046,0.273,0.023,0.319,0.153c0.045,0.13-0.023,0.273-0.153,0.318l-23.813,8.344C34.868,51.417,34.84,51.422,34.813,51.422z"></path><path fill="#472b29" d="M39.429,40.004c-0.104,0-0.2-0.064-0.236-0.168c-0.045-0.13,0.023-0.273,0.154-0.318L60.3,32.225	c0.13-0.044,0.272,0.023,0.318,0.154c0.045,0.13-0.023,0.273-0.154,0.318L39.511,39.99C39.483,40,39.456,40.004,39.429,40.004z"></path><path fill="#472b29" d="M37.531,40.664c-0.104,0-0.2-0.064-0.236-0.168c-0.045-0.13,0.023-0.273,0.154-0.318l0.868-0.302	c0.13-0.045,0.272,0.023,0.318,0.154c0.045,0.13-0.023,0.273-0.154,0.318l-0.868,0.302C37.586,40.66,37.559,40.664,37.531,40.664z"></path><path fill="#472b29" d="M32.427,42.448c-0.104,0-0.2-0.064-0.236-0.168c-0.045-0.13,0.023-0.273,0.154-0.318l3.854-1.342	c0.13-0.043,0.272,0.023,0.318,0.154c0.045,0.13-0.023,0.273-0.154,0.318l-3.854,1.342C32.481,42.443,32.454,42.448,32.427,42.448z"></path>
        </svg>
        <span className='landing-page-logo-text' style={{'color':'black'}}>Slacky</span>
      </NavLink>
          <h1>Welcome</h1>
    </div>
  )
}
